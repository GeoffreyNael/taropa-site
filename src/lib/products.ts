export type Product = {
  id: string;
  ref: string;
  name: string;
  description: string;
  /** Cover image for the collection grid */
  image: string;
  /** All product photos (typically 3) */
  images: string[];
  category: "women" | "men";
  price?: string;
  colorCount?: number;
  href: string;
};

/** Women's collection — 5 pieces, filled one by one */
export const womenProducts: Product[] = [
  {
    id: "ayla",
    ref: "0001",
    name: "Ayla",
    description: "",
    image: "/photos/products/ayla/01.png",
    images: [
      "/photos/products/ayla/01.png",
      "/photos/products/ayla/02.png",
      "/photos/products/ayla/03.png",
    ],
    category: "women",
    href: "/women/ayla",
  },
  {
    id: "gul",
    ref: "0002",
    name: "Gul",
    description: "",
    image: "/photos/products/gul/01.png",
    images: [
      "/photos/products/gul/01.png",
      "/photos/products/gul/02.png",
      "/photos/products/gul/03.png",
    ],
    category: "women",
    href: "/women/gul",
  },
  {
    id: "ira",
    ref: "0003",
    name: "Ira",
    description: "",
    image: "/photos/products/ira/01.png",
    images: [
      "/photos/products/ira/01.png",
      "/photos/products/ira/02.png",
      "/photos/products/ira/03.png",
    ],
    category: "women",
    href: "/women/ira",
  },
  {
    id: "nura",
    ref: "0004",
    name: "Nura",
    description: "",
    image: "/photos/products/nura/01.png",
    images: [
      "/photos/products/nura/01.png",
      "/photos/products/nura/02.png",
      "/photos/products/nura/03.png",
    ],
    category: "women",
    href: "/women/nura",
  },
  {
    id: "ruh",
    ref: "0005",
    name: "Ruh",
    description: "",
    image: "/photos/products/ruh/01.png",
    images: [
      "/photos/products/ruh/01.png",
      "/photos/products/ruh/02.png",
      "/photos/products/ruh/03.png",
    ],
    category: "women",
    href: "/women/ruh",
  },
];

export function getWomenProduct(slug: string): Product | undefined {
  return womenProducts.find((product) => product.id === slug);
}

export function getWomenProductSlugs(): string[] {
  return womenProducts.map((product) => product.id);
}
