import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How AP Exams Are Scored | AP Score Calculator",
  description: "Learn how AP exams are scored. Understand the composite score calculation, section weights, and how your raw scores become AP scores 1-5.",
};

const STEPS = [
  {
    number: "01",
    title: "Count Correct Answers",
    subtitle: "Raw Score",
    description: "Each section (MCQ, FRQ) starts with a raw score — questions answered correctly or points earned.",
    example: "MCQ Part A: 25/30 correct",
    color: "text-accent",
    borderColor: "border-accent",
  },
  {
    number: "02",
    title: "Adjust for Difficulty",
    subtitle: "Scaled Score",
    description: "College Board scales raw scores to account for section difficulty. Harder sections may get a slight boost.",
    example: "25/30 → 28/30 scaled",
    color: "text-accent",
    borderColor: "border-accent",
  },
  {
    number: "03",
    title: "Weight and Combine",
    subtitle: "Composite Score",
    description: "Each section has a specific weight (e.g., MCQ = 50%, FRQ = 50%). Scaled scores are combined into a composite out of 100 or 150.",
    example: "MCQ (50%) + FRQ (50%) = 72/100 composite",
    color: "text-cta",
    borderColor: "border-cta",
  },
  {
    number: "04",
    title: "Map to 1-5 Scale",
    subtitle: "AP Score",
    description: "College Board sets annual cutoffs. Your composite score becomes your final AP score.",
    example: "72/100 → AP Score 4",
    color: "text-cta",
    borderColor: "border-cta",
  },
];

const SUBJECT_WEIGHTS = [
  {
    name: "AP Calculus AB",
    composite: "0-108",
    sections: [
      { name: "MCQ", weight: "50%", detail: "30 no-calc + 15 calc" },
      { name: "FRQ", weight: "50%", detail: "6 free response" },
    ],
  },
  {
    name: "AP Biology",
    composite: "0-150",
    sections: [
      { name: "MCQ", weight: "50%", detail: "60 questions" },
      { name: "FRQ", weight: "50%", detail: "2 long + 4 short" },
    ],
  },
  {
    name: "AP US History",
    composite: "0-130",
    sections: [
      { name: "MCQ", weight: "40%", detail: "55 questions" },
      { name: "SAQ", weight: "20%", detail: "3 short answers" },
      { name: "DBQ", weight: "25%", detail: "1 document-based" },
      { name: "LEQ", weight: "15%", detail: "1 long essay" },
    ],
  },
  {
    name: "AP English Language",
    composite: "0-150",
    sections: [
      { name: "MCQ", weight: "45%", detail: "45 questions" },
      { name: "FRQ", weight: "55%", detail: "3 essays" },
    ],
  },
];

