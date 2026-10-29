import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdoptBrowser } from "@/components/adopt-browser";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { getAnimal, imagery, registryStats } from "@/lib/animals";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "The registry",
  description:
    "Meet the dogs and cats currently in Kabera Kin's care. Read full dossiers, medical records, and honest temperament notes before you begin.",
};

const featured = getAnimal("nyota")!;

export default function AdoptPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.adopt}
            alt="Animals waiting for adoption"
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
              <p className="eyebrow text-clay-deep">The registry · Updated weekly</p>
            </div>
            <h1 className="display mt-7 text-[clamp(3rem,7.5vw,6rem)] text-forest">
              Meet them
              <br />
              <em className="text-clay-deep">properly.</em>
            </h1>
            <p className="lede mt-7 max-w-xl">
              Every companion here has been medically screened, behaviourally
              assessed, and written up by the people who know them. Read slowly.
              The right match is rarely the first photograph.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link href="/how-it-works" className="link-arrow">
                How adoption works
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
              <p className="text-[12px] text-ink/45">
                No adoption fees · Lifetime support included
              </p>
            </div>
          </div>

          <div className="relative z-10 lg:col-span-5">
            <div className="grid grid-cols-5 items-end gap-4">
              <div className="relative col-span-3 aspect-[3/4] overflow-hidden bg-stone arch">
                <Image
                  src={featured.image}
                  alt="Nyota, a calico cat, in the Runda pavilion"
                  fill
                  priority
                  className="image-warm object-cover"
                  sizes="(max-width: 1024px) 55vw, 24vw"
                />
              </div>
              <div className="col-span-2 pb-2">
                <div className="relative aspect-square overflow-hidden bg-stone">
                  <Image
                    src={imagery.homecoming}
                    alt="A rescued animal settling into a calm home environment"
                    fill
                    className="image-warm object-cover"
                    sizes="(max-width: 1024px) 35vw, 16vw"
                  />
                </div>
                <p className="eyebrow mt-3 text-[8px] leading-relaxed text-ink/40">
                  Morning rounds
                  <br />
                  Runda Pavilion
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-ink/15 pt-5">
              <dl className="grid grid-cols-3 divide-x divide-ink/15">
                {registryStats.map((stat, index) => (
                  <div key={stat.label} className={index === 0 ? "pr-3" : "px-3 last:pr-0"}>
                    <dt className="font-fraunces text-2xl leading-none text-forest">
                      {stat.value}
                    </dt>
                    <dd className="mt-1.5 font-manrope text-[8px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-ink/45">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <AdoptBrowser />

      <section className="bg-forest-deep">
        <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-clay">A note on timing</p>
            <h2 className="h2-editorial mt-5 max-w-2xl text-paper">
              If none of them are yours yet, leave us a match note.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-paper/60">
              New companions arrive every fortnight. Tell us about your home,
              your routine, and the kind of relationship you hope for. We will
              write when someone fits — without pressure, and without a mailing
              list.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contact" className="btn-light">
                Leave a match note
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/how-it-works" className="btn-light-outline">
                Read the protocol
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
