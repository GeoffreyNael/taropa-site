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
export {
  womenProducts,
  menProducts,
  getMenProduct,
  getMenProductSlugs,
} from "./products";
import { menProducts, womenProducts as womenCollection } from "./products";

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

export const products = [...womenCollection, ...menProducts];

export const gallery: GalleryItem[] = [
  {
    id: "01",
    type: "video",
    src: "/media/videos/process.mp4",
    alt: "Hand embroidery in motion — chikankari stitches on frame",
    width: 1080,
    height: 1920,
    tile: "hero",
    poster: "/media/images/embroidery-hands.jpg",
  },
  {
    id: "02",
    type: "image",
    src: "/media/images/chikankari-book.jpg",
    alt: "Chikankari reference book and embroidered swatch",
    width: 768,
    height: 1024,
    tile: "standard",
  },
  {
    id: "03",
    type: "image",
    src: "/media/images/embroidery-hands.jpg",
    alt: "Artisan embroidering chikankari by hand on a frame",
    width: 1200,
    height: 1600,
    tile: "standard",
  },
  {
    id: "04",
    type: "video",
    src: "/media/videos/workshop-02.mp4",
    alt: "Taropa workshop — artisans at work in Lucknow",
    width: 1080,
    height: 1920,
    tile: "standard",
    poster: "/media/images/blue-blocks.jpg",
  },
  {
    id: "05",
    type: "image",
    src: "/media/images/block-print.jpg",
    alt: "Hand-carved wooden block for textile printing",
    width: 720,
    height: 1280,
    tile: "standard",
  },
  {
    id: "06",
    type: "video",
    src: "/media/videos/workshop-01.mp4",
    alt: "Textile craftsmanship — block printing and embroidery",
    width: 1080,
    height: 1920,
    tile: "standard",
    poster: "/media/images/block-print.jpg",
  },
  {
    id: "07",
    type: "image",
    src: "/media/images/blue-blocks.jpg",
    alt: "Indigo printing blocks in woven baskets",
    width: 1200,
    height: 1600,
    tile: "standard",
  },
  {
    id: "08",
    type: "image",
    src: "/media/images/atelier-group.jpg",
    alt: "Women artisans embroidering together in the Lucknow workshop",
    width: 1600,
    height: 1200,
    tile: "wide",
  },
  {
    id: "09",
    type: "video",
    src: "/media/videos/workshop-03.mp4",
    alt: "Taropa atelier — gestures, thread and fabric",
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
    "Finest chikankari, handcrafted in Lucknow by master artisans for over 38 years.",
  manifesto: "Made by hand, in India.",
  email: "hello@taropa.fr",
  instagram: "#",
};

export const pages = {
  women: {
    title: "Women",
    intro:
      "Rooted in craft and inspired by individuality, our Pret Collection celebrates the enduring beauty of hand-embroidered chikankari through effortless, contemporary silhouettes. Rendered in a signature palette of Ivory, Blush, Sage, and Lime.",
  },
  men: {
    title: "Men",
    intro:
      "Meticulously crafted by skilled artisans, each piece is designed for those who wear their story with quiet confidence and timeless grace — thoughtfully made, beautifully worn, and uniquely yours.",
  },
  about: {
    title: "About us",
    intro:
      "Finest chikankari, handcrafted in Lucknow by master artisans for over 38 years.",
    image: "/media/images/atelier-group.jpg",
    imageAlt:
      "Artisans hand-embroidering on a frame in the Lucknow workshop — close-up of intricate chikankari.",
    sections: [
      {
        id: "origin",
        heading: "Why Taropa",
        body: "The name comes from my grandmother. Taropa in Punjabi means to stitch — a small word she used often, one that stayed with me. When it came time to name this brand, nothing else felt as true.\n\nI was young and newly settled in Lucknow — a city with a culture so deep and layered, it reveals itself slowly. I found myself drawn to its craft: the artisans, the embroidery, the endless hours that went into every piece. Growing up, I had watched my mother make bags and clothes by hand. That love for fashion and making things stayed with me. When I encountered chikankari in Lucknow, bringing the two together felt like the most natural thing to do. Taropa grew from there.\n\nWhen I first started, I used silk thread instead of the existing cotton thread — to create more luxurious garments which was not being done in the market. My intention has been simple: stay true to the craft and never compromise on it. No shortcuts — only hand embroidery, done the way it has always been done.\n\nBeyond the product, I wanted to build something that mattered to the people making it. Taropa works with a community of women artisans in Lucknow, ensuring the craft provides them a real and dignified livelihood. And while the embroidery remains traditional, the silhouettes move between classic and contemporary — because this art deserves to live in the modern wardrobe too.\n\nChikankari is a dying art as young generations are choosing better paying jobs. Taropa exists, in part, to make sure it doesn't.",
      },
      {
        id: "chikankari",
        heading: "Chikankari",
        body: "Chikankari is not just embroidery. It is a journey. It begins with a blueprint — a simple outline on fabric. From there, skilled women artisans in rural Lucknow work in small frames, stitch by stitch, drawing from 32 distinct stitches passed down through generations. The hours are endless. The focus, absolute.\n\nWhat moves me most is witnessing what emerges from that process. Watching a bare outline slowly become something intricate and timeless — that transformation never loses its wonder, no matter how many years I have been doing this. That these women, working quietly in small settings, can create something so extraordinarily beautiful — that is what chikankari means to me.\n\nPure silk chiffon is the fabric I am most drawn to. It is so delicate, so transparent, that the hand embroidery comes out beautifully on it. The stitches I love most are shadow and jali work — both have a quiet complexity to them. They add depth and dimensionality to the finished piece in a way that is subtle but unmistakable.\n\nWhat the world rarely sees is the hours, days and months that go into a single piece. Women artisans working tirelessly, in small frames, with a precision and delicacy that is honestly inspiring to witness. People often ask if it is computerised or machine-made. That question, more than anything, shows how far we have drifted from understanding what handcraft really means. The answer is no — and the difference, once you know what to look for, is unmistakable.\n\nMachine-made chikankari has flooded the market. It is faster, cheaper, and everywhere. But the art of true hand embroidery — the kind that can take months of focused, skilled work — is increasingly known only to those who have taken the time to understand it. Taropa exists for those people.",
      },
      {
        id: "atelier",
        heading: "The workshop & the artisans",
        body: "Every Taropa piece is made in Lucknow, across multiple small workshops — each one led by a woman artisan who has opened her home to her relatives, friends, and neighbours. This setup is more than practical. For many of these women, whose families do not permit them to work outside the home, it is the only way they can earn an independent livelihood. What begins as a workspace becomes a community.\n\nDepending on the work at hand, between 60 and 100 women work with Taropa at any given time — each one a specialist in this intricate craft.\n\nThe process begins with hand-carved wooden blocks used to imprint the fabric with a blue outline — a blueprint for the embroidery to follow. The style of work and thread are then determined, and the artisans begin their work, stitch by stitch. Once the embroidery is complete, the fabric is washed, dyed, and finally tailored into the finished piece. Those original blue lines disappear entirely — leaving only the embroidery behind.\n\nWhat began as a love for the craft became, over time, an equally deep love for the women who bring it to life. My relationship with my artisans is one of genuine respect — built over decades of working closely together, with consistent work and reliable payment. Many of these women have been with me for years. In some workshops, I now work with three, even four generations of the same family. That continuity means everything to me.",
      },
      {
        id: "today",
        heading: "Taropa today",
        body: "Taropa is rooted in India, with every piece made in Lucknow — the home of chikankari. Our customers span the world, from India to the UK, USA, UAE, Thailand and beyond. We also produce couture-level embroidery for select fashion houses on order, bringing the artistry of Lucknow to the global stage quietly and without compromise.\n\nTaropa is for people who choose a garment for what is in it — the hand embroidery, the hours, the fabric — rather than for a label on it. It is for those who carry themselves with quiet confidence and express their identity without needing to announce it. Young or old, any nationality, any body — chikankari has a way of sitting effortlessly on whoever wears it. That is part of its magic.\n\nIf one piece were to represent everything Taropa stands for, it would be a hand-embroidered saree. It can take a minimum of six months to complete — worked on by skilled artisans, stitch by stitch, until the fabric becomes something extraordinary. A Taropa saree is not just a garment. It is something women keep, treasure, and pass down to the next generation — a piece of wearable memory, as timeless as the craft itself.",
      },
    ],
  } satisfies AboutContent,
  contact: {
    title: "Contact us",
    intro:
      "For questions about the collection, an order or a collaboration — write to us.",
    studio: "Paris, France — address to be completed.",
  },
} as const;
