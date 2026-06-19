export type AboutSection = {
  id: string;
  heading: string;
  body: string;
};

export type AboutContent = {
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: AboutSection[];
};

export type NavItem = {
  href: string;
  label: string;
};

export type CollectionCategory = {
  slug: string;
  label: string;
  href: string;
};

export type { Product } from "./products";
export { womenProducts } from "./products";
import { womenProducts as womenCollection } from "./products";

export type GalleryTile = "hero" | "standard" | "wide";

export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  width: number;
  height: number;
  tile: GalleryTile;
  poster?: string;
};

export const nav: NavItem[] = [
  { href: "/women", label: "Women" },
  { href: "/men", label: "Men" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

export const womenCategories: CollectionCategory[] = [
  { slug: "all", label: "All", href: "/women" },
];

export const menCategories: CollectionCategory[] = [
  { slug: "all", label: "All", href: "/men" },
];

/** Men's pieces — add products here */
export const menProducts: import("./products").Product[] = [
  // {
  //   id: "linen-shirt",
  //   ref: "0001",
  //   name: "Linen shirt",
  //   description: "Hand-embroidered cotton, relaxed fit",
  //   image: "/photos/products/linen-shirt.jpg",
  //   images: [
  //     "/photos/products/linen-shirt.jpg",
  //     "/photos/products/linen-shirt-2.jpg",
  //     "/photos/products/linen-shirt-3.jpg",
  //   ],
  //   category: "men",
  //   price: "€185.00",
  //   href: "/men/linen-shirt",
  // },
];

export const products = [...womenCollection, ...menProducts];

export const gallery: GalleryItem[] = [
  {
    id: "01",
    type: "video",
    src: "/media/videos/process.mp4",
    alt: "Gestes de broderie en mouvement",
    width: 1080,
    height: 1920,
    tile: "hero",
    poster: "/media/images/embroidery-hands.jpg",
  },
  {
    id: "02",
    type: "image",
    src: "/media/images/chikankari-book.jpg",
    alt: "Livre Chikankari et échantillon brodé",
    width: 768,
    height: 1024,
    tile: "standard",
  },
  {
    id: "03",
    type: "image",
    src: "/media/images/embroidery-hands.jpg",
    alt: "Broderie à la main sur tambour",
    width: 1200,
    height: 1600,
    tile: "standard",
  },
  {
    id: "04",
    type: "video",
    src: "/media/videos/workshop-02.mp4",
    alt: "Atelier Taropa en vidéo",
    width: 1080,
    height: 1920,
    tile: "standard",
    poster: "/media/images/blue-blocks.jpg",
  },
  {
    id: "05",
    type: "image",
    src: "/media/images/block-print.jpg",
    alt: "Motif sculpté sur bloc de bois",
    width: 720,
    height: 1280,
    tile: "standard",
  },
  {
    id: "06",
    type: "video",
    src: "/media/videos/workshop-01.mp4",
    alt: "Savoir-faire textile en vidéo",
    width: 1080,
    height: 1920,
    tile: "standard",
    poster: "/media/images/block-print.jpg",
  },
  {
    id: "07",
    type: "image",
    src: "/media/images/blue-blocks.jpg",
    alt: "Blocs d'impression indigo dans paniers",
    width: 1200,
    height: 1600,
    tile: "standard",
  },
  {
    id: "08",
    type: "image",
    src: "/media/images/atelier-group.jpg",
    alt: "Atelier — broderie collective",
    width: 1600,
    height: 1200,
    tile: "wide",
  },
  {
    id: "09",
    type: "video",
    src: "/media/videos/workshop-03.mp4",
    alt: "Atelier Taropa — gestes et matières",
    width: 1080,
    height: 1920,
    tile: "standard",
    poster: "/media/images/atelier-group.jpg",
  },
];

export const brand = {
  name: "Taropa",
  tagline: "archana bhushan",
  description:
    "Taropa — hand-embroidered ready-to-wear, between tradition and modernity.",
  email: "hello@taropa.fr",
  instagram: "#",
};

export const pages = {
  women: {
    title: "Women",
    intro:
      "Dresses, tops and jackets in linen and cotton — each piece carries the trace of the embroiderer's hand.",
  },
  men: {
    title: "Men",
    intro:
      "Relaxed cuts, natural fabrics and subtle embroidery for a contemporary wardrobe.",
  },
  about: {
    title: "About us",
    intro: "",
    image: "/media/images/atelier-group.jpg",
    imageAlt: "",
    sections: [
      { id: "origin", heading: "", body: "" },
      { id: "chikankari", heading: "", body: "" },
      { id: "atelier", heading: "", body: "" },
      { id: "today", heading: "", body: "" },
    ],
  } satisfies AboutContent,
  contact: {
    title: "Contact us",
    intro:
      "For questions about the collection, an order or a collaboration — write to us.",
    studio: "Paris, France — address to be completed.",
  },
} as const;
