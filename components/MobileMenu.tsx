"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./MobileMenu.module.css";

type NavItem = { label: string; href: string };
type NavGroup = { label: string; items: NavItem[] };

const NAV: NavGroup[] = [
  {
    label: "Services",
    items: [
      { label: "ServiceNow", href: "/servicenow" },
      { label: "Transportation Logistics", href: "/transportation-logistics" },
      { label: "Fractional FTE", href: "/fractional-fte" },
      { label: "Managed Infrastructure", href: "/managed-infrastructure" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const CTA_HREF = "/systems-review";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`${styles.bar} ${open ? styles.barOpenTop : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barOpenMid : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barOpenBot : ""}`} />
      </button>

      {open ? (
        <div
          id="mobile-menu-panel"
          className={styles.panel}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav className={styles.nav}>
            {NAV.map((group) => (
              <div key={group.label} className={styles.group}>
                <p className={styles.groupLabel}>{group.label}</p>
                <ul className={styles.list}>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={styles.item}
                        aria-current={
                          pathname === item.href ? "page" : undefined
                        }
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <a href={CTA_HREF} className={styles.cta}>
            Start a systems review
          </a>
        </div>
      ) : null}
    </>
  );
}
