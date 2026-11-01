import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { stories } from "@/lib/stories";
import { heroImages } from "@/lib/images";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Dispatches from Kabera Kin's sanctuary, rescue teams, foster homes, and clinic. Honest accounts of animal welfare in Kenya.",
};

export default function StoriesPage() {
  const [featured, ...rest] = stories;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.stories}
            alt="A dog resting in warm afternoon light"
            fill
            priority
            className="object-cover opacity-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/85 to-linen/35" />
        </div>
        <div className="shell py-10 sm:py-12 lg:py-16 xl:py-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-clay" />
            <p className="eyebrow text-clay-deep">Field notes · The journal</p>
          </div>
          <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:items-end">
            <h1 className="display text-[clamp(3rem,7.6vw,6.2rem)] text-forest lg:col-span-7">
              Notes from
              <br />
              <em className="text-clay-deep">the work.</em>
            </h1>
            <p className="lede max-w-md lg:col-span-4 lg:col-start-9">
              Not success stories. Not before-and-after. Dispatches from the
              clinic, the field, and the long middle of an animal&rsquo;s recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="shell py-10 sm:py-12 lg:py-16 xl:py-20">
        <Link href={`/stories/${featured.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-stone">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                priority
                className="image-warm object-cover transition duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <span className="eyebrow absolute left-5 top-5 bg-paper/90 px-3 py-2 text-[8px] text-forest">
                Featured · {featured.category}
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-6">
            <p className="eyebrow text-[9px] text-ink/40">
              {featured.date} · {featured.readTime}
            </p>
            <h2 className="mt-4 font-fraunces text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.05] tracking-tight text-forest transition group-hover:text-clay-deep">
              {featured.title}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.8] text-ink/65">
              {featured.standfirst}
            </p>
            <div className="mt-6 flex items-center gap-4 border-t border-ink/15 pt-5">
              <div>
                <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.12em] text-forest">
                  {featured.author}
                </p>
                <p className="mt-1 text-[10.5px] text-ink/45">{featured.role}</p>
              </div>
              <span className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-forest transition group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      <section className="border-t border-ink/10 bg-sand/50">
        <div className="shell py-16 lg:py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 className="h2-editorial text-forest">The archive</h2>
            <p className="hidden font-manrope text-[10px] font-semibold uppercase tracking-[0.13em] text-ink/40 sm:block">
              {rest.length} recent entries
            </p>
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((story) => (
              <article key={story.slug} className="card-lift group">
                <Link href={`/stories/${story.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      className="image-warm object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="eyebrow absolute left-4 top-4 bg-paper/90 px-2.5 py-1.5 text-[8px] text-forest">
                      {story.category}
                    </span>
                  </div>
                  <p className="eyebrow mt-5 text-[8px] text-ink/40">
                    {story.date} · {story.readTime}
                  </p>
                  <h3 className="mt-3 font-fraunces text-[25px] leading-[1.15] tracking-tight text-forest transition group-hover:text-clay-deep">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink/60">
                    {story.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-manrope text-[10px] font-semibold uppercase tracking-[0.12em] text-clay-deep">
                    Read entry
                    <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-paper">
        <div className="shell grid gap-8 py-14 lg:grid-cols-12 lg:items-center lg:py-16">
          <div className="lg:col-span-6">
            <p className="eyebrow text-clay">Letters from the sanctuary</p>
            <h2 className="mt-4 font-fraunces text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-tight">
              One considered note, every other month.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:justify-self-end">
            <NewsletterForm id="journal-email" />
          </div>
        </div>
      </section>
    </main>
  );
}
