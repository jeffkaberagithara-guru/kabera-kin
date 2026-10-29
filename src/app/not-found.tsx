import Link from "next/link";
import { ArrowRightIcon, PawIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <div className="shell flex min-h-[70vh] flex-col justify-center py-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-clay" />
          <p className="eyebrow text-clay-deep">Page not found · 404</p>
        </div>
        <p className="mt-10 font-fraunces text-[clamp(5rem,16vw,11rem)] leading-[0.8] tracking-[-0.05em] text-forest/10">
          404
        </p>
        <h1 className="display -mt-6 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] text-forest">
          This trail has gone <em className="text-clay-deep">quiet.</em>
        </h1>
        <p className="lede mt-6 max-w-xl">
          The page you were looking for has moved, or never existed. The
          companions in our care are still here, though.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/adopt" className="btn-primary">
            Meet the companions
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link href="/" className="btn-quiet">
            Return home
          </Link>
        </div>
        <div className="mt-14 flex items-center gap-3 border-t border-ink/15 pt-6 text-[12px] text-ink/50">
          <PawIcon className="h-4 w-4 text-clay-deep" />
          If you followed a link from our site, please tell us at
          hello@kaberakin.org.
        </div>
      </div>
    </main>
  );
}
