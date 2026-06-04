import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageSection from "@/components/PageSection";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — Meep Managed Services",
  description:
    "Send a note to Meep Managed Services. Reply within one business day. Based in Kansas City, Missouri.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Tell us what your environment looks like."
      intro="Send a note and we'll reply within one business day. If you already know you want a structured systems review, the systems-review page is the faster path."
      crumbs={[{ label: "Contact" }]}
    >
      <PageSection variant="white">
        <div className={styles.layout}>
          <aside className={styles.aside}>
            <h2 className={styles.asideHeading}>Direct lines</h2>
            <dl className={styles.facts}>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:hello@meepms.com">hello@meepms.com</a>
                </dd>
              </div>
              <div>
                <dt>Reply window</dt>
                <dd>One business day.</dd>
              </div>
              <div>
                <dt>Office</dt>
                <dd>
                  12th &amp; Wyandotte
                  <br />
                  Kansas City, Missouri
                </dd>
              </div>
              <div>
                <dt>Looking for a systems review?</dt>
                <dd>
                  <a href="/systems-review">Start a systems review →</a>
                </dd>
              </div>
            </dl>
          </aside>
          <div className={styles.formWrap}>
            <ContactForm
              heading="Send a note"
              placeholder="Briefly describe what's on your plate and how Meep might fit."
            />
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
