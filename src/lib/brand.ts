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

/** tall 3:4 · wide 4:3 · square 1:1 — crop Pinterest, indépendant du fichier source */
export type GalleryTile = "tall" | "wide" | "square";

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

/** Ratios d’affichage mosaïque (crop object-fit: cover). */
export const galleryTileRatio: Record<GalleryTile, number> = {
  tall: 3 / 4,
  wide: 4 / 3,
  square: 1,
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

/** Hero landing — atelier en mouvement. */
export const homeHero = {
  type: "video" as const,
  src: "/media/videos/hero-main.mp4",
  alt: "Women embroidering together in the Taropa workshop, Lucknow",
  poster: "/media/images/hero-main-poster.jpg",
  width: 1920,
  height: 1080,
};

export type HomeStoryMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  width: number;
  height: number;
  poster?: string;
  /** Affichage logo / mot-écrit (pas une photo atelier) */
  variant?: "wordmark";
};

export type AboutSection = {
  id: string;
  heading: string;
  body: string;
  media: HomeStoryMedia;
};

export type AboutContent = {
  title: string;
  intro: string;
  sections: AboutSection[];
};

export type HomeStoryChapter = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  media: HomeStoryMedia;
};

/**
 * Mosaïque — 15 médias vifs (hors hero).
 * Priorité atelier coloré (rouge, indigo, or, sols, vêtements) — peu de crème produit.
 * Amovible : ajoute / retire / réordonne ici.
 */
export const gallery: GalleryItem[] = [
  {
    id: "01",
    type: "image",
    src: "/media/images/atelier-group.jpg",
    alt: "Atelier — purple hoop, teal shirt, patterned floor",
    width: 1600,
    height: 1200,
    tile: "wide",
  },
  {
    id: "02",
    type: "image",
    src: "/media/images/blue-blocks.jpg",
    alt: "Deep indigo printing blocks in woven baskets",
    width: 1200,
    height: 1600,
    tile: "tall",
  },
  {
    id: "03",
    type: "image",
    src: "/media/images/IMG_9720.jpg",
    alt: "Hands embroidering on a bright red frame",
    width: 2000,
    height: 1500,
    tile: "wide",
  },
  {
    id: "04",
    type: "image",
    src: "/media/images/IMG_9672.jpg",
    alt: "Artisans in red and orange — shared embroidery",
    width: 2000,
    height: 1500,
    tile: "wide",
  },
  {
    id: "05",
    type: "video",
    src: "/media/videos/home-01.mp4",
    alt: "Taropa workshop in motion",
    width: 1920,
    height: 1080,
    tile: "wide",
    poster: "/media/images/home-01-poster.jpg",
  },
  {
    id: "06",
    type: "image",
    src: "/media/images/IMG_9715.jpg",
    alt: "Gold sequin and cream chikankari detail",
    width: 1500,
    height: 2000,
    tile: "tall",
  },
  {
    id: "07",
    type: "image",
    src: "/media/images/IMG_9737.jpg",
    alt: "Royal blue outlines on embroidered silk",
    width: 2000,
    height: 1500,
    tile: "wide",
  },
  {
    id: "08",
    type: "image",
    src: "/media/images/block-print.jpg",
    alt: "Hand-carved wooden printing block — warm wood",
    width: 720,
    height: 1280,
    tile: "tall",
  },
  {
    id: "09",
    type: "video",
    src: "/media/videos/workshop-03.mp4",
    alt: "Atelier gestures — thread and fabric",
    width: 1080,
    height: 1920,
    tile: "tall",
    poster: "/media/images/atelier-group.jpg",
  },
  {
    id: "10",
    type: "image",
    src: "/media/images/embroidery-hands.jpg",
    alt: "Close-up embroidery on frame",
    width: 1200,
    height: 1600,
    tile: "tall",
  },
  {
    id: "11",
    type: "video",
    src: "/media/videos/home-02.mp4",
    alt: "Fabric and embroidery in motion",
    width: 1920,
    height: 1080,
    tile: "wide",
    poster: "/media/images/home-02-poster.jpg",
  },
  {
    id: "12",
    type: "image",
    src: "/media/images/chikankari-book.jpg",
    alt: "Chikankari book and embroidered swatch",
    width: 768,
    height: 1024,
    tile: "square",
  },
  {
    id: "13",
    type: "video",
    src: "/media/videos/workshop-01.mp4",
    alt: "Workshop process — Lucknow",
    width: 1080,
    height: 1920,
    tile: "tall",
    poster: "/media/images/blue-blocks.jpg",
  },
  {
    id: "14",
    type: "image",
    src: "/media/images/IMG_9730.jpg",
    alt: "Navy and cream floral embroidery detail",
    width: 1500,
    height: 2000,
    tile: "tall",
  },
  {
    id: "15",
    type: "video",
    src: "/media/videos/workshop-02.mp4",
    alt: "Artisans at the embroidery frame",
    width: 1080,
    height: 1920,
    tile: "tall",
    poster: "/media/images/IMG_9672.jpg",
  },
];

