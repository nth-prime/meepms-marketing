import Image from "next/image";
import FlyerToolbar from "./FlyerToolbar";
import styles from "./flyer.module.css";

export { metadata } from "./metadata";

const MAIL_HREF =
  "mailto:hello@meepms.com?subject=Start%20a%20systems%20review";

export default function FlyerPage() {
  return (
    <div className={styles.viewport}>
      <FlyerToolbar />


      <article className={styles.page} aria-label="MeepMS one-page flyer">
        <header className={styles.head}>
          <div className={styles.brand}>
            <Image
              src="/meep-logo.png"
              alt="Meep Managed Services"
              width={48}
              height={48}
              className={styles.logo}
              priority
            />
            <div>
              <div className={styles.brandName}>Meep Managed Services</div>
              <div className={styles.brandTag}>
                Strategic managed services for the systems your business runs on
              </div>
            </div>
          </div>
          <div className={styles.headRight}>
            <span className={styles.eyebrow}>Operational IT Partnership</span>
            <a className={styles.contact} href="mailto:hello@meepms.com">
              hello@meepms.com
            </a>
          </div>
        </header>

        <section className={styles.hero}>
          <h1 className={styles.heroHeadline}>
            One accountable technical partner for ServiceNow, fractional
            capacity, and the infrastructure underneath.
          </h1>
          <p className={styles.heroBody}>
            The challenge isn&apos;t effort — it&apos;s capacity. Critical
            platforms get technically supported but rarely operationally
            managed. We take architecture-level ownership across the systems,
            integrations, and vendor relationships your operation depends on.
          </p>
        </section>

        <section className={styles.offers} aria-label="Featured offerings">
          <article className={styles.offer}>
            <div className={styles.offerHead}>
              <IconWorkflow />
              <span className={styles.offerLabel}>Service 01</span>
            </div>
            <h2 className={styles.offerTitle}>ServiceNow Implementations</h2>
            <p className={styles.offerLead}>
              ServiceNow shaped to how your business actually operates —
              discovery first, then configuration, integrations, and reporting
              that match the operations underneath.
            </p>
            <ul className={styles.bullets}>
              <li>Discovery and workflow design grounded in current operations</li>
              <li>ITSM and service-catalog implementation</li>
              <li>Configuration, integrations, reporting, and dashboards</li>
              <li>Adoption support and post-launch improvement</li>
            </ul>
          </article>

          <article className={`${styles.offer} ${styles.offerFeature}`}>
            <div className={styles.offerHead}>
              <IconReserved />
              <span className={styles.offerLabel}>Service 02</span>
            </div>
            <h2 className={styles.offerTitle}>Fractional FTE</h2>
            <p className={styles.offerLead}>
              Reserved technical capacity that operates as part of your team —
              for businesses that have outgrown break-fix support but
              can&apos;t justify a full senior IT FTE.
            </p>
            <ul className={styles.bullets}>
              <li>A defined number of hours per week dedicated to your environment</li>
              <li>A primary owner who builds context across platforms and vendors</li>
              <li>Day-to-day administration plus project capacity in one engagement</li>
              <li>Direct vendor escalation; documentation that lands in your environment</li>
            </ul>
          </article>

          <article className={styles.offer}>
            <div className={styles.offerHead}>
              <IconStack />
              <span className={styles.offerLabel}>Service 03</span>
            </div>
            <h2 className={styles.offerTitle}>Managed Infrastructure</h2>
            <p className={styles.offerLead}>
              Architecture-level ownership of business-critical systems. Backed
              by runbooks and structured oversight rather than ticket-by-ticket
              reaction.
            </p>
            <ul className={styles.bullets}>
              <li>System administration across servers, environments, and access</li>
              <li>Monitoring and proactive issue prevention</li>
              <li>Incident response with documented runbooks</li>
              <li>Backup oversight, recovery readiness, and architectural tuning</li>
            </ul>
          </article>
        </section>

        <section className={styles.proof} aria-label="What this looks like in practice">
          <div className={styles.proofItem}>
            <div className={styles.proofLabel}>Platforms in scope</div>
            <div className={styles.proofValue}>
              TMW Suite · Fuel Dispatch · DocuWare · Samsara · ServiceNow ·
              SQL Server · SSRS · EDI
            </div>
          </div>
          <div className={styles.proofItem}>
            <div className={styles.proofLabel}>Layers covered</div>
            <div className={styles.proofValue}>
              Architecture · Administration · Integrations · Reporting · Vendor
              Coordination
            </div>
          </div>
          <div className={styles.proofItem}>
            <div className={styles.proofLabel}>Engagement shape</div>
            <div className={styles.proofValue}>
              Reserved capacity + project work · One accountable owner ·
              Around-the-clock availability coverage when contracted
            </div>
          </div>
        </section>

        <section className={styles.compare} aria-label="Reactive vs structured">
          <div className={styles.compareCol}>
            <div className={styles.compareHead}>Reactive support</div>
            <ul className={styles.compareList}>
              <li>Tickets escalate from system to system without a single owner</li>
              <li>Recurring issues; root cause is rarely addressed</li>
              <li>Vendor coordination consumes internal staff time</li>
              <li>Project work waits because operations consume the team</li>
            </ul>
          </div>
          <div className={`${styles.compareCol} ${styles.compareColMeep}`}>
            <div className={styles.compareHead}>Structured management with Meep</div>
            <ul className={styles.compareList}>
              <li>One accountable technical partner across the operational environment</li>
              <li>Architecture-level ownership reduces recurring issues over time</li>
              <li>Vendor escalation handled directly; internal team focuses on operations</li>
              <li>Project capacity available alongside ongoing managed services</li>
            </ul>
          </div>
        </section>

        <footer className={styles.cta}>
          <div className={styles.ctaCopy}>
            <div className={styles.ctaEyebrow}>Start with a structured review</div>
            <div className={styles.ctaHeadline}>
              A bounded review of your systems, vendors, and capacity gaps —
              with a sequenced plan at the end.
            </div>
          </div>
          <div className={styles.ctaActions}>
            <a className={styles.ctaButton} href={MAIL_HREF}>
              Email hello@meepms.com →
            </a>
            <div className={styles.ctaTrust}>
              For teams that rely on critical platforms, infrastructure,
              ServiceNow workflows, reporting, and integrations.
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}

function IconWorkflow() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="9" />
      <path d="M20 11 L23 8 M20 11 L17 8" />
      <circle cx="11" cy="20" r="1.4" />
      <circle cx="29" cy="20" r="1.4" />
      <circle cx="20" cy="29" r="1.4" />
      <circle cx="20" cy="11" r="1.4" />
    </svg>
  );
}

function IconReserved() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="11" />
      <path d="M20 13 V20 L25 23" />
    </svg>
  );
}

function IconStack() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="8" y="10" width="24" height="7" rx="1.5" />
      <rect x="8" y="22" width="24" height="7" rx="1.5" />
      <circle cx="12" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="15" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="18" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="12" cy="25.5" r="0.8" fill="currentColor" />
      <circle cx="15" cy="25.5" r="0.8" fill="currentColor" />
      <circle cx="18" cy="25.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
