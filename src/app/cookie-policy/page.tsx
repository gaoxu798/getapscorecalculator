import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | AP Score Calculator",
  description: "Cookie Policy for AP Score Calculator. Learn about the cookies we use.",
};

export default function CookiePolicyPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8">
          Cookie Policy
        </h1>
        <p className="font-mono text-xs text-text-muted mb-8">
          Last updated: May 9, 2026
        </p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              What Are Cookies
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Cookies are small text files stored on your device when you visit websites. We use cookies to provide, protect, and improve our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Cookies We Use
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-display text-text-primary">Category</th>
                    <th className="text-left py-2 pr-4 font-display text-text-primary">Cookies</th>
                    <th className="text-left py-2 pr-4 font-display text-text-primary">Purpose</th>
                    <th className="text-left py-2 font-display text-text-primary">Duration</th>
                  </tr>
                </thead>
                <tbody className="font-body text-text-secondary">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Essential</td>
                    <td className="py-2 pr-4">Session cookies</td>
                    <td className="py-2 pr-4">Site functionality, security</td>
                    <td>Session / Persistent</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Analytics</td>
                    <td className="py-2 pr-4">_ga, _gid, _gat (Google Analytics)</td>
                    <td className="py-2 pr-4">Traffic analysis, page optimization</td>
                    <td>26 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Essential Cookies
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              These cookies are necessary for the website to function. They cannot be disabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Analytics Cookies
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              We use <strong>Google Analytics 4</strong> to understand how visitors use our site. This helps us improve the Service.
            </p>
            <ul className="font-body text-sm text-text-secondary leading-relaxed list-disc list-inside space-y-1 mt-2">
              <li><strong>What we track:</strong> Page views, time on site, referral sources, device type</li>
              <li><strong>What we do NOT track:</strong> Your AP scores, inputs, or calculation history</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Your Choices
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              <strong>EU/UK Users:</strong> Under GDPR/ePrivacy rules, we ask for your consent before loading non-essential cookies (Analytics). You can accept all cookies, reject non-essential cookies, or manage preferences via the cookie banner.
            </p>
            <p className="font-body text-sm text-text-secondary leading-relaxed mt-2">
              <strong>All Users:</strong> You can disable cookies in your browser settings. Note that disabling cookies may affect site functionality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Contact
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Questions about cookies? Contact: <a href="mailto:jordivh9@gmail.com" className="text-accent hover:underline">jordivh9@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
