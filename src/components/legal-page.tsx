import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main>
      <section className="border-b border-ink/10">
        <div className="shell py-14 lg:py-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-clay" />
            <p className="eyebrow text-clay-deep">{eyebrow}</p>
          </div>
          <h1 className="display mt-7 max-w-3xl text-[clamp(2.8rem,6.4vw,5rem)] text-forest">
            {title}
          </h1>
          <p className="lede mt-6 max-w-2xl">{intro}</p>
          <p className="eyebrow mt-8 text-[8px] text-ink/35">Last updated · {updated}</p>
        </div>
      </section>

      <section className="shell grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <nav aria-label="On this page" className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-ink/35">On this page</p>
            <ul className="mt-4 border-t border-ink/15">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-baseline gap-3 border-b border-ink/15 py-3 text-[12px] text-ink/55 transition hover:text-forest"
                  >
                    <span className="font-fraunces text-[10px] italic text-clay-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="lg:col-span-7 lg:col-start-5">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <div className="flex items-baseline gap-4 border-t border-ink/15 pt-5">
                  <span className="font-fraunces text-[12px] italic text-clay-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-fraunces text-[clamp(1.5rem,2.4vw,2rem)] leading-tight tracking-tight text-forest">
                    {section.title}
                  </h2>
                </div>
                <div className="prose-editorial mt-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-5 space-y-2.5 border-l border-clay/30 pl-5">
                    {section.list.map((item) => (
                      <li key={item} className="text-[14px] leading-[1.7] text-ink/65">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 border border-ink/15 bg-paper p-6">
            <p className="eyebrow text-clay-deep">Questions</p>
            <p className="mt-3 font-fraunces text-2xl leading-tight text-forest">
              Write to the trust secretary.
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
              Kabera Kin Sanctuary Trust · Karen Ridge, Nairobi ·
              hello@kaberakin.org
            </p>
            <Link href="/contact" className="btn-outline mt-5">
              Contact us
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
