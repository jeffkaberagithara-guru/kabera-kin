import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/faq";
import { SectionHeading } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  ClockIcon,
  LeafIcon,
  ShieldIcon,
} from "@/components/icons";
import { imagery } from "@/lib/animals";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Care library",
  description:
    "Practical, Kenya-specific guidance for companion animal care: settling in, nutrition, enrichment, heat, travel, and knowing when to call a vet.",
};

const guides = [
  {
    category: "Settling in",
    title: "The first thirty days",
    summary:
      "A week-by-week plan for a newly adopted animal: space, routine, introductions, and the quiet art of doing less.",
    read: "8 min",
    points: ["A safe room for the first 72 hours", "Introducing resident animals slowly", "When to begin short walks"],
  },
  {
    category: "Nutrition",
    title: "Feeding without guesswork",
    summary:
      "How much, how often, and what to avoid in the Kenyan market. Includes guidance for puppies, seniors, and cats.",
    read: "6 min",
    points: ["Reading a label honestly", "Portion by weight, not by bowl", "Foods that are genuinely dangerous"],
  },
  {
    category: "Enrichment",
    title: "A tired animal is not a fulfilled one",
    summary:
      "Sniffing, chewing, climbing, and problem-solving matter more than distance walked. Simple enrichment for small homes.",
    read: "5 min",
    points: ["Five-minute scent games", "Scatter feeding and puzzle boxes", "Indoor enrichment for cats"],
  },
  {
    category: "Health",
    title: "When to call the vet",
    summary:
      "The signs that should not wait: breathing, gums, drinking, urination, and the subtle changes owners notice first.",
    read: "4 min",
    points: ["Emergency signs in dogs and cats", "What to bring to an appointment", "Heat and tick-borne disease in Kenya"],
  },
  {
    category: "Heat & season",
    title: "Nairobi heat, and the long rains",
    summary:
      "Practical adjustments for hot afternoons, flooded roads, and the respiratory and skin issues that follow the rains.",
    read: "5 min",
    points: ["Shade, water, and walk timing", "Paw and skin checks", "Flood safety and evacuation"],
  },
  {
    category: "Travel",
    title: "Moving house, moving country",
    summary:
      "How to prepare an animal for a move, what documents matter, and how to reduce stress in transit by road or air.",
    read: "7 min",
    points: ["Crate familiarisation", "Vaccination and travel certificates", "The first week in a new home"],
  },
];

const firstMonth = [
  { week: "Days 1–3", title: "Do almost nothing", body: "Quiet room, predictable meals, short toilet breaks. No visitors, no introductions, no long walks." },
  { week: "Days 4–7", title: "Begin a rhythm", body: "Same feeding and walking times. Sit nearby without demanding contact. Let the animal approach you." },
  { week: "Week 2", title: "Introduce the household", body: "Resident animals first, on neutral ground, one at a time. Keep sessions short and end on a calm note." },
  { week: "Weeks 3–4", title: "Expand the world", body: "Longer walks, a visitor or two, a short car trip. Watch for fatigue and retreat to the safe room." },
];

const faqs = [
  {
    question: "What should I feed a newly adopted dog or cat?",
    answer:
      "Keep feeding whatever the sanctuary or foster home used for the first two weeks. Sudden changes cause digestive upset. If you want to change food, transition over seven to ten days by mixing increasing proportions of the new food. Choose a complete food appropriate to life stage, and measure portions by weight.",
  },
  {
    question: "How do I know if my animal is in pain?",
    answer:
      "Animals hide pain well. Watch for changes in appetite, sleep position, gait, grooming, and tolerance of touch. A dog who stops jumping onto the sofa or a cat who stops using a high shelf may be telling you something. When in doubt, call your vet.",
  },
  {
    question: "Is a garden essential?",
    answer:
      "No. A secure garden is useful for some dogs, but a committed walking routine and mental enrichment matter more. Cats should be kept indoors or in a secure enclosure, particularly near roads and wildlife areas.",
  },
  {
    question: "How often should I vaccinate?",
    answer:
      "Follow your veterinarian's schedule. Core vaccines are typically given in a puppy or kitten course, then boosted at one year, then every one to three years depending on the vaccine and local risk. Rabies vaccination is required by law in Kenya.",
  },
];

