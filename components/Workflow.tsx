import styles from "./Workflow.module.css";

const NODES: { label: string; cx: number; cy: number }[] = [
  { label: "Infrastructure", cx: 110, cy: 80 },
  { label: "ServiceNow", cx: 320, cy: 50 },
  { label: "Databases & Reporting", cx: 530, cy: 80 },
  { label: "Operational Platforms", cx: 530, cy: 280 },
  { label: "Vendor Coordination", cx: 320, cy: 310 },
  { label: "Project Capacity", cx: 110, cy: 280 },
];

const CENTER_X = 320;
const CENTER_Y = 180;

export default function Workflow() {
  return (
    <section id="workflow" className={styles.section} aria-labelledby="workflow-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>One operational layer</p>
          <h2 id="workflow-heading" className={styles.heading}>
            Across the systems your business runs on.
          </h2>
        </div>

        {/* Desktop / tablet diagram */}
        <div className={styles.diagramWrap}>
          <svg
            className={styles.diagram}
            viewBox="0 0 640 360"
            role="img"
            aria-label="Diagram: Meep at the center, connecting to Infrastructure, ServiceNow, Databases and Reporting, Operational Platforms, Vendor Coordination, and Project Capacity"
            preserveAspectRatio="xMidYMid meet"
          >
            {NODES.map((n, idx) => {
              return (
                <g key={n.label}>
                  <line
                    x1={CENTER_X}
                    y1={CENTER_Y}
                    x2={n.cx}
                    y2={n.cy}
                    stroke="var(--color-line-strong)"
                    strokeWidth="1.5"
                  />
                  <circle
                    className={`${styles.pulse} workflowPulse`}
                    style={{
                      animationDelay: `${idx * 0.5}s`,
                      ["--from-x" as string]: `${CENTER_X}px`,
                      ["--from-y" as string]: `${CENTER_Y}px`,
                      ["--to-x" as string]: `${n.cx}px`,
                      ["--to-y" as string]: `${n.cy}px`,
                    }}
                    r="4"
                    fill="var(--color-orange)"
                    cx="0"
                    cy="0"
                  />
                  <g
                    className={styles.satellite}
                    transform={`translate(${n.cx}, ${n.cy})`}
                  >
                    <rect
                      x="-78"
                      y="-22"
                      width="156"
                      height="44"
                      rx="10"
                      fill="var(--color-white)"
                      stroke="var(--color-line)"
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="6"
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight="600"
                      fill="var(--color-ink)"
                      fontFamily="var(--font-sans)"
                    >
                      {n.label}
                    </text>
                  </g>
                </g>
              );
            })}

            {/* center pill */}
            <g transform={`translate(${CENTER_X}, ${CENTER_Y})`}>
              <rect
                x="-50"
                y="-22"
                width="100"
                height="44"
                rx="22"
                fill="var(--color-orange)"
              />
              <text
                x="0"
                y="6"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fill="var(--color-white)"
                fontFamily="var(--font-sans)"
              >
                MEEP
              </text>
            </g>
          </svg>
        </div>

        {/* Mobile fallback */}
        <div className={styles.mobileWrap}>
          <span className={styles.mobileCenter}>MEEP</span>
          <ul className={styles.mobileList}>
            {NODES.map((n) => (
              <li key={n.label} className={styles.mobileLabel}>
                {n.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
