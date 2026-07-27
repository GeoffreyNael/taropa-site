import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductGallery } from "@/components/ProductGallery";

type ProductPageProps = {
  product: Product;
  backHref: string;
  backLabel: string;
};

export function ProductPage({ product, backHref, backLabel }: ProductPageProps) {
  return (
    <main className="product-page">
      <nav className="product-page__breadcrumb">
        <Link href={backHref} className="product-page__back">
          ← {backLabel}
        </Link>
      </nav>

      <div className="product-page__layout">
        <ProductGallery images={product.images} productName={product.name} />

        <div className="product-page__info">
          <h1 className="product-page__title">{product.name}</h1>

          {product.price ? (
            <p className="product-page__price">{product.price}</p>
          ) : null}

          {product.description.trim() ? (
            <p className="product-page__description">{product.description}</p>
          ) : (
            <p className="product-page__description product-page__description--empty">
              Description coming soon.
            </p>
          )}

          {product.colorCount ? (
            <p className="product-page__colors">
              {product.colorCount} color{product.colorCount > 1 ? "s" : ""}
            </p>
          ) : null}
        </div>
      </div>
    </main>
  );
}