export default function CarePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.care}
            alt="A carer sitting with a companion animal"
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
              <p className="eyebrow text-clay-deep">The care library</p>
            </div>
            <h1 className="display mt-7 text-[clamp(3rem,7.4vw,6rem)] text-forest">
              Care is a
              <br />
              <em className="text-clay-deep">practice.</em>
            </h1>
            <p className="lede mt-7 max-w-xl">
              Practical, Kenya-specific guidance for the ordinary work of looking
              after an animal: feeding, settling, heat, travel, and knowing when
              to ask for help.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <a href="#guides" className="link-arrow">
                Browse the guides
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
              <Link href="/contact" className="link-arrow">
                Ask a care question
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone arch">
              <Image
                src={imagery.care}
                alt="A carer preparing food for a rescue animal"
                fill
                priority
                className="image-warm object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 to-transparent p-6 pt-24 text-paper">
                <p className="eyebrow text-[8px] text-paper/60">Karen Ridge · Care team</p>
                <p className="mt-2 font-fraunces text-xl leading-snug">
                  “Most good care is boring, repeated, and unphotographed.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-paper">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-clay">Start here</p>
            <h2 className="h2-editorial mt-5 text-paper">
              The first
              <br />
              thirty days.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.8] text-paper/60">
              A newly adopted animal is not a blank slate. They are carrying the
              habits, fears, and small preferences of a previous life. Give them
              time to unpack.
            </p>
            <div className="mt-8 border-l border-clay/50 pl-5">
              <p className="display-italic text-2xl leading-snug text-paper/90">
                “The kindest thing you can do in the first week is less than you
                want to.”
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-[11px] text-paper/45">
              <ClockIcon className="h-4 w-4 text-clay" />
              A printable settling plan is included with every adoption.
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-paper/15">
              {firstMonth.map((step) => (
                <div
                  key={step.week}
                  className="grid gap-3 border-b border-paper/15 py-5 sm:grid-cols-8 sm:gap-5"
                >
                  <p className="eyebrow text-[8px] text-clay sm:col-span-2">{step.week}</p>
                  <div className="sm:col-span-6">
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
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24" id="guides">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <SectionHeading
            index="01"
            eyebrow="Guides"
            title="Six things worth knowing."
            intro="Written by our care team and reviewed by a consulting veterinarian. No affiliate links, no product placements."
            className="lg:col-span-4"
          />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {guides.map((guide) => (
              <article key={guide.title} className="card-lift border-t border-ink/15 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="eyebrow text-[8px] text-clay-deep">{guide.category}</p>
                  <p className="eyebrow text-[8px] text-ink/35">{guide.read}</p>
                </div>
                <h3 className="mt-4 font-fraunces text-[25px] leading-tight tracking-tight text-forest">
                  {guide.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.75] text-ink/60">
                  {guide.summary}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {guide.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[11.5px] leading-relaxed text-ink/50">
                      <CheckIcon className="mt-0.5 h-3 w-3 shrink-0 text-moss" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeading
              index="02"
              eyebrow="Red flags"
              title="When not to wait."
              intro="Call your veterinarian or our rescue desk if you see any of the following. It is always acceptable to ask."
            />
            <div className="mt-8 border border-clay/30 bg-clay/5 p-5">
              <p className="flex items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.12em] text-clay-deep">
                <ShieldIcon className="h-4 w-4" />
                24-hour rescue desk
              </p>
              <a href="tel:0800720546" className="mt-3 block font-fraunces text-3xl text-forest">
                0800 720 KIN
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-ink/15">
              {[
                "Laboured breathing, blue or pale gums, or collapse",
                "Repeated vomiting, bloody diarrhoea, or inability to keep water down",
                "Straining to urinate, especially in male cats",
                "Sudden swelling, non-weight-bearing lameness, or a wound that will not stop bleeding",
                "Seizures, disorientation, or a body temperature that feels dangerously high",
                "Refusal to eat for more than 24 hours in a puppy or kitten, or 48 hours in an adult",
              ].map((sign) => (
                <li key={sign} className="flex items-start gap-3 border-b border-ink/15 py-4">
                  <LeafIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay-deep" />
                  <span className="text-[13.5px] leading-[1.7] text-ink/65">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Care questions" title="The ones we hear most." />
            <p className="mt-5 text-[13px] leading-relaxed text-ink/50">
              For anything specific to your animal, call your veterinarian. For
              general guidance, the placement desk is happy to point you in the
              right direction.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="shell flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div>
            <p className="eyebrow text-paper/60">Need a hand?</p>
            <h2 className="h2-editorial mt-4 max-w-2xl text-paper">
              We would rather answer a small question than manage a big problem.
            </h2>
          </div>
          <Link href="/contact" className="btn-light shrink-0">
            Ask the care team
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
