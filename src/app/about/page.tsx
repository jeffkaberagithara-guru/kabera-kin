import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading, PullQuote, StatRow } from "@/components/ui";
import { SanctuaryFilm } from "@/components/sanctuary-film";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  LeafIcon,
  ShieldIcon,
  PawIcon,
} from "@/components/icons";
import { imagery } from "@/lib/animals";
import { heroImages, media } from "@/lib/images";

export const metadata: Metadata = {
  title: "About the sanctuary",
  description:
    "Kabera Kin is a Kenyan animal welfare sanctuary and civic registry. Our story, our standards, and the people responsible for the work.",
};

const timeline = [
  {
    year: "2016",
    title: "Three dogs and a borrowed pickup",
    body: "Wanjiru Kamau begins rescuing animals on the Ngong forest edge, fostering from a rented cottage in Karen.",
  },
  {
    year: "2018",
    title: "Karen Ridge opens",
    body: "A five-acre sanctuary with a small clinic, twelve kennels, and the first full-time welfare officer.",
  },
  {
    year: "2020",
    title: "The registry goes public",
    body: "We publish our first verified adoption registry, shared with four partner sanctuaries across Nairobi.",
  },
  {
    year: "2022",
    title: "Runda and Tigoni",
    body: "A dedicated feline pavilion and a senior recovery haven join the network, extending care beyond dogs.",
  },
  {
    year: "2025",
    title: "Naivasha field station",
    body: "A permanent presence in Nakuru enables faster rescue response and a community sterilisation programme.",
  },
  {
    year: "2026",
    title: "342 adoptions and counting",
    body: "Fourteen partner organisations, a transparent medical fund, and a lifetime return promise for every placement.",
  },
];

const values = [
  {
    icon: ShieldIcon,
    title: "Dignity over drama",
    body: "We do not stage rescues or trade in pity. Animals are presented accurately, with their needs and boundaries intact.",
  },
  {
    icon: PawIcon,
    title: "The match, not the metric",
    body: "We are measured by placements that last, not by how quickly an animal leaves the sanctuary.",
  },
  {
    icon: LeafIcon,
    title: "Open books, open doors",
    body: "Our accounts, standards, and clinical decisions are available to donors, partners, and the public.",
  },
];

