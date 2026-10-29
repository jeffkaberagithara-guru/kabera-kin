export default function Loading() {
  return (
    <main className="shell py-20" role="status" aria-label="Loading page">
      <span className="sr-only">Loading page…</span>
      <div className="h-2 w-24 animate-pulse bg-ink/10" />
      <div className="mt-8 h-14 w-full max-w-2xl animate-pulse bg-ink/10 sm:h-20" />
      <div className="mt-4 h-14 w-full max-w-xl animate-pulse bg-ink/10 sm:h-20" />
      <div className="mt-8 h-4 w-full max-w-lg animate-pulse bg-ink/10" />
      <div className="mt-3 h-4 w-full max-w-md animate-pulse bg-ink/10" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="border-t border-ink/15 pt-4">
            <div className="aspect-[4/5] animate-pulse bg-ink/10" />
            <div className="mt-4 h-6 w-1/2 animate-pulse bg-ink/10" />
            <div className="mt-3 h-4 w-3/4 animate-pulse bg-ink/10" />
          </div>
        ))}
      </div>
    </main>
  );
}
