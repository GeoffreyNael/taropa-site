import Image from "next/image";
import Link from "next/link";
import { brand, homeContent, homeHero } from "@/lib/brand";
import { womenProducts } from "@/lib/products";

const previewLooks = womenProducts.slice(0, 6);

export default function Home() {
  const { hero, story, close, collection, contactCta } = homeContent;

  return (
    <main className="home-page">
      <section className="home-hero" aria-label="Taropa">
        <video
          className="home-hero__media"
          src={homeHero.src}
          poster={homeHero.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={homeHero.alt}
        />
        <div className="home-hero__veil" aria-hidden="true" />
        <div className="home-hero__content">
          <h1 className="home-hero__brand">{brand.name}</h1>
          <p className="home-hero__line">{hero.line}</p>
        </div>
      </section>

      {story.map((chapter, index) => (
        <section
          key={chapter.id}
          id={chapter.id}
          className={`home-chapter${index % 2 === 1 ? " home-chapter--flip" : ""}`}
        >
          <div className="home-chapter__copy">
            <p className="home-chapter__eyebrow">{chapter.eyebrow}</p>
            <h2 className="home-chapter__title">{chapter.title}</h2>
            {chapter.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 36)} className="home-chapter__text">
                {paragraph}
              </p>
            ))}
          </div>
          <figure
            className={`home-chapter__media${
              chapter.media.width >= chapter.media.height
                ? " home-chapter__media--wide"
                : " home-chapter__media--tall"
            }`}
          >
            {chapter.media.type === "video" ? (
              <video
                className="home-chapter__video"
                src={chapter.media.src}
                poster={chapter.media.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={chapter.media.alt}
              />
            ) : (
              <Image
                src={chapter.media.src}
                alt={chapter.media.alt}
                width={chapter.media.width}
                height={chapter.media.height}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="home-chapter__image"
                priority={index === 0}
              />
            )}
          </figure>
        </section>
      ))}

      <section className="home-close">
        <p className="home-close__text">{close.text}</p>
        <Link className="home-text-link" href={close.href}>
          {close.label}
        </Link>
      </section>

      <section className="home-collection" id="collection">
        <header className="home-section-header">
          <h2 className="home-section-header__title">{collection.title}</h2>
          <p className="home-section-header__intro">{collection.intro}</p>
        </header>
        <ul className="home-collection__grid">
          {previewLooks.map((product, index) => (
            <li key={product.id}>
              <Link href={product.href} className="home-look">
                <div className="home-look__media">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={1200}
                    sizes="(max-width: 767px) 50vw, 33vw"
                    priority={false}
                    className="home-look__image"
                  />
                </div>
                <p className="home-look__name">{product.name}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="home-collection__links">
          <Link className="home-text-link" href={collection.womenHref}>
            {collection.womenLabel}
          </Link>
          <Link className="home-text-link" href={collection.menHref}>
            {collection.menLabel}
          </Link>
        </div>
      </section>

      <section className="home-contact-cta">
        <h2 className="home-contact-cta__title">{contactCta.title}</h2>
        <p className="home-contact-cta__text">{contactCta.text}</p>
        <Link className="home-btn home-btn--solid" href={contactCta.href}>
          {contactCta.label}
        </Link>
      </section>
    </main>
  );
}
