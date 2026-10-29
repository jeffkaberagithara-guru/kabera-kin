import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { stories, getStory, getRelatedStories } from "@/lib/stories";

type Params = { slug: string };

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Field note not found" };
  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      images: [{ url: story.image }],
      type: "article",
    },
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const related = getRelatedStories(slug);
  let paragraphIndex = 0;

  return (
    <main>
      <div className="shell pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[11px] text-ink/45">
          <Link href="/stories" className="inline-flex items-center gap-1.5 transition hover:text-forest">
            <ArrowLeftIcon className="h-3 w-3" />
            Field notes
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink/70">{story.category}</span>
        </nav>
      </div>

      <article>
        <header className="shell py-10 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-clay" />
              <p className="eyebrow text-clay-deep">{story.category}</p>
            </div>
            <h1 className="display mt-6 text-[clamp(2.8rem,6.4vw,5.4rem)] text-forest">
              {story.title}
            </h1>
            <p className="mt-6 max-w-2xl font-fraunces text-[clamp(1.2rem,2vw,1.55rem)] italic leading-[1.5] text-ink/65">
              {story.standfirst}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/15 pt-5 text-[11px] text-ink/45">
              <p className="font-manrope font-semibold uppercase tracking-[0.12em] text-forest">
                {story.author}
              </p>
              <span>{story.role}</span>
              <span>{story.date}</span>
              <span>{story.readTime}</span>
            </div>
          </div>
        </header>

        <div className="shell">
          <div className="relative aspect-[16/9] overflow-hidden bg-stone lg:aspect-[21/9]">
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              priority
              className="image-warm object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="shell py-14 lg:py-20">
          <div className="mx-auto max-w-[42rem]">
            {story.body.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`h-${index}`}
                    className="mt-10 font-fraunces text-[clamp(1.8rem,3vw,2.5rem)] leading-tight tracking-tight text-forest first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={`q-${index}`}
                    className="my-10 border-l border-clay/60 pl-6"
                  >
                    <p className="display-italic text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.25] text-forest">
                      “{block.text}”
                    </p>
                    {block.attribution && (
                      <cite className="eyebrow mt-4 block not-italic text-ink/40">
                        {block.attribution}
                      </cite>
                    )}
                  </blockquote>
                );
              }
              const isFirst = paragraphIndex === 0;
              paragraphIndex += 1;
              return (
                <p
                  key={`p-${index}`}
                  className={`text-[16px] leading-[1.85] text-ink/75 [&+p]:mt-5 ${
                    isFirst
                      ? "first-letter:float-left first-letter:mr-2 first-letter:font-fraunces first-letter:text-[4.2rem] first-letter:leading-[0.78] first-letter:text-clay-deep"
                      : ""
                  }`}
                >
                  {block.text}
                </p>
              );
            })}

            <div className="mt-12 flex flex-col justify-between gap-5 border-t border-ink/15 pt-6 sm:flex-row sm:items-center">
              <div>
                <p className="label">Written by</p>
                <p className="mt-2 font-fraunces text-xl text-forest">{story.author}</p>
                <p className="mt-1 text-[11px] text-ink/45">{story.role}</p>
              </div>
              <Link href="/stories" className="link-arrow">
                More field notes
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="border-y border-ink/10 bg-sand/50">
        <div className="shell py-16 lg:py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 className="h2-editorial text-forest">Continue reading.</h2>
            <Link href="/stories" className="link-arrow shrink-0">
              Full archive
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {related.map((item) => (
              <article key={item.slug} className="card-lift group">
                <Link href={`/stories/${item.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="image-warm object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="eyebrow absolute left-4 top-4 bg-paper/90 px-2.5 py-1.5 text-[8px] text-forest">
                      {item.category}
                    </span>
                  </div>
                  <p className="eyebrow mt-4 text-[8px] text-ink/40">{item.date}</p>
                  <h3 className="mt-2 font-fraunces text-[23px] leading-tight tracking-tight text-forest transition group-hover:text-clay-deep">
                    {item.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-paper">
        <div className="shell flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div>
            <p className="eyebrow text-clay">A standing invitation</p>
            <h2 className="h2-editorial mt-4 max-w-2xl text-paper">
              Read a dossier. Meet an animal. Take your time.
            </h2>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/adopt" className="btn-light">
              Meet the companions
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/foster" className="btn-light-outline">
              Foster a recovery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
