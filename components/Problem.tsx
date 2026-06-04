import styles from "./Problem.module.css";

const STRAINS = [
  "Critical platforms supported by one or two internal staff stretched across everything.",
  "Recurring issues whose root cause is unclear ownership or unmanaged vendor relationships.",
  "Reporting and data workflows that grow brittle as integrations accumulate.",
  "Implementation work that stalls because day-to-day operations consume the team.",
  "Vendor coordination overhead that grows faster than operational maturity.",
];

export default function Problem() {
  return (
    <section id="problem" className={styles.section} aria-labelledby="problem-heading">
      <div className={styles.inner}>
        <div className={styles.narrative}>
          <p className={styles.eyebrow}>Why the pattern repeats</p>
          <h2 id="problem-heading" className={styles.heading}>
            The challenge isn&rsquo;t effort. It&rsquo;s capacity.
          </h2>
          <p className={styles.body}>
            Critical operational systems usually sit on top of stretched internal
            teams and a rotating set of vendor relationships. The result is
            recurring issues whose root cause is rarely effort or skill &mdash; it&rsquo;s
            that no single person can hold deep expertise across every platform,
            every integration, and every escalation path simultaneously. Systems
            get technically supported but not operationally managed.
          </p>
        </div>
        <aside className={styles.diagnostic} aria-label="Where systems strain">
          <h3 className={styles.diagHeading}>Where systems strain</h3>
          <ul className={styles.diagList}>
            {STRAINS.map((item, idx) => (
              <li key={idx} className={styles.diagItem}>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
