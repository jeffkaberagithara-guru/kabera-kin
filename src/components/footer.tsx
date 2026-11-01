import Link from "next/link";
import { Brand } from "@/components/brand";
import { ArrowUpRightIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { stations } from "@/lib/animals";
import { NewsletterForm } from "@/components/newsletter-form";

type FooterLink = {
  href: string;
  label: string;
};

const sanctuaryLinks: FooterLink[] = [
  { href: "/adopt", label: "Adopt a companion" },
  { href: "/foster", label: "Foster placement" },
  { href: "/how-it-works", label: "Adoption protocol" },
  { href: "/stories", label: "Field journals" },
  { href: "/care", label: "Care library" },
];

const welfareLinks: FooterLink[] = [
  { href: "/help-an-animal", label: "Report neglect or rescue" },
  { href: "/donate", label: "Medical fund" },
  { href: "/partners", label: "KSPCA & veterinary network" },
  { href: "/volunteer", label: "Volunteer with us" },
  { href: "/about", label: "About Kabera Kin" },
];

const legalLinks: FooterLink[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/safety", label: "Safety" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-paper" aria-labelledby="footer-heading">
      <div className="shell">
        <div className="grid gap-16 border-b border-paper/10 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <Brand light />
            <p className="mt-8 max-w-sm text-[15px] leading-[1.8] text-paper/60">
              A Kenyan sanctuary and civic registry dedicated to humane stewardship,
              medical rehabilitation, and lifelong companion placement.
            </p>

            <div className="mt-10 flex flex-col gap-4 text-[13px] text-paper/70">
              <a
                href="tel:0800720546"
                className="flex items-center gap-3 transition hover:text-clay"
                aria-label="Call the 24 hour rescue desk"
              >
                <PhoneIcon className="h-4 w-4 text-clay" aria-hidden="true" />
                0800 720 KIN · 24hr rescue desk
              </a>
              <a
                href="mailto:hello@kaberakin.org"
                className="flex items-center gap-3 transition hover:text-clay"
                aria-label="Email the sanctuary"
              >
                <MailIcon className="h-4 w-4 text-clay" aria-hidden="true" />
                hello@kaberakin.org
              </a>
              <p className="flex items-center gap-3" aria-label="Sanctuary location">
                <MapPinIcon className="h-4 w-4 text-clay" aria-hidden="true" />
                Karen Ridge Sanctuary, Karen, Nairobi
              </p>
            </div>
          </div>

          <nav aria-label="Footer sections" className="contents">
            <div className="lg:col-span-3">
              <h2 className="eyebrow text-paper/40">Sanctuary</h2>
              <ul className="mt-6 space-y-4">
                {sanctuaryLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[13px] text-paper/70 transition hover:text-paper"
                    >
                      {link.label}
                      <ArrowUpRightIcon className="h-3 w-3 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h2 className="eyebrow text-paper/40">Welfare</h2>
              <ul className="mt-6 space-y-4">
                {welfareLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-paper/70 transition hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="eyebrow text-paper/40">Stations</h2>
            <ul className="mt-6 space-y-5">
              {stations.map((station) => (
                <li key={station.name}>
                  <p className="text-[13px] text-paper/85">{station.name}</p>
                  <p className="mt-0.5 text-[11px] text-paper/40">
                    {station.county} · {station.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-8 border-b border-paper/10 py-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-clay">Field notes</p>
            <h2 id="footer-heading" className="mt-4 max-w-md font-fraunces text-[clamp(1.8rem,3vw,2.4rem)] leading-snug text-paper">
              Occasional letters from the sanctuary. No noise, no urgency.
            </h2>
          </div>

            <div className="lg:col-span-6 lg:justify-self-end w-full">
            <NewsletterForm id="footer-email" rounded />
          </div>
        </div>

        <div className="flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-paper/40">
            <p>© {currentYear} Kabera Kin Sanctuary Trust. All rights reserved.</p>
            <p>KVB Welfare Registry · KVB-KEN-2024/09A</p>
            <p>KSPCA affiliated</p>
          </div>

          <nav aria-label="Legal links" className="flex flex-wrap items-center gap-6 text-[11px] text-paper/50">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-paper">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
