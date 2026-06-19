"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/brand";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="site-nav">
      <button
        type="button"
        className="site-nav__toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="site-nav-panel"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <span
          className={
            open
              ? "site-nav__toggle-icon site-nav__toggle-icon--open"
              : "site-nav__toggle-icon"
          }
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </span>
      </button>

      <div
        className={
          open ? "site-nav__backdrop site-nav__backdrop--visible" : "site-nav__backdrop"
        }
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="site-nav-panel"
        className={open ? "site-nav__panel site-nav__panel--open" : "site-nav__panel"}
        aria-label="Navigation principale"
        aria-hidden={!open}
      >
        <ul className="site-nav__list">
          {nav.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    isActive
                      ? "site-nav__link site-nav__link--active"
                      : "site-nav__link"
                  }
                  tabIndex={open ? 0 : -1}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
