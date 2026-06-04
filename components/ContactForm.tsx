"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  heading,
  intent,
  placeholder,
}: {
  heading?: string;
  intent?: string;
  placeholder?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const payload = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (res.ok && payload.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          payload.error ||
            "Could not send the message. Please try again or email hello@meepms.com."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please try again or email hello@meepms.com."
      );
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <p className={styles.successHeading}>Thanks — message received.</p>
        <p className={styles.successBody}>
          We reply within one business day. If you don&rsquo;t hear from us, write directly
          to <a href="mailto:hello@meepms.com" className={styles.inlineLink}>hello@meepms.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {heading ? <h3 className={styles.heading}>{heading}</h3> : null}
      {intent ? <input type="hidden" name="intent" value={intent} /> : null}

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={styles.input}
            disabled={status === "submitting"}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={styles.input}
            disabled={status === "submitting"}
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>
            Company <span className={styles.optional}>(optional)</span>
          </span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            className={styles.input}
            disabled={status === "submitting"}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>
            Phone <span className={styles.optional}>(optional)</span>
          </span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className={styles.input}
            disabled={status === "submitting"}
          />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>What can we help with?</span>
        <textarea
          name="message"
          required
          rows={5}
          className={styles.textarea}
          disabled={status === "submitting"}
          placeholder={
            placeholder ||
            "Tell us about the systems, vendors, or projects you'd like a structured review of."
          }
        />
      </label>

      {/* Honeypot — visually hidden, real users won't fill */}
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          className={styles.submit}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className={styles.fineprint}>
          Or email <a href="mailto:hello@meepms.com" className={styles.inlineLink}>hello@meepms.com</a> directly.
        </p>
      </div>

      {status === "error" ? (
        <p className={styles.errorMsg} role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
