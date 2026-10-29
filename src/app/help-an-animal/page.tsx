import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WelfareReportForm } from "@/components/welfare-report-form";
import { SectionHeading } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ClockIcon,
  PhoneIcon,
  ShieldIcon,
  XIcon,
} from "@/components/icons";
import { imagery } from "@/lib/animals";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Welfare & rescue",
  description:
    "Report an animal in danger, injury, or neglect. Kabera Kin's 24-hour rescue desk covers Nairobi, Kiambu, Nakuru, and Kajiado with partner veterinary teams.",
};

const triage = [
  {
    tone: "urgent" as const,
    label: "Immediate danger",
    title: "Call the 24-hour desk.",
    body: "Road traffic injury, poisoning, deliberate harm, an animal trapped or unable to move. Call, then send a location pin by WhatsApp if you can.",
    action: "Call 0800 720 KIN",
    href: "tel:0800720546",
  },
  {
    tone: "note" as const,
    label: "Injured or sick",
    title: "Call, or send a report.",
    body: "Wounds, emaciation, untreated infection, or a stray in obvious distress. A welfare officer will triage within the hour during daylight.",
    action: "Submit a report",
    href: "#report",
  },
  {
    tone: "calm" as const,
    label: "Concern, no danger",
    title: "Write it down properly.",
    body: "A neighbour's dog without shelter, a cat left behind after a move, a community stray needing sterilisation. We log every report and follow up.",
    action: "Open the report form",
    href: "#report",
  },
];

const callSteps = [
  {
    number: "01",
    title: "You call. A person answers.",
    body: "Our desk is staffed by a trained welfare officer, not a call centre. Give the location, the condition, and whether the animal can be safely approached.",
  },
  {
    number: "02",
    title: "We triage, immediately.",
    body: "Life-threatening cases are dispatched first. If the animal is stable, we may ask you to stay nearby, keep others back, or send a photograph.",
  },
  {
    number: "03",
    title: "A field team responds.",
    body: "Our nearest team or partner clinic attends. Response time ranges from twenty minutes in Karen to two hours in outlying areas.",
  },
  {
    number: "04",
    title: "The animal enters care.",
    body: "Treatment, shelter, and a welfare assessment follow. You will receive an outcome update by SMS if you leave a number.",
  },
];

const safety = [
  "Do not approach a frightened or injured animal without guidance.",
  "Never move an animal suspected of spinal injury.",
  "Do not offer food or water to an unconscious animal.",
  "Keep children and other animals at a safe distance.",
  "If the animal is in traffic, call first — do not step into the road.",
];

