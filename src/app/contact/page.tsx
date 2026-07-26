import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { brand, pages } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${pages.contact.title} — ${brand.name}`,
  description: pages.contact.intro,
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-hero">
        <p className="contact-hero__brand">{brand.name}</p>
        <h1 className="contact-hero__title">{pages.contact.title}</h1>
        <p className="contact-hero__intro">{pages.contact.intro}</p>
      </header>

      <section className="contact-page__body">
        <ContactForm
          email={brand.email}
          phone={brand.phone}
          instagram={brand.instagram}
          instagramHandle={brand.instagramHandle}
          studio={pages.contact.studio}
        />
      </section>
    </main>
  );
}
