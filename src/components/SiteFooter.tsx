import { brand } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">{brand.name}</p>
        <p className="site-footer__tagline">{brand.tagline}</p>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}
