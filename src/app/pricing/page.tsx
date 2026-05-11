import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | AP Score Calculator",
  description: "Simple pricing for every student. Start free with all 38 AP score calculators. Upgrade to Pro for $4.99/month to save history and get weakness analysis.",
};

const PLANS = [
  {
    name: "Free",
    badge: "Free Forever",
    badgeColor: "bg-text-muted/20 text-text-muted",
    price: "$0",
    period: "/month",
    description: "For quick score checks during practice",
    features: [
      "All 38 AP subjects",
      "Real-time score prediction",
      "Score distribution chart",
      "Mobile-friendly",
      "No signup required",
    ],
    cta: "Get Started Free",
    ctaStyle: "border border-border text-text-primary hover:border-accent hover:text-accent",
    trust: "No credit card required",
  },
  {
    name: "Pro",
    badge: "Most Popular",
    badgeColor: "bg-cta text-background",
    price: "$4.99",
    period: "/month",
    description: "For students prepping for multiple APs",
    features: [
      "Everything in Free",
      "Save calculation history",
      "Weakness breakdown by section",
      "Study tips by score level",
      "No ads",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    ctaStyle: "bg-cta text-background hover:opacity-90",
    trust: "14-day refund · Cancel anytime",
    highlighted: true,
  },
  {
    name: "One-Time",
    badge: "Best Value",
    badgeColor: "bg-accent text-background",
    price: "$99",
    period: "one-time",
    description: "Permanent access, no recurring bills",
    features: [
      "Everything in Pro",
      "Permanent access forever",
      "All future updates included",
      "3-year coverage (sophomore to senior)",
      "Personal use only",
    ],
    cta: "Claim One-Time Access",
    ctaStyle: "border border-border text-text-primary hover:border-accent hover:text-accent",
    trust: "14-day refund · One payment, no renewals",
    note: "Limited to first 200 students",
  },
];

const BILLING_OPTIONS = [
  { label: "Monthly", price: "$4.99", period: "/month", savings: null },
  { label: "Annual", price: "$39", period: "/year", savings: "Save $20.88 (35% off)", popular: true },
  { label: "Semester", price: "$14.99", period: "/4 months", savings: null },
];

const COMPARISON_FEATURES = [
  { feature: "38 Subjects", free: true, pro: true, onetime: true },
  { feature: "Real-time prediction", free: true, pro: true, onetime: true },
  { feature: "Save history", free: false, pro: true, onetime: true },
  { feature: "Weakness analysis", free: false, pro: true, onetime: true },
  { feature: "Study tips", free: false, pro: true, onetime: true },
  { feature: "No ads", free: false, pro: true, onetime: true },
  { feature: "Priority support", free: false, pro: true, onetime: true },
  { feature: "Future updates", free: true, pro: true, onetime: true },
];

const PRICING_FAQS = [
  {
    question: "Can I use the calculator for free?",
    answer: "Yes. All 38 calculators are free with no limits.",
  },
  {
    question: "What happens if I cancel Pro?",
    answer: "You keep Free access. Your saved history remains until you delete it.",
  },
  {
    question: "Is the $99 really one-time?",
    answer: "Yes. One payment. No renewals. Ever.",
  },
  {
    question: "Do you offer student discounts?",
    answer: "Pro is already priced for students. The One-Time plan is the best deal.",
  },
  {
    question: "How do refunds work?",
    answer: "14-day full refund. Email jordivh9@gmail.com. Processing takes 5-10 business days.",
  },
];

export default function PricingPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Simple Pricing for Every Student
          </h1>
          <p className="font-body text-lg text-text-secondary mb-3">
            Start free. Upgrade when you need more. No hidden fees.
          </p>
          <p className="font-mono text-sm text-text-muted">
            14-day refund · Cancel anytime · No credit card for Free
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-surface rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-cta shadow-[0_0_40px_rgba(255,191,0,0.1)] -translate-y-2"
                  : "border border-border"
              }`}
            >
              {/* Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${plan.badgeColor}`}>
                {plan.badge}
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="font-mono text-5xl font-bold text-text-primary">
                  {plan.price}
                </span>
                <span className="font-body text-sm text-text-muted ml-1">
                  {plan.period}
                </span>
              </div>

              <p className="font-body text-sm text-text-secondary mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full py-3 rounded-lg font-display text-sm uppercase tracking-wider transition-all ${plan.ctaStyle}`}>
                {plan.cta}
              </button>

              <p className="font-mono text-xs text-text-muted text-center mt-3">
                {plan.trust}
              </p>

              {/* Note */}
              {plan.note && (
                <p className="font-mono text-xs text-cta text-center mt-2">
                  {plan.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Billing Toggle */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="font-display text-lg font-semibold text-text-primary text-center mb-6">
            Pro Billing Options
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {BILLING_OPTIONS.map((option) => (
              <div
                key={option.label}
                className={`relative px-6 py-4 rounded-xl border ${
                  option.popular
                    ? "border-cta bg-cta/5"
                    : "border-border bg-surface"
                }`}
              >
                {option.popular && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-cta text-background text-[10px] font-bold rounded-full uppercase">
                    Most Popular
                  </span>
                )}
                <div className="text-center">
                  <span className="font-mono text-2xl font-bold text-text-primary">
                    {option.price}
                  </span>
                  <span className="font-body text-sm text-text-muted ml-1">
                    {option.period}
                  </span>
                  <p className="font-body text-xs text-text-muted mt-1">
                    {option.label}
                  </p>
                  {option.savings && (
                    <p className="font-mono text-xs text-accent mt-1">
                      {option.savings}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="font-display text-lg font-semibold text-text-primary text-center mb-6">
            Feature Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-display text-text-primary py-3 px-4">Feature</th>
                  <th className="text-center font-display text-text-primary py-3 px-4">Free</th>
                  <th className="text-center font-display text-cta py-3 px-4">Pro</th>
                  <th className="text-center font-display text-accent py-3 px-4">One-Time</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 font-body text-sm text-text-secondary">{row.feature}</td>
                    <td className="text-center py-3 px-4">
                      {row.free ? (
                        <svg className="w-5 h-5 text-accent mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-text-muted mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      <svg className="w-5 h-5 text-accent mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="text-center py-3 px-4">
                      <svg className="w-5 h-5 text-accent mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 px-4 font-body text-sm text-text-secondary font-medium">Price</td>
                  <td className="text-center py-3 px-4 font-mono text-sm text-text-secondary">$0</td>
                  <td className="text-center py-3 px-4 font-mono text-sm text-cta font-bold">$4.99/mo</td>
                  <td className="text-center py-3 px-4 font-mono text-sm text-accent font-bold">$99 once</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing FAQ */}
        <div className="mb-16">
          <h3 className="font-display text-lg font-semibold text-text-primary text-center mb-6">
            Pricing FAQ
          </h3>
          <div className="max-w-2xl mx-auto space-y-4">
            {PRICING_FAQS.map((faq, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-6">
                <h4 className="font-display text-base font-semibold text-text-primary mb-2">
                  {faq.question}
                </h4>
                <p className="font-body text-sm text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-text-muted">
            Prices do not include applicable taxes. Tax calculated at checkout.
          </p>
          <p className="font-mono text-xs text-text-muted mt-1">
            We use Stripe. We do not store your full card details.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-surface border border-border rounded-2xl p-10">
          <p className="font-body text-text-secondary mb-4">
            Still not sure? Try the free calculator first. No signup needed.
          </p>
          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 bg-accent text-background font-display text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Calculate My Score — Free
          </Link>
          <div className="mt-4">
            <Link
              href="/subjects"
              className="font-body text-sm text-text-muted hover:text-accent transition-colors"
            >
              View All 38 Subjects →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
