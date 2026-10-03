#!/usr/bin/env node
// Comprime los .glb de public/models: reescala texturas a WebP, simplifica
// la geometría y aplica compresión Draco. Se puede volver a correr cada vez
// que se añada un escaneo nuevo: npm run optimize-models
//
// Por defecto solo procesa los .glb que aún NO estén comprimidos (evita
// volver a simplificar un archivo ya simplificado, que perdería calidad de
// más cada vez que se ejecuta el script). Para forzar el reprocesado de
// todo: npm run optimize-models -- --force
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, renameSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const modelsDir = path.join(__dirname, "..", "public", "models");

// Ratio de vértices a conservar (0-1) por archivo. Ajustar aquí si un
// modelo concreto necesita más o menos detalle. Los que no aparezcan usan
// DEFAULT_RATIO (razonable para un escaneo nuevo sin afinar).
const SIMPLIFY_RATIO = {
  "princesas_cropped.glb": 0.5,
  "bebazo_cropped.glb": 0.18,
  "boda_cropped.glb": 0.04,
};
const DEFAULT_RATIO = 0.3;
const SIMPLIFY_ERROR = 0.0015;
const TEXTURE_SIZE = 2048;

function mb(bytes) {
  return (bytes / 1024 / 1024).toFixed(1) + " MB";
}

function isAlreadyOptimized(glbPath) {
  const buf = readFileSync(glbPath);
  if (buf.readUInt32LE(0) !== 0x46546c67) return false; // no es un .glb válido
  const jsonLength = buf.readUInt32LE(12);
  const gltf = JSON.parse(buf.toString("utf8", 20, 20 + jsonLength));
  return Boolean(gltf.extensionsUsed?.includes("KHR_draco_mesh_compression"));
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const requested = args.filter((a) => a !== "--force");

const files = requested.length
  ? requested
  : readdirSync(modelsDir).filter((f) => f.endsWith(".glb"));

for (const file of files) {
  const input = path.join(modelsDir, file);
  if (!existsSync(input)) {
    console.warn(`⚠ no existe: ${file}`);
    continue;
  }

  if (!force && isAlreadyOptimized(input)) {
    console.log(`↷ ${file} ya está comprimido, se salta (usa --force para reprocesar)`);
    continue;
  }

  const tmpOutput = path.join(modelsDir, file.replace(/\.glb$/, ".optimized.glb"));
  const ratio = SIMPLIFY_RATIO[file] ?? DEFAULT_RATIO;
  const before = statSync(input).size;

  console.log(`\n→ ${file} (ratio simplify: ${ratio})`);

  // shell: true es necesario en Windows para poder ejecutar npx.cmd (un
  // batch file, no un .exe) vía execFileSync. No hay riesgo de inyección:
  // todos los argumentos son constantes internas o nombres de archivo que
  // ya hemos listado nosotros mismos, nunca texto externo sin controlar.
  execFileSync(
    "npx",
    [
      "gltf-transform",
      "optimize",
      input,
      tmpOutput,
      "--compress", "draco",
      "--texture-compress", "webp",
      "--texture-size", String(TEXTURE_SIZE),
      "--simplify-ratio", String(ratio),
      "--simplify-error", String(SIMPLIFY_ERROR),
    ],
    { stdio: "inherit", shell: true },
  );

  const after = statSync(tmpOutput).size;
  renameSync(tmpOutput, input);

  const reduction = (100 * (1 - after / before)).toFixed(0);
  console.log(`  ${mb(before)} → ${mb(after)}  (-${reduction}%)`);
}
