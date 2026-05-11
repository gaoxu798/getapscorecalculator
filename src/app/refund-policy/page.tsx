import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | AP Score Calculator",
  description: "Refund Policy for AP Score Calculator. Learn about our refund terms.",
};

export default function RefundPolicyPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8">
          Refund Policy
        </h1>
        <p className="font-mono text-xs text-text-muted mb-8">
          Last updated: May 9, 2026
        </p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              1. Our Commitment
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              We want you to be satisfied with your purchase. If you're not happy with AP Score Calculator Pro, we offer a straightforward refund policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              2. Refund Eligibility
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-display text-text-primary">Plan</th>
                    <th className="text-left py-2 pr-4 font-display text-text-primary">Refund Window</th>
                    <th className="text-left py-2 font-display text-text-primary">Conditions</th>
                  </tr>
                </thead>
                <tbody className="font-body text-text-secondary">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Pro Monthly ($4.99/month)</td>
                    <td className="py-2 pr-4">14 days</td>
                    <td>Full refund if requested within 14 days of purchase</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Pro Yearly ($39/year)</td>
                    <td className="py-2 pr-4">14 days</td>
                    <td>Full refund if requested within 14 days of purchase</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Semester ($14.99 per 4-month term)</td>
                    <td className="py-2 pr-4">14 days</td>
                    <td>Full refund if requested within 14 days of purchase</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">One-time Purchase ($99)</td>
                    <td className="py-2 pr-4">14 days</td>
                    <td>Full refund if requested within 14 days of purchase</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              3. How to Request a Refund
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Email <a href="mailto:jordivh9@gmail.com" className="text-accent hover:underline">jordivh9@gmail.com</a> with the following information:
            </p>
            <ul className="font-body text-sm text-text-secondary leading-relaxed list-disc list-inside space-y-1 mt-2">
              <li>Your account email address</li>
              <li>Purchase date</li>
              <li>Reason for refund (optional, but helps us improve)</li>
            </ul>
            <p className="font-body text-sm text-text-secondary leading-relaxed mt-4">
              We aim to respond to refund requests within <strong>2 business days</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              4. Refund Processing
            </h2>
            <ul className="font-body text-sm text-text-secondary leading-relaxed list-disc list-inside space-y-1">
              <li>Refunds are typically processed within <strong>5–10 business days</strong></li>
              <li>The refund will be issued to your <strong>original payment method</strong></li>
              <li>Processing time may vary depending on your bank or payment provider</li>
              <li>You will receive an email confirmation once the refund is initiated</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              5. Non-Refundable Situations
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Refunds will <strong>not</strong> be granted in the following cases:
            </p>
            <ul className="font-body text-sm text-text-secondary leading-relaxed list-disc list-inside space-y-1 mt-2">
              <li>Requests made <strong>after the 14-day refund window</strong></li>
              <li>Violations of our <a href="/terms-of-service" className="text-accent hover:underline">Terms of Service</a> resulting in account termination</li>
              <li>Duplicate refund requests for the same purchase</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              6. Cancellation vs. Refund
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-display text-text-primary">Action</th>
                    <th className="text-left py-2 font-display text-text-primary">Effect</th>
                  </tr>
                </thead>
                <tbody className="font-body text-text-secondary">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4"><strong>Cancellation</strong></td>
                    <td>Stops future billing. Your Pro access continues until the end of your current billing period.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4"><strong>Refund</strong></td>
                    <td>Reverses the charge. Your Pro access may be revoked immediately upon refund processing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-body text-sm text-text-secondary leading-relaxed mt-4">
              <strong>How to Cancel (Without Refund):</strong> Go to Account Settings → Billing → Manage Subscription → Cancel Plan. Your subscription will not renew, but you keep Pro access until the period ends.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              7. Automatic Renewal Reminder
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              All subscription plans automatically renew. To avoid unwanted charges: cancel before your next billing date. You will receive a reminder email 3 days before renewal.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              8. Contact
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
