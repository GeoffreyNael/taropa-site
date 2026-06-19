import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPage } from "@/components/ProductPage";
import { brand, pages } from "@/lib/brand";
import {
  getWomenProduct,
  getWomenProductSlugs,
} from "@/lib/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getWomenProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getWomenProduct(slug);

  if (!product) {
    return { title: `${pages.women.title} — ${brand.name}` };
  }

  return {
    title: `${product.name} — ${brand.name}`,
    description: product.description || `${product.name} — ${pages.women.intro}`,
  };
}

export default async function WomenProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getWomenProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <ProductPage
      product={product}
      backHref="/women"
      backLabel={pages.women.title}
    />
  );
}
