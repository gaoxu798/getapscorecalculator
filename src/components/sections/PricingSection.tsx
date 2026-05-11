"use client";

import { useState } from "react";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "For students who want quick score predictions during practice",
    features: [
      "All 38 subjects",
      "Real-time prediction",
      "Score distribution",
      "Mobile-friendly",
    ],
    cta: "Start Calculating",
    ctaLink: "/subjects",
    highlighted: false,
  },
  {
    name: "Pro Monthly",
    price: "$4.99",
    period: "/month",
    description: "For students prepping for multiple APs who want to track progress",
    features: [
      "Everything in Free",
      "Save calculation history",
      "Weakness breakdown",
      "Study tips by score level",
      "No ads",
    ],
    cta: "Upgrade to Pro",
    ctaLink: "#",
    highlighted: false,
  },
  {
    name: "Pro Annual",
    price: "$39",
    period: "/year",
    description: "Best value for students who want uninterrupted access",
    features: [
      "Everything in Pro",
      "35% savings vs monthly",
      "All future updates",
      "Priority support",
    ],
    cta: "Save with Annual",
    ctaLink: "#",
    highlighted: true,
    badge: "Best Value",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Simple Pricing
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Start free. Upgrade when you need more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-surface rounded-xl p-6 ${
                plan.highlighted
                  ? "border-2 border-cta"
                  : "border border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-cta text-background font-display text-xs uppercase tracking-wider px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-text-primary">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="font-mono text-sm text-text-muted">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="font-body text-sm text-text-secondary mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-body text-sm text-text-secondary"
                  >
                    <svg
                      className="w-5 h-5 text-accent shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                className={`block w-full text-center font-display text-sm uppercase tracking-wider py-3 rounded-full transition-opacity ${
                  plan.highlighted
                    ? "bg-cta text-background hover:opacity-90"
                    : "bg-border text-text-primary hover:bg-text-muted/20"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-sm text-text-muted mt-8">
          No credit card required for Free. Pro plans have a 14-day refund
          guarantee.
        </p>
      </div>
    </section>
  );
}
