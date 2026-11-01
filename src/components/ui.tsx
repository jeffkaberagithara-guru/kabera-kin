import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  tone = "dark",
  className = "",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        {index && (
          <span
            className={`eyebrow ${
              tone === "light" ? "text-paper/35" : "text-ink/35"
            }`}
          >
            {index}
          </span>
        )}
        <span
          className={`h-px w-8 ${
            tone === "light" ? "bg-paper/25" : "bg-clay/60"
          }`}
        />
        <span
          className={`eyebrow ${
            tone === "light" ? "text-clay" : "text-clay-deep"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`h2-editorial mt-6 ${
          tone === "light" ? "text-paper" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 max-w-xl text-[15px] leading-[1.8] ${
            tone === "light" ? "text-paper/65" : "text-ink/65"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function StatRow({
  stats,
  tone = "dark",
  className = "",
}: {
  stats: { value: string; label: string }[];
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <dl
      className={`grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x ${
        tone === "light" ? "divide-paper/15" : "divide-ink/15"
      } ${className}`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={index === 0 ? "pr-4" : "px-4 last:pr-0"}
        >
          <dt
            className={`font-fraunces text-[clamp(1.7rem,3vw,2.5rem)] leading-none tracking-tight ${
              tone === "light" ? "text-paper" : "text-forest"
            }`}
          >
            {stat.value}
          </dt>
          <dd
            className={`mt-2 font-manrope text-[9px] font-semibold uppercase leading-relaxed tracking-[0.13em] ${
              tone === "light" ? "text-paper/50" : "text-ink/50"
            }`}
          >
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function PullQuote({
  children,
  attribution,
  tone = "dark",
}: {
  children: ReactNode;
  attribution?: string;
  tone?: "dark" | "light";
}) {
  return (
    <figure>
      <blockquote
        className={`display-italic text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.15] ${
          tone === "light" ? "text-paper" : "text-forest"
        }`}
      >
        “{children}”
      </blockquote>
      {attribution && (
        <figcaption
          className={`eyebrow mt-6 ${
            tone === "light" ? "text-paper/45" : "text-ink/45"
          }`}
        >
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
