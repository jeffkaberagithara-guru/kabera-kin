import type { SVGProps } from "react";

function svgProps(cls: string) {
  return {
    width: "1em" as const,
    height: "1em" as const,
    viewBox: "0 0 24 24" as const,
    fill: "none" as const,
    strokeWidth: 1.4 as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cls,
  };
}

type IconProps = SVGProps<SVGSVGElement>;

export function MenuIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

export function XIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <line x1="6" y1="18" x2="18" y2="6" />
      <polyline points="8 6 18 6 18 16" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <line x1="20" y1="12" x2="4" y2="12" />
      <polyline points="10 6 4 12 10 18" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} strokeWidth={1.8} {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} strokeWidth={2} {...props}>
      <polyline points="4 12 9 17 20 6" />
    </svg>
  );
}

export function HeartIcon({
  className = "h-5 w-5",
  filled = false,
  ...props
}: IconProps & { filled?: boolean }) {
  return (
    <svg {...svgProps(className)} fill={filled ? "currentColor" : "none"} {...props}>
      <path d="M12 20.5s-7.5-4.6-7.5-9.4A4.6 4.6 0 0 1 12 7.4a4.6 4.6 0 0 1 7.5 3.7c0 4.8-7.5 9.4-7.5 9.4Z" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <path d="M12 21s7-3.6 7-8.8V5.4L12 3 5 5.4v6.8C5 17.4 12 21 12 21Z" />
      <polyline points="9 12 11.2 14.2 15.2 9.6" />
    </svg>
  );
}

export function SearchIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="20" y1="20" x2="16" y2="16" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <polyline points="3.5 6.5 12 13 20.5 6.5" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <path d="M8.2 3.5 10 8l-2 1.5a13 13 0 0 0 6.5 6.5L16 14l4.5 1.8v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3.2 5.7a2 2 0 0 1 2-2.2h3Z" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

export function LeafIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <path d="M20 4C11 4 4 8.5 4 15a5 5 0 0 0 5 5c6.5 0 11-7 11-16Z" />
      <line x1="4" y1="20" x2="13" y2="11" />
    </svg>
  );
}

export function PawIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <ellipse cx="7" cy="9" rx="1.8" ry="2.4" />
      <ellipse cx="12" cy="7.4" rx="1.8" ry="2.5" />
      <ellipse cx="17" cy="9" rx="1.8" ry="2.4" />
      <path d="M12 11c2.8 0 5 2 5 4.2 0 1.8-1.5 2.9-3.1 2.4a5.7 5.7 0 0 0-3.8 0C8.5 18.1 7 17 7 15.2 7 13 9.2 11 12 11Z" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} fill="currentColor" stroke="none" {...props}>
      <path d="m12 3 2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.3l6-.8L12 3Z" />
    </svg>
  );
}

export function QuoteIcon({ className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} fill="currentColor" stroke="none" {...props}>
      <path d="M9.3 5.5C6 6.8 4 9.7 4 13.3c0 3.1 1.9 5.2 4.5 5.2 2.3 0 4-1.7 4-4 0-2.2-1.5-3.8-3.6-3.8-.4 0-.8 0-1 .1.4-1.7 1.7-3.2 3.4-4L9.3 5.5Zm10 0c-3.3 1.3-5.3 4.2-5.3 7.8 0 3.1 1.9 5.2 4.5 5.2 2.3 0 4-1.7 4-4 0-2.2-1.5-3.8-3.6-3.8-.4 0-.8 0-1 .1.4-1.7 1.7-3.2 3.4-4l-2-.3Z" />
    </svg>
  );
}

export function ShareIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} {...props}>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <line x1="8.2" y1="10.8" x2="15.8" y2="6.2" />
      <line x1="8.2" y1="13.2" x2="15.8" y2="17.8" />
    </svg>
  );
}

export function BookmarkIcon({
  className = "h-5 w-5",
  filled = false,
  ...props
}: IconProps & { filled?: boolean }) {
  return (
    <svg {...svgProps(className)} fill={filled ? "currentColor" : "none"} {...props}>
      <path d="M6 3.5h12v17l-6-4.2-6 4.2v-17Z" />
    </svg>
  );
}

export function PlayIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...svgProps(className)} fill="currentColor" stroke="none" {...props}>
      <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
    </svg>
  );
}
