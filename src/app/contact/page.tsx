import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { SectionHeading } from "@/components/ui";
import {
  ArrowUpRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import { getAnimal, stations } from "@/lib/animals";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact & visits",
  description:
    "Speak to Kabera Kin's placement desk, rescue line, or partnership team. Open mornings every Saturday at Karen Ridge and Runda.",
};

const desks = [
  {
    icon: PhoneIcon,
    label: "24-hour rescue desk",
    value: "0800 720 KIN",
    href: "tel:0800720546",
    note: "For animals in immediate danger. Answered by a welfare officer, day or night.",
  },
  {
    icon: MailIcon,
    label: "Placements",
    value: "placements@kaberakin.org",
    href: "mailto:placements@kaberakin.org",
    note: "Adoption and foster enquiries. Replies within two working days.",
  },
  {
    icon: MailIcon,
    label: "Partnerships & giving",
    value: "partners@kaberakin.org",
    href: "mailto:partners@kaberakin.org",
    note: "Veterinary practices, sanctuaries, funders, and corporate partners.",
  },
  {
    icon: MapPinIcon,
    label: "Sanctuary visits",
    value: "Open Saturdays · 09:00–12:00",
    href: "https://www.google.com/maps/search/?api=1&query=Karen+Nairobi",
    note: "No appointment needed. Karen Ridge, off Ngong Road, Nairobi.",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ animal?: string }>;
}) {
  const { animal: animalSlug } = await searchParams;
  const animal = animalSlug ? getAnimal(animalSlug) : undefined;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.contact}
            alt="A dog in the sanctuary grounds"
            fill
            priority
            className="object-cover opacity-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-linen/95 via-linen/85 to-linen/45" />
        </div>
        <div className="shell grid gap-12 py-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-20">
          <div className="relative z-10 lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-clay" />
              <p className="eyebrow text-clay-deep">Contact & visits</p>
            </div>
            <h1 className="display mt-7 text-[clamp(3rem,7.4vw,6rem)] text-forest">
              Come and
              <br />
              <em className="text-clay-deep">see for yourself.</em>
            </h1>
            <p className="lede mt-7 max-w-xl">
              The best way to understand the sanctuary is to stand in it. Open
              mornings run every Saturday, and the placement desk answers the
              phone like a person, because it is one.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <a href="tel:0800720546" className="link-arrow">
                0800 720 KIN
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
              <Link href="#write" className="link-arrow">
                Write to us
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <div className="border-t border-ink/15 pt-5">
              <p className="flex items-center gap-2 text-[11px] text-ink/50">
                <ClockIcon className="h-3.5 w-3.5 text-clay-deep" />
                Monday to Saturday
              </p>
              <p className="mt-2 font-fraunces text-3xl leading-none text-forest">08:00</p>
              <p className="mt-1 font-fraunces text-3xl leading-none text-forest/35">17:00</p>
              <p className="mt-3 text-[11px] leading-relaxed text-ink/45">
                East Africa Time. The rescue desk operates 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-20">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {desks.map((desk) => (
            <div key={desk.label} className="border-t border-ink/15 pt-5">
              <desk.icon className="h-5 w-5 text-clay-deep" />
              <p className="label mt-4">{desk.label}</p>
              <a
                href={desk.href}
                className="mt-2 block font-fraunces text-[20px] leading-tight text-forest transition hover:text-clay-deep"
              >
                {desk.value}
              </a>
              <p className="mt-2 text-[11.5px] leading-relaxed text-ink/45">{desk.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              eyebrow="Find us"
              title="Four stations. One phone tree."
              intro="Karen Ridge is our headquarters and medical wing. Visits to the other stations are arranged through the placement desk."
            />
            <div className="mt-8 border-t border-ink/15">
              {stations.map((station) => (
                <div
                  key={station.name}
                  className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-4"
                >
                  <div>
                    <p className="font-fraunces text-xl text-forest">{station.name}</p>
                    <p className="mt-1 text-[11px] text-ink/45">{station.note}</p>
                  </div>
                  <span className="eyebrow shrink-0 text-[8px] text-ink/35">
                    {station.county}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Karen+Nairobi"
              target="_blank"
              rel="noreferrer"
              className="btn-outline mt-8"
            >
              Open directions
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden bg-forest">
              <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(#FBF7EE_1px,transparent_1px),linear-gradient(90deg,#FBF7EE_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="relative flex h-full flex-col justify-between p-6 text-paper">
                <div className="flex items-start justify-between">
                  <p className="eyebrow text-[8px] text-paper/50">Karen Ridge · Nairobi</p>
                  <MapPinIcon className="h-4 w-4 text-clay" />
                </div>
                <div>
                  <p className="font-fraunces text-2xl">Off Ngong Road</p>
                  <p className="mt-1 text-[11px] text-paper/50">
                    Karen · 1°19′S 36°42′E
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7" id="write">
            <div className="border border-ink/15 bg-linen p-6 sm:p-9">
              <p className="eyebrow text-clay-deep">
                {animal ? "About a specific companion" : "Write to the sanctuary"}
              </p>
              <h2 className="mt-3 font-fraunces text-3xl leading-tight tracking-tight text-forest">
                {animal ? `A note about ${animal.name}` : "Start a conversation."}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
                {animal
                  ? "A placement officer will read this personally and reply within two working days."
                  : "Tell us what you need. We will route your note to the right person, and a human will reply."}
              </p>
              <div className="mt-7">
                <EnquiryForm
                  animal={animal ? { slug: animal.slug, name: animal.name } : undefined}
                />
              </div>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-ink/40">
              For an animal in immediate danger, do not use this form. Call the
              24-hour rescue desk on 0800 720 KIN.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="shell flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div>
            <p className="eyebrow text-paper/60">Saturday mornings</p>
            <h2 className="h2-editorial mt-4 max-w-2xl text-paper">
              No appointment. No application. Just come and meet them.
            </h2>
          </div>
          <Link href="/adopt" className="btn-light shrink-0">
            Read a dossier first
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
