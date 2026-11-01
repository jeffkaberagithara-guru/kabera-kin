import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  HeartIcon,
  LeafIcon,
  ShieldIcon,
} from "@/components/icons";
import { imagery } from "@/lib/animals";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Fund medical care, rescue response, and rehabilitation at Kabera Kin. Every shilling is accounted for, and every animal is treated regardless of outcome.",
};

const tiers = [
  {
    amount: "KES 1,000",
    title: "A vaccination course",
    body: "Covers a full DHPP or FVRCP course for one animal arriving into care.",
    detail: "Protects against the most common preventable diseases.",
  },
  {
    amount: "KES 3,500",
    title: "A sterilisation",
    body: "Funds one free community sterilisation, including recovery and aftercare.",
    detail: "The single most effective intervention we run.",
  },
  {
    amount: "KES 10,000",
    title: "Emergency surgery support",
    body: "Contributes to a road-traffic or orthopaedic procedure at a partner clinic.",
    detail: "Cases are assessed by two veterinarians before approval.",
  },
];

const allocation = [
  { label: "Medical & veterinary", value: 46 },
  { label: "Shelter & rehabilitation", value: 31 },
  { label: "Rescue response", value: 15 },
  { label: "Governance & audit", value: 8 },
];

const giving = [
  {
    method: "M-Pesa",
    lines: ["Paybill · 400 200", "Account · KABERA KIN", "Reference · your name"],
    note: "Most direct. A receipt is sent by SMS.",
  },
  {
    method: "Bank transfer",
    lines: ["Kabera Kin Sanctuary Trust", "Equity Bank · Karen Branch", "A/C 0170 2938 4471"],
    note: "Please email the transfer receipt to give@kaberakin.org.",
  },
  {
    method: "Monthly giving",
    lines: ["Standing order from KES 500/month", "Cancel any time, no minimum term", "Designate to the medical fund"],
    note: "Predictable income lets us plan surgeries in advance.",
  },
];