const team = [
  {
    initials: "WK",
    name: "Wanjiru Kamau",
    role: "Founder & field director",
    bio: "Behaviourist and welfare officer. Founded Kabera Kin in 2016 after a decade in community animal health.",
  },
  {
    initials: "PO",
    name: "Peter Ochieng",
    role: "Field response lead",
    bio: "Leads the 24-hour rescue desk across Nairobi, Kiambu, Nakuru, and Kajiado. Former veterinary paramedic.",
  },
  {
    initials: "AP",
    name: "Dr. Asha Patel",
    role: "Consulting veterinarian",
    bio: "Oversees clinical standards, surgical approvals, and the medical fund. Practices in Karen.",
  },
  {
    initials: "GW",
    name: "Grace Wambui",
    role: "Finance & operations",
    bio: "Responsible for the clinic ledger, trust compliance, and the annual audited allocation report.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.about}
            alt="A golden retriever resting in warm afternoon light"
            fill
            priority
            className="object-cover opacity-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-linen/95 via-linen/85 to-linen/45" />
        </div>
        <div className="shell grid gap-12 py-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-20">
          <div className="relative z-10 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-clay" />
              <p className="eyebrow text-clay-deep">About the sanctuary · Est. 2016</p>
            </div>
            <h1 className="display mt-7 text-[clamp(3rem,7.4vw,6rem)] text-forest">
              Kin is not
              <br />
              a <em className="text-clay-deep">transaction.</em>
            </h1>
            <p className="lede mt-7 max-w-xl">
              Kabera Kin exists to make animal welfare in Kenya more deliberate,
              more transparent, and more humane — for the animals and for the
              people who choose to care for them.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/how-it-works" className="link-arrow">
                Our adoption protocol
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
              <Link href="/partners" className="link-arrow">
                The welfare network
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-12 max-w-xl border-t border-ink/15 pt-6">
              <StatRow
                stats={[
                  { value: "342", label: "Verified adoptions" },
                  { value: "48", label: "Animals in care" },
                  { value: "14", label: "Partner organisations" },
                ]}
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone arch">
              <Image
                src={imagery.sanctuary}
                alt="A warm sanctuary scene with a carer and rescued animals in a calm outdoor setting"
                fill
                priority
                className="image-warm object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 to-transparent p-6 pt-24 text-paper">
                <p className="eyebrow text-[8px] text-paper/60">Karen Ridge · 2026</p>
                <p className="mt-2 font-fraunces text-xl leading-snug">
                  “We are not trying to be the biggest. We are trying to be
                  trustworthy.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <SectionHeading
            index="01"
            eyebrow="The story"
            title={
              <>
                A decade of slow,
                <br className="hidden sm:block" /> deliberate work.
              </>
            }
            intro="Kabera Kin began with a borrowed pickup and a refusal to look away. It has grown carefully, station by station, without losing the habit of answering the phone."
            className="lg:col-span-4"
          />
          <div className="lg:col-span-8">
            <div className="border-t border-ink/15">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="grid gap-4 border-b border-ink/15 py-6 sm:grid-cols-12 sm:gap-6"
                >
                  <p className="font-fraunces text-2xl text-clay-deep sm:col-span-2">
                    {item.year}
                  </p>
                  <div className="sm:col-span-9">
                    <h3 className="font-fraunces text-[24px] leading-tight tracking-tight text-forest">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.75] text-ink/60">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="shell pb-16 lg:pb-24">
        <div className="grid gap-8 border-t border-ink/15 pt-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            index="02"
            eyebrow="In their own time"
            title="The long middle of recovery."
            intro="Rescue is the headline. Recovery is the quiet, repetitive work that follows — and it cannot be rushed."
            className="lg:col-span-8"
          />
        </div>
        <SanctuaryFilm film={media.filmQuiet} className="mt-8" />
      </section>
      <section className="bg-forest-deep text-paper">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-clay">What we hold to</p>
            <h2 className="h2-editorial mt-5 text-paper">
              Three standards,
              <br />
              without exception.
            </h2>
            <div className="mt-8 border-l border-clay/50 pl-5">
              <PullQuote tone="light" attribution="Wanjiru Kamau · Founder">
                The animal does not owe us a story. We owe the animal a fair
                account of what happened, and an honest plan for what comes
                next.
              </PullQuote>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            {values.map((value) => (
              <div
                key={value.title}
                className="grid gap-4 border-t border-paper/15 py-6 sm:grid-cols-[auto_1fr] sm:gap-5"
              >
                <value.icon className="h-5 w-5 text-clay" />
                <div>
                  <h3 className="font-fraunces text-2xl leading-tight text-paper">
                    {value.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-[13.5px] leading-[1.75] text-paper/60">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeading
            index="03"
            eyebrow="The people"
            title="Accountable by name."
            intro="A small permanent team, supported by a wider network of foster carers, volunteers, and partner veterinarians. Every decision has a person behind it."
            className="lg:col-span-4"
          />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {team.map((person) => (
              <div key={person.name} className="border-t border-ink/15 pt-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/5 font-fraunces text-lg text-forest">
                  {person.initials}
                </span>
                <h3 className="mt-4 font-fraunces text-[22px] leading-tight text-forest">
                  {person.name}
                </h3>
                <p className="mt-1 font-manrope text-[9px] font-semibold uppercase tracking-[0.12em] text-clay-deep">
                  {person.role}
                </p>
                <p className="mt-3 text-[12.5px] leading-relaxed text-ink/55">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="shell grid gap-10 py-14 lg:grid-cols-12 lg:items-center lg:py-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-clay-deep">Accountability</p>
            <h2 className="mt-4 font-fraunces text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-tight text-forest">
              The books are open. Ask us anything.
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-[1.8] text-ink/60">
              FY2025 accounts, clinic ledgers, and the full welfare report are
              available on request. We publish an audited allocation each year
              and ring-fence all restricted medical gifts.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:col-start-9 lg:justify-self-end">
            <Link href="/contact" className="btn-outline">
              Request the report
          </Link>
            <Link href="/donate" className="btn-quiet">
              Support the work
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="shell flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div>
            <p className="eyebrow text-paper/60">Come and see</p>
            <h2 className="h2-editorial mt-4 max-w-2xl text-paper">
              Open mornings, every Saturday. No appointment needed.
            </h2>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-light">
              Plan a visit
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/adopt" className="btn-light-outline">
              Meet the companions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
