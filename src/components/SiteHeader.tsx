import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { brand } from "@/lib/brand";

export function SiteHeader() {
  return (
    <header className="site-header">
      <SiteNav />
      <Link className="site-logo" href="/">
        {brand.name}
      </Link>
      <div className="site-header__spacer" aria-hidden="true" />
    </header>
  );
}
