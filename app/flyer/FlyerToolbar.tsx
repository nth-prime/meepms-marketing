"use client";

import styles from "./flyer.module.css";

export default function FlyerToolbar() {
  return (
    <div className={styles.toolbar}>
      <div>
        <strong>One-page flyer</strong>
        <span className={styles.toolbarHint}>
          {" "}
          — Print → Save as PDF (US Letter, no margins)
        </span>
      </div>
      <button
        type="button"
        className={styles.printButton}
        onClick={() => {
          if (typeof window !== "undefined") window.print();
        }}
      >
        Print / Save PDF
      </button>
    </div>
  );
}