export default function HelpAnAnimalPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10 bg-forest-deep text-paper">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.help}
            alt="A close portrait of a rescue dog"
            fill
            priority
            className="object-cover opacity-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/65 to-forest-deep/25" />
        </div>
        <div className="shell grid gap-12 py-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-20">
          <div className="relative z-10 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
              </span>
              <p className="eyebrow text-paper/60">Welfare & rescue · 24 hours</p>
            </div>
            <h1 className="display mt-7 text-[clamp(3rem,7.4vw,6rem)] text-paper">
              If an animal
              <br />
              is in danger,
              <br />
              <em className="text-clay">call first.</em>
            </h1>
            <p className="mt-7 max-w-xl text-[15.5px] leading-[1.8] text-paper/65">
              Our rescue desk covers Nairobi, Kiambu, Nakuru, and Kajiado with
              partner veterinary teams. Calls are answered by a trained welfare
              officer, day or night.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:0800720546" className="btn-light">
                <PhoneIcon className="h-4 w-4" />
                0800 720 KIN
              </a>
              <a href="#report" className="btn-light-outline">
                Submit a written report
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-5 text-[11px] text-paper/45">
              <p className="flex items-center gap-2">
                <ClockIcon className="h-3.5 w-3.5 text-clay" />
                Average urban response · 34 minutes
              </p>
              <p className="flex items-center gap-2">
                <ShieldIcon className="h-3.5 w-3.5 text-clay" />
                KSPCA registered field network
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone arch">
              <Image
                src={imagery.rescue}
                alt="A rescue animal being examined by a welfare officer in a field setting"
                fill
                priority
                className="image-warm object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/90 to-transparent p-6 pt-20">
                <p className="eyebrow text-[8px] text-paper/60">Field note · Naivasha</p>
                <p className="mt-2 font-fraunces text-xl leading-snug text-paper">
                  “The call that changes an animal&apos;s day rarely takes more than
                  four minutes.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <SectionHeading
          index="01"
          eyebrow="Triage"
          title="What is happening, exactly?"
          intro="Choose the closest description. If you are unsure, call. It is always better to over-report than to wait."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {triage.map((item) => (
            <article
              key={item.label}
              className={`flex flex-col border-t-2 p-6 ${
                item.tone === "urgent"
                  ? "border-clay bg-clay/5"
                  : item.tone === "note"
                    ? "border-forest/40 bg-paper"
                    : "border-ink/20 bg-paper"
              }`}
            >
              <p
                className={`eyebrow text-[8px] ${
                  item.tone === "urgent" ? "text-clay-deep" : "text-ink/40"
                }`}
              >
                {item.label}
              </p>
              <h2 className="mt-4 font-fraunces text-[27px] leading-tight tracking-tight text-forest">
                {item.title}
              </h2>
              <p className="mt-3 flex-1 text-[13.5px] leading-[1.75] text-ink/60">
                {item.body}
              </p>
              <a
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.13em] text-clay-deep transition hover:text-forest"
              >
                {item.action}
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-4">
            <SectionHeading
              index="02"
              eyebrow="What happens next"
              title="From your call to care."
              intro="No report disappears into a void. Every case receives a reference and an outcome note."
            />
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-0 border-t border-ink/15 sm:grid-cols-2">
              {callSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`border-b border-ink/15 py-6 sm:px-6 ${
                    index % 2 === 0 ? "sm:pl-0" : "sm:border-l"
                  }`}
                >
                  <span className="font-fraunces text-[12px] italic text-clay-deep">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-fraunces text-[22px] leading-tight tracking-tight text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.75] text-ink/60">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24" id="report">
        <div className="lg:col-span-5">
          <SectionHeading
            index="03"
            eyebrow="Written report"
            title="Tell us what you saw."
            intro="Use this form for concerns that are not immediately life-threatening. For an animal in danger right now, please call the desk."
          />
          <div className="mt-8 border border-clay/25 bg-clay/5 p-5">
            <p className="eyebrow text-clay-deep">Keep yourself safe</p>
            <ul className="mt-4 space-y-3">
              {safety.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink/65">
                  <XIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 hidden border-t border-ink/15 pt-6 lg:block">
            <p className="label">Emergency desk</p>
            <a href="tel:0800720546" className="mt-2 block font-fraunces text-3xl text-forest">
              0800 720 KIN
            </a>
            <p className="mt-2 text-[12px] text-ink/45">Answered 24 hours, every day</p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="border border-ink/15 bg-linen p-6 sm:p-9">
            <WelfareReportForm />
          </div>
        </div>
      </section>

      <section className="bg-sand/60">
        <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-clay-deep">Beyond the rescue</p>
            <h2 className="h2-editorial mt-4 max-w-2xl text-forest">
              Rescue is the emergency. Prevention is the work.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-ink/60">
              Our community programme runs free sterilisation clinics, school
              welfare lessons, and a network of trained local monitors. It is
              slower than a rescue, and it changes more lives.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/donate" className="link-arrow">
                Fund the medical work
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
              <Link href="/partners" className="link-arrow">
                Our welfare network
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-ink/15">
              {[
                ["1,840", "Animals treated in 2025"],
                ["612", "Free sterilisation procedures"],
                ["27", "Community monitors trained"],
              ].map(([value, label]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-4">
                  <span className="font-fraunces text-3xl text-forest">{value}</span>
                  <span className="max-w-[9rem] text-right font-manrope text-[9px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-ink/45">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
