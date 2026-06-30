import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPage } from "@/components/ProductPage";
import { brand, pages } from "@/lib/brand";
import { getMenProduct, getMenProductSlugs } from "@/lib/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getMenProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getMenProduct(slug);

  if (!product) {
    return { title: `${pages.men.title} — ${brand.name}` };
  }

  return {
    title: `${product.name} — ${brand.name}`,
    description: product.description || `${product.name} — ${pages.men.intro}`,
  };
}

export default async function MenProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getMenProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <ProductPage
      product={product}
      backHref="/men"
      backLabel={pages.men.title}
    />
  );
}
