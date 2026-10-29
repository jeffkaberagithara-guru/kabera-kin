import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { SectionHeading } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  LeafIcon,
  ShieldIcon,
  StarIcon,
} from "@/components/icons";
import { imagery, stations } from "@/lib/animals";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Partners & network",
  description:
    "Kabera Kin works with fourteen veterinary practices, sanctuaries, and community organisations across Kenya. Here is the network and our shared standards.",
};

const partners = [
  {
    name: "Karen Veterinary Practice",
    type: "Veterinary",
    location: "Nairobi",
    note: "Primary surgical and diagnostic partner. Provides two-vet approval for major procedures.",
  },
  {
    name: "Runda Feline Trust",
    type: "Sanctuary",
    location: "Nairobi",
    note: "Feline behaviour assessments, quarantine space, and specialist cat rehoming.",
  },
  {
    name: "Tigoni Senior Haven",
    type: "Sanctuary",
    location: "Kiambu",
    note: "Long-term care and hospice placement for senior and medically complex animals.",
  },
  {
    name: "Naivasha Community Welfare",
    type: "Community",
    location: "Nakuru",
    note: "Local monitors, sterilisation clinics, and school-based welfare education.",
  },
  {
    name: "KSPCA",
    type: "Welfare",
    location: "National",
    note: "Inspectorate liaison, legal referrals, and shared rescue dispatch during emergencies.",
  },
  {
    name: "Equity Bank Foundation",
    type: "Corporate",
    location: "Nairobi",
    note: "Matches restricted medical gifts and funds the annual community sterilisation programme.",
  },
];

const standards = [
  "No animal is sold, raffled, or transferred for breeding.",
  "Every partner submits to an annual welfare and facilities review.",
  "Medical decisions are made by qualified veterinarians, not by donors.",
  "Bonded animals are never separated for placement convenience.",
  "Adopters receive a full medical and temperament record before placement.",
  "Every partner honours a lifetime return promise for animals placed through the registry.",
];

export default function PartnersPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.partners}
            alt="Welfare partners working together"
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
              <p className="eyebrow text-clay-deep">The welfare network</p>
            </div>
            <h1 className="display mt-7 text-[clamp(3rem,7.4vw,6rem)] text-forest">
              A network,
              <br />
              not a <em className="text-clay-deep">monopoly.</em>
            </h1>
            <p className="lede mt-7 max-w-xl">
              Kabera Kin is one sanctuary among many doing serious work in Kenya.
              We share a registry, a set of standards, and a phone tree — because
              animals do not respect organisational boundaries.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <Link href="#partner" className="link-arrow">
                Become a partner
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
              <Link href="/help-an-animal" className="link-arrow">
                Report a welfare concern
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {stations.map((station) => (
                <div
                  key={station.name}
                  className="flex aspect-square flex-col justify-between bg-forest p-5 text-paper"
                >
                  <p className="eyebrow text-[8px] text-paper/45">{station.county}</p>
                  <div>
                    <p className="font-fraunces text-2xl leading-tight">{station.name}</p>
                    <p className="mt-2 text-[10.5px] leading-relaxed text-paper/50">
                      {station.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <SectionHeading
            index="01"
            eyebrow="The network"
            title="Fourteen organisations, one standard."
            intro="We list a selection of the partners we work with most closely. Every organisation in the network is reviewed annually against the same welfare standards."
            className="lg:col-span-4"
          />
          <div className="lg:col-span-8">
            <div className="border-t border-ink/15">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="grid gap-3 border-b border-ink/15 py-5 sm:grid-cols-12 sm:gap-5"
                >
                  <div className="sm:col-span-5">
                    <h3 className="font-fraunces text-[22px] leading-tight tracking-tight text-forest">
                      {partner.name}
                    </h3>
                    <p className="eyebrow mt-2 text-[8px] text-ink/40">
                      {partner.type} · {partner.location}
                    </p>
                  </div>
                  <p className="text-[13px] leading-[1.7] text-ink/60 sm:col-span-6">
                    {partner.note}
                  </p>
                  <span className="hidden justify-self-end text-ink/25 sm:col-span-1 sm:block">
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-ink/40">
              Additional partners include four mobile veterinary clinics, three
              county animal control units, and a network of 27 trained community
              monitors.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-paper">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-clay">Shared standards</p>
            <h2 className="h2-editorial mt-5 text-paper">
              What partnership
              <br />
              actually means.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.8] text-paper/60">
              A logo on a website is not a partnership. These are the commitments
              every organisation in our network makes in writing, and is reviewed
              against each year.
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-stone">
              <Image
                src={imagery.fieldwork}
                alt="Partner welfare staff and veterinarians working with a rescued animal outdoors"
                fill
                className="image-warm object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-paper/15">
              {standards.map((standard) => (
                <li
                  key={standard}
                  className="flex items-start gap-3 border-b border-paper/15 py-4"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                  <span className="text-[13.5px] leading-[1.7] text-paper/75">
                    {standard}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <p className="flex items-center gap-2 text-[11px] text-paper/45">
                <ShieldIcon className="h-3.5 w-3.5 text-clay" />
                Annual welfare review
              </p>
              <p className="flex items-center gap-2 text-[11px] text-paper/45">
                <StarIcon className="h-3.5 w-3.5 text-clay" />
                Open clinical records
              </p>
              <p className="flex items-center gap-2 text-[11px] text-paper/45">
                <LeafIcon className="h-3.5 w-3.5 text-clay" />
                Lifetime return promise
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand/60" id="partner">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeading
              index="02"
              eyebrow="Work with us"
              title="A practical conversation, not a pitch."
              intro="We are open to veterinary practices, sanctuaries, community organisations, and funders who share our standards. Tell us what you do and where the overlap might be."
            />
            <div className="mt-8 border-t border-ink/15">
              {[
                ["Partnership desk", "partners@kaberakin.org"],
                ["Telephone", "0800 720 KIN"],
                ["Review cycle", "Applications reviewed monthly"],
                ["Next intake", "November 2026"],
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
            <div className="mt-8 border-l border-clay/50 pl-5">
              <p className="display-italic text-2xl leading-snug text-forest/80">
                “The animals do not care which organisation gets the credit.”
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border border-ink/15 bg-linen p-6 sm:p-9">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="shell flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div>
            <p className="eyebrow text-paper/60">Emergency dispatch</p>
            <h2 className="h2-editorial mt-4 max-w-2xl text-paper">
              When an animal is in danger, the network answers together.
            </h2>
          </div>
          <Link href="/help-an-animal" className="btn-light shrink-0">
            Welfare & rescue
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
