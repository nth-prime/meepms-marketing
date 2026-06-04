import Image from "next/image";
import styles from "./Footer.module.css";

const SERVICES = [
  { label: "ServiceNow", href: "/servicenow" },
  { label: "Transportation Logistics", href: "/transportation-logistics" },
  { label: "Fractional FTE", href: "/fractional-fte" },
  { label: "Managed Infrastructure", href: "/managed-infrastructure" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Start a systems review", href: "/systems-review" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image
            src="/meep-logo.png"
            alt="Meep Managed Services"
            width={56}
            height={56}
            className={styles.logo}
          />
          <p className={styles.copy}>&copy; 2026 Meep Managed Services</p>
          <p className={styles.address}>Kansas City, Missouri</p>
        </div>
        <div className={styles.column}>
          <p className={styles.colLabel}>Services</p>
          <ul className={styles.list}>
            {SERVICES.map((s) => (
              <li key={s.href}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.colLabel}>Company</p>
          <ul className={styles.list}>
            {COMPANY.map((c) => (
              <li key={c.href}>
                <a href={c.href}>{c.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.colLabel}>Contact</p>
          <a href="mailto:hello@meepms.com" className={styles.email}>
            hello@meepms.com
          </a>
          <p className={styles.trust}>
            For teams that rely on critical platforms, infrastructure,
            ServiceNow workflows, reporting, and integrations.
          </p>
        </div>
      </div>
    </footer>
  );
}
