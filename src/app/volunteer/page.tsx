import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { SectionHeading } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  PawIcon,
  ShieldIcon,
} from "@/components/icons";
import { imagery } from "@/lib/animals";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Walk dogs, socialise cats, drive a rescue, or help at a clinic. Kabera Kin volunteers give a few hours a week and change the texture of an animal's day.",
};

const roles = [
  {
    icon: PawIcon,
    title: "Dog walker",
    commitment: "2 hours · weekday mornings",
    body: "Take sanctuary dogs on structured walks around Karen Ridge. Training provided; no experience needed.",
    station: "Karen Ridge",
  },
  {
    icon: HeartIcon,
    title: "Cat socialiser",
    commitment: "2 hours · flexible",
    body: "Sit, play, and gently handle cats in the Runda pavilion to build confidence before adoption.",
    station: "Runda",
  },
  {
    icon: MapPinIcon,
    title: "Rescue driver",
    commitment: "On call · 1 shift per week",
    body: "Support the field team with transport to partner clinics. Valid licence and a calm disposition required.",
    station: "All stations",
  },
  {
    icon: ShieldIcon,
    title: "Clinic assistant",
    commitment: "4 hours · Tuesdays",
    body: "Help with preparation, recovery monitoring, and cleaning under veterinary supervision.",
    station: "Karen Ridge",
  },
  {
    icon: ClockIcon,
    title: "Weekend host",
    commitment: "Saturday · 09:00–12:00",
    body: "Welcome visitors during open mornings, guide sanctuary tours, and answer questions about adoption.",
    station: "Karen Ridge / Runda",
  },
  {
    icon: CheckIcon,
    title: "Skills volunteer",
    commitment: "Project-based",
    body: "Photography, transport logistics, bookkeeping, translation, or web support. Tell us what you do well.",
    station: "Remote / hybrid",
  },
];

const process = [
  {
    number: "01",
    title: "Apply",
    body: "A short note about your availability and the role that interests you. No CV required.",
  },
  {
    number: "02",
    title: "Orientation",
    body: "A two-hour induction at the sanctuary: welfare standards, animal handling, and our communication protocols.",
  },
  {
    number: "03",
    title: "Shadow a shift",
    body: "Join an experienced volunteer for one session before committing to a regular slot.",
  },
  {
    number: "04",
    title: "Begin",
    body: "Choose a weekly or fortnightly rhythm. We ask for a minimum of eight hours per month.",
  },
];

export default function VolunteerPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.volunteer}
            alt="A volunteer sharing a quiet moment with a dog"
            fill
            priority
            className="object-cover opacity-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/85 to-linen/35" />
        </div>
        <div className="shell grid gap-12 py-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-20">
          <div className="relative z-10 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-clay" />
              <p className="eyebrow text-clay-deep">Volunteer · Four stations</p>
            </div>
            <h1 className="display mt-7 text-[clamp(3rem,7.4vw,6rem)] text-forest">
              A Saturday
              <br />
              can change a <em className="text-clay-deep">season.</em>
            </h1>
            <p className="lede mt-7 max-w-xl">
              Volunteers are not extra hands. They are the reason a kennel dog
              hears a friendly voice on a Tuesday, and the reason a shy cat
              learns that people can be predictable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#apply" className="btn-primary">
                Apply to volunteer
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-quiet">
                Ask a question
              </Link>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-ink/15 border-t border-ink/15 pt-6">
              {[
                ["184", "Active volunteers"],
                ["8 hrs", "Monthly minimum"],
                ["2 hrs", "Induction length"],
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
                src={imagery.volunteer}
                alt="Volunteers helping rescue dogs outdoors in a welcoming sanctuary setting"
                fill
                priority
                className="image-warm object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 to-transparent p-6 pt-24 text-paper">
                <p className="eyebrow text-[8px] text-paper/60">Karen Ridge · Saturday</p>
                <p className="mt-2 font-fraunces text-xl leading-snug">
                  “The dogs know the volunteers before they know us.”
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
            eyebrow="Ways to help"
            title="Six useful roles."
            intro="You do not need to be an animal expert. You need to be reliable, kind, and willing to follow the plan. We will teach the rest."
            className="lg:col-span-4"
          />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {roles.map((role) => (
              <div key={role.title} className="border-t border-ink/15 pt-5">
                <div className="flex items-start justify-between gap-4">
                  <role.icon className="h-5 w-5 text-clay-deep" />
                  <span className="eyebrow text-[8px] text-ink/35">{role.station}</span>
                </div>
                <h3 className="mt-4 font-fraunces text-[24px] leading-tight tracking-tight text-forest">
                  {role.title}
                </h3>
                <p className="mt-1 font-manrope text-[9px] font-semibold uppercase tracking-[0.1em] text-clay-deep">
                  {role.commitment}
                </p>
                <p className="mt-3 text-[13px] leading-[1.75] text-ink/60">{role.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-paper">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-clay">The process</p>
            <h2 className="h2-editorial mt-5 text-paper">
              Four steps,
              <br />
              two weeks.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.8] text-paper/60">
              We take volunteering seriously because animals depend on
              consistency. The induction is not a formality, and the shadow
              shift is not an audition.
            </p>
            <div className="mt-8 border-l border-clay/50 pl-5">
              <p className="display-italic text-2xl leading-snug text-paper/90">
                “Reliability is the rarest form of kindness.”
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-paper/15">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-3 border-b border-paper/15 py-5 sm:grid-cols-8 sm:gap-5"
                >
                  <span className="font-fraunces text-[13px] italic text-clay sm:col-span-1">
                    {step.number}
                  </span>
                  <div className="sm:col-span-7">
                    <h3 className="font-fraunces text-[22px] leading-tight text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.7] text-paper/55">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[11px] text-paper/45">
              <p>Induction every second Saturday</p>
              <p>·</p>
              <p>Police clearance required for clinic roles</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand/60" id="apply">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeading
              index="02"
              eyebrow="Apply"
              title="Tell us what you can offer."
              intro="A volunteer coordinator will reply within five working days with induction dates and next steps."
            />
            <div className="mt-8 border-t border-ink/15">
              {[
                ["Volunteer desk", "volunteer@kaberakin.org"],
                ["Telephone", "0800 720 KIN"],
                ["Open mornings", "Saturdays · 09:00–12:00"],
                ["Minimum commitment", "8 hours per month"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-3.5"
                >
                  <span className="label">{label}</span>
                  <span className="text-right text-[12.5px] text-ink/70">{value}</span>
                </div>
              ))}
            </div>
            <Link href="/how-it-works" className="link-arrow mt-8 inline-flex">
              Read our welfare standards
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border border-ink/15 bg-linen p-6 sm:p-9">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
