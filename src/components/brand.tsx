import Image from "next/image";
import Link from "next/link";

export function Brand({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Kabera Kin — home"
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
          light ? "border-paper/20 bg-paper/5" : "border-forest/10 bg-paper"
        }`}
      >
        <Image
          src="/brand/mark.svg"
          alt=""
          width={26}
          height={26}
          className={`h-[26px] w-[26px] transition-transform duration-500 group-hover:scale-105 ${
            light ? "brightness-0 invert" : ""
          }`}
          aria-hidden="true"
        />
      </span>
      {!compact && (
        <span className="flex flex-col">
          <span
            className={`font-fraunces text-[21px] leading-none tracking-[-0.02em] ${
              light ? "text-paper" : "text-forest"
            }`}
          >
            Kabera Kin
          </span>
          <span
            className={`mt-1 font-manrope text-[8.5px] font-semibold uppercase tracking-[0.24em] ${
              light ? "text-paper/55" : "text-ink/50"
            }`}
          >
            Animal Welfare Sanctuary
          </span>
        </span>
      )}
    </Link>
  );
}
