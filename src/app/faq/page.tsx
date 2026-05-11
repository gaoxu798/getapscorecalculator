"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const CATEGORIES = [
  { id: "all", name: "All Questions" },
  { id: "getting-started", name: "Getting Started" },
  { id: "how-it-works", name: "How It Works" },
  { id: "accuracy", name: "Accuracy & Data" },
  { id: "pricing", name: "Pricing & Pro" },
  { id: "privacy", name: "Privacy & Security" },
  { id: "ap-basics", name: "AP Exam Basics" },
];

const FAQS = [
  // Getting Started (5)
  {
    category: "getting-started",
    question: "Is this free to use?",
    answer: "Yes. All 38 AP score calculators are free. No signup, no credit card, no limits on how many times you use it.",
  },
  {
    category: "getting-started",
    question: "Do I need to create an account?",
    answer: "No. The free calculator works instantly in your browser. Pro features (saving history, weakness analysis) require an account so we can store your data.",
  },
  {
    category: "getting-started",
    question: "Which subjects are covered?",
    answer: "All 38 AP subjects, including Calculus AB/BC, Biology, Chemistry, Physics, US History, World History, English Language, English Literature, Psychology, and more. See full list at /subjects.",
  },
  {
    category: "getting-started",
    question: "Does it work on mobile?",
    answer: "Yes. Fully responsive. Sliders, inputs, and results all work on phones and tablets.",
  },
  {
    category: "getting-started",
    question: "Can I use this during the actual AP exam?",
    answer: "No. This is a practice tool only. Using any calculator during the actual exam violates College Board policy.",
  },
  // How It Works (5)
  {
    category: "how-it-works",
    question: "How do I calculate my AP score?",
    answer: "1) Pick your AP subject. 2) Enter your MCQ and FRQ scores using sliders or input boxes. 3) See your predicted 1-5 score instantly, plus section breakdowns.",
  },
  {
    category: "how-it-works",
    question: "What information do I need to enter?",
    answer: "You need your raw scores for each section (MCQ Part A, MCQ Part B, FRQ 1-6, etc.). The exact sections vary by subject. We show you exactly what to enter.",
  },
  {
    category: "how-it-works",
    question: "How does the calculator predict my score?",
    answer: "We use the latest official College Board Course & Exam Descriptions, including section weights and composite score tables. Your raw scores are converted to a composite score, then mapped to the 1-5 scale.",
  },
  {
    category: "how-it-works",
    question: "Can I save my calculations?",
    answer: "Free version: calculations stay in your browser until you close the tab. Pro version: save unlimited calculations to your account and track progress over time.",
  },
  {
    category: "how-it-works",
    question: "What is a composite score?",
    answer: "AP exams combine multiple sections (MCQ, FRQ, etc.) into a single composite score (usually out of 100 or 150). College Board then sets cutoffs to convert composite scores to 1-5.",
  },
  // Accuracy & Data (4)
  {
    category: "accuracy",
    question: "How accurate is this prediction?",
    answer: "We use the latest official scoring rubrics and composite score tables. However, College Board adjusts cutoffs slightly each year based on exam difficulty. Treat the result as a strong estimate, not a guarantee.",
  },
  {
    category: "accuracy",
    question: "Is this an official College Board tool?",
    answer: "No. AP® and Advanced Placement® are registered trademarks of College Board. This is an independent tool based on publicly available scoring guidelines. Your actual score is determined solely by College Board.",
  },
  {
    category: "accuracy",
    question: "Where does your data come from?",
    answer: "From publicly available College Board Course & Exam Descriptions (CEDs) and scoring guidelines. We update yearly after the May exams.",
  },
  {
    category: "accuracy",
    question: "Why might my actual score differ?",
    answer: "College Board adjusts cutoffs based on exam difficulty and student performance. Our calculator uses the most recent guidelines, but cannot predict year-specific adjustments.",
  },
  // Pricing & Pro (5)
  {
    category: "pricing",
    question: "What's the difference between Free and Pro?",
    answer: "Free gives you instant score predictions for all 38 subjects. Pro adds: save calculation history, weakness breakdown by section, study tips by score level, no ads, and priority support.",
  },
  {
    category: "pricing",
    question: "How much does Pro cost?",
    answer: "$4.99/month, $39/year (save 35%), or $14.99 per 4-month semester. We also offer a $99 one-time purchase for permanent access.",
  },
  {
    category: "pricing",
    question: "Can I get a refund?",
    answer: "Yes. All paid plans have a 14-day refund window. Email jordivh9@gmail.com. Processing takes 5–10 business days.",
  },
  {
    category: "pricing",
    question: "How do I cancel Pro?",
    answer: "Go to Account Settings → Billing → Manage Subscription → Cancel. You keep Free access after canceling.",
  },
  {
    category: "pricing",
    question: "Is my payment information safe?",
    answer: "Yes. We use Stripe for payment processing. We do not store your full payment card details on our servers.",
  },
  // Privacy & Security (3)
  {
    category: "privacy",
    question: "Is my data stored or shared?",
    answer: "Free version: nothing is uploaded. All calculations happen in your browser. Pro version: calculation history is saved to your account. We do not sell data. See our Privacy Policy.",
  },
  {
    category: "privacy",
    question: "What data do you collect?",
    answer: "We use Google Analytics 4 for page visits and Sentry for error monitoring. We do not collect your AP scores or personal information in the free version.",
  },
  {
    category: "privacy",
    question: "Do you use cookies?",
    answer: "Yes, for essential functionality and analytics. See our Cookie Policy for details and how to manage preferences.",
  },
  // AP Exam Basics (5)
  {
    category: "ap-basics",
    question: "What is a good AP score?",
    answer: "3 = passing, 4 = good, 5 = excellent. Most colleges accept 3+ for credit, but competitive schools often require 4 or 5.",
  },
  {
    category: "ap-basics",
    question: "How are AP exams scored?",
    answer: "Each exam has multiple sections (MCQ, FRQ, etc.). Section scores are weighted and combined into a composite score (0-100 or 0-150). College Board then converts composite scores to 1-5 using annual cutoffs.",
  },
  {
    category: "ap-basics",
    question: "Do colleges accept AP scores of 3?",
    answer: "Most do, but policies vary. Check each college's AP credit policy. Competitive schools (Ivies, Stanford, MIT) often require 4 or 5.",
  },
  {
    category: "ap-basics",
    question: "What's the difference between raw score and scaled score?",
    answer: "Raw score = questions answered correctly. Scaled score = adjusted for section difficulty. Composite score = weighted combination of scaled scores. AP score (1-5) = final converted score.",
  },
  {
    category: "ap-basics",
    question: "Can I improve my AP score after the exam?",
    answer: "No. AP scores are final. However, you can retake the exam the following year. Some schools allow score withholding from transcripts.",
  },
];

