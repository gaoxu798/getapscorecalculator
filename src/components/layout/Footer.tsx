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
              SYSTEM
            </span>
            <Link
              href="/subjects"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Subject Directory
            </Link>
            <Link
              href="/how-it-works"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Technical Docs
            </Link>
            <Link
              href="/faq"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Support
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-xs uppercase tracking-wider text-text-primary mb-2">
              LEGAL
            </span>
            <Link
              href="/privacy-policy"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Privacy Protocol
            </Link>
            <Link
              href="/terms-of-service"
              className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-text-muted uppercase">
            © 2024 AP SCORE CALCULATOR. ADVANCED PLACEMENT AND COLLEGE BOARD ARE TRADEMARKS OF THE COLLEGE BOARD, WHICH IS NOT AFFILIATED WITH THIS TOOL.
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