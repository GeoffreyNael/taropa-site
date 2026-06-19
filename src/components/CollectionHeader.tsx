import Link from "next/link";
import type { CollectionCategory } from "@/lib/brand";

type CollectionHeaderProps = {
  title: string;
  categories: CollectionCategory[];
  activeSlug?: string;
};

export function CollectionHeader({
  title,
  categories,
  activeSlug = "all",
}: CollectionHeaderProps) {
  return (
    <header className="collection-header">
      <div className="collection-header__top">
        <h1 className="collection-header__title">Collection : {title}</h1>
        <button type="button" className="collection-header__filters" disabled>
          Filtres
        </button>
      </div>
      <nav className="collection-header__nav" aria-label="Catégories">
        <ul className="collection-header__nav-list">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={category.href}
                className={
                  category.slug === activeSlug
                    ? "collection-header__nav-link collection-header__nav-link--active"
                    : "collection-header__nav-link"
                }
                aria-current={category.slug === activeSlug ? "page" : undefined}
              >
                {category.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
