import type { ReactNode } from "react";
import styles from "./PageSection.module.css";

export default function PageSection({
  variant = "white",
  children,
}: {
  variant?: "white" | "paper" | "tint";
  children: ReactNode;
}) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
