"use client";

import { useState } from "react";
import Link from "next/link";

const POPULAR_SUBJECTS = [
  { name: "AP Calculus AB", slug: "ap-calculus-ab", icon: "∫" },
  { name: "AP Calculus BC", slug: "ap-calculus-bc", icon: "∬" },
  { name: "AP Biology", slug: "ap-biology", icon: "🧬" },
  { name: "AP Chemistry", slug: "ap-chemistry", icon: "⚗️" },
  { name: "AP Physics 1", slug: "ap-physics-1", icon: "⚡" },
  { name: "AP US History", slug: "ap-us-history", icon: "🇺🇸" },
  { name: "AP World History", slug: "ap-world-history", icon: "🌍" },
  { name: "AP English Lang", slug: "ap-english-language", icon: "✍️" },
];

export function HeroSection() {
  const [selectedSubject, setSelectedSubject] = useState(POPULAR_SUBJECTS[0]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="w-full md:w-[55%] flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Instrument-Grade Accuracy
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold text-text-primary leading-[1.1] tracking-tight">
              Know Your AP Score Before the Exam
            </h1>

            <p className="font-body text-lg text-text-secondary max-w-lg leading-relaxed">
              Free score calculator for all 38 AP subjects. Enter your practice
              results. Get an instant 1-5 prediction based on official 2026
              scoring rubrics.
            </p>

            <p className="font-mono text-xs text-accent flex items-center gap-2">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              No signup required · Runs entirely in your browser
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/subjects"
                className="inline-flex items-center justify-center bg-cta text-background font-display text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(255,184,0,0.3)]"
              >
                Calculate My AP Score — Free
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center font-display text-sm text-text-primary hover:text-accent transition-colors gap-2"
              >
                See How It Works
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

          {/* Right: Tool Preview */}
          <div className="w-full md:w-[45%]">
            <div className="bg-surface border border-border rounded-xl p-6 relative overflow-hidden group hover:border-accent/50 transition-colors">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

              {/* Header */}
              <div className="flex justify-between items-center border-b border-border pb-4 mb-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                ACTIVE SESSION
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] text-accent">Live</span>
              </div>
              </div>

              {/* Subject selector */}
              <div className="mb-5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-2">
                  Subject
                </label>
                <select
                  value={selectedSubject.slug}
                  onChange={(e) => {
                    const subj = POPULAR_SUBJECTS.find(
                      (s) => s.slug === e.target.value
                    );
                    if (subj) setSelectedSubject(subj);
                  }}
                  className="w-full bg-background border border-border text-text-primary font-body text-sm p-3 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none appearance-none cursor-pointer"
                >
                  {POPULAR_SUBJECTS.map((subj) => (
                    <option key={subj.slug} value={subj.slug}>
                      {subj.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Score inputs */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                    MCQ SCORE
                  </span>
                  <span className="font-mono text-sm text-accent">
                    35 / 45
                  </span>
                </div>
                <div className="w-full h-2 bg-background border border-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-500"
                    style={{ width: "77%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                    FRQ SCORE
                  </span>
                  <span className="font-mono text-sm text-accent">
                    42 / 54
                  </span>
                  </div>
                  <div className="w-full h-2 bg-background border border-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500"
                      style={{ width: "77%" }}
                    />
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="mt-6 border border-accent/30 bg-accent/5 p-4 rounded-lg text-center group-hover:border-accent/60 transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-2">
                  PREDICTED COMPOSITE SCORE
                </span>
                <span className="font-mono text-6xl font-bold text-accent block glow-5">
                  4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
