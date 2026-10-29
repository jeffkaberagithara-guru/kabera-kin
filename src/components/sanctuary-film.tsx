"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "@/components/icons";

type Film = {
  src: string;
  poster: string;
  title: string;
  caption: string;
  credit: string;
};

export function SanctuaryFilm({
  film,
  className = "",
}: {
  film: Film;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className={className}>
      <div className="relative aspect-video overflow-hidden bg-forest-deep">
        {playing ? (
          <video
            className="h-full w-full object-cover"
            controls
            autoPlay
            playsInline
            preload="none"
            poster={film.poster}
            aria-label={film.title}
          >
            <source src={film.src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full text-left"
            aria-label={`Play film: ${film.title}`}
          >
            <Image
              src={film.poster}
              alt=""
              fill
              className="image-warm object-cover transition duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/25 to-forest-deep/10" />
            <span className="absolute left-5 top-5 flex items-center gap-2 border border-paper/25 bg-forest-deep/40 px-2.5 py-1.5 font-manrope text-[8px] font-semibold uppercase tracking-[0.14em] text-paper backdrop-blur-sm sm:left-7 sm:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              Sanctuary film
            </span>
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper/40 bg-paper/10 text-paper backdrop-blur-sm transition duration-300 group-hover:scale-105 group-hover:border-clay group-hover:bg-clay sm:h-20 sm:w-20">
              <PlayIcon className="ml-1 h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            <span className="absolute inset-x-0 bottom-0 p-5 text-paper sm:p-7">
              <span className="eyebrow text-[8px] text-paper/60">Watch · 15 seconds</span>
              <span className="mt-2 block max-w-xl font-fraunces text-[clamp(1.5rem,3vw,2.4rem)] leading-tight tracking-tight">
                {film.title}
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex flex-col gap-2 border-t border-ink/15 pt-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <p className="max-w-xl text-[13px] leading-relaxed text-ink/60">
          {film.caption}
        </p>
        <p className="eyebrow shrink-0 text-[8px] text-ink/35">{film.credit}</p>
      </figcaption>
    </figure>
  );
}
