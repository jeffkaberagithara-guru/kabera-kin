import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import type { Animal } from "@/lib/animals";

function RegistryBadge({ animal }: { animal: Animal }) {
  return (
    <span className="eyebrow flex items-center gap-2 bg-paper/90 px-2.5 py-1.5 text-[8px] text-forest backdrop-blur-sm">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          animal.urgent ? "bg-clay" : "bg-moss"
        }`}
      />
      {animal.urgent ? "Urgent placement" : animal.status}
    </span>
  );
}

export function AnimalCard({
  animal,
  variant = "grid",
  priority = false,
}: {
  animal: Animal;
  variant?: "grid" | "feature" | "compact";
  priority?: boolean;
}) {
  const href = `/adopt/${animal.slug}`;

  if (variant === "compact") {
    return (
      <article className="card-lift group border-t border-ink/15 pt-5">
        <Link href={href} className="grid grid-cols-[92px_1fr] items-start gap-5">
          <div className="relative aspect-[3/4] overflow-hidden bg-stone arch-sm">
            <Image
              src={animal.image}
              alt={`${animal.name}, ${animal.breed.toLowerCase()}`}
              fill
              className="image-warm object-cover transition duration-700 group-hover:scale-105"
              sizes="92px"
            />
          </div>
          <div className="flex min-h-[122px] flex-col justify-between py-0.5">
            <div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-fraunces text-[26px] leading-none tracking-tight text-forest">
                  {animal.name}
                </h3>
                <span className="eyebrow text-[8px] text-ink/40">
                  {animal.registry}
                </span>
              </div>
              <p className="mt-2 text-[12px] text-ink/55">
                {animal.age} · {animal.species} · {animal.station}
              </p>
              <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink/70">
                {animal.summary}
              </p>
            </div>
            <span className="mt-3 inline-flex items-center gap-1.5 font-manrope text-[10px] font-semibold uppercase tracking-[0.13em] text-clay-deep">
              Read dossier
              <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "feature") {
    return (
      <article className="card-lift group">
        <Link href={href} className="block">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone arch">
            <Image
              src={animal.image}
              alt={`${animal.name}, ${animal.breed.toLowerCase()}`}
              fill
              priority={priority}
              className="image-warm object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
              <RegistryBadge animal={animal} />
              <span className="eyebrow bg-forest/80 px-2.5 py-1.5 text-[8px] text-paper backdrop-blur-sm">
                {animal.registry}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/25 to-transparent p-6 pt-20 text-paper">
              <p className="eyebrow text-[9px] text-paper/65">
                {animal.station} · {animal.county}
              </p>
              <div className="mt-2 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-fraunces text-[42px] leading-none tracking-tight">
                    {animal.name}
                  </h3>
                  <p className="mt-2 text-[12px] text-paper/70">
                    {animal.age} · {animal.breed}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/30 transition group-hover:border-clay group-hover:bg-clay">
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-start justify-between gap-6 border-t border-ink/15 pt-4">
            <p className="max-w-md text-[14px] leading-relaxed text-ink/70">
              {animal.summary}
            </p>
            <span className="eyebrow shrink-0 pt-1 text-[8px] text-clay-deep">
              {animal.status}
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="card-lift group flex h-full flex-col border-t border-ink/15 pt-4">
      <Link href={href} className="flex flex-1 flex-col">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone">
          <Image
            src={animal.image}
            alt={`${animal.name}, ${animal.breed.toLowerCase()}`}
            fill
            priority={priority}
            className="image-warm object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <RegistryBadge animal={animal} />
          </div>
          <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-forest backdrop-blur-sm transition group-hover:bg-clay group-hover:text-paper">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </div>
        <div className="flex flex-1 flex-col pt-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-fraunces text-[28px] leading-none tracking-tight text-forest">
              {animal.name}
            </h3>
            <span className="eyebrow text-[8px] text-ink/40">
              {animal.registry}
            </span>
          </div>
          <p className="mt-2 text-[12px] text-ink/55">
            {animal.age} · {animal.sex} · {animal.station}
          </p>
          <p className="mt-3 line-clamp-2 text-[13.5px] leading-relaxed text-ink/70">
            {animal.summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {animal.traits.slice(0, 3).map((trait) => (
              <span
                key={trait}
                className="border border-ink/15 px-2.5 py-1 font-manrope text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/55"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
