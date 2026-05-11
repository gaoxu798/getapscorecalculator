"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Is this free to use?",
    answer:
      "Yes. All 38 AP score calculators are free. No signup, no credit card, no limits on how many times you use it.",
  },
  {
    question: "Is this an official College Board tool?",
    answer:
      "No. AP® and Advanced Placement® are registered trademarks of College Board. This is an independent tool based on publicly available scoring guidelines. Your actual score is determined solely by College Board.",
  },
  {
    question: "How accurate is the prediction?",
    answer:
      "We use the latest official scoring rubrics and composite score tables. However, College Board adjusts cutoffs slightly each year based on exam difficulty. Treat the result as a strong estimate, not a guarantee.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. The free calculator works instantly in your browser. Pro features (saving history, weakness analysis) require an account so we can store your data.",
  },
  {
    question: "How is this different from Fiveable?",
    answer:
      "Fiveable is a full AP prep platform. We do one thing: score calculation. That means faster load times, a cleaner interface, and no login required for the free version.",
  },
  {
    question: "Which subjects are covered?",
    answer:
      "All 38 AP subjects, including Calculus AB/BC, Biology, Chemistry, Physics, US History, World History, English Language, English Literature, Psychology, and more. See the full list on our Subjects page.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Questions?
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Everything you need to know before you start calculating.
          </p>
        </div>

        <div className="space-y-0">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border last:border-b-0"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="font-display text-base font-medium text-text-primary group-hover:text-accent transition-colors pr-4">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center transition-all ${
                    openIndex === index
                      ? "bg-accent border-accent text-background"
                      : "text-text-muted"
                  }`}
                >
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-5">
                  <p className="font-body text-sm text-text-secondary leading-relaxed max-w-xl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