export const brand = {
  name: "Taropa",
  tagline: "Archana Bhushan",
  description:
    "Finest chikankari, handcrafted in Lucknow by master artisans for over 38 years.",
  manifesto: "Made by hand, in India.",
  email: "asbhushan@gmail.com",
  phone: "+91 9971470002",
  instagram: "https://instagram.com/archana_taropa",
  instagramHandle: "@archana_taropa",
};

/**
 * Accueil — fil conducteur « Made by hand ».
 * Ordre narratif : promesse → femmes → gestes → blueprint → temps → close → collection.
 * Aucune pièce de collection avant le dernier chapitre.
 */
export const homeContent = {
  hero: {
    line: "Made by hand, in India.",
  },
  /** Chapitres zigzag — médias choisis pour le récit craft. */
  story: [
    {
      id: "women",
      eyebrow: "The women",
      title: "Led by women",
      paragraphs: [
        "Every piece is made in Lucknow, across small home workshops — each led by a woman who has opened her home to relatives, friends and neighbours. For many, whose families do not permit them to work outside the home, it is the only way to earn an independent livelihood.",
        "Depending on the work, between 60 and 100 women work with Taropa at any time. In some workshops, three or four generations of the same family work with us.",
      ],
      media: {
        type: "image",
        src: "/media/images/IMG_9672.jpg",
        alt: "Women artisans embroidering together on a shared frame",
        width: 2000,
        height: 1500,
      },
    },
    {
      id: "gesture",
      eyebrow: "The gesture",
      title: "Stitch by stitch",
      paragraphs: [
        "It begins with an outline on fabric. Then the needle — thirty-two stitches passed down through generations.",
        "What still moves me is watching that bare outline become something lasting. That is what chikankari means to me.",
      ],
      media: {
        type: "video",
        src: "/media/videos/workshop-02.mp4",
        alt: "Hands embroidering chikankari at the frame",
        width: 1080,
        height: 1920,
        poster: "/media/images/embroidery-hands.jpg",
      },
    },
    {
      id: "blueprint",
      eyebrow: "The blueprint",
      title: "Handmade embroidery",
      paragraphs: [
        "Wooden blocks imprint a blue outline — the map of the piece. Then embroidery, washing, dyeing, tailoring.",
        "The blue disappears. Only the handwork remains. From the start: silk thread, never cotton. Never machine-made.",
      ],
      media: {
        type: "image",
        src: "/media/images/blue-blocks.jpg",
        alt: "Hand-carved indigo printing blocks in a woven basket",
        width: 1200,
        height: 1600,
      },
    },
    {
      id: "time",
      eyebrow: "Time",
      title: "A forever heirloom",
      paragraphs: [
        "A single piece can take months. A hand-embroidered saree: six months minimum — kept and passed on.",
        "Fabric washes in the sun. The hours stay in the cloth.",
      ],
      media: {
        type: "video",
        src: "/media/videos/process.mp4",
        alt: "White fabric drying in the sun after washing — Lucknow",
        width: 1920,
        height: 1080,
        poster: "/media/images/laundry-sun.jpg",
      },
    },
  ] satisfies HomeStoryChapter[],
  close: {
    text: "For those who recognise the hand in the cloth — and never need it explained.",
    href: "/about",
    label: "Read the full story",
  },
  collection: {
    title: "The collection",
    intro: "To be discovered.",
    womenHref: "/women",
    menHref: "/men",
    womenLabel: "Women",
    menLabel: "Men",
  },
  contactCta: {
    title: "Write to us",
    text: "Questions about the collection, an order, or a collaboration.",
    href: "/contact",
    label: "Contact",
  },
} as const;

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
    sections: [
      {
        id: "origin",
        heading: "Why Taropa",
        // La grand-mère / to stitch — main clairement âgée au métier
        media: {
          type: "image",
          src: "/media/images/grandmother-hands.jpg",
          alt: "An elderly artisan’s hands embroidering chikankari on a hoop",
          width: 1800,
          height: 1350,
        },
        body: "The name comes from my grandmother. In Punjabi, Taropa means to stitch — the only word that felt true for this brand.\n\nI settled young in Lucknow and was drawn to its craft. Growing up, I had watched my mother make clothes by hand. When I found chikankari, bringing the two together felt natural.\n\nFrom the start I used silk thread instead of cotton. The rule has stayed simple: no shortcuts, only hand embroidery.\n\nWe work with women artisans in Lucknow so the craft remains a real livelihood. Embroidery traditional, silhouettes classic to contemporary. Chikankari is a dying art. Taropa exists to keep it alive.",
      },
      {
        id: "chikankari",
        heading: "Chikankari",
        // Livre + loupe + rouge — version validée
        media: {
          type: "image",
          src: "/media/images/chikankari-book.jpg",
          alt: "Chikankari: A Lucknawi Tradition — book with embroidered swatch and magnifying glass",
          width: 768,
          height: 1024,
        },
        body: "It begins with an outline on fabric. Then women artisans in rural Lucknow work in small frames, stitch by stitch — 32 stitches passed down through generations.\n\nWhat still moves me is watching that bare outline become something lasting. That is what chikankari means to me.\n\nI favour pure silk chiffon, and shadow and jali stitches — subtle, but they give real depth. A single piece can take months. It is never machine-made. Taropa is for those who can see the difference.",
      },
      {
        id: "atelier",
        heading: "The workshop & the artisans",
        // Les femmes au travail — atelier-group (home utilise IMG_9672)
        media: {
          type: "image",
          src: "/media/images/atelier-group.jpg",
          alt: "Women artisans embroidering together in a Lucknow home workshop",
          width: 1600,
          height: 1200,
        },
        body: "Every Taropa piece is made in Lucknow, across multiple small workshops — each one led by a woman artisan who has opened her home to relatives, friends and neighbours. For many of these women, whose families do not permit them to work outside the home, it is the only way they can earn an independent livelihood.\n\nDepending on the work, between 60 and 100 women work with Taropa at any time. Wooden blocks imprint a blue outline — the blueprint. Then embroidery, washing, dyeing, tailoring. The blue disappears; only the handwork remains.\n\nMany of these women have been with me for years. In some workshops I now work with three or four generations of the same family.",
      },
      {
        id: "today",
        heading: "Taropa today",
        // Le résultat précieux — pièce finie, gardée / transmise
        media: {
          type: "image",
          src: "/media/images/IMG_9715.jpg",
          alt: "Gold and cream chikankari embroidery detail on sheer fabric",
          width: 1500,
          height: 2000,
        },
        body: "Every piece is made in Lucknow — the home of chikankari. Our customers span the world, from India to the UK, USA, UAE, Thailand and beyond. We also produce embroidery for select fashion houses on order — quietly, without compromise.\n\nTaropa is for people who choose a garment for the hand embroidery, the hours and the fabric — rather than for a label on it.\n\nIf one piece stood for everything we do, it would be a hand-embroidered saree: six months minimum, kept and passed on.",
      },
    ],
  } satisfies AboutContent,
  contact: {
    title: "Contact",
    intro:
      "For questions about the collection, an order, or a collaboration.",
    studio:
      "39A, DDA Flats, Ground floor, Shapurjaat, New Delhi — 110049, India",
  },
} as const;

export const aboutClosing = {
  quote:
    "If one piece were to represent everything Taropa stands for, it would be a hand-embroidered saree. It can take a minimum of six months to complete — kept, treasured, and passed down.",
  href: "/contact",
  label: "Get in touch",
} as const;
