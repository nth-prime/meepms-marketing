import styles from "./Services.module.css";
import IconServiceNow from "./icons/IconServiceNow";
import IconPlatforms from "./icons/IconPlatforms";
import IconProject from "./icons/IconProject";
import IconInfra from "./icons/IconInfra";

type Card = {
  Icon: (props: { size?: number }) => JSX.Element;
  heading: string;
  body: string;
  href: string;
  cta: string;
};

const CARDS: Card[] = [
  {
    Icon: IconServiceNow,
    heading: "ServiceNow",
    body:
      "Implementation and ongoing support for ServiceNow ITSM and adjacent modules &mdash; built around how the business actually operates.",
    href: "/servicenow",
    cta: "Explore ServiceNow",
  },
  {
    Icon: IconPlatforms,
    heading: "Transportation Logistics",
    body:
      "TMW Suite and Fuel Dispatch consulting and support &mdash; access control, integrations, reporting, and direct vendor escalation.",
    href: "/transportation-logistics",
    cta: "Explore TMW work",
  },
  {
    Icon: IconProject,
    heading: "Fractional FTE",
    body:
      "Reserved technical capacity that operates as part of your team &mdash; engineering, administration, and project work without the headcount overhead.",
    href: "/fractional-fte",
    cta: "Explore fractional FTE",
  },
  {
    Icon: IconInfra,
    heading: "Managed Infrastructure",
    body:
      "Architecture-level ownership of business-critical systems &mdash; monitoring, administration, runbooks, backups, and incident response.",
    href: "/managed-infrastructure",
    cta: "Explore managed infrastructure",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>What Meep does</p>
          <h2 id="services-heading" className={styles.heading}>
            One technical partner across the systems your business runs on.
          </h2>
        </div>
        <ul className={styles.grid}>
          {CARDS.map((c) => (
            <li key={c.href} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <c.Icon size={40} />
              </span>
              <h3 className={styles.cardHeading}>{c.heading}</h3>
              <p
                className={styles.cardBody}
                dangerouslySetInnerHTML={{ __html: c.body }}
              />
              <a href={c.href} className={styles.cardLink}>
                {c.cta} <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
