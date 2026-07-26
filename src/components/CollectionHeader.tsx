import Link from "next/link";
import type { CollectionCategory } from "@/lib/brand";

type CollectionHeaderProps = {
  title: string;
  categories: CollectionCategory[];
  activeSlug?: string;
  intro?: string;
};

export function CollectionHeader({
  title,
  categories,
  activeSlug = "all",
  intro,
}: CollectionHeaderProps) {
  const showCategories =
    categories.length > 1 ||
    (categories.length === 1 && categories[0].slug !== "all");

  return (
    <header className="collection-header">
      <div className="collection-header__inner">
        <h1 className="collection-header__title">{title}</h1>
        {intro ? <p className="collection-header__intro">{intro}</p> : null}
        {showCategories ? (
          <nav className="collection-header__nav" aria-label="Categories">
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
                    aria-current={
                      category.slug === activeSlug ? "page" : undefined
                    }
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
