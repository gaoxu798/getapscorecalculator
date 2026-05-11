import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#080C14] border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display font-bold text-xl text-text-primary">
                AP Score Calculator
              </span>
            </Link>
            <p className="font-body text-sm text-text-muted max-w-sm">
              Free AP score calculator for all 38 subjects. Based on official
              College Board scoring guidelines. Not affiliated with College Board.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-xs uppercase tracking-wider text-text-primary mb-2">
              Product
            </span>
            <Link
              href="/subjects"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              All Subjects
            </Link>
            <Link
              href="/#how-it-works"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-xs uppercase tracking-wider text-text-primary mb-2">
              Legal
            </span>
            <Link
              href="/privacy-policy"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/refund-policy"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-text-muted">
            © 2026 AP Score Calculator. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-text-muted text-center md:text-right">
            AP® and Advanced Placement® are registered trademarks of College
            Board. This site is not affiliated with, endorsed by, or sponsored by
            College Board.
          </p>
        </div>

        <div className="mt-4 text-center">
          <a
            href="mailto:jordivh9@gmail.com"
            className="font-mono text-[11px] text-text-muted hover:text-accent transition-colors"
          >
            Contact: jordivh9@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