export default function DonatePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10 min-h-[85svh] lg:min-h-[90svh]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.donate}
            alt="A clinical care setting supported by the medical fund"
            fill
            priority
            className="object-cover opacity-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-linen/95 via-linen/85 to-linen/45" />
        </div>
        <div className="shell grid gap-12 py-12 sm:py-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-16 xl:py-20" style={{minHeight: 'calc(85svh - 1px)'}}>
          <div className="relative z-10 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-clay" />
              <p className="eyebrow text-clay-deep">The medical fund</p>
            </div>
            <h1 className="display mt-7 text-[clamp(3rem,7.4vw,6rem)] text-forest">
              Fund the
              <br />
              <em className="text-clay-deep">unglamorous</em> parts.
            </h1>
            <p className="lede mt-7 max-w-xl">
              Vaccines. Sterilisations. X-rays. Recovery bedding. The work that
              rarely makes a photograph is the work that changes the arithmetic
              of an animal&rsquo;s life.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#give" className="btn-primary">
                Give now
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="#where" className="btn-quiet">
                See where it goes
              </Link>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-ink/15 border-t border-ink/15 pt-6">
              {[
                ["100%", "Of restricted gifts reach the fund"],
                ["1,840", "Treatments funded in 2025"],
                ["0", "Animals refused for cost"],
              ].map(([value, label], index) => (
                <div key={label} className={index === 0 ? "pr-4" : "px-4 last:pr-0"}>
                  <p className="font-fraunces text-3xl leading-none text-forest">{value}</p>
                  <p className="mt-2 font-manrope text-[8px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-ink/45">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone arch">
              <Image
                src={imagery.clinic}
                alt="A veterinary consultation scene in a calm clinic setting with a rescue animal"
                fill
                priority
                className="image-warm object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 to-transparent p-6 pt-24 text-paper">
                <p className="eyebrow text-[8px] text-paper/60">Karen Ridge · Medical wing</p>
                <p className="mt-2 font-fraunces text-xl leading-snug">
                  “No animal is turned away because the fund is short. We find
                  the money afterwards.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24" id="where">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <SectionHeading
            index="01"
            eyebrow="Accountability"
            title="Where every shilling goes."
            intro="We publish an audited allocation each year. Restricted gifts to the medical fund are ring-fenced and reported separately."
            className="lg:col-span-4"
          />
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-7">
              {allocation.map((item) => (
                <div key={item.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.12em] text-forest">
                      {item.label}
                    </p>
                    <p className="font-fraunces text-xl text-forest">{item.value}%</p>
                  </div>
                  <div className="mt-3 h-[2px] w-full bg-ink/10">
                    <div
                      className="h-full bg-clay"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-5">
              <p className="text-[11px] text-ink/45">
                Audited by Mwangi & Associates · FY 2025
              </p>
              <Link href="/about" className="link-arrow">
                Read the welfare report
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="shell py-16 lg:py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              index="02"
              eyebrow="What a gift does"
              title="Three useful amounts."
              className="max-w-2xl"
            />
            <p className="max-w-xs text-[12px] leading-relaxed text-ink/45">
              Every amount below is a real cost from our 2026 clinic ledger, not
              a rounded estimate.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.amount}
                className="group flex flex-col border-t-2 border-forest/20 bg-linen p-6 transition hover:border-clay lg:p-8"
              >
                <p className="font-fraunces text-[clamp(1.9rem,3vw,2.4rem)] leading-none text-forest">
                  {tier.amount}
                </p>
                <h3 className="mt-5 font-manrope text-[11px] font-semibold uppercase tracking-[0.13em] text-clay-deep">
                  {tier.title}
                </h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-[1.75] text-ink/65">
                  {tier.body}
                </p>
                <p className="mt-4 border-t border-ink/10 pt-3 text-[11px] leading-relaxed text-ink/40">
                  {tier.detail}
                </p>
                <a
                  href="#give"
                  className="mt-5 inline-flex items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.13em] text-forest transition group-hover:text-clay-deep"
                >
                  Give this amount
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-[11px] text-ink/40">
            Prefer a different amount? Any gift is useful. Monthly giving of KES
            500 sustains more care than a single large gift.
          </p>
        </div>
      </section>

      <section className="bg-forest-deep text-paper" id="give">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-4">
            <SectionHeading
              index="03"
              eyebrow="How to give"
              title="Direct, traceable, receipted."
              tone="light"
              intro="We do not use a third-party fundraising platform. Gifts go directly to the sanctuary trust and are receipted within three working days."
            />
            <div className="mt-8 flex items-start gap-3 border border-paper/15 p-4">
              <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
              <p className="text-[11.5px] leading-relaxed text-paper/55">
                Kabera Kin Sanctuary Trust is registered in Kenya as a
                charitable trust. Registration KVB-KEN-2024/09A.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-7 lg:col-start-6 sm:grid-cols-3 lg:grid-cols-1">
            {giving.map((item) => (
              <div
                key={item.method}
                className="border-t border-paper/15 pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-5"
              >
                <h3 className="font-fraunces text-2xl text-paper">{item.method}</h3>
                <ul className="mt-3 space-y-1.5">
                  {item.lines.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-paper/65">
                      <CheckIcon className="mt-0.5 h-3 w-3 shrink-0 text-clay" />
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[10.5px] leading-relaxed text-paper/35">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="shell flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="flex items-start gap-5">
            <HeartIcon className="mt-1 h-7 w-7 shrink-0 text-paper/70" />
            <div>
              <p className="eyebrow text-paper/60">Not a donor?</p>
              <h2 className="mt-3 font-fraunces text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-tight">
                Time is also a form of giving.
              </h2>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/foster" className="btn-light">
              Foster a companion
            </Link>
            <Link href="/volunteer" className="btn-light-outline">
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-20">
        <div className="grid gap-8 border-t border-ink/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: LeafIcon, title: "No animal sold", body: "Adoption is always free. We fund the work through giving, not placement." },
            { icon: ShieldIcon, title: "Two-vet approval", body: "Every major procedure is assessed and approved by two veterinarians." },
            { icon: HeartIcon, title: "Ring-fenced", body: "Medical gifts are held separately and reported in the annual audit." },
            { icon: CheckIcon, title: "Receipted", body: "Every gift is acknowledged in writing within three working days." },
          ].map((item) => (
            <div key={item.title}>
              <item.icon className="h-5 w-5 text-clay-deep" />
              <h3 className="mt-4 font-manrope text-[10px] font-semibold uppercase tracking-[0.12em] text-forest">
                {item.title}
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink/55">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
