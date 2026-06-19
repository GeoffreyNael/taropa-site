export type NavItem = {
  href: string;
  label: string;
};

export type CollectionCategory = {
  slug: string;
  label: string;
  href: string;
};

export type Product = {
  id: string;
  ref: string;
  name: string;
  description: string;
  image: string;
  category: "women" | "men";
  price?: string;
  colorCount?: number;
  href?: string;
};

export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  width: number;
  height: number;
  fullWidth?: boolean;
  poster?: string;
};

export const nav: NavItem[] = [
  { href: "/women", label: "Femmes" },
  { href: "/men", label: "Hommes" },
];

const placeholderImages = [
  "/media/images/embroidery-hands.jpg",
  "/media/images/chikankari-book.jpg",
  "/media/images/block-print.jpg",
  "/media/images/blue-blocks.jpg",
  "/media/images/atelier-group.jpg",
];

function createPlaceholderProducts(
  category: "women" | "men",
  prefix: string,
): Product[] {
  return Array.from({ length: 10 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      id: `${category}-${number}`,
      ref: String(index + 1).padStart(4, "0"),
      name: "À compléter",
      description: "",
      image: placeholderImages[index % placeholderImages.length],
      category,
      href: `#${prefix}-${number}`,
    };
  });
}

export const womenCategories: CollectionCategory[] = [
  { slug: "all", label: "Tout", href: "/women" },
];

export const menCategories: CollectionCategory[] = [
  { slug: "all", label: "Tout", href: "/men" },
];

export const womenProducts: Product[] = createPlaceholderProducts("women", "femme");

/** Pièces hommes — ajouter les produits ici */
export const menProducts: Product[] = [
  // {
  //   id: "chemise-lin",
  //   ref: "0001",
  //   name: "Chemise lin",
  //   description: "Coton brodé, coupe décontractée",
  //   image: "/photos/products/chemise-lin.jpg",
  //   category: "men",
  //   price: "185,00 €",
  //   href: "/men/chemise-lin",
  // },
];

export const products: Product[] = [...womenProducts, ...menProducts];

export const gallery: GalleryItem[] = [
  {
    id: "01",
    type: "image",
    src: "/media/images/chikankari-book.jpg",
    alt: "Livre Chikankari et échantillon brodé",
    width: 768,
    height: 1024,
  },
  {
    id: "02",
    type: "video",
    src: "/media/videos/process.mp4",
    alt: "Gestes de broderie en mouvement",
    width: 1080,
    height: 1920,
    poster: "/media/images/embroidery-hands.jpg",
  },
  {
    id: "03",
    type: "image",
    src: "/media/images/embroidery-hands.jpg",
    alt: "Broderie à la main sur tambour",
    width: 1200,
    height: 1600,
  },
  {
    id: "04",
    type: "video",
    src: "/media/videos/workshop-02.mp4",
    alt: "Atelier Taropa en vidéo",
    width: 1080,
    height: 1920,
    poster: "/media/images/blue-blocks.jpg",
  },
  {
    id: "05",
    type: "image",
    src: "/media/images/block-print.jpg",
    alt: "Motif sculpté sur bloc de bois",
    width: 720,
    height: 1280,
  },
  {
    id: "06",
    type: "video",
    src: "/media/videos/workshop-01.mp4",
    alt: "Savoir-faire textile en vidéo",
    width: 1080,
    height: 1920,
    poster: "/media/images/block-print.jpg",
  },
  {
    id: "07",
    type: "image",
    src: "/media/images/blue-blocks.jpg",
    alt: "Blocs d'impression indigo dans paniers",
    width: 1200,
    height: 1600,
  },
  {
    id: "08",
    type: "image",
    src: "/media/images/atelier-group.jpg",
    alt: "Atelier — broderie collective",
    width: 1600,
    height: 1200,
  },
];

export const brand = {
  name: "Taropa",
  tagline: "archana bhushan",
  description:
    "Taropa — prêt-à-porter brodé à la main, entre tradition et modernité.",
  email: "hello@taropa.fr",
  instagram: "#",
};

export const pages = {
  women: {
    title: "Femmes",
    intro:
      "Robes, tops et vestes en lin et coton — chaque pièce porte la trace du geste brodeur.",
  },
  men: {
    title: "Hommes",
    intro:
      "Coupe fluide, matières naturelles et broderie discrète pour un vestiaire contemporain.",
  },
} as const;
