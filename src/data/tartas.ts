import type { ImageMetadata } from "astro";
import motero50aniosFoto from "../assets/galeria/50_anios_motero_frontal.png";
import princesasFoto from "../assets/galeria/princesas_frontal.png";
import bebeJefazoFoto from "../assets/galeria/bebe_jefazo_frontal.png";
import bodaFloralFoto from "../assets/galeria/boda_floral_frontal.png";
import bolsoChanelFoto from "../assets/galeria/bolso_chanel_frontal.png";
import gamingFoto from "../assets/galeria/gaming_frontal.png";
import floralRojaFoto from "../assets/galeria/floral_roja_frontal.png";
import graduacionChicaFoto from "../assets/galeria/graduacion_chica_frontal.png";


// Para poner una foto de portada a una tarta: guarda la imagen en
// src/assets/galeria/ y añade aquí un import, por ejemplo:
//   import princesasFoto from "../assets/galeria/princesas-disney.jpg";
// luego referencia esa variable en el campo `foto` de la tarta correspondiente.
// Si una tarta no tiene `foto`, la tarjeta muestra un patrón decorativo de
// relleno en su lugar (útil mientras no tengas la foto subida todavía).

export type Categoria = "cumpleanos" | "eventos";

export type Tarta = {
  id: string;
  nombre: string;
  categoria: Categoria;
  desc: string;
  descLarga: string;
  sabores: string[];
  // Opcional: tartas antiguas (de antes de escanear) pueden no tener modelo.
  // Sin `modelo` la tarjeta no enlaza a una ficha de detalle (no hay 3D que
  // mostrar ahí) y se comporta como las galletas: solo foto + "Contacto".
  modelo?: string;
  // Opcional: foto de portada para la tarjeta de la galería. Ver nota arriba.
  foto?: ImageMetadata;
};

