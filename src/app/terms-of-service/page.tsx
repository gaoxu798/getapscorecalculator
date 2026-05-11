import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | AP Score Calculator",
  description: "Terms of Service for AP Score Calculator. Read our terms before using the service.",
};

export default function TermsOfServicePage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8">
          Terms of Service
        </h1>
        <p className="font-mono text-xs text-text-muted mb-8">
          Last updated: May 9, 2026
        </p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              1. Acceptance
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              By using AP Score Calculator ("the Service"), you agree to these Terms. If you do not agree, do not use the Service.
            </p>
            <p className="font-body text-sm text-text-secondary leading-relaxed mt-2">
              <strong>Domain:</strong> getapscorecalculator.xyz<br />
              <strong>Contact:</strong> <a href="mailto:jordivh9@gmail.com" className="text-accent hover:underline">jordivh9@gmail.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              2. Service Description
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              We provide an online tool to <strong>estimate</strong> AP® exam scores based on publicly available scoring guidelines. <strong>This is not an official College Board tool.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              3. Important Disclaimers
            </h2>
            
            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              3.1 Not Official
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
              <strong>AP®</strong> and <strong>Advanced Placement®</strong> are registered trademarks of <strong>College Board</strong>. This Service is <strong>not affiliated with, endorsed by, or sponsored by College Board</strong>.
            </p>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              3.2 Predictions Only
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
              All score estimates are for <strong>educational purposes only</strong>. They do not guarantee actual exam results. Actual scores are determined solely by College Board.
            </p>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              3.3 No Professional Advice
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              The Service does not provide professional educational counseling. Consult your teachers or school counselors for personalized advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              4. User Accounts
            </h2>
            
            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              4.1 Eligibility
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
              You must be at least <strong>13 years old</strong>. If you are under 18, you confirm that you have <strong>parental consent</strong> to use the Service and subscribe to paid plans.
            </p>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              4.2 Account Security
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              You are responsible for maintaining your account credentials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              5. Acceptable Use
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-2">
              You agree not to:
            </p>
            <ul className="font-body text-sm text-text-secondary leading-relaxed list-disc list-inside space-y-1">
              <li>Use the Service for any illegal purpose</li>
              <li>Attempt to reverse engineer or scrape the Service</li>
              <li>Use automated tools to access the Service</li>
              <li>Misrepresent the Service as official College Board material</li>
              <li>Upload malicious code or interfere with the Service's operation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              6. Paid Subscriptions
            </h2>
            
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-display text-text-primary">Plan</th>
                    <th className="text-left py-2 pr-4 font-display text-text-primary">Price</th>
                    <th className="text-left py-2 font-display text-text-primary">Billing</th>
                  </tr>
                </thead>
                <tbody className="font-body text-text-secondary">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Pro Monthly</td>
                    <td className="py-2 pr-4">$4.99/month</td>
                    <td>Automatic renewal</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Pro Yearly</td>
                    <td className="py-2 pr-4">$39/year</td>
                    <td>Automatic renewal</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Semester</td>
                    <td className="py-2 pr-4">$14.99 per 4-month term</td>
                    <td>Automatic renewal</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">One-time Purchase</td>
                    <td className="py-2 pr-4">$99 one-time purchase</td>
                    <td>No renewal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              6.2 Automatic Renewal
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
              Subscriptions renew automatically unless canceled before the next billing date. You can cancel anytime from your <strong>Account Settings → Billing → Manage Subscription → Cancel Plan</strong>.
            </p>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              6.3 Refunds
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
              We offer a <strong>14-day</strong> refund window for all subscription and one-time purchases. Contact <a href="mailto:jordivh9@gmail.com" className="text-accent hover:underline">jordivh9@gmail.com</a> to request a refund. Refunds typically process within <strong>5–10 business days</strong>.
            </p>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              6.4 Taxes
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
              Prices do not include applicable taxes. Tax will be calculated at checkout based on your location.
            </p>

            <h3 className="font-display text-lg font-medium text-text-primary mb-2">
              6.5 Payment Processing
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              We use <strong>Stripe</strong> to process payments. We do not store your full payment card details on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              7. Intellectual Property
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              All content, code, and design are owned by the operator of getapscorecalculator.xyz. You may not copy, modify, or distribute without permission.
            </p>
            <p className="font-body text-sm text-text-secondary leading-relaxed mt-2">
              The AP® name and logo are trademarks of College Board. We use them under nominative fair use for descriptive purposes only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              8. Limitation of Liability
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              To the maximum extent permitted by law:
            </p>
            <ul className="font-body text-sm text-text-secondary leading-relaxed list-disc list-inside space-y-1 mt-2">
              <li>We are <strong>not liable</strong> for any decisions you make based on score estimates</li>
              <li>We are <strong>not liable</strong> for indirect, incidental, or consequential damages</li>
              <li>Total liability shall not exceed the amount you paid in the last 12 months, or $50 if you used the free version</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              9. Termination
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              We may suspend or terminate your access for violations of these Terms. You may stop using the Service at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              10. Governing Law
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              These Terms are governed by the laws of <strong>California, USA</strong>. Any disputes shall be resolved in the courts of <strong>California, USA</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              11. Changes
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              We may update these Terms. Continued use after changes constitutes acceptance. The "Last updated" date at the top indicates the current version.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              12. Contact
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              <strong>Email:</strong> <a href="mailto:jordivh9@gmail.com" className="text-accent hover:underline">jordivh9@gmail.com</a><br />
              <strong>Domain:</strong> getapscorecalculator.xyz
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
