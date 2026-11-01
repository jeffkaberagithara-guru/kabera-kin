"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";

type FormState = "idle" | "sending" | "done";

export function NewsletterForm({
  id,
  rounded = false,
}: {
  id: string;
  rounded?: boolean;
}) {
  const [state, setState] = useState<FormState>("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    setState("sending");
    await new Promise((resolve) => window.setTimeout(resolve, 600));
    setState("done");
  }

  const fieldShape = rounded ? "rounded-xl" : "";

  if (state === "done") {
    return (
      <div
        role="status"
        className={`flex max-w-xl flex-col gap-2 border border-paper/15 bg-paper/5 px-5 py-4 text-paper sm:flex-row sm:items-center sm:justify-between ${fieldShape}`}
      >
        <p className="flex items-center gap-2 text-[13px] text-paper/80">
          <CheckIcon className="h-4 w-4 shrink-0 text-clay" />
          You are on the list. Look out for our next letter.
        </p>
        <button
          type="button"
          onClick={() => {
            setEmail("");
            setState("idle");
          }}
          className="self-start font-manrope text-[10px] font-semibold uppercase tracking-[0.12em] text-clay transition hover:text-paper sm:self-auto"
        >
          Use another email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl flex-col gap-3 sm:flex-row lg:justify-end"
      aria-label="Newsletter signup"
      aria-busy={state === "sending"}
    >
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        id={id}
        name="email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        autoComplete="email"
        placeholder="Your email address"
        className={`min-h-12 w-full border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/35 focus:border-clay focus:outline-none sm:flex-1 lg:max-w-xs ${fieldShape}`}
      />
      <button
        type="submit"
        disabled={state === "sending"}
        className={`btn-light shrink-0 ${fieldShape} ${state === "sending" ? "opacity-80" : ""}`}
      >
        {state === "sending" ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
