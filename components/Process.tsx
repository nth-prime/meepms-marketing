import styles from "./Process.module.css";

const CTA_HREF = "mailto:hello@meepms.com?subject=Start%20a%20systems%20review";

const STEPS = [
  {
    title: "Structured environment review",
    body: "A bounded review of operational systems, integrations, and vendor relationships.",
  },
  {
    title: "Ownership and vendor map",
    body: "Clear picture of who owns what, where escalation paths break, and where capacity gaps live.",
  },
  {
    title: "Stabilization and implementation priorities",
    body: "A sequenced plan with options.",
  },
  {
    title: "Reserved capacity and managed services",
    body: "Ongoing engagement with project capacity available alongside.",
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.section} aria-labelledby="process-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>How an engagement starts</p>
          <h2 id="process-heading" className={styles.heading}>
            From a systems review to managed capacity.
          </h2>
        </div>

        <ol className={styles.steps}>
          {STEPS.map((s, idx) => (
            <li key={idx} className={styles.step}>
              <span className={styles.badge} aria-hidden="true">
                {idx + 1}
              </span>
              <div className={styles.stepBody}>
                <h3 className={styles.stepHeading}>{s.title}</h3>
                <p className={styles.stepText}>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.ctaRow}>
          <a href={CTA_HREF} className={styles.cta}>
            Start a systems review
          </a>
        </div>
      </div>
    </section>
  );
}