const RELATED_LINKS = [
  { title: "How AP Scoring Works", href: "/how-ap-scoring-works", description: "Understand the scoring pipeline" },
  { title: "Score Distribution", href: "/score-distribution", description: "See how students score across subjects" },
  { title: "All 38 Subjects", href: "/subjects", description: "Browse every AP calculator" },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filteredFaqs = useMemo(() => {
    let filtered = FAQS;
    
    if (activeCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === activeCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [activeCategory, searchQuery]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need to know about AP scoring, our calculator, and how to get the most out of it.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-border rounded-xl py-3 pl-12 pr-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24">
              <h3 className="font-display text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                Categories
              </h3>
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                {CATEGORIES.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? FAQS.length
                      : FAQS.filter((f) => f.category === cat.id).length;
                  const isActive = activeCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`shrink-0 text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "bg-accent text-background"
                          : "bg-surface border border-border text-text-secondary hover:text-accent hover:border-accent/50"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span>{cat.name}</span>
                        <span
                          className={`font-mono text-xs ${
                            isActive ? "text-background/70" : "text-text-muted"
                          }`}
                        >
                          {count}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* FAQ Accordion */}
          <div className="flex-1">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <svg
                  className="w-12 h-12 text-text-muted mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p className="font-body text-text-secondary">
                  No questions found matching &quot;{searchQuery}&quot;
                </p>
                <p className="font-body text-sm text-text-muted mt-2">
                  Try a different search term or browse by category
                </p>
              </div>
            ) : (
              <div className="space-y-0">
                {filteredFaqs.map((faq, index) => {
                  const globalIndex = FAQS.indexOf(faq);
                  const isOpen = openItems.has(globalIndex);

                  return (
                    <div
                      key={globalIndex}
                      className={`border-b border-border last:border-b-0 ${
                        isOpen ? "border-l-2 border-l-accent pl-4 -ml-[2px]" : ""
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full flex items-center justify-between py-5 text-left group"
                      >
                        <span
                          className={`font-display text-base font-medium pr-4 transition-colors ${
                            isOpen ? "text-accent" : "text-text-primary group-hover:text-accent"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <span
                          className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                            isOpen
                              ? "bg-accent border-accent text-background"
                              : "border-border text-text-muted"
                          }`}
                        >
                          <svg
                            className={`w-3 h-3 transition-transform ${
                              isOpen ? "rotate-45" : ""
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
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-96 pb-5" : "max-h-0"
                        }`}
                      >
                        <p className="font-body text-sm text-text-secondary leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-surface border border-border rounded-2xl p-8 text-center">
          <h2 className="font-display text-xl font-bold text-text-primary mb-3">
            Can&apos;t find your question?
          </h2>
          <p className="font-body text-text-secondary mb-6">
            Email us directly. We typically respond within 24 hours.
          </p>
          <a
            href="mailto:jordivh9@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-background font-display text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            jordivh9@gmail.com
          </a>
          <p className="font-body text-sm text-text-muted mt-4">
            Or try the calculator now — no signup needed
          </p>
        </div>

        {/* Related Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {RELATED_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-surface border border-border rounded-xl p-6 hover:border-accent transition-colors"
            >
              <h3 className="font-display text-base font-semibold text-text-primary group-hover:text-accent transition-colors mb-1">
                {link.title}
              </h3>
              <p className="font-body text-sm text-text-secondary">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
