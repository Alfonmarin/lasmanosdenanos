// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dirección pública de la web: hace falta para los enlaces absolutos de la
  // vista previa al compartir (og:image). Netlify pone en URL la dirección
  // real al compilar, también si luego se conecta un dominio propio.
  site: process.env.URL ?? 'https://lasmanosdenanos.netlify.app',
  // Las fuentes se descargan al compilar y se sirven desde la propia web:
  // sin la hoja de Google Fonts que bloqueaba el primer pintado.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      weights: ['400 900'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      // Sin `swap`: con él se pinta primero la fuente de reserva y luego salta a la buena.
      display: 'block',
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Pacifico',
      cssVariable: '--font-pacifico',
      weights: [400],
      subsets: ['latin'],
      display: 'block',
      fallbacks: ['cursive'],
    },
  ],
});
