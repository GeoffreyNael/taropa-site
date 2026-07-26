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
      <nav className="site-nav__desktop" aria-label="Main navigation">
        <ul className="site-nav__desktop-list">
          {nav.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    isActive
                      ? "site-nav__desktop-link site-nav__desktop-link--active"
                      : "site-nav__desktop-link"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        className="site-nav__toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="site-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
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
          open
            ? "site-nav__backdrop site-nav__backdrop--visible"
            : "site-nav__backdrop"
        }
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="site-nav-panel"
        className={
          open ? "site-nav__panel site-nav__panel--open" : "site-nav__panel"
        }
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <p className="site-nav__panel-eyebrow">Taropa</p>
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
        <p className="site-nav__panel-note">Made by hand, in India</p>
      </nav>
    </div>
  );
}
