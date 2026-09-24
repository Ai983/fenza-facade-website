import { useState, type FormEvent } from "react";
import clsx from "clsx";
import {
  ENQUIRY_SEGMENTS,
  PROJECT_TYPES,
  ENQUIRY_ENDPOINT,
  CONTACT,
} from "@/lib/site";

interface EnquiryFormProps {
  /** Prefills the "system of interest" field for per-system RFQs (PRD §10). */
  defaultSystem?: string;
  className?: string;
}

type Status = "idle" | "sending" | "sent" | "drafted" | "error";

const field =
  // text-base (16px) on phones stops iOS Safari auto-zooming the page on focus;
  // it steps back down to 14px from sm: up where that zoom never applies.
  "w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-base sm:text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";
const labelCls =
  "mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-wide2 text-muted";

export default function EnquiryForm({
  defaultSystem = "",
  className,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — bots fill hidden fields; humans never see this.
    if ((fd.get("company_website") as string)?.length) {
      setStatus("sent");
      form.reset();
      return;
    }

    const data = {
      segment: fd.get("segment"),
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      company: fd.get("company"),
      projectType: fd.get("projectType"),
      system: fd.get("system"),
      message: fd.get("message"),
      source: fd.get("source"),
      submittedAt: new Date().toISOString(),
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };

    setStatus("sending");
    try {
      if (ENQUIRY_ENDPOINT) {
        const res = await fetch(ENQUIRY_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        setStatus("sent");
        form.reset();
      } else {
        // Graceful fallback until the enquiry webhook is wired (PRD §9).
        // Draft a prefilled email in the visitor's own mail client — a real,
        // working path that makes no claim about our own inbox status.
        const subject = `Facade enquiry — ${data.segment ?? ""}`;
        const body = [
          `I am a: ${data.segment ?? ""}`,
          `Name: ${data.name ?? ""}`,
          `Email: ${data.email ?? ""}`,
          `Phone: ${data.phone ?? ""}`,
          `Company: ${data.company ?? ""}`,
          `Project type: ${data.projectType ?? ""}`,
          `System(s) of interest: ${data.system ?? ""}`,
          "",
          `${data.message ?? ""}`,
        ].join("\n");
        window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        setStatus("drafted");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className={clsx(
          "rounded-xl border border-gold/40 bg-cream/95 p-8 text-ink",
          className
        )}
      >
        <h3 className="font-display text-2xl">Thank you — enquiry received.</h3>
        <p className="mt-3 text-sm text-muted">
          We will come back with a measured scope and an itemised response.
          For anything urgent, use the contact details on this page.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline-ink mt-6 !py-2.5 !text-[0.72rem]"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx("grid gap-4", className)}
    >
      {/* Honeypot */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label className={labelCls} htmlFor="segment">
          I am a
        </label>
        <select id="segment" name="segment" required className={field} defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {ENQUIRY_SEGMENTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="company">
            Company / practice
          </label>
          <input id="company" name="company" className={field} autoComplete="organization" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={field} autoComplete="email" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input id="phone" name="phone" type="tel" className={field} autoComplete="tel" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="projectType">
            Project type
          </label>
          <select id="projectType" name="projectType" className={field} defaultValue="">
            <option value="">Select (optional)</option>
            {PROJECT_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="system">
            System(s) of interest
          </label>
          <input
            id="system"
            name="system"
            className={field}
            defaultValue={defaultSystem}
            placeholder="e.g. Curtain Wall"
          />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="message">
          Your enquiry
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={clsx(field, "resize-y")}
          placeholder="Share your drawings, elevation areas and system intent."
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="source">
          How did you hear about us?
        </label>
        <input
          id="source"
          name="source"
          className={field}
          placeholder="Search, referral, AI assistant, social…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your enquiry. Please try again, or reach
          us directly using the details on this page.
        </p>
      )}
      {status === "drafted" && (
        <p className="text-sm text-ink/70">
          Your email client is opening with the enquiry ready to send.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold mt-2 w-full disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      <p className="text-xs leading-relaxed text-muted/80">
        We use your details only to respond to this enquiry.
      </p>
    </form>
  );
}
