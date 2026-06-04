import styles from "./WhyItWorks.module.css";

const ROWS: { reactive: string; structured: string }[] = [
  {
    reactive: "Tickets escalate from system to system without a single owner.",
    structured:
      "One accountable technical partner across the operational environment.",
  },
  {
    reactive: "Recurring issues; root cause is rarely addressed.",
    structured:
      "Architecture-level ownership reduces recurring issues over time.",
  },
  {
    reactive: "Vendor coordination consumes internal staff time.",
    structured:
      "Vendor escalation handled directly; internal team focuses on operations.",
  },
  {
    reactive:
      "Reporting and integrations grow brittle as platforms accumulate.",
    structured:
      "Reporting and integrations managed as one connected system.",
  },
  {
    reactive: "Project work waits because operations consume the team.",
    structured:
      "Project capacity available alongside ongoing managed services.",
  },
  {
    reactive: "ServiceNow stays at out-of-box defaults.",
    structured: "ServiceNow shaped to how the business actually runs.",
  },
];

export default function WhyItWorks() {
  return (
    <section id="why" className={styles.section} aria-labelledby="why-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>What changes</p>
          <h2 id="why-heading" className={styles.heading}>
            Reactive support vs. structured management.
          </h2>
        </div>

        <div className={styles.compare} role="table" aria-labelledby="why-heading">
          <div className={styles.headerRow} role="row">
            <div className={styles.headLeft} role="columnheader">
              Reactive support
            </div>
            <div className={styles.headRight} role="columnheader">
              Structured management with Meep
            </div>
          </div>
          {ROWS.map((r, idx) => (
            <div className={styles.row} role="row" key={idx}>
              <div className={styles.cellLeft} role="cell">
                <span className={styles.tag}>Reactive</span>
                <span className={styles.cellText}>{r.reactive}</span>
              </div>
              <div className={styles.cellRight} role="cell">
                <span className={styles.tag}>Structured</span>
                <span className={styles.cellText}>{r.structured}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