export const tartas: Tarta[] = [
  {
    id: "princesas-disney",
    nombre: "Princesas Disney",
    categoria: "cumpleanos",
    desc: "Diseño personalizado con las princesas favoritas, para un cumpleaños de cuento.",
    descLarga:
      "Una tarta pensada para las peques fans de las princesas Disney: bizcocho jugoso, relleno cremoso y una decoración temática hecha a mano, capa a capa. Cuenta con una bella corona que resalta la belleza de la tarta y con glitter para que al soplar la vela , el deseo sea magico.",
    sabores: [
      "Bizcocho de vainilla y bizcocho de chocolate",
      "Relleno de nata y fresa",
      "Cobertura de nata",
    ],
    modelo: "/models/princesas_cropped.glb",
    foto: princesasFoto,
  },
  {
    id: "bebe-jefazo",
    nombre: "Bebé Jefazo",
    categoria: "cumpleanos",
    desc: "Tarta temática para celebrar por todo lo alto al pequeño jefe de la casa.",
    descLarga:
      "Ideal para un primer cumpleaños o un baby shower con mucho estilo: diseño divertido de 'jefe bebé', acabado limpio y detalles hechos a mano.",
    sabores: [
      "Bizcocho de zanahoria",
      "Relleno de frosting de queso",
      "Cobertura de frosting de queso con detalles de fondant",
    ],
    modelo: "/models/bebazo_cropped.glb",
    foto: bebeJefazoFoto,
  },
  {
    id: "boda-floral",
    nombre: "Boda floral",
    categoria: "eventos",
    desc: "Acabado delicado con flores naturales, pensada para el gran día.",
    descLarga:
      "Una tarta semidesnuda (naked cake) de varios pisos, con flores naturales y un acabado delicado — pensada para bodas y celebraciones que piden algo especial.",
    sabores: [
      "Bizcocho bombón con dulce de leche",
      "Relleno de crema de chocolate con dulce de leche",
      "Cobertura de fondant con decoracion de flores hechas en pasta de goma y tela efecto charol",
    ],
    modelo: "/models/boda_cropped.glb",
    foto: bodaFloralFoto,
  },
  {
    id: "50_anios_motero",                    // se usa en la URL: /galeria/nombre-que-sea
    nombre: "Motero 50 años",
    categoria: "cumpleanos",                 // o "eventos"
    desc: "Tarta con temática de motero para celebrar los 50 años.",
    descLarga: "Una tarta personalizada para celebrar un cumpleaños muy especial. Con detalles hechos a mano y un diseño único para sorprender al homenajeado.",
    sabores: ["Bizcocho de chocolate y vainilla y un segundo bizcocho de red velvet",
      "Relleno de capuchino en el primer bizcocho y para el segundo frosting de queso",
      "Cobertura de fondant y decoración en papel de azúcar"
    ],
    modelo: "/models/50_anios_motero_cropped.glb",    // el mismo nombre que en el paso 1
    foto: motero50aniosFoto,                  // solo si hiciste el paso 2
  },
  {
    id: "bolso-chanel",
    nombre: "Bolso Chanel",
    categoria: "cumpleanos",
    desc: "Tarta con forma de bolso, cubierta de rosas de buttercream y detalles dorados.",
    descLarga:
      "Una tarta con forma de bolso de fiesta: rosas de buttercream hechas una a una por toda la superficie, asa de perlas, lazo dorado y una placa personalizada con el nombre de la homenajeada. Elegante, muy fotogénica y siempre la protagonista de la mesa.",
    sabores: [
      "Bizcocho de coco",
      "Relleno de crema diplomática y compota de piña",
      "Cobertura de crema diplomática",
    ],
    foto: bolsoChanelFoto,
  },
  {
    id: "gamer-level-up",
    nombre: "Gamer Level Up",
    categoria: "cumpleanos",
    desc: "Temática gamer con mando y cascos modelados, personalizada con nombre y edad.",
    descLarga:
      "Para quien celebra a base de partidas: fondant azul con bloques pixelados, mando y cascos modelados a mano, carteles de 'Game On' y 'Level Up', y el nombre y la edad del cumpleañero. Un diseño que triunfa entre los peques (y entre los que ya no lo son tanto).",
    sabores: [
      "Bizcocho de chocolate",
      "Relleno de crema de chocolate y avellana",
      "Cobertura de fondant",
    ],
    foto: gamingFoto,
  },
  {
    id: "floral-granate",
    nombre: "Floral granate",
    categoria: "eventos",
    desc: "Tres pisos en granate y oro con flores de azúcar y hojas doradas.",
    descLarga:
      "Tres pisos en granate profundo con cintas doradas, flores de azúcar modeladas a mano y hojas en tono oro que recorren la tarta de arriba abajo. Pensada para bodas, aniversarios y celebraciones que piden una tarta con presencia.",
    sabores: [
      "Bizcocho a elegir: vainilla, chocolate o red velvet",
      "Relleno de nata, crema de queso o frutos rojos",
      "Cobertura de fondant con detalles en oro",
    ],
    foto: floralRojaFoto,
  },
  {
    id: "mi-graduacion",
    nombre: "Mi graduación",
    categoria: "eventos",
    desc: "Tarta de graduación con ilustración personalizada, birrete y flores de azúcar.",
    descLarga:
      "Para cerrar una etapa por todo lo alto: ilustración comestible personalizada de la protagonista, birrete y diploma coronando la tarta, y flores de azúcar hechas a mano sobre un acabado en tonos rosas. Se adapta a cualquier carrera y combinación de colores.",
    sabores: [
      "Bizcocho de vainilla",
      "Relleno de nata y fresa",
      "Cobertura de buttercream",
    ],
    foto: graduacionChicaFoto,
  },
];

// Una tarta tiene ficha de detalle propia si hay algo que enseñar en ella:
// el modelo 3D o, en su defecto, la foto.
export const tieneFicha = (tarta: Tarta) => Boolean(tarta.modelo || tarta.foto);

// Qué tarta se muestra en la banda "Última novedad" de la galería.
// Es manual a propósito: cámbialo tú a mano cuando quieras destacar otra,
// no se elige solo por orden ni por lo último que hayas añadido a la lista
// (así una tarta sin modelo 3D —p.ej. una más antigua sin escanear— nunca
// puede colarse ahí por accidente).
export const ULTIMA_NOVEDAD_ID = "50_anios_motero";
