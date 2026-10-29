import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimalCard } from "@/components/animal-card";
import { DossierActions } from "@/components/dossier-actions";
import { EnquiryForm } from "@/components/enquiry-form";
import { Gallery } from "@/components/gallery";
import { SectionHeading, PullQuote } from "@/components/ui";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CheckIcon,
  ClockIcon,
  LeafIcon,
  PawIcon,
  ShieldIcon,
} from "@/components/icons";
import { animals, getAnimal, getRelatedAnimals } from "@/lib/animals";

type Params = { slug: string };

export function generateStaticParams() {
  return animals.map((animal) => ({ slug: animal.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const animal = getAnimal(slug);
  if (!animal) return { title: "Companion not found" };
  return {
    title: `${animal.name} · ${animal.registry}`,
    description: animal.summary,
    openGraph: {
      title: `${animal.name} — ${animal.breed}`,
      description: animal.summary,
      images: [{ url: animal.image }],
    },
  };
}

export default async function DossierPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const animal = getAnimal(slug);
  if (!animal) notFound();

  const related = getRelatedAnimals(slug);
  const atAGlance = [
    { label: "Good with", value: animal.goodWith, icon: PawIcon },
    { label: "Energy", value: animal.energy, icon: LeafIcon },
    { label: "Training", value: animal.training, icon: ShieldIcon },
    { label: "Time in care", value: animal.intake, icon: ClockIcon },
  ];

  return (
    <main>
      <div className="shell pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[11px] text-ink/45">
          <Link href="/adopt" className="inline-flex items-center gap-1.5 transition hover:text-forest">
            <ArrowLeftIcon className="h-3 w-3" />
            Registry
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink/70">{animal.name}</span>
        </nav>
      </div>

      <section className="shell grid gap-10 pb-16 pt-8 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-10">
        <div className="lg:col-span-7">
          <Gallery frames={animal.gallery} name={animal.name} />
        </div>

        <div className="lg:col-span-5 lg:pt-2">
          <div className="flex items-center justify-between gap-4">
            <span className="eyebrow flex items-center gap-2 text-clay-deep">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  animal.urgent ? "bg-clay" : "bg-moss"
                }`}
              />
              {animal.status}
            </span>
            <span className="eyebrow text-[9px] text-ink/40">{animal.registry}</span>
          </div>

          <h1 className="display mt-5 text-[clamp(3.4rem,7vw,5.6rem)] text-forest">
            {animal.name}
          </h1>
          <p className="display-italic mt-3 max-w-md text-[clamp(1.25rem,2vw,1.65rem)] leading-snug text-ink/60">
            “{animal.quote}”
          </p>

          <dl className="mt-8 grid grid-cols-2 border-t border-ink/15">
            {[
              ["Age", animal.age],
              ["Sex", animal.sex],
              ["Size", animal.size],
              ["Station", `${animal.station}, ${animal.county}`],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`border-b border-ink/15 py-4 ${
                  index % 2 === 0 ? "pr-4" : "border-l pl-4"
                }`}
              >
                <dt className="label">{label}</dt>
                <dd className="mt-1.5 text-[13px] leading-snug text-ink/75">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-[15px] leading-[1.8] text-ink/70">{animal.summary}</p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {animal.traits.map((trait) => (
              <span
                key={trait}
                className="border border-ink/15 px-2.5 py-1 font-manrope text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/55"
              >
                {trait}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-ink/15 pt-6">
            <DossierActions name={animal.name} slug={animal.slug} />
          </div>

          <div className="mt-5 flex items-start gap-3 bg-forest/5 p-4">
            <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
            <p className="text-[11.5px] leading-relaxed text-ink/55">
              Dossier verified by a welfare officer. Medical records and
              temperament notes are updated after every veterinary visit.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-7">
            <SectionHeading
              index="01"
              eyebrow="The dossier"
              title={
                <>
                  How {animal.name.split(" ")[0]} came
                  <br className="hidden sm:block" /> to us.
                </>
              }
            />

            <div className="prose-editorial mt-8">
              {animal.story.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 border-l border-clay/50 pl-5">
              <PullQuote attribution={`Behaviour team · ${animal.station}`}>
                {animal.personality}
              </PullQuote>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border border-ink/15 bg-linen p-6">
              <h2 className="eyebrow text-clay-deep">At a glance</h2>
              <dl className="mt-5 space-y-4">
                {atAGlance.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-forest/60" />
                    <div>
                      <dt className="label">{item.label}</dt>
                      <dd className="mt-1 text-[13px] text-ink/75">{item.value}</dd>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3 border-t border-ink/10 pt-4">
                  <PawIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest/60" />
                  <div>
                    <dt className="label">Colour</dt>
                    <dd className="mt-1 text-[13px] text-ink/75">{animal.colour}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-6">
              <h2 className="eyebrow text-clay-deep">Medical record</h2>
              <dl className="mt-4 divide-y divide-ink/10 border-t border-ink/15">
                {animal.medical.map((record) => (
                  <div key={record.label} className="py-4">
                    <dt className="label">{record.label}</dt>
                    <dd className="mt-1.5 text-[13px] leading-snug text-ink/75">
                      {record.value}
                    </dd>
                    <dd className="mt-1 text-[11px] text-ink/40">{record.note}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-[10px] leading-relaxed text-ink/35">
                Full clinical records are shared with approved adopters and
                their veterinary practice.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeading
            index="02"
            eyebrow="Compatibility"
            title={
              <>
                An honest account
                <br className="hidden sm:block" /> of home fit.
              </>
            }
            intro="We would rather have a difficult conversation now than a returned animal later. These notes come from structured assessments, not optimism."
            className="lg:col-span-4"
          />

          <div className="lg:col-span-8">
            <div className="grid border-t border-ink/15 sm:grid-cols-2">
              {animal.compatibility.map((item, index) => (
                <div
                  key={item.label}
                  className={`border-b border-ink/15 py-6 sm:px-6 ${
                    index % 2 === 0 ? "sm:pl-0" : "sm:border-l"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.tone === "good" ? (
                      <CheckIcon className="h-4 w-4 text-moss" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                    )}
                    <h3 className="font-manrope text-[10px] font-semibold uppercase tracking-[0.13em] text-forest">
                      {item.label}
                    </h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.75] text-ink/65">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            {animal.bonded && (
              <p className="mt-5 border-l-2 border-clay bg-clay/5 px-4 py-3 text-[12.5px] leading-relaxed text-ink/70">
                <strong className="font-semibold text-forest">Bonded pair.</strong>{" "}
                {animal.name} must be adopted together with their sibling. We do
                not separate bonded animals under any circumstances.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand/60">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Begin here"
              title="Tell us about the life you could offer."
              intro="There is no perfect application. We are looking for honesty, a stable routine, and the willingness to ask for help when you need it."
            />
            <div className="mt-10 border-t border-ink/15">
              {[
                ["Placement desk", "Mon–Sat · 08:00–17:00 EAT"],
                ["Telephone", "0800 720 KIN"],
                ["Email", "placements@kaberakin.org"],
                ["Visit", "Karen Ridge Sanctuary, Nairobi"],
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
            <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-stone">
              <Image
                src={animal.gallery[1]?.src ?? animal.image}
                alt=""
                fill
                className="image-warm object-cover"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border border-ink/15 bg-linen p-6 sm:p-9">
              <p className="eyebrow text-clay-deep">Application enquiry</p>
              <h2 className="mt-3 font-fraunces text-3xl leading-tight tracking-tight text-forest">
                A note about {animal.name}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
                This is a conversation, not a test. A placement officer reads
                every note personally.
              </p>
              <div className="mt-7">
                <EnquiryForm animal={{ slug: animal.slug, name: animal.name }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Continue reading"
            title="Others in our care."
          />
          <Link href="/adopt" className="link-arrow shrink-0">
            Full registry
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <AnimalCard key={item.slug} animal={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
