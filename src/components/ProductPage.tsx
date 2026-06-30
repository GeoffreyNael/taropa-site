import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

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
        <div className="product-page__gallery">
          {product.images.map((src, index) => (
            <figure key={src} className="product-page__figure">
              <Image
                src={src}
                alt={`${product.name} — photo ${index + 1}`}
                width={900}
                height={1200}
                sizes="(max-width: 767px) 100vw, 45vw"
                priority={index === 0}
                className="product-page__image"
              />
            </figure>
          ))}
        </div>

        <div className="product-page__info">
          <h1 className="product-page__title">{product.name}</h1>

          {product.price ? (
            <p className="product-page__price">{product.price}</p>
          ) : (
            <p className="product-page__price product-page__price--empty">
              Price TBC
            </p>
          )}

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
