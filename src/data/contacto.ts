// Datos de contacto del negocio. Todo lo que muestra un teléfono, un email
// o un enlace a redes lo lee de aquí: cámbialo en este archivo y se actualiza
// en toda la web (contacto, fichas de la galería, footer…).

export const CONTACTO = {
  whatsappNumber: "34699155145",
  whatsappDisplay: "+34 699 15 51 45",
  email: "lasmanosdenanos@gmail.com",
  instagramHandle: "lasmanosdenanos",
  // Antelación mínima (en días) con la que se acepta un encargo. El wizard
  // de contacto no deja elegir una fecha de evento más cercana que esta.
  plazoMinimoDias: 21,
  plazoMinimoTexto: "3 semanas",
};

export const waLink = `https://wa.me/${CONTACTO.whatsappNumber}`;
export const igLink = `https://instagram.com/${CONTACTO.instagramHandle}`;
// Enlace directo al chat de Instagram (en móvil abre la app).
export const igDmLink = `https://ig.me/m/${CONTACTO.instagramHandle}`;
export const mailLink = `mailto:${CONTACTO.email}`;
