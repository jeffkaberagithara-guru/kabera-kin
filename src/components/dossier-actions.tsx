"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, BookmarkIcon, ShareIcon } from "@/components/icons";

export function DossierActions({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState("");
  const storageKey = "kabera-kin-saved-dossiers";

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      const list = stored ? JSON.parse(stored) : [];
      if (Array.isArray(list)) setSaved(list.includes(slug));
    } catch {
      setSaved(false);
    }
  }, [slug]);

  function toggleSaved() {
    const next = !saved;
    setSaved(next);
    try {
      const stored = window.localStorage.getItem(storageKey);
      const list = stored ? JSON.parse(stored) : [];
      const current = new Set(Array.isArray(list) ? list : []);
      if (next) current.add(slug);
      else current.delete(slug);
      window.localStorage.setItem(storageKey, JSON.stringify([...current]));
      setStatus(next ? "Saved to this device" : "Removed from saved");
    } catch {
      setStatus("Saving is unavailable in this browser");
    }
    window.setTimeout(() => setStatus(""), 3000);
  }

  async function share() {
    const url = `${window.location.origin}/adopt/${slug}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${name} · Kabera Kin`, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setStatus("Link copied to clipboard");
      window.setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setStatus("Sharing is unavailable in this browser");
    }
  }

  return (
    <div>
      <Link href={`/contact?animal=${slug}`} className="btn-primary w-full">
        Begin an application
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={toggleSaved}
          aria-pressed={saved}
          className="btn-quiet"
        >
          <BookmarkIcon className="h-4 w-4" filled={saved} />
          {saved ? "Saved" : "Save dossier"}
        </button>
        <button type="button" onClick={share} className="btn-quiet">
          <ShareIcon className="h-4 w-4" />
          Share
        </button>
      </div>
      <p aria-live="polite" className="mt-3 min-h-4 text-[11px] text-ink/50">
        {status}
      </p>
    </div>
  );
}
