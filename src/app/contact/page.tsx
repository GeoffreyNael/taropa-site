import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { brand, pages } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${pages.contact.title} — ${brand.name}`,
  description: pages.contact.intro,
};

export default function ContactPage() {
  return (
    <main className="content-page">
      <PageHeader title={pages.contact.title} intro={pages.contact.intro} />
      <section className="content-page__body">
        <div className="contact-grid">
          <div className="contact-grid__item">
            <p className="contact-grid__label">Email</p>
            <a className="contact-grid__link" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
          </div>
          <div className="contact-grid__item">
            <p className="contact-grid__label">Instagram</p>
            <a
              className="contact-grid__link"
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              @taropa
            </a>
          </div>
          <div className="contact-grid__item contact-grid__item--full">
            <p className="contact-grid__label">Studio</p>
            <p className="contact-grid__text">{pages.contact.studio}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
