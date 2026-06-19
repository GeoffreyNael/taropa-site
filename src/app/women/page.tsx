import type { Metadata } from "next";
import { CollectionHeader } from "@/components/CollectionHeader";
import { ProductGrid } from "@/components/ProductGrid";
import { brand, pages, womenCategories, womenProducts } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${pages.women.title} — ${brand.name}`,
  description: pages.women.intro,
};

export default function WomenPage() {
  return (
    <main className="collection-page">
      <CollectionHeader title={pages.women.title} categories={womenCategories} />
      <section className="collection-page__grid">
        <ProductGrid products={womenProducts} />
      </section>
    </main>
  );
}
