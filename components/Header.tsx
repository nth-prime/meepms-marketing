import Image from "next/image";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";

const CTA_HREF = "/systems-review";

const SERVICES = [
  { label: "ServiceNow", href: "/servicenow", note: "Implementations and support" },
  {
    label: "Transportation Logistics",
    href: "/transportation-logistics",
    note: "TMW Suite consulting and support",
  },
  {
    label: "Fractional FTE",
    href: "/fractional-fte",
    note: "Reserved technical capacity for your team",
  },
  {
    label: "Managed Infrastructure",
    href: "/managed-infrastructure",
    note: "Architecture-level ownership of business-critical systems",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          href="/"
          className={styles.brand}
          aria-label="Meep Managed Services — home"
        >
          <Image
            src="/meep-logo.png"
            alt=""
            width={64}
            height={64}
            priority
            className={styles.logo}
          />
        </a>
        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
              <button
                type="button"
                className={styles.dropdownTrigger}
                aria-haspopup="true"
              >
                Services
                <span className={styles.caret} aria-hidden="true" />
              </button>
              <ul className={styles.dropdown} role="menu">
                {SERVICES.map((s) => (
                  <li key={s.href} role="none">
                    <a href={s.href} className={styles.dropdownItem} role="menuitem">
                      <span className={styles.dropdownLabel}>{s.label}</span>
                      <span className={styles.dropdownNote}>{s.note}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={styles.navItem}>
              <a href="/about">About</a>
            </li>
            <li className={styles.navItem}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a href={CTA_HREF} className={styles.cta}>
          <span className={styles.ctaFull}>Start a systems review</span>
          <span className={styles.ctaCompact}>Start a review</span>
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
