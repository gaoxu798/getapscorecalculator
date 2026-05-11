import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/icon.svg"
            alt="AP Score Calculator"
            width={28}
            height={28}
            className="text-accent"
          />
          <span className="font-display font-bold text-lg text-text-primary">
            AP Score
          </span>
          <span className="font-body text-lg text-text-secondary">
            Calculator
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/subjects"
            className="font-display text-xs uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
          >
            Subjects
          </Link>
          <Link
            href="/how-it-works"
            className="font-display text-xs uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/#pricing"
            className="font-display text-xs uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/faq"
            className="font-display text-xs uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
          >
            FAQ
          </Link>
        </nav>

        <Link
          href="/subjects"
          className="bg-cta text-background font-display text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Calculate My Score
        </Link>
      </div>
    </header>
  );
}
