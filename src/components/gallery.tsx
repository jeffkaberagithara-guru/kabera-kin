"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryFrame } from "@/lib/animals";

export function Gallery({
  frames,
  name,
}: {
  frames: GalleryFrame[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const frame = frames[active] ?? frames[0];

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-stone arch sm:aspect-[5/6]">
        <Image
          key={frame.src}
          src={frame.src}
          alt={frame.alt || `${name} at Kabera Kin`}
          fill
          priority
          className="image-warm object-cover"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-forest-deep/70 to-transparent p-5 pt-16">
          <p className="eyebrow text-[8px] text-paper/80">{frame.label}</p>
          <p className="font-fraunces text-sm italic text-paper/80">
            {String(active + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {frames.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={index === active}
            aria-label={`Show ${item.label.toLowerCase()} photograph`}
            className={`group relative aspect-square overflow-hidden bg-stone transition ${
              index === active
                ? "ring-2 ring-clay ring-offset-2 ring-offset-linen"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={item.src}
              alt=""
              fill
              className="image-warm object-cover transition duration-500 group-hover:scale-105"
              sizes="120px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
