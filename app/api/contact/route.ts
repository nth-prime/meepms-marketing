import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO_ADDRESS = "hello@meepms.com";
const FROM_ADDRESS = process.env.CONTACT_FROM_ADDRESS || "Meep Website <noreply@meepms.com>";

function clean(value: FormDataEntryValue | null, max = 5000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form payload." }, { status: 400 });
  }

  // Honeypot — silently succeed if filled (bot)
  if (clean(form.get("website"), 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(form.get("name"), 200);
  const email = clean(form.get("email"), 254);
  const company = clean(form.get("company"), 200);
  const phone = clean(form.get("phone"), 50);
  const message = clean(form.get("message"));
  const intent = clean(form.get("intent"), 100);

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Mail service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const subjectIntent = intent || "Inquiry";
  const companySuffix = company ? ` — ${company}` : "";
  const lines = [
    `Intent: ${subjectIntent}`,
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    "",
    "Message:",
    message,
  ].filter(Boolean);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      subject: `${subjectIntent} — ${name}${companySuffix}`,
      replyTo: email,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send the message. Please try again or email hello@meepms.com." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route exception:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send the message. Please try again or email hello@meepms.com." },
      { status: 502 }
    );
  }
}
