export type Product = {
  id: string;
  ref: string;
  name: string;
  description: string;
  /** Cover image for the collection grid */
  image: string;
  /** All product photos */
  images: string[];
  category: "women" | "men";
  price?: string;
  colorCount?: number;
  href: string;
};

/** Build image paths. Order matters: index 0 = cover (always front-facing). */
function productImages(slug: string, order: number[]) {
  const images = order.map(
    (n) => `/photos/products/${slug}/${String(n).padStart(2, "0")}.png`,
  );
  return { image: images[0], images };
}

/** Women's collection — order follows Look narratives.docx */
export const womenProducts: Product[] = [
  {
    id: "ruh",
    ref: "0001",
    name: "Ruh",
    description:
      "The soul of understated elegance. Crafted in airy mul chanderi and adorned with delicate hand-embroidered chikankari, Ruh pairs timeless craftsmanship with graceful gathered trousers finished with intricate lace details. Soft, refined, and endlessly versatile.",
    category: "women",
    href: "/women/ruh",
    ...productImages("ruh", [2, 3, 1]),
  },
  {
    id: "ayla",
    ref: "0002",
    name: "Ayla",
    description:
      "Light as moonlight, effortless as a summer breeze. Ayla is a study in quiet sophistication, featuring hand-embroidered chikankari on fluid mul chanderi, paired with softly gathered trousers. Feminine, graceful, and designed for everyday beauty.",
    category: "women",
    href: "/women/ayla",
    ...productImages("ayla", [1, 3, 2]),
  },
  {
    id: "nura",
    ref: "0003",
    name: "Nura",
    description:
      "Where light meets craftsmanship. Featuring delicate blue chikankari embroidery on mul chanderi, Nura is elevated with lace accents and finely pleated trousers. A fresh interpretation of heritage artistry with a contemporary spirit.",
    category: "women",
    href: "/women/nura",
    ...productImages("nura", [2, 3, 1]),
  },
  {
    id: "gul",
    ref: "0004",
    name: "Gul",
    description:
      "Inspired by the poetry of a blooming flower. A flowing chanderi kaftan dress adorned with hand-embroidered chikankari, Gul celebrates femininity through soft drapes, gentle movement, and timeless elegance.",
    category: "women",
    href: "/women/gul",
    ...productImages("gul", [1, 3, 2]),
  },
  {
    id: "ira",
    ref: "0005",
    name: "Ira",
    description:
      "An expression of art, woven into every thread. Featuring a harmonious blend of floral and geometric chikankari motifs, Ira is crafted in mul chanderi and paired with embroidered culottes. Distinctive, artistic, and effortlessly modern.",
    category: "women",
    href: "/women/ira",
    ...productImages("ira", [1, 2, 3]),
  },
  {
    id: "aina",
    ref: "0006",
    name: "Aina",
    description:
      "Softness, stitched in every thread. Delicate pastel chikankari blooms across airy mul chanderi, creating a look that feels light, graceful, and effortlessly elegant. Finished with classic ivory trousers, Aina is timeless in every sense.",
    category: "women",
    href: "/women/aina",
    ...productImages("aina", [1, 2, 3]),
  },
  {
    id: "kaia",
    ref: "0007",
    name: "Kaia",
    description:
      "Where heritage meets modern femininity. A contemporary Magyar silhouette comes alive with floral and geometric chikankari, while lace accents and pintuck trousers add layers of delicate craftsmanship. Kaia is tradition interpreted with a modern eye.",
    category: "women",
    href: "/women/kaia",
    ...productImages("kaia", [1, 2, 3]),
  },
  {
    id: "lila",
    ref: "0008",
    name: "Lila",
    description:
      "Designed to move as beautifully as you do. A flowing kaftan silhouette adorned with peach-toned hand embroidery captures effortless elegance through fluid drapes, gentle movement, and understated charm.",
    category: "women",
    href: "/women/lila",
    ...productImages("lila", [1, 2, 3]),
  },
  {
    id: "mehr",
    ref: "0009",
    name: "Mehr",
    description:
      "A reflection of warmth and grace. Soft shades of blush and sage unfold through intricate hand-embroidered chikankari on luxurious silk chanderi. Paired with elegant narrow trousers, Mehr is refined, feminine, and quietly radiant.",
    category: "women",
    href: "/women/mehr",
    ...productImages("mehr", [1, 3, 2]),
  },
  {
    id: "mira",
    ref: "0010",
    name: "Mira",
    description:
      "Bold artistry, softened by movement. Statement floral chikankari transforms an asymmetrical chanderi kurta into a striking expression of craftsmanship, balanced by fluid harem trousers that move with effortless grace.",
    category: "women",
    href: "/women/mira",
    ...productImages("mira", [1, 2, 3]),
  },
  {
    id: "naz",
    ref: "0011",
    name: "Naz",
    description:
      "Inspired by the elegance of the lotus. Intricately embroidered in shades of blush and green, Naz celebrates one of India's most timeless symbols of beauty. Crafted in chanderi and paired with classic straight trousers, it is graceful in every detail.",
    category: "women",
    href: "/women/naz",
    ...productImages("naz", [1, 2, 3]),
  },
  {
    id: "reva",
    ref: "0012",
    name: "Reva",
    description:
      "Contemporary layers, timeless craft. A sleeveless embroidered gilet paired with delicately detailed trousers brings depth, texture, and modern sophistication to the enduring art of chikankari.",
    category: "women",
    href: "/women/reva",
    ...productImages("reva", [1, 2, 3]),
  },
  {
    id: "suri",
    ref: "0013",
    name: "Suri",
    description:
      "An ode to flowers in bloom. Butter and ivory floral chikankari blossom across soft chanderi, creating a silhouette that is delicate, romantic, and timelessly feminine.",
    category: "women",
    href: "/women/suri",
    ...productImages("suri", [2, 3, 1]),
  },
  {
    id: "tara",
    ref: "0014",
    name: "Tara",
    description:
      "Colour, crafted with grace. A vibrant hand-embroidered yoke in soft pastel hues transforms this mid-thigh kurta into a joyful celebration of colour, craftsmanship, and individuality.",
    category: "women",
    href: "/women/tara",
    ...productImages("tara", [1, 2]),
  },
  {
    id: "yara",
    ref: "0015",
    name: "Yara",
    description:
      "A tribute to Mughal grandeur. Inspired by the intricate floral artistry of the Mughal era, Yara honours centuries of craftsmanship through timeless hand-embroidered chikankari on a classic kurta silhouette.",
    category: "women",
    href: "/women/yara",
    ...productImages("yara", [1, 3, 2]),
  },
  {
    id: "zia",
    ref: "0016",
    name: "Zia",
    description:
      "Contemporary elegance with an artisanal soul. A kimono-inspired ivory silhouette paired with wrap-around trousers reimagines traditional chikankari through clean lines, fluid drapes, and modern sophistication.",
    category: "women",
    href: "/women/zia",
    ...productImages("zia", [1, 2, 3]),
  },
];

