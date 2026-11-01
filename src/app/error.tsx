"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon, ShieldIcon } from "@/components/icons";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="shell flex min-h-[70vh] flex-col justify-center py-20">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-clay" />
        <p className="eyebrow text-clay-deep">Something went wrong</p>
      </div>
      <h1 className="display mt-8 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] text-forest">
        The page lost its <em className="text-clay-deep">footing.</em>
      </h1>
      <p className="lede mt-6 max-w-xl">
        This is on us, not on you. Try the page again, or return to the
        sanctuary. If it keeps happening, the rescue desk can help.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => reset()} className="btn-primary">
          Try again
          <ArrowRightIcon className="h-4 w-4" />
        </button>
        <Link href="/" className="btn-quiet">
          Return home
        </Link>
      </div>
      <p className="mt-14 flex items-center gap-2 border-t border-ink/15 pt-6 text-[12px] text-ink/45">
        <ShieldIcon className="h-4 w-4 text-clay-deep" />
        Reference {error.digest ?? "not available"} · hello@kaberakin.org
      </p>
    </main>
  );
}
