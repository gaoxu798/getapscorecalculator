import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 border-t border-border bg-gradient-to-b from-background to-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
          You already put in the study hours. The hard part is knowing if
          they&apos;re working.
        </h2>
        <p className="font-body text-lg text-text-secondary mb-10">
          AP Score Calculator shows you — in 30 seconds, for free.
        </p>

        <Link
          href="/subjects"
          className="inline-flex items-center justify-center bg-cta text-background font-display text-base uppercase tracking-wider px-10 py-5 rounded-full hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(255,184,0,0.3)]"
        >
          Calculate My AP Score — Free
        </Link>

        <p className="font-mono text-xs text-text-muted mt-6 flex items-center justify-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          No signup · 38 subjects · Works on mobile
        </p>
      </div>
    </section>
  );
}
