import Image from "next/image";
import Link from "next/link";
import { AnimalCard } from "@/components/animal-card";
import { SanctuaryFilm } from "@/components/sanctuary-film";
import { SectionHeading, PullQuote, StatRow } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  LeafIcon,
  PawIcon,
  ShieldIcon,
} from "@/components/icons";
import { featuredAnimals, getAnimal, imagery, registryStats } from "@/lib/animals";
import { heroImages, media } from "@/lib/images";

const simba = getAnimal("simba")!;
const [, nyota, baraka] = featuredAnimals;

const principles = [
  {
    icon: ShieldIcon,
    title: "Assessed, not guessed",
    body: "Every animal is medically screened and behaviourally assessed before a profile is published.",
  },
  {
    icon: PawIcon,
    title: "Matched for life",
    body: "We place by temperament, routine, and home — never by urgency or appearance alone.",
  },
  {
    icon: LeafIcon,
    title: "Supported after home",
    body: "Settling-in visits, a direct line to our team, and a lifetime return promise for every adoption.",
  },
];

const steps = [
  {
    number: "01",
    title: "Read the dossier",
    body: "Each profile is written by the people who know the animal best: temperament, medical history, and honest notes on home fit.",
  },
  {
    number: "02",
    title: "Begin a conversation",
    body: "A short application helps us understand your household. No fees, no performance, no perfect answers required.",
  },
  {
    number: "03",
    title: "Meet, slowly",
    body: "One or two supervised visits at the sanctuary or in your home, with a behaviourist present if needed.",
  },
  {
    number: "04",
    title: "Come home",
    body: "We deliver, settle, and check in at week one, month one, and month three. The relationship does not end at the gate.",
  },
];

