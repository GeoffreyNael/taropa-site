import Link from "next/link";
import { brand } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">{brand.name}</p>
        <p className="site-footer__tagline">{brand.tagline}</p>
        <p className="site-footer__manifesto">{brand.manifesto}</p>
        <div className="site-footer__links">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__link"
          >
            {brand.instagramHandle}
          </a>
          <Link href="/contact" className="site-footer__link">
            Contact
          </Link>
        </div>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}
