"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/brand";
import { ArrowUpRightIcon, MenuIcon, XIcon } from "@/components/icons";

const links = [
  { href: "/adopt", label: "Adopt" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/foster", label: "Foster & care" },
  { href: "/help-an-animal", label: "Welfare & help" },
  { href: "/stories", label: "Stories" },
  { href: "/partners", label: "Partners" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open]);

  const activeRoutes: Record<string, string[]> = {
    "/foster": ["/foster", "/care"],
  };

  const isActive = (href: string) => {
    const routes = activeRoutes[href] ?? [href];
    return routes.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
    );
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-paper/10 bg-forest-deep text-paper/70 lg:block">
        <div className="shell flex h-9 items-center justify-between">
          <p className="eyebrow text-[9px] text-paper/60">
            National Welfare Registry · Karen, Nairobi
          </p>
          <div className="flex items-center gap-6">
            <p className="eyebrow text-[9px] text-paper/60">
              KSPCA registered field network
            </p>
            <a
              href="tel:0800720546"
              className="eyebrow text-[9px] text-paper transition hover:text-clay"
            >
              24hr rescue desk · 0800 720 KIN
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-ink/10 bg-linen/90 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_12px_32px_-24px_rgba(20,53,44,0.55)]" : ""
        }`}
      >
        <div className="shell flex h-[72px] items-center justify-between gap-6">
          <Brand />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative px-3 py-2 font-manrope text-[11px] font-semibold uppercase tracking-[0.12em] transition duration-200 ${
                  isActive(link.href)
                    ? "text-forest"
                    : "text-ink/60 hover:text-forest"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-[5px] h-px bg-clay transition-opacity ${
                    isActive(link.href) ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/adopt"
              className="hidden items-center gap-2 bg-forest px-5 py-3 font-manrope text-[10px] font-semibold uppercase tracking-[0.15em] text-paper transition hover:bg-forest-deep sm:inline-flex"
            >
              Find your companion
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center border border-ink/15 text-forest transition hover:border-forest/40 lg:hidden"
            >
              {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        ref={dialogRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden={!open}
        className="fixed inset-x-0 top-0 z-[60] max-h-dvh overflow-y-auto overscroll-contain border-b border-ink/10 bg-linen/95 backdrop-blur-md lg:hidden"
      >
        <div className="shell flex flex-col py-6 px-5">
          <div className="flex items-center justify-between mb-8">
            <Brand compact />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center border border-ink/15 text-forest transition hover:border-forest/40"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-ink/10 py-5 transition hover:text-forest"
              >
                <span className="font-fraunces text-3xl text-forest">
                  {link.label}
                </span>
                <span className="eyebrow text-ink/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-4 border-t border-ink/10 pt-6">
            <Link
              href="/adopt"
              className="btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Find your companion
            </Link>
            <a
              href="tel:0800720546"
              className="btn-quiet w-full"
              onClick={() => setOpen(false)}
            >
              24hr rescue desk · 0800 720 KIN
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