const stories = [
  {
    category: "Adoption",
    title: "The quiet maths of a second chance",
    excerpt:
      "What a senior hound taught a family about patience, and why the slowest matches often hold.",
    image: imagery.hands,
    href: "/stories",
    date: "September 2026",
  },
  {
    category: "Field notes",
    title: "A morning on the Ngong forest edge",
    excerpt:
      "Our rescue team on early calls, community trust, and the animals who find us before we find them.",
    image: imagery.hero,
    href: "/stories",
    date: "August 2026",
  },
  {
    category: "Welfare",
    title: "What good fostering actually asks of you",
    excerpt:
      "Not a forever home. Not a finished dog. Just a safe room, a routine, and the willingness to let go.",
    image: imagery.care,
    href: "/stories",
    date: "July 2026",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden min-h-[90svh] lg:min-h-[92svh]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.home}
            alt="A rescue dog in the tall grass at the sanctuary"
            fill
            priority
            className="object-cover opacity-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-linen/95 via-linen/80 to-linen/40" />
        </div>
        <div className="shell grid items-end gap-12 pb-12 pt-8 sm:pb-16 sm:pt-10 lg:grid-cols-12 lg:gap-8 lg:pb-16 xl:pb-20" style={{minHeight: 'calc(90svh - 72px)'}}>
          <div className="relative z-10 lg:col-span-7 lg:pb-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-clay" />
              <p className="eyebrow text-clay-deep">
                Karen, Kenya · Sanctuary & registry
              </p>
            </div>

            <h1 className="display mt-8 text-[clamp(3.4rem,8.6vw,7.6rem)] text-forest">
              A <em className="text-clay-deep">kinder</em>
              <br />
              way home.
            </h1>

            <p className="lede mt-8 max-w-lg">
              Kabera Kin is a Kenyan animal welfare sanctuary and civic
              registry — for animals in need, and for the people ready to meet
              them with care.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/adopt" className="btn-primary w-full sm:w-auto justify-center">
                Meet the companions
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/how-it-works" className="btn-quiet w-full sm:w-auto justify-center">
                How adoption works
              </Link>
            </div>

            <div className="mt-10 sm:mt-14 max-w-xl border-t border-ink/15 pt-6">
              <StatRow stats={registryStats} />
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 hidden h-2/3 w-2/3 bg-clay/10 lg:block"
            />
            <div className="relative">
              <div               className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-stone arch">
                <Image
                  src={imagery.sanctuary}
                  alt="A calm sanctuary setting with a rescued dog in afternoon light"
                  fill
                  priority
                  className="image-warm object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 via-transparent to-transparent" />
                <span className="eyebrow absolute left-5 top-6 bg-paper/90 px-3 py-2 text-[8px] text-forest">
                  Featured companion
                </span>
              </div>

              <div                 className="relative -mt-10 sm:-mt-14 ml-2 sm:ml-4 mr-4 sm:mr-8 border border-ink/10 bg-paper p-4 sm:p-5 shadow-editorial sm:ml-8 lg:-ml-12 lg:mr-0 lg:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-ink/40">KK-904 · Karen Ridge</p>
                    <h2 className="mt-2 font-fraunces text-3xl leading-none tracking-tight text-forest">
                      Simba
                    </h2>
                    <p className="mt-2 text-[12px] text-ink/60">
                      2 years · Ridgeback mix · 26 kg
                    </p>
                  </div>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay-deep">
                    <PawIcon className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-4 border-t border-ink/10 pt-4 text-[13px] leading-relaxed text-ink/65">
                  {simba.summary}
                </p>
                <Link
                  href="/adopt/simba"
                  className="mt-4 inline-flex items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.14em] text-clay-deep transition hover:text-forest"
                >
                  Read his dossier
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="shell grid gap-10 py-14 md:grid-cols-3 md:gap-8 lg:py-16">
          {principles.map((principle) => (
            <div key={principle.title} className="flex gap-4">
              <principle.icon className="mt-1 h-5 w-5 shrink-0 text-clay-deep" />
              <div>
                <h2 className="font-manrope text-[11px] font-semibold uppercase tracking-[0.14em] text-forest">
                  {principle.title}
                </h2>
                <p className="mt-2 max-w-xs text-[13.5px] leading-relaxed text-ink/60">
                  {principle.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-14 sm:py-16 lg:py-20 xl:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <SectionHeading
            index="01"
            eyebrow="The registry"
            title={
              <>
                Companions currently
                <br className="hidden sm:block" /> in our care.
              </>
            }
            intro="Nine animals are ready to meet you. Each has a full dossier: medical record, temperament notes, and an honest account of the home they need."
            className="lg:col-span-8"
          />
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link href="/adopt" className="link-arrow">
              View the full registry
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <AnimalCard animal={simba} variant="feature" />
          </div>
          <div className="flex flex-col gap-8 lg:col-span-5 lg:pl-4">
            <AnimalCard animal={nyota} variant="compact" />
            <AnimalCard animal={baraka} variant="compact" />
            <div className="mt-auto border-t border-ink/15 pt-6">
              <p className="font-fraunces text-xl italic leading-snug text-forest/80">
                Not sure who fits? Tell us about your home and we will suggest
                three companions.
              </p>
              <Link href="/adopt" className="mt-4 inline-flex items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.14em] text-clay-deep">
                Start a match note
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-paper">
        <div className="shell grid gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24 xl:py-28">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden arch">
              <Image
                src={imagery.hands}
                alt="A carer resting a hand gently on a rescue dog"
                fill
                className="image-warm object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-44 border border-paper/15 bg-forest-deep p-4 sm:block lg:-right-10">
              <p className="eyebrow text-clay">Since 2016</p>
              <p className="mt-2 font-fraunces text-2xl leading-tight text-paper">
                One sanctuary.
                <br />
                Four stations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              index="02"
              eyebrow="Why we exist"
              tone="light"
              title={
                <>
                  We do not rehome animals.
                  <br />
                  We match lives.
                </>
              }
              intro="Kabera Kin began with three dogs, one borrowed pickup, and a conviction that Kenyan animal welfare could be organised with more dignity — for the animals and the people who care for them."
            />

            <div className="mt-10 border-l border-clay/50 pl-5">
              <PullQuote tone="light" attribution="Wanjiru Kamau · Founder & field director">
                A good match is not the fastest one. It is the one that is still
                standing two winters from now.
              </PullQuote>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <p className="text-[14.5px] leading-[1.8] text-paper/60">
                Our registry is shared with fourteen partner sanctuaries across
                Nairobi, Kiambu, Nakuru and Kajiado. Every profile is verified
                by a qualified welfare officer before it goes live.
              </p>
              <p className="text-[14.5px] leading-[1.8] text-paper/60">
                We fund the work through adoption support, a transparent medical
                fund, and partnerships with veterinary practices who share our
                standards. No animal is sold.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/about" className="link-arrow !border-paper/30 !text-paper hover:!border-clay hover:!text-clay">
                Our story
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
              <Link href="/partners" className="link-arrow !border-paper/30 !text-paper hover:!border-clay hover:!text-clay">
                Welfare network
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-sand/40">
        <div className="shell py-14 sm:py-16 lg:py-20 xl:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              index="03"
              eyebrow="A short film"
              title={
                <>
                  The work between
                  <br className="hidden sm:block" /> rescue and home.
                </>
              }
              className="lg:col-span-7"
            />
            <p className="max-w-md text-[14px] leading-[1.8] text-ink/60 lg:col-span-4 lg:col-start-9">
              Fifteen seconds inside the recovery wing: a clean bed, a quiet
              voice, and the daily routine that lets an animal begin to trust
              again.
            </p>
          </div>
          <SanctuaryFilm film={media.film} className="mt-10" />
        </div>
      </section>

      <section className="shell py-14 sm:py-16 lg:py-20 xl:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <SectionHeading
            index="04"
            eyebrow="The protocol"
            title={
              <>
                Four deliberate steps.
                <br className="hidden sm:block" /> No rush, no guesswork.
              </>
            }
            className="lg:col-span-8"
          />
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link href="/how-it-works" className="link-arrow">
              Read the full protocol
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-0 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`border-ink/15 py-8 sm:px-6 lg:min-h-[280px] ${
                index === 0 ? "sm:pl-0" : ""
              } ${index !== 0 ? "border-t sm:border-t-0 sm:border-l" : ""} ${
                index === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""
              } ${index === 3 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-fraunces text-[13px] italic text-clay-deep">
                  {step.number}
                </span>
                <span className="h-px w-8 bg-ink/15" />
              </div>
              <h3 className="mt-8 font-fraunces text-[26px] leading-tight tracking-tight text-forest">
                {step.title}
              </h3>
              <p className="mt-4 text-[13.5px] leading-[1.75] text-ink/60">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-ink/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-ink/55">
            Average time from first message to homecoming: 11 days.
          </p>
          <Link href="/adopt" className="btn-outline">
            Begin with a dossier
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-sand/70">
        <div className="shell py-20 lg:py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              index="05"
              eyebrow="Field notes"
              title="From the sanctuary."
              className="max-w-2xl"
            />
            <Link href="/stories" className="link-arrow shrink-0">
              All field notes
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-7">
            {stories.map((story, index) => (
              <article key={story.title} className="card-lift group">
                <Link href={story.href}>
                  <div className="relative aspect-[3/2] overflow-hidden bg-stone">
                    <Image
                      src={story.image}
                      alt=""
                      fill
                      className="image-warm object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="eyebrow absolute left-4 top-4 bg-paper/90 px-2.5 py-1.5 text-[8px] text-forest">
                      {story.category}
                    </span>
                    <span className="absolute right-4 top-4 font-fraunces text-sm italic text-paper/90">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="eyebrow mt-5 text-[8px] text-ink/40">
                    {story.date}
                  </p>
                  <h3 className="mt-3 font-fraunces text-[24px] leading-[1.15] tracking-tight text-forest transition group-hover:text-clay-deep">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink/60">
                    {story.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="shell grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:py-18 xl:py-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-paper/60">Beyond adoption</p>
            <h2 className="h2-editorial mt-5 text-paper">
              There is more than one way to be kin.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-[15px] leading-[1.8] text-paper/80">
              Foster a recovery. Fund a surgery. Volunteer a Saturday. Every
              route into the sanctuary strengthens the whole.
            </p>
            <div className="mt-8 grid gap-0 border-t border-paper/25">
              {[
                { href: "/foster", label: "Become a foster carer" },
                { href: "/donate", label: "Give to the medical fund" },
                { href: "/volunteer", label: "Volunteer at a station" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between border-b border-paper/25 py-4 font-manrope text-[11px] font-semibold uppercase tracking-[0.13em] transition hover:pl-2"
                >
                  {item.label}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src={imagery.golden}
              alt="A rescue dog running through tall grass at golden hour"
              fill
              className="image-warm object-cover opacity-85"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-deep/40" />
          </div>
          <div className="flex items-center">
            <div className="shell py-14 sm:py-16 lg:py-20 xl:py-24 lg:pl-16">
              <p className="eyebrow text-clay">A standing invitation</p>
              <h2 className="display mt-6 text-[clamp(2.6rem,5vw,4.6rem)] text-paper">
                Someone is
                <br />
                waiting to
                <br />
                meet you.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-paper/60">
                Visit the sanctuary, read a dossier, or simply tell us what your
                days look like. We will take it from there.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/adopt" className="btn-light">
                  Find your companion
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-light-outline">
                  Plan a visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
