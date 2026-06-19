import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/brand";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="page-empty">
        Collection en cours de préparation — revenez bientôt.
      </p>
    );
  }

  return (
    <ul className="product-grid">
      {products.map((product, index) => (
        <li key={product.id} className="product-grid__item">
          <Link href={product.href ?? "#"} className="product-card">
            <div className="product-card__media">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={1050}
                sizes="(max-width: 767px) 50vw, 25vw"
                priority={index < 4}
                className="product-card__image"
              />
            </div>
            <div className="product-card__info">
              <h2 className="product-card__title">
                no {product.ref} / {product.name}
              </h2>
              {product.price ? (
                <p className="product-card__price">{product.price}</p>
              ) : (
                <p className="product-card__price product-card__price--empty">
                  Prix à définir
                </p>
              )}
              {product.colorCount ? (
                <p className="product-card__colors">
                  {product.colorCount} couleur{product.colorCount > 1 ? "s" : ""}
                </p>
              ) : null}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
