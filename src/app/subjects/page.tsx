"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SUBJECTS } from "@/lib/subjects";

const CATEGORIES = [
  { id: "all", name: "All" },
  { id: "Math & Computer Science", name: "Math & CS" },
  { id: "Science", name: "Sciences" },
  { id: "History", name: "History & Social" },
  { id: "English", name: "English" },
  { id: "Social Science", name: "Social Science" },
  { id: "Languages", name: "World Languages" },
  { id: "Arts", name: "Arts" },
  { id: "Capstone", name: "Capstone" },
];

const POPULAR_SUBJECTS = [
  "ap-calculus-ab",
  "ap-biology",
  "ap-us-history",
  "ap-english-language",
  "ap-psychology",
  "ap-chemistry",
];

const CATEGORY_ICONS: Record<string, string> = {
  "Math & Computer Science": "📐",
  "Science": "🔬",
  "History": "📜",
  "English": "📚",
  "Social Science": "🌍",
  "Languages": "🗣️",
  "Arts": "🎨",
  "Capstone": "🎓",
};

export default function SubjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubjects = useMemo(() => {
    let filtered = SUBJECTS;

    if (activeCategory !== "all") {
      filtered = filtered.filter((s) => s.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.slug.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const popularSubjects = useMemo(
    () => SUBJECTS.filter((s) => POPULAR_SUBJECTS.includes(s.slug)),
    []
  );

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            All 38 AP Score Calculators
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Free, instant predictions for every AP exam. Pick your subject and see where you stand.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-8">
            {[
              { value: "38", label: "Subjects" },
              { value: "100%", label: "Free" },
              { value: "30s", label: "Per Calculation" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-mono text-2xl text-accent block">
                  {stat.value}
                </span>
                <span className="font-body text-xs text-text-muted uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filter */}
        <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border pb-4 mb-8 -mx-4 px-4 sm:-mx-6 sm:px-6">
          <div className="max-w-xl mx-auto mb-4">
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
                placeholder="Search subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border rounded-xl py-3 pl-12 pr-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? SUBJECTS.length
                  : SUBJECTS.filter((s) => s.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-accent text-background"
                      : "bg-surface border border-border text-text-secondary hover:text-accent hover:border-accent/50"
                  }`}
                >
                  <span className="flex items-center gap-2">
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

        {/* Popular Subjects (only show on "all" with no search) */}
        {activeCategory === "all" && !searchQuery && (
          <section className="mb-10">
            <h2 className="font-display text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
              Most Popular
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {popularSubjects.map((subject) => (
                <Link
                  key={subject.slug}
                  href={`/${subject.slug}`}
                  className="group bg-surface border border-cta/30 rounded-xl p-4 hover:border-cta hover:-translate-y-1 transition-all"
                >
                  <h3 className="font-display text-sm font-semibold text-text-primary group-hover:text-cta transition-colors">
                    {subject.name}
                  </h3>
                  <p className="font-mono text-[10px] text-text-muted mt-1 uppercase">
                    Score Calculator
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Subject Cards Grid */}
        {filteredSubjects.length === 0 ? (
          <div className="text-center py-16">
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
            <p className="font-body text-text-secondary mb-2">
              No subjects found matching &quot;{searchQuery}&quot;
            </p>
            <p className="font-body text-sm text-text-muted">
              Try searching for &quot;Calc&quot;, &quot;Bio&quot;, &quot;History&quot;, or &quot;Physics&quot;
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredSubjects.map((subject) => (
              <Link
                key={subject.slug}
                href={`/${subject.slug}`}
                className="group bg-surface border border-border rounded-xl p-5 hover:border-accent hover:-translate-y-1 transition-all flex items-center justify-between"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {subject.name}
                  </h3>
                  <p className="font-mono text-[10px] text-text-muted mt-1 uppercase tracking-wider">
                    Score Calculator
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors shrink-0 opacity-0 group-hover:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="font-body text-text-secondary mb-4">
            Can&apos;t find your subject? All 38 are covered — search above or browse by category.
          </p>
          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 bg-accent text-background font-display text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Calculate My Score — Free
          </Link>
        </div>
      </div>
    </main>
  );
}
