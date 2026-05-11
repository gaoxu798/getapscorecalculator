"use client";

import Link from "next/link";
import { SUBJECTS } from "@/lib/subjects";

const POPULAR_SUBJECTS = SUBJECTS.slice(0, 8);

export function SubjectsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            38 Subjects. One Calculator.
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            From Calculus to Art History — every AP exam covered with real-time
            score prediction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {POPULAR_SUBJECTS.map((subject) => (
            <Link
              key={subject.slug}
              href={`/${subject.slug}`}
              className="group bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  {subject.category}
                </span>
                <svg
                  className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors"
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
              </div>
              <h3 className="font-display text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                {subject.name}
              </h3>
              <p className="font-mono text-[10px] text-text-muted mt-1">
                Real-time prediction
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 font-display text-sm text-accent hover:text-cta transition-colors"
          >
            View All 38 Subjects
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SubjectsSection;
