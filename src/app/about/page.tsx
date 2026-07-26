import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutClosing, brand, pages } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${pages.about.title} — ${brand.name}`,
  description:
    pages.about.intro ||
    "The story of Taropa — hand-embroidered ready-to-wear.",
};

export default function AboutPage() {
  const about = pages.about;

  return (
    <main className="about-page">
      <header className="about-hero">
        <p className="about-hero__eyebrow">{brand.name}</p>
        <h1 className="about-hero__title">{about.title}</h1>
        <p className="about-hero__intro">{about.intro}</p>
      </header>

      <div className="about-page__body">
        {about.sections.map((section, index) => {
          const { media } = section;
          const isWordmark = media.variant === "wordmark";
          const isWide = !isWordmark && media.width >= media.height;

          return (
            <article
              key={section.id}
              className={`about-row${index % 2 === 1 ? " about-row--reverse" : ""}`}
            >
              <figure
                className={`about-row__media${
                  isWordmark
                    ? " about-row__media--wordmark"
                    : isWide
                      ? " about-row__media--wide"
                      : " about-row__media--tall"
                }`}
              >
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={isWordmark ? 470 : media.width}
                  height={isWordmark ? 134 : media.height}
                  sizes={
                    isWordmark
                      ? "(max-width: 767px) 70vw, 280px"
                      : "(max-width: 767px) 100vw, 48vw"
                  }
                  className="about-row__image"
                  priority={index === 0}
                />
              </figure>
              <div className="about-row__copy">
                <p className="about-row__index">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="about-row__heading">{section.heading}</h2>
                {section.body
                  .split("\n\n")
                  .filter((paragraph) => paragraph.trim())
                  .map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="about-row__paragraph"
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            </article>
          );
        })}
      </div>

      <section className="about-closing">
        <blockquote className="about-closing__quote">
          {aboutClosing.quote}
        </blockquote>
        <Link className="about-closing__link" href={aboutClosing.href}>
          {aboutClosing.label}
        </Link>
      </section>
    </main>
  );
}