/** Men's collection — order follows Look narratives.docx */
export const menProducts: Product[] = [
  {
    id: "abeer",
    ref: "0001",
    name: "Abeer",
    description:
      "Inspired by the rhythm of tradition. Textured chanderi adorned with circular hand-embroidered motifs reflects the timeless beauty of Indian craftsmanship. Paired with a traditional salwar, Abeer is a quiet celebration of heritage, reimagined for the modern man.",
    category: "men",
    href: "/men/abeer",
    ...productImages("abeer", [1, 2]),
  },
  {
    id: "rumi",
    ref: "0002",
    name: "Rumi",
    description:
      "Crafted with precision, defined by simplicity. Tailored in chanderi with self-geometric textures, Rumi celebrates clean lines, thoughtful detailing, and modern refinement.",
    category: "men",
    href: "/men/rumi",
    ...productImages("rumi", [3, 1, 2]),
  },
  {
    id: "sahir",
    ref: "0003",
    name: "Sahir",
    description:
      "Minimal by design, rich in craftsmanship. Intricate dori embroidery adds depth and character to a timeless chanderi silhouette, creating a look that is effortlessly elegant and enduring.",
    category: "men",
    href: "/men/sahir",
    ...productImages("sahir", [1, 2, 3]),
  },
  {
    id: "ruhan",
    ref: "0004",
    name: "Ruhan",
    description:
      "The beauty of subtle detail. Self-striped chanderi and tonal embroidered motifs create a composition of quiet texture and understated elegance, where craftsmanship speaks softly.",
    category: "men",
    href: "/men/ruhan",
    ...productImages("ruhan", [1, 2, 3]),
  },
  {
    id: "rey",
    ref: "0005",
    name: "Rey",
    description:
      "Geometry meets quiet sophistication. A finely embroidered geometric yoke on luxurious siya-saka fabric offers a refined interpretation of festive menswear — minimal, elegant, and unmistakably distinctive.",
    category: "men",
    href: "/men/rey",
    ...productImages("rey", [1, 2, 3]),
  },
  {
    id: "riaz",
    ref: "0006",
    name: "Riaz",
    description:
      "Rooted in heritage, tailored for today. An insertion-detail chanderi shirt paired with a traditional salwar or dhoti honours classic Indian dressing while embracing contemporary tailoring.",
    category: "men",
    href: "/men/riaz",
    ...productImages("riaz", [1, 2, 3]),
  },
];

export function getWomenProduct(slug: string): Product | undefined {
  return womenProducts.find((product) => product.id === slug);
}

export function getWomenProductSlugs(): string[] {
  return womenProducts.map((product) => product.id);
}

export function getMenProduct(slug: string): Product | undefined {
  return menProducts.find((product) => product.id === slug);
}

export function getMenProductSlugs(): string[] {
  return menProducts.map((product) => product.id);
}
