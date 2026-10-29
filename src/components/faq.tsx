import { ChevronDownIcon } from "@/components/icons";

export function FAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="border-t border-ink/15">
      {items.map((item, index) => (
        <details key={item.question} className="group border-b border-ink/15">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="flex items-baseline gap-4">
              <span className="font-fraunces text-[12px] italic text-clay-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-manrope text-[13px] font-semibold leading-snug text-forest sm:text-[14px]">
                {item.question}
              </span>
            </span>
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-ink/40 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <p className="max-w-2xl pb-6 pl-8 text-[13.5px] leading-[1.8] text-ink/60">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
