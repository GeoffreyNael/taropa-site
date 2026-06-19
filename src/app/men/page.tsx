import type { Metadata } from "next";
import { CollectionHeader } from "@/components/CollectionHeader";
import { ProductGrid } from "@/components/ProductGrid";
import { brand, menCategories, menProducts, pages } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${pages.men.title} — ${brand.name}`,
  description: pages.men.intro,
};

export default function MenPage() {
  return (
    <main className="collection-page">
      <CollectionHeader title={pages.men.title} categories={menCategories} />
      <section className="collection-page__grid">
        <ProductGrid products={menProducts} />
      </section>
    </main>
  );
}
