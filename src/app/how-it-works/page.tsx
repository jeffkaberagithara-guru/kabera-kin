import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/faq";
import { SectionHeading, PullQuote } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  ClockIcon,
  XIcon,
} from "@/components/icons";
import { imagery } from "@/lib/animals";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "How adoption works",
  description:
    "Kabera Kin's five-stage adoption protocol: enquiry, conversation, sanctuary meeting, home visit, and a gradual homecoming with lifetime support.",
};

const stages = [
  {
    number: "01",
    title: "A note, not an application",
    timing: "Day one",
    body: "Tell us who you are, how your days are shaped, and which dossier caught your attention. There is no form to game and no right answer. A placement officer reads every note personally.",
    details: ["Five minutes to complete", "No fee at any stage", "A human reply within two working days"],
  },
  {
    number: "02",
    title: "A proper conversation",
    timing: "Days two to four",
    body: "We ask about your household, working hours, other animals, and the kind of life you want to build. We will also tell you what the animal genuinely needs — including the parts that are inconvenient.",
    details: ["Twenty minutes by phone or video", "Every adult in the home included", "Honest notes on fit and friction"],
  },
  {
    number: "03",
    title: "Meet at the sanctuary",
    timing: "Within one week",
    body: "One or two unhurried visits. Walk together, sit quietly, watch how the animal responds to you. Our behaviourist joins if the dossier calls for it. You are welcome to leave undecided.",
    details: ["Supervised by a carer", "Bring the whole household", "Children and resident dogs welcome"],
  },
  {
    number: "04",
    title: "A home visit",
    timing: "Before placement",
    body: "Not an inspection. We look at fencing, windows, traffic, shade, and the practical rhythm of the space. We will suggest small changes if needed, and help you make them.",
    details: ["Thirty to forty-five minutes", "Practical, not performative", "Support with any adjustments"],
  },
  {
    number: "05",
    title: "A gradual homecoming",
    timing: "Day of placement onwards",
    body: "Most companions begin with a two-week settling period. We deliver, stay for the first hour, and check in at week one, month one, and month three. If the match is not right, the animal returns to us — always.",
    details: ["Settling plan in writing", "Direct line to the placement team", "Lifetime return promise"],
  },
];

