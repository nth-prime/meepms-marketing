import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2 id="contact-heading" className={styles.heading}>
            Tell us what your environment looks like.
          </h2>
          <p className={styles.body}>
            Most engagements with Meep start with a structured review of your
            systems, vendors, workflows, and capacity gaps. If a review feels
            premature, send a note &mdash; we&rsquo;ll point you toward the right
            starting place.
          </p>
          <ul className={styles.facts}>
            <li>
              <span className={styles.factLabel}>Direct email</span>
              <a href="mailto:hello@meepms.com" className={styles.factLink}>
                hello@meepms.com
              </a>
            </li>
            <li>
              <span className={styles.factLabel}>Reply window</span>
              <span className={styles.factValue}>One business day.</span>
            </li>
            <li>
              <span className={styles.factLabel}>Based in</span>
              <span className={styles.factValue}>
                Kansas City, Missouri.
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.formWrap}>
          <ContactForm
            heading="Send a note"
            placeholder="Briefly describe what's on your plate and how Meep might fit."
          />
        </div>
      </div>
    </section>
  );
}
