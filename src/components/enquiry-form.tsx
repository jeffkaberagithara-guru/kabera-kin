"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export function EnquiryForm({
  animal,
}: {
  animal?: { slug: string; name: string };
}) {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    window.setTimeout(() => {
      setReference(`KK-${Math.floor(1000 + Math.random() * 9000)}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="border border-forest/15 bg-paper p-8 sm:p-12 rounded-2xl shadow-soft">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-paper mx-auto mb-8">
          <CheckIcon className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-fraunces text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight text-forest text-center">
          Your note is with the team.
        </h3>
        <p className="mt-5 max-w-md text-[14px] leading-relaxed text-ink/65 text-center mx-auto">
          A placement officer will reply within two working days. If your note
          concerns an urgent welfare matter, please call the 24-hour desk on
          0800 720 KIN.
        </p>
        <p className="eyebrow mt-8 text-[8px] text-ink/40 text-center">
          Reference {reference} · {new Date().getFullYear()}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {animal ? (
        <div className="flex items-center justify-between gap-4 border border-forest/15 bg-paper px-5 py-4 rounded-xl">
          <div>
            <p className="eyebrow text-[8px] text-ink/40">Enquiry about</p>
            <p className="mt-1 font-fraunces text-xl text-forest">{animal.name}</p>
          </div>
          <input type="hidden" name="animal" value={animal.slug} />
          <span className="eyebrow text-[8px] text-clay-deep">Dossier open</span>
        </div>
      ) : (
        <div>
          <label htmlFor="interest" className="label">
            I am writing about
          </label>
          <select id="interest" name="interest" className="field-box mt-2 rounded-xl">
            <option>Adopting a companion</option>
            <option>Fostering a companion</option>
            <option>Reporting a welfare concern</option>
            <option>Volunteering or partnerships</option>
            <option>Something else</option>
          </select>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="field-box mt-2 rounded-xl"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field-box mt-2 rounded-xl"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="label">
            Phone <span className="normal-case tracking-normal text-ink/35">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="field-box mt-2 rounded-xl"
            placeholder="+254"
          />
        </div>
        <div>
          <label htmlFor="home" className="label">
            Your home
          </label>
          <select id="home" name="home" className="field-box mt-2 rounded-xl">
            <option>House with a garden</option>
            <option>Apartment with a balcony</option>
            <option>Apartment without outdoor space</option>
            <option>Smallholding or compound</option>
            <option>Foster placement only</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">
          Tell us about your days
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="field-box mt-2 resize-y rounded-xl"
          placeholder="Who lives at home, how much time you spend there, and what you hope for."
        />
      </div>

      <label className="flex items-start gap-3 text-[12px] leading-relaxed text-ink/55 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-forest"
        />
        <span>
          I understand this is an enquiry, not an approval, and consent to
          Kabera Kin contacting me about this note.
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className={`btn-primary w-full sm:w-auto ${isSubmitting ? "cursor-not-allowed opacity-80" : ""}`}
      >
        {isSubmitting ? "Sending…" : "Send enquiry"}
        <ArrowRightIcon className="h-4 w-4" />
      </button>
      {!animal && (
        <p className="text-[11px] leading-relaxed text-ink/40 text-center">
          Prefer to speak to someone? The placement desk is open Monday to
          Saturday, 08:00–17:00.
        </p>
      )}
    </form>
  );
}
