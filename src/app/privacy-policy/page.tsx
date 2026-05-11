import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AP Score Calculator",
  description: "Privacy Policy for AP Score Calculator. Learn how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-text-muted mb-8">
          Last updated: May 9, 2026
        </p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              1. Who We Are
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              AP Score Calculator is operated by an independent developer.{" "}
              <strong>Domain:</strong> getapscorecalculator.xyz{" "}
              <strong>Contact:</strong>{" "}
              <a
                href="mailto:jordivh9@gmail.com"
                className="text-accent hover:underline"
              >
                jordivh9@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              2. Information We Collect
            </h2>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              2.1 Automatically Collected
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
              When you visit our site, we automatically collect: IP address,
              browser type and version, device type and operating system, pages
              visited, time spent, referral source, and error data (technical
              crash reports).
            </p>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              2.2 Local Storage (Your Browser Only)
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
              Calculation history: If you use Pro features, your score
              calculations are stored in your browser&apos;s LocalStorage. This
              data never leaves your device and is not uploaded to our servers.
            </p>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              2.3 Payment Information (Pro Subscribers)
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
              When you subscribe to Pro, Stripe processes your payment. We do
              not store your full payment card details on our servers. We
              receive: billing email, subscription status, and order records
              from Stripe.
            </p>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              2.4 We Do NOT Collect
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              We do not upload your practice test scores or inputs to our
              servers in the free version. We do not collect or store your AP
              exam scores or academic records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              3. How We Use Your Information
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-display text-text-primary">
                      Purpose
                    </th>
                    <th className="text-left py-2 font-display text-text-primary">
                      Legal Basis
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-text-secondary">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Website functionality</td>
                    <td>Legitimate Interests</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">
                      Traffic analysis & improvement
                    </td>
                    <td>
                      Consent (EU/UK) / Legitimate Interests (US)
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Error monitoring & debugging</td>
                    <td>Legitimate Interests</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Subscription management</td>
                    <td>Contract</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              4. Cookies & Tracking
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-display text-text-primary">
                      Cookie Type
                    </th>
                    <th className="text-left py-2 pr-4 font-display text-text-primary">
                      Purpose
                    </th>
                    <th className="text-left py-2 font-display text-text-primary">
                      Required?
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-text-secondary">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Essential</td>
                    <td className="py-2 pr-4">Site functionality</td>
                    <td>Yes — always active</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">
                      Analytics (Google Analytics 4)
                    </td>
                    <td className="py-2 pr-4">Traffic analysis</td>
                    <td>No — requires consent in EU/UK</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-body text-sm text-text-secondary leading-relaxed mt-4">
              <strong>EU/UK users:</strong> We ask for consent before loading
              non-essential cookies. <strong>All users:</strong> You can disable
              cookies in your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              5. Third Parties
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-display text-text-primary">
                      Service
                    </th>
                    <th className="text-left py-2 pr-4 font-display text-text-primary">
                      Purpose
                    </th>
                    <th className="text-left py-2 font-display text-text-primary">
                      Data Shared
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-text-secondary">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Vercel</td>
                    <td className="py-2 pr-4">Hosting & CDN</td>
                    <td>IP, access logs</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Google Analytics 4</td>
                    <td className="py-2 pr-4">Traffic analysis</td>
                    <td>IP, page views, events</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Sentry</td>
                    <td className="py-2 pr-4">Error monitoring</td>
                    <td>Error data, IP, browser info</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Stripe</td>
                    <td className="py-2 pr-4">Payment processing</td>
                    <td>Payment details (tokenized by Stripe)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              6. Data Retention
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-display text-text-primary">
                      Data Type
                    </th>
                    <th className="text-left py-2 font-display text-text-primary">
                      Retention Period
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-text-secondary">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Analytics data</td>
                    <td>26 months (GA4 default)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Error logs</td>
                    <td>90 days</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">LocalStorage</td>
                    <td>Until you clear browser data</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Payment records</td>
                    <td>
                      As required by law (typically 7 years for tax purposes)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              7. Your Rights
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Depending on your location, you may have the right to: access your
              data, correct inaccurate data, delete your data, object to
              processing, and withdraw consent. To exercise these rights,
              contact:{" "}
              <a
                href="mailto:jordivh9@gmail.com"
                className="text-accent hover:underline"
              >
                jordivh9@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Our service is intended for high school students (ages 15–18). We
              do not knowingly collect data from children under 13. If you
              believe we have collected data from a child under 13, contact us
              immediately at jordivh9@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              9. Contact
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:jordivh9@gmail.com"
                className="text-accent hover:underline"
              >
                jordivh9@gmail.com
              </a>
              <br />
              <strong>Domain:</strong> getapscorecalculator.xyz
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
