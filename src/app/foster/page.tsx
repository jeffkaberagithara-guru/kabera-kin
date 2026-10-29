import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimalCard } from "@/components/animal-card";
import { EnquiryForm } from "@/components/enquiry-form";
import { FAQ } from "@/components/faq";
import { SectionHeading, StatRow } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  ClockIcon,
  HeartIcon,
  LeafIcon,
  PawIcon,
  ShieldIcon,
} from "@/components/icons";
import { animals, imagery } from "@/lib/animals";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Foster & care",
  description:
    "Foster a recovery, a litter, or a senior companion. Kabera Kin provides food, veterinary care, equipment, and a direct line to our behaviour team.",
};

const fosterNeeds = animals.filter((animal) =>
  ["kito", "amani-kendi", "baraka"].includes(animal.slug),
);

const support = [
  { icon: PawIcon, title: "Food & equipment", body: "Bedding, crates, lead, bowls, and species-appropriate food for the full placement." },
  { icon: ShieldIcon, title: "Veterinary cover", body: "All medical care at our partner clinics, including emergency treatment, at no cost to you." },
  { icon: LeafIcon, title: "Behaviour support", body: "A named behaviourist, a written settling plan, and a direct line for the difficult days." },
  { icon: HeartIcon, title: "A real handover", body: "We bring the animal to you, stay for the first hour, and check in weekly." },
];

const asks = [
  "A quiet room or secure space separate from other animals at first",
  "A daily routine that includes feeding, walking, and company",
  "Willingness to follow the settling and training plan",
  "Transport to veterinary appointments, or a call so we can arrange it",
  "Honest updates — especially when something is not working",
];

const faqs = [
  {
    question: "How long does a foster placement last?",
    answer:
      "It depends on the animal. A medical recovery may be three to six weeks. A puppy or kitten may stay until adoption, often two to four months. Senior hospice placements can last considerably longer. We discuss the expected duration before you commit.",
  },
  {
    question: "Can I foster if I work full-time?",
    answer:
      "Often, yes — but it depends on the animal. Adult dogs who are comfortable alone for a normal working day can suit a full-time household. Puppies, kittens, and animals recovering from surgery need more frequent company. We will match accordingly.",
  },
  {
    question: "What if I want to adopt my foster animal?",
    answer:
      "Foster carers are welcome to apply to adopt. They go through the same assessment as any other adopter, and we do not give preferential treatment — but we do know the animal exceptionally well by then, which helps everyone.",
  },
  {
    question: "Do I need previous experience?",
    answer:
      "No. First-time foster carers are often the most careful. We provide a full induction, a written plan, and a named contact. What matters is patience, consistency, and the willingness to ask questions.",
  },
];

export default function FosterPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.foster}
            alt="A foster carer and a dog sharing a quiet moment"
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
              <p className="eyebrow text-clay-deep">Foster & care</p>
            </div>
            <h1 className="display mt-7 text-[clamp(3rem,7.4vw,6rem)] text-forest">
              A room. A routine.
              <br />
              A bridge <em className="text-clay-deep">home.</em>
            </h1>
            <p className="lede mt-7 max-w-xl">
              Fostering is not a forever commitment. It is the interval in which
              an animal remembers how to live in a home — and the difference
              between a kennel and a family.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#foster-form" className="btn-primary">
                Apply to foster
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/how-it-works" className="btn-quiet">
                How placement works
              </Link>
            </div>
            <div className="mt-12 max-w-lg border-t border-ink/15 pt-6">
              <StatRow
                stats={[
                  { value: "126", label: "Foster placements in 2025" },
                  { value: "71%", label: "Fosters who adopt" },
                  { value: "4", label: "Stations across Kenya" },
                ]}
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone arch">
                <Image
                  src={imagery.foster}
                  alt="A foster carer sitting beside a rescue dog in a calm home environment"
                  fill
                  priority
                  className="image-warm object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="relative -mt-12 ml-6 mr-2 border border-ink/10 bg-paper p-5 shadow-editorial lg:-ml-10">
                <p className="eyebrow text-[8px] text-clay-deep">A foster note</p>
                <p className="mt-3 font-fraunces text-xl italic leading-snug text-forest">
                  “The first night, she slept beside the bed. By the third week,
                  she had opinions about the sofa.”
                </p>
                <p className="mt-3 text-[11px] text-ink/45">Njeri M. · Tigoni foster carer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <SectionHeading
            index="01"
            eyebrow="Before you apply"
            title={
              <>
                We bring almost
                <br className="hidden sm:block" /> everything.
              </>
            }
            intro="Fostering should not cost you money. It asks for time, consistency, and a safe room. We cover the rest — including the parts that are expensive."
            className="lg:col-span-4"
          />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {support.map((item) => (
              <div key={item.title} className="border-t border-ink/15 pt-5">
                <item.icon className="h-5 w-5 text-clay-deep" />
                <h3 className="mt-4 font-fraunces text-[24px] leading-tight tracking-tight text-forest">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.75] text-ink/60">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-paper">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-clay">What we ask</p>
            <h2 className="h2-editorial mt-5 text-paper">
              Five small
              <br />
              commitments.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.8] text-paper/60">
              These are not tests. They are the conditions under which an animal
              can settle, and under which we can support you properly.
            </p>
            <div className="mt-8 border-l border-clay/50 pl-5">
              <p className="display-italic text-2xl leading-snug text-paper/90">
                “A foster home does not need to be calm. It needs to be
                consistent.”
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-paper/15">
              {asks.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-paper/15 py-5"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                  <span className="text-[14px] leading-relaxed text-paper/75">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 divide-x divide-paper/15 border-t border-paper/15 pt-6">
              {[
                ["Induction", "2 hours"],
                ["First check-in", "Week one"],
                ["Ongoing", "Weekly"],
              ].map(([label, value], index) => (
                <div key={label} className={index === 0 ? "pr-3" : "px-3 last:pr-0"}>
                  <p className="eyebrow text-[8px] text-paper/35">{label}</p>
                  <p className="mt-2 font-fraunces text-xl text-paper">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <SectionHeading
            index="02"
            eyebrow="Currently seeking foster"
            title="Three placements, open now."
            intro="These companions would settle faster in a home than in a kennel. Each has a written plan and a named behaviour contact."
            className="lg:col-span-8"
          />
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link href="/adopt" className="link-arrow">
              All companions
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {fosterNeeds.map((animal) => (
            <div key={animal.slug} className="flex flex-col">
              <AnimalCard animal={animal} />
              <div className="mt-4 flex items-center gap-2 border-t border-ink/15 pt-3 text-[11px] text-ink/50">
                <ClockIcon className="h-3.5 w-3.5 text-clay-deep" />
                {animal.intake} · foster plan available
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand/60">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5" id="foster-form">
            <SectionHeading
              index="03"
              eyebrow="Apply"
              title="Tell us about the room you could offer."
              intro="A foster officer will reply within two working days. If you are unsure which placement suits you, say so — that is what the conversation is for."
            />
            <div className="mt-10 hidden border-t border-ink/15 pt-6 lg:block">
              <p className="label">Foster desk</p>
              <a href="tel:0800720546" className="mt-2 block font-fraunces text-2xl text-forest">
                0800 720 KIN
              </a>
              <p className="mt-2 text-[12px] text-ink/45">
                Mon–Sat · 08:00–17:00 EAT
              </p>
            </div>
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden bg-stone lg:block">
              <Image
                src={imagery.hands}
                alt=""
                fill
                className="image-warm object-cover"
                sizes="38vw"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border border-ink/15 bg-linen p-6 sm:p-9">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Fostering, answered" title="The practical questions." />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
