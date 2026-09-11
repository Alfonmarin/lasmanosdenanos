import type { ImageMetadata } from "astro";
import reposteriaAltaCalidadImg from "../assets/diplomas/reposteria-creativa-alta-calidad.jpg";
import luxuryCakeImg from "../assets/diplomas/luxury-cake.jpg";
import floresAzucarImg from "../assets/diplomas/flores-azucar.jpg";
import pastelGarfieldImg from "../assets/diplomas/pastel-garfield.jpg";
import nataVegetalImg from "../assets/diplomas/nata-vegetal-altas-tartas.jpg";
import papeleriaCreativaImg from "../assets/diplomas/papeleria-creativa.jpg";
import preciosCostosImg from "../assets/diplomas/precios-y-costos.jpg";

// Para añadir un diploma: guarda la imagen en src/assets/diplomas/ (JPG
// apaisado; si lo tienes en PDF, conviértelo antes a imagen), añade aquí su
// import y un objeto nuevo al array. Aparece solo en "Sobre Nanos", con su
// miniatura y la vista ampliada al pulsarlo. El orden del array es el orden
// en el que se muestran.

export type Diploma = {
  id: string;
  titulo: string;
  escuela: string;
  // Etiqueta corta sobre el título: "Curso avanzado", "Workshop online"...
  tipo: string;
  // Texto libre ("Abril 2025", "2026"...). Opcional: algunos no la indican.
  fecha?: string;
  imagen: ImageMetadata;
};

export const diplomas: Diploma[] = [
  {
    id: "reposteria-creativa-alta-calidad",
    titulo: "Repostería Creativa de Alta Calidad",
    escuela: "Escuela Ysabela Repostería Creativa · Madrid",
    tipo: "Curso avanzado · 14 semanas",
    fecha: "Abril 2025",
    imagen: reposteriaAltaCalidadImg,
  },
  {
    id: "luxury-cake",
    titulo: "Luxury Cake",
    escuela: "Tartas Mmmm Academy · FlavorCraft Academy",
    tipo: "Curso avanzado",
    imagen: luxuryCakeImg,
  },
  {
    id: "flores-azucar",
    titulo: "El Arte de Hacer Flores en Azúcar",
    escuela: "Sugar Art Bologna · Prof. Adriana Bologna",
    tipo: "Workshop online",
    fecha: "2026",
    imagen: floresAzucarImg,
  },
  {
    id: "pastel-garfield",
    titulo: "Pastel de Garfield en 3D",
    escuela: "Dulce Locura Madrid",
    tipo: "Curso",
    fecha: "Noviembre 2025",
    imagen: pastelGarfieldImg,
  },
  {
    id: "nata-vegetal-altas-tartas",
    titulo: "Nata vegetal y montaje de tartas altas",
    escuela: "FlavorCraft · Saborea Tu Postre",
    tipo: "Curso",
    fecha: "Julio 2025",
    imagen: nataVegetalImg,
  },
  {
    id: "papeleria-creativa",
    titulo: "Papelería Creativa",
    escuela: "Dulce Locura",
    tipo: "Curso presencial",
    fecha: "Marzo 2026",
    imagen: papeleriaCreativaImg,
  },
  {
    id: "precios-y-costos",
    titulo: "Precios y Costos",
    escuela: "Tartas Mmmm Academy",
    tipo: "Curso presencial",
    imagen: preciosCostosImg,
  },
];
