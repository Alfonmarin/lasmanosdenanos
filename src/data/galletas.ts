import type { ImageMetadata } from "astro";
import comunionDoradoFoto from "../assets/galeria/galletas_comunion_ninia.png";
import graduacionFoto from "../assets/galeria/galletas_graduacion.png";
import moteroFoto from "../assets/galeria/galletas_50_anios.png";

// Para añadir un set de galletas: guarda la foto en src/assets/galeria/ con el
// prefijo galletas_, impórtala arriba y añade una entrada aquí abajo.
//
// A diferencia de las tartas, las galletas no tienen carta de bizcocho,
// relleno ni cobertura: todas son de mantequilla y lo que cambia es la
// decoración. Por eso una galleta solo lleva descripción — ni `sabores` ni
// nada parecido — y su ficha es más corta que la de una tarta.

export type Galleta = {
  id: string;
  nombre: string;
  // Etiqueta de la ocasión para la que se hizo este set (Comunión, Graduación…)
  ocasion: string;
  desc: string;
  descLarga: string;
  foto?: ImageMetadata;
};

export const galletas: Galleta[] = [
  {
    id: "comunion-dorado",
    nombre: "Comunión en dorado",
    ocasion: "Comunión",
    desc: "Inicial en dorado, rosita de glasa y una ramita de hojas verdes.",
    descLarga:
      "Un juego de galletas para el día de la comunión: borde festoneado en glasa blanca, la inicial de la protagonista trazada a mano en dorado, una rosita en rosa y una ramita de hojas verdes que la rodea. Debajo, el año de la celebración, también en dorado, con estrellitas repartidas por el fondo. La inicial, la flor y los colores se cambian por los de cada comunión.",
    foto: comunionDoradoFoto,
  },
  {
    id: "graduacion-2026",
    nombre: "Graduación 2026",
    ocasion: "Graduación",
    desc: "Birrete azul marino con borla dorada y el año de la promoción.",
    descLarga:
      "Galletas con borde festoneado en glasa blanca y un birrete de graduación en azul marino con la borla en dorado, colocado a mano una a una. Debajo, el año de la promoción. Se hacen en los colores de la facultad o del centro y se les puede añadir el nombre del graduado.",
    foto: graduacionFoto,
  },
  {
    id: "surtido-motero-50",
    nombre: "Surtido motero 50 años",
    ocasion: "Cumpleaños",
    desc: "Seis diseños distintos: la inicial, el nombre, el 50 y una moto.",
    descLarga:
      "Un surtido con seis diseños distintos para un cincuenta cumpleaños motero: la inicial en azul sobre una corona de laurel, el nombre del homenajeado, un '¡Feliz Cumpleaños!' en verde, el 50 rodeado de puntitos, el 50 en dorado sobre un fondo de noche estrellada y una ilustración de moto impresa en papel de azúcar. Hace juego con la tarta Motero 50 años de la galería. El surtido se monta a medida: se eligen los diseños y la temática de la celebración.",
    foto: moteroFoto,
  },
];
