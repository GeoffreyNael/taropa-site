import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { brand, pages } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${pages.about.title} — ${brand.name}`,
  description:
    pages.about.intro ||
    "The story of Taropa — hand-embroidered ready-to-wear.",
};

export default function AboutPage() {
  const about = pages.about;

  return (
    <main className="content-page about-page">
      <PageHeader title={about.title} intro={about.intro || undefined} />
      <section className="about-page__body">
        {about.sections.map((section, index) => (
          <article
            key={section.id}
            className={`about-row${index % 2 === 1 ? " about-row--reverse" : ""}`}
          >
            <figure className="about-row__media">
              <Image
                src={section.image}
                alt={section.imageAlt}
                width={section.width}
                height={section.height}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="about-row__image"
                priority={index === 0}
              />
            </figure>
            <div className="about-row__copy">
              <h2 className="about-row__heading">{section.heading}</h2>
              {section.body
                .split("\n\n")
                .filter((paragraph) => paragraph.trim())
                .map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="about-row__paragraph">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
