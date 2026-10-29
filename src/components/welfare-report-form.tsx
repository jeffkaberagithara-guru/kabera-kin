"use client";

import { useState } from "react";
import { CheckIcon, ShieldIcon } from "@/components/icons";

export function WelfareReportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    window.setTimeout(() => {
      setReference(`WR-${Math.floor(10000 + Math.random() * 90000)}`);
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
          Report received.
        </h3>
        <p className="mt-5 max-w-md text-[14px] leading-relaxed text-ink/65 text-center mx-auto">
          A welfare officer will assess your report. If the animal is in
          immediate danger, please call the 24-hour desk now on 0800 720 KIN.
        </p>
        <p className="eyebrow mt-8 text-[8px] text-ink/40 text-center">
          Reference {reference} · {new Date().getFullYear()}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="reporter" className="label">
            Your name
          </label>
          <input
            id="reporter"
            name="reporter"
            required
            autoComplete="name"
            className="field-box mt-2 rounded-xl"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="reporter-phone" className="label">
            Phone
          </label>
          <input
            id="reporter-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="field-box mt-2 rounded-xl"
            placeholder="+254"
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="label">
          Location of the animal
        </label>
        <input
          id="location"
          name="location"
          required
          className="field-box mt-2 rounded-xl"
          placeholder="Area, landmark, or what3words"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="situation" className="label">
            Situation
          </label>
          <select id="situation" name="situation" className="field-box mt-2 rounded-xl">
            <option>Injured or sick</option>
            <option>Abandoned or confined</option>
            <option>Neglect or malnutrition</option>
            <option>At risk of harm</option>
            <option>Stray with no immediate danger</option>
          </select>
        </div>
        <div>
          <label htmlFor="seen" className="label">
            When did you see it?
          </label>
          <select id="seen" name="seen" className="field-box mt-2 rounded-xl">
            <option>Right now</option>
            <option>Within the last hour</option>
            <option>Today</option>
            <option>Earlier this week</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="details" className="label">
          What can you tell us?
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={4}
          className="field-box mt-2 resize-y rounded-xl"
          placeholder="Condition, behaviour, access, and whether anyone is already helping."
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
          I understand this report is not monitored continuously. For an animal
          in immediate danger, I will call the 24-hour desk.
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className={`btn-primary w-full sm:w-auto ${isSubmitting ? "cursor-not-allowed opacity-80" : ""}`}
      >
        <ShieldIcon className="h-4 w-4" />
        {isSubmitting ? "Submitting…" : "Submit welfare report"}
      </button>
    </form>
  );
}