const faqs = [
  {
    question: "Is there an adoption fee?",
    answer:
      "No. Kabera Kin does not charge for adoption. We ask adopters to cover routine costs after placement — food, routine veterinary care, and insurance if they choose it — and we maintain a medical fund for unexpected treatment. No animal is ever sold.",
  },
  {
    question: "Can I adopt if I rent my home?",
    answer:
      "Yes, provided your landlord permits animals in writing and the space is safe. We will ask to see that permission during the home visit. Renters make excellent adopters; stability matters more than ownership.",
  },
  {
    question: "Do you place animals outside Nairobi?",
    answer:
      "We place across Kenya where we can complete a home visit and provide follow-up support. Placements in Mombasa, Kisumu, and Eldoret are considered case by case with a local partner organisation.",
  },
  {
    question: "What happens if the match does not settle?",
    answer:
      "You call us. There is no judgement and no penalty. We will work with you on a behaviour or settling plan, and if the match still is not right, the animal returns to the sanctuary. Returning an animal is always better than keeping a struggling one.",
  },
  {
    question: "Can I meet an animal before enquiring?",
    answer:
      "Yes. Open mornings run every Saturday from 09:00 to 12:00 at Karen Ridge and Runda. You do not need an appointment or an application. Come and spend time with the animals without any expectation.",
  },
  {
    question: "Do you separate bonded pairs?",
    answer:
      "Never. If a dossier notes a bonded pair, they are placed together or not at all. We would rather wait eighteen months for the right home than split siblings who rely on one another.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.howItWorks}
            alt="A dog in the care of the sanctuary"
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
              <p className="eyebrow text-clay-deep">The adoption protocol</p>
            </div>
            <h1 className="display mt-7 text-[clamp(3rem,7.6vw,6.2rem)] text-forest">
              A considered
              <br />
              route <em className="text-clay-deep">home.</em>
            </h1>
            <p className="lede mt-7 max-w-xl">
              Adoption is not a transaction. It is a transfer of trust, and it
              deserves time. Here is exactly what happens, in what order, and
              what we will ask of you.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/adopt" className="link-arrow">
                Read a dossier first
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
              <p className="flex items-center gap-2 text-[12px] text-ink/45">
                <ClockIcon className="h-3.5 w-3.5" />
                Average journey · 11 days
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone arch">
              <Image
                src={imagery.hands}
                alt="A placement officer sitting with a rescue dog"
                fill
                priority
                className="image-warm object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/80 to-transparent p-6 pt-20">
                <p className="eyebrow text-[8px] text-paper/70">Karen Ridge · Placement desk</p>
                <p className="mt-2 font-fraunces text-2xl leading-tight text-paper">
                  “We are not looking for perfect homes. We are looking for
                  honest ones.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeading
            index="01"
            eyebrow="The five stages"
            title={
              <>
                From first note
                <br className="hidden sm:block" /> to homecoming.
              </>
            }
            intro="Each stage has a purpose. None of them is a hurdle. If at any point the answer is not yet, we will tell you why — and what could change it."
            className="lg:col-span-4"
          />
          <div className="lg:col-span-8">
            <div className="border-t border-ink/15">
              {stages.map((stage) => (
                <article
                  key={stage.number}
                  className="grid gap-5 border-b border-ink/15 py-8 sm:grid-cols-12 sm:gap-6 lg:py-10"
                >
                  <div className="sm:col-span-2">
                    <span className="font-fraunces text-[13px] italic text-clay-deep">
                      {stage.number}
                    </span>
                    <p className="eyebrow mt-3 text-[8px] leading-relaxed text-ink/35">
                      {stage.timing}
                    </p>
                  </div>
                  <div className="sm:col-span-6">
                    <h2 className="font-fraunces text-[clamp(1.55rem,2.5vw,2.1rem)] leading-tight tracking-tight text-forest">
                      {stage.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-[1.8] text-ink/65">
                      {stage.body}
                    </p>
                  </div>
                  <ul className="space-y-2 sm:col-span-4">
                    {stage.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-[11.5px] leading-relaxed text-ink/55"
                      >
                        <CheckIcon className="mt-0.5 h-3 w-3 shrink-0 text-moss" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-paper">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-clay">What we look for</p>
            <h2 className="h2-editorial mt-5 text-paper">
              Honesty, stability,
              <br />
              and a little patience.
            </h2>
            <ul className="mt-8 space-y-0 border-t border-paper/15">
              {[
                "Stable housing where animals are permitted",
                "Consent and involvement from every adult at home",
                "A realistic daily routine that includes the animal",
                "A budget for food and routine veterinary care",
                "Willingness to ask for help when it is needed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-paper/15 py-4">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                  <span className="text-[13.5px] leading-relaxed text-paper/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-paper/40">What we never require</p>
            <h2 className="h2-editorial mt-5 text-paper/90">
              Perfection is
              <br />
              not a criterion.
            </h2>
            <ul className="mt-8 space-y-0 border-t border-paper/15">
              {[
                "Home ownership or a large garden",
                "Previous experience with animals",
                "A work-from-home schedule",
                "A one-off fee or a minimum donation",
                "A spotless house or a finished garden",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-paper/15 py-4">
                  <XIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-paper/35" />
                  <span className="text-[13.5px] leading-relaxed text-paper/50">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-l border-clay/50 pl-5">
              <PullQuote tone="light">
                The best adopters are rarely the most prepared. They are the most
                willing to learn.
              </PullQuote>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading
              index="02"
              eyebrow="Questions"
              title="Before you begin."
              intro="If your question is not here, call the placement desk. A person will answer."
            />
            <div className="mt-8 border-t border-ink/15 pt-6">
              <p className="label">Placement desk</p>
              <a href="tel:0800720546" className="mt-2 block font-fraunces text-2xl text-forest">
                0800 720 KIN
              </a>
              <p className="mt-2 text-[12px] text-ink/45">Mon–Sat · 08:00–17:00 EAT</p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="shell flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div>
            <p className="eyebrow text-paper/60">Ready when you are</p>
            <h2 className="h2-editorial mt-4 max-w-2xl text-paper">
              Read a dossier. Take your time. Write when it feels right.
            </h2>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/adopt" className="btn-light">
              Meet the companions
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-light-outline">
              Speak to the desk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
