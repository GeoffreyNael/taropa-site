import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { brand } from "@/lib/brand";

export function SiteHeader() {
  return (
    <header className="site-header">
      <SiteNav />
      <Link className="site-logo" href="/" aria-label={brand.name}>
        <Image
          src="/logo-taropa.png"
          alt={brand.name}
          width={470}
          height={134}
          className="site-logo__image"
          priority
        />
      </Link>
      <div className="site-header__spacer" aria-hidden="true" />
    </header>
  );
}
