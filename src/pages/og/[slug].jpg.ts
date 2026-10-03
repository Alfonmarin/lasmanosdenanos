// Imágenes de vista previa al compartir un enlace (og:image): la tarjeta con
// foto que enseñan WhatsApp, Instagram, Facebook… Se generan al compilar,
// una por página: la foto de la tarta a la izquierda y el logo sobre el rosa
// de la marca a la derecha. El título y la descripción los pone cada red.
import type { APIRoute, GetStaticPaths, ImageMetadata } from "astro";
import sharp from "sharp";
import logo from "../../assets/logo.png";
import nanos from "../../assets/sobre-nanos/nanos.jpg";
import { tartas } from "../../data/tartas";
import { galletas } from "../../data/galletas";

// Foto de la tarjeta general (inicio, galería, contacto)
const ID_PORTADA = "princesas-disney";

const ANCHO = 1200;
const ALTO = 630;

type Props = { foto: ImageMetadata; encuadre: string };

export const getStaticPaths = (() => {
  const portada = (tartas.find((t) => t.id === ID_PORTADA) ?? tartas.find((t) => t.foto))!.foto!;
  const paginas = [
    { slug: "inicio", foto: portada, encuadre: "centre" },
    { slug: "sobre-nanos", foto: nanos, encuadre: "attention" },
    ...tartas
      .filter((t) => t.foto)
      .map((t) => ({ slug: `tarta-${t.id}`, foto: t.foto!, encuadre: "centre" })),
    ...galletas
      .filter((g) => g.foto)
      .map((g) => ({ slug: `galletas-${g.id}`, foto: g.foto!, encuadre: "centre" })),
  ];
  return paginas.map(({ slug, ...props }) => ({ params: { slug }, props }));
}) satisfies GetStaticPaths;

// Ruta del archivo original de una imagen importada
const archivo = (img: ImageMetadata) => {
  const ruta = (img as ImageMetadata & { fsPath?: string }).fsPath;
  if (!ruta) throw new Error(`No se encuentra el archivo de ${img.src}`);
  return ruta;
};

export const GET: APIRoute = async ({ props }) => {
  const { foto, encuadre } = props as Props;
  const panel = ANCHO - ALTO;

  const fotoBuf = await sharp(archivo(foto))
    .rotate()
    .resize(ALTO, ALTO, { fit: "cover", position: encuadre })
    .toBuffer();

  const logoBuf = await sharp(archivo(logo)).resize({ width: 380 }).toBuffer();
  const { width: logoAncho = 0, height: logoAlto = 0 } = await sharp(logoBuf).metadata();

  const fondo = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${ANCHO}" height="${ALTO}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fff7f4"/>
          <stop offset="1" stop-color="#f6dfe8"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect x="${ALTO}" y="${ALTO - 14}" width="${panel}" height="14" fill="#BC1150"/>
    </svg>`,
  );

  const jpg = await sharp(fondo)
    .composite([
      { input: fotoBuf, left: 0, top: 0 },
      {
        input: logoBuf,
        left: ALTO + Math.round((panel - logoAncho) / 2),
        top: Math.round((ALTO - 14 - logoAlto) / 2),
      },
    ])
    .jpeg({ quality: 84, mozjpeg: true })
    .toBuffer();

  return new Response(new Uint8Array(jpg), {
    headers: { "Content-Type": "image/jpeg" },
  });
};
