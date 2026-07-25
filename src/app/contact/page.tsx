import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { brand, pages } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${pages.contact.title} — ${brand.name}`,
  description: pages.contact.intro,
};

export default function ContactPage() {
  return (
    <main className="content-page contact-page">
      <section className="contact-page__body">
        <ContactForm
          title={pages.contact.title}
          intro={pages.contact.intro}
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
