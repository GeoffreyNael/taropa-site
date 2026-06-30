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
  const filledSections = about.sections.filter(
    (section) => section.heading.trim() || section.body.trim(),
  );
  const hasCopy = about.intro.trim() || filledSections.length > 0;

  return (
    <main className="content-page">
      <PageHeader title={about.title} intro={about.intro || undefined} />
      <section className="content-page__body">
        <div className="content-page__layout">
          <figure className="content-page__media">
            <Image
              src={about.image}
              alt={about.imageAlt || about.title}
              width={1200}
              height={1500}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="content-page__image"
              priority
            />
          </figure>
          <div className="content-page__copy">
            {hasCopy ? (
              filledSections.map((section) => (
                <section key={section.id} className="content-page__section">
                  {section.heading.trim() ? (
                    <h2 className="content-page__section-heading">
                      {section.heading}
                    </h2>
                  ) : null}
                  {section.body.trim()
                    ? section.body
                        .split("\n\n")
                        .filter((paragraph) => paragraph.trim())
                        .map((paragraph) => (
                          <p
                            key={paragraph.slice(0, 40)}
                            className="content-page__paragraph"
                          >
                            {paragraph.trim()}
                          </p>
                        ))
                    : null}
                </section>
              ))
            ) : (
              <p className="page-empty">
                Texte en préparation — la fondatrice complète le questionnaire.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