const FAQS = [
  {
    question: "Are the score cutoffs the same every year?",
    answer: "No. College Board adjusts cutoffs slightly each year based on exam difficulty and overall student performance. However, they remain relatively stable — a composite score of 70%+ almost always earns a 5.",
  },
  {
    question: "Which section matters more — MCQ or FRQ?",
    answer: "It depends on the subject. Most exams weight them equally (50/50), but some like AP Biology (60/40) or AP English (45/55) have different splits. Check your specific subject page for exact weights.",
  },
  {
    question: "Can I estimate my score before the exam?",
    answer: "Yes. Use our calculator with practice test results. The more recent the practice test (official College Board released exams are best), the more accurate your prediction.",
  },
  {
    question: "What's the difference between raw score and scaled score?",
    answer: "Raw score is your actual points earned. Scaled score (or composite score) applies section weights and converts to the 1-5 AP scale. Our calculator handles both conversions automatically.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How AP Exams Are Scored
            </h1>
            <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
              From raw answers to your final 1-5 score. Understand the math behind your AP result — and how our calculator uses it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/subjects"
                className="inline-flex items-center gap-2 bg-accent text-background font-display text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Try the Calculator
              </Link>
              <Link
                href="/score-distribution"
                className="inline-flex items-center gap-2 border border-border text-text-primary font-display text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                View Score Distribution
              </Link>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-text-muted uppercase">Raw Score</span>
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="font-mono text-xs text-text-muted uppercase">Scaled</span>
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="font-mono text-xs text-text-muted uppercase">Composite</span>
              <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="font-mono text-xs text-cta uppercase">AP Score</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-background border border-border rounded-lg p-3 text-center">
                <span className="font-mono text-2xl text-accent">25</span>
                <p className="font-mono text-[10px] text-text-muted mt-1">/30 MCQ</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-3 text-center">
                <span className="font-mono text-2xl text-accent">28</span>
                <p className="font-mono text-[10px] text-text-muted mt-1">/30 scaled</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-3 text-center">
                <span className="font-mono text-2xl text-cta">72</span>
                <p className="font-mono text-[10px] text-text-muted mt-1">/100 composite</p>
              </div>
              <div className="bg-cta/10 border border-cta/30 rounded-lg p-3 text-center">
                <span className="font-mono text-2xl text-cta">4</span>
                <p className="font-mono text-[10px] text-text-muted mt-1">AP Score</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Timeline */}
        <section className="mb-20">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-10 text-center">
            The Scoring Pipeline
          </h2>
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            <div className="hidden lg:block absolute top-12 left-[12.5%] w-[25%] h-0.5 bg-accent" />
            <div className="hidden lg:block absolute top-12 left-[37.5%] w-[25%] h-0.5 bg-accent" />
            <div className="hidden lg:block absolute top-12 left-[62.5%] w-[25%] h-0.5 bg-cta" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {STEPS.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step circle */}
                  <div className={`w-12 h-12 rounded-full border-2 ${step.borderColor} bg-background flex items-center justify-center mb-4 mx-auto lg:mx-0 relative z-10`}>
                    <span className={`font-mono text-sm font-bold ${step.color}`}>{step.number}</span>
                  </div>
                  
                  <div className="bg-surface border border-border rounded-xl p-6">
                    <h3 className={`font-display text-lg font-semibold ${step.color} mb-1`}>
                      {step.title}
                    </h3>
                    <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                      {step.subtitle}
                    </p>
                    <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="bg-background border border-border rounded-lg p-3">
                      <p className="font-mono text-xs text-accent">{step.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Weights by Subject */}
        <section className="mb-20">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-8">
            Section Weights by Subject
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUBJECT_WEIGHTS.map((subject) => (
              <div key={subject.name} className="bg-surface border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {subject.name}
                  </h3>
                  <span className="font-mono text-sm text-text-muted">
                    Composite: {subject.composite}
                  </span>
                </div>
                <div className="space-y-3">
                  {subject.sections.map((section) => (
                    <div key={section.name} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-body text-sm text-text-secondary">
                            {section.name}
                          </span>
                          <span className="font-mono text-sm text-accent">
                            {section.weight}
                          </span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full"
                            style={{ width: section.weight }}
                          />
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-text-muted shrink-0 w-24 text-right">
                        {section.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cutoffs Explained */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
              Why Cutoffs Change Every Year
            </h2>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              College Board doesn't publish exact cutoffs in advance. Here's why — and what we use instead.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                Exam Difficulty
              </h3>
              <p className="font-body text-sm text-text-secondary">
                Harder exams → lower cutoffs. Easier exams → higher cutoffs.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                Student Performance
              </h3>
              <p className="font-body text-sm text-text-secondary">
                If most students struggle, cutoffs drop. If most excel, cutoffs rise.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                Our Approach
              </h3>
              <p className="font-body text-sm text-text-secondary">
                We use the most recent published cutoffs as a baseline. Your prediction is a strong estimate, not a guarantee.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-surface border-l-4 border-cta rounded-r-xl p-6">
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Disclaimer:</strong> College Board adjusts cutoffs based on exam difficulty and student performance. Our calculator uses the most recent published guidelines. Your actual score may differ. AP® and Advanced Placement® are registered trademarks of College Board.
            </p>
          </div>
        </section>

        {/* How Our Calculator Works */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
                How We Calculate Your Prediction
              </h2>
              <p className="font-body text-text-secondary mb-6">
                Transparent, step-by-step. No black box.
              </p>
              <ol className="space-y-4">
                {[
                  "You enter raw scores — sliders or input boxes for each section",
                  "We apply section weights — from the official Course & Exam Description",
                  "We compute composite score — weighted sum, rounded",
                  "We map to AP score — using the latest published cutoff table",
                  "We show breakdown — which sections helped, which hurt",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-sm text-accent shrink-0 w-6">{i + 1}.</span>
                    <span className="font-body text-sm text-text-secondary">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="font-body text-sm text-text-muted mt-6">
                All calculations happen in your browser. Your scores never leave your device.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-text-secondary">MCQ Score</span>
                  <span className="font-mono text-sm text-accent">25/30</span>
                </div>
                <div className="h-2 bg-background rounded-full">
                  <div className="h-full bg-accent rounded-full" style={{ width: "83%" }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-text-secondary">FRQ Score</span>
                  <span className="font-mono text-sm text-accent">32/54</span>
                </div>
                <div className="h-2 bg-background rounded-full">
                  <div className="h-full bg-accent rounded-full" style={{ width: "59%" }} />
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-sm text-text-secondary">Weighted Composite</span>
                    <span className="font-mono text-sm text-cta">72/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm font-medium text-text-primary">Predicted AP Score</span>
                    <span className="font-mono text-2xl text-cta font-bold">4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-8">
            Common Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-surface border border-border rounded-xl p-6">
                <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-surface border border-border rounded-2xl p-10">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
            Now you know how it works
          </h2>
          <p className="font-body text-text-secondary mb-6 max-w-lg mx-auto">
            Try it on your latest practice test. Pick any of the 38 AP subjects.
          </p>
          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 bg-accent text-background font-display text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Calculate My Score — Free
          </Link>
          <p className="font-mono text-xs text-text-muted mt-4">
            No signup · 38 subjects · Instant results
          </p>
        </section>
      </div>
    </main>
  );
}
