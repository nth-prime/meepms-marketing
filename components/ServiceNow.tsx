import styles from "./ServiceNow.module.css";

const STEPS = ["Discovery", "Implementation", "Configuration", "Adoption"];

const CARDS = [
  {
    heading: "Discovery and workflow design",
    body:
      "Current-state mapping of operations, ownership, and the workflows that need to move into ServiceNow.",
  },
  {
    heading: "ITSM and service-catalog implementation",
    body:
      "Incident, request, problem, change, and a service catalog grounded in the business&rsquo;s actual service offerings.",
  },
  {
    heading: "Configuration, integrations, and reporting",
    body:
      "Fields, forms, business rules, integrations to operational platforms, and dashboards that decision-makers can use.",
  },
  {
    heading: "Adoption support and post-launch improvement",
    body:
      "The work after go-live that determines whether the platform actually changes operations.",
  },
];

export default function ServiceNow() {
  return (
    <section
      id="servicenow"
      className={styles.section}
      aria-labelledby="servicenow-heading"
    >
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>ServiceNow implementations</p>
          <h2 id="servicenow-heading" className={styles.heading}>
            ServiceNow, shaped to how your business actually operates.
          </h2>
          <p className={styles.lead}>
            ServiceNow succeeds when the workflows, data, roles, integrations,
            and reporting are designed around how the business actually
            operates. We approach ServiceNow as an implementation and
            modernization engagement &mdash; discovery first, then configuration,
            integrations, and reporting that match the operations underneath.
          </p>
        </div>

        <ol className={styles.flow} aria-label="ServiceNow engagement flow">
          {STEPS.map((s, i) => (
            <li key={s} className={styles.flowStep}>
              <span className={styles.flowBox}>{s}</span>
              {i < STEPS.length - 1 ? (
                <span className={styles.flowArrow} aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>

        <ul className={styles.cards}>
          {CARDS.map((c, idx) => (
            <li key={idx} className={styles.card}>
              <h3 className={styles.cardHeading}>{c.heading}</h3>
              <p
                className={styles.cardBody}
                dangerouslySetInnerHTML={{ __html: c.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
