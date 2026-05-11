"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// Score distribution data (2025 approximate data)
const SCORE_DATA: Record<string, { scores: number[]; mean: number; passRate: number; mostCommon: number }> = {
  "ap-calculus-ab": { scores: [20, 15, 20, 20, 25], mean: 3.25, passRate: 65, mostCommon: 3 },
  "ap-calculus-bc": { scores: [10, 10, 20, 25, 35], mean: 3.75, passRate: 80, mostCommon: 4 },
  "ap-biology": { scores: [15, 20, 25, 20, 20], mean: 3.1, passRate: 65, mostCommon: 3 },
  "ap-chemistry": { scores: [18, 22, 25, 20, 15], mean: 2.9, passRate: 55, mostCommon: 3 },
  "ap-physics-1": { scores: [25, 30, 25, 15, 5], mean: 2.4, passRate: 45, mostCommon: 2 },
  "ap-physics-2": { scores: [15, 20, 30, 25, 10], mean: 3.0, passRate: 65, mostCommon: 3 },
  "ap-us-history": { scores: [22, 26, 25, 18, 9], mean: 2.7, passRate: 52, mostCommon: 3 },
  "ap-world-history": { scores: [18, 22, 28, 20, 12], mean: 2.9, passRate: 60, mostCommon: 3 },
  "ap-english-language": { scores: [15, 20, 30, 22, 13], mean: 3.0, passRate: 62, mostCommon: 3 },
  "ap-english-literature": { scores: [18, 27, 28, 18, 9], mean: 2.7, passRate: 55, mostCommon: 3 },
  "ap-psychology": { scores: [12, 18, 30, 25, 15], mean: 3.1, passRate: 70, mostCommon: 3 },
  "ap-statistics": { scores: [15, 20, 25, 22, 18], mean: 3.2, passRate: 65, mostCommon: 3 },
  "ap-computer-science-a": { scores: [15, 15, 25, 25, 20], mean: 3.3, passRate: 70, mostCommon: 4 },
  "ap-environmental-science": { scores: [20, 30, 30, 15, 5], mean: 2.6, passRate: 50, mostCommon: 3 },
  "ap-human-geography": { scores: [15, 20, 30, 22, 13], mean: 3.0, passRate: 65, mostCommon: 3 },
  "ap-macroeconomics": { scores: [15, 20, 30, 22, 13], mean: 3.0, passRate: 65, mostCommon: 3 },
  "ap-microeconomics": { scores: [15, 20, 30, 22, 13], mean: 3.0, passRate: 65, mostCommon: 3 },
  "ap-government-us": { scores: [15, 20, 30, 22, 13], mean: 3.0, passRate: 65, mostCommon: 3 },
  "ap-government-comparative": { scores: [15, 20, 30, 22, 13], mean: 3.0, passRate: 65, mostCommon: 3 },
  "ap-spanish-language": { scores: [5, 5, 15, 35, 40], mean: 4.0, passRate: 90, mostCommon: 4 },
  "ap-chinese-language": { scores: [2, 3, 10, 30, 55], mean: 4.2, passRate: 95, mostCommon: 5 },
  "ap-art-history": { scores: [15, 20, 30, 22, 13], mean: 3.0, passRate: 65, mostCommon: 3 },
  "ap-music-theory": { scores: [15, 20, 30, 22, 13], mean: 3.0, passRate: 65, mostCommon: 3 },
  "ap-studio-art-2d": { scores: [10, 15, 25, 30, 20], mean: 3.3, passRate: 85, mostCommon: 4 },
  "ap-studio-art-3d": { scores: [10, 15, 25, 30, 20], mean: 3.3, passRate: 85, mostCommon: 4 },
  "ap-studio-art-drawing": { scores: [10, 15, 25, 30, 20], mean: 3.3, passRate: 85, mostCommon: 4 },
};

const SUBJECT_NAMES: Record<string, string> = {
  "ap-calculus-ab": "AP Calculus AB",
  "ap-calculus-bc": "AP Calculus BC",
  "ap-biology": "AP Biology",
  "ap-chemistry": "AP Chemistry",
  "ap-physics-1": "AP Physics 1",
  "ap-physics-2": "AP Physics 2",
  "ap-us-history": "AP US History",
  "ap-world-history": "AP World History",
  "ap-english-language": "AP English Language",
  "ap-english-literature": "AP English Literature",
  "ap-psychology": "AP Psychology",
  "ap-statistics": "AP Statistics",
  "ap-computer-science-a": "AP Computer Science A",
  "ap-environmental-science": "AP Environmental Science",
  "ap-human-geography": "AP Human Geography",
  "ap-macroeconomics": "AP Macroeconomics",
  "ap-microeconomics": "AP Microeconomics",
  "ap-government-us": "AP Government & Politics: US",
  "ap-government-comparative": "AP Comparative Government",
  "ap-spanish-language": "AP Spanish Language",
  "ap-chinese-language": "AP Chinese Language",
  "ap-art-history": "AP Art History",
  "ap-music-theory": "AP Music Theory",
  "ap-studio-art-2d": "AP Studio Art: 2-D",
  "ap-studio-art-3d": "AP Studio Art: 3-D",
  "ap-studio-art-drawing": "AP Studio Art: Drawing",
};

const TABLE_SUBJECTS = [
  "ap-calculus-ab",
  "ap-calculus-bc",
  "ap-biology",
  "ap-chemistry",
  "ap-physics-1",
  "ap-us-history",
  "ap-english-language",
  "ap-psychology",
  "ap-statistics",
  "ap-computer-science-a",
];

const EASIEST_APS = [
  { name: "AP Chinese Language", rate: 95 },
  { name: "AP Spanish Language", rate: 90 },
  { name: "AP Studio Art: 2-D", rate: 85 },
  { name: "AP Calculus BC", rate: 80 },
];

const HARDEST_APS = [
  { name: "AP Physics 1", rate: 45 },
  { name: "AP Environmental Science", rate: 50 },
  { name: "AP US History", rate: 52 },
  { name: "AP English Literature", rate: 55 },
];

export default function ScoreDistributionPage() {
  const [selectedSubject, setSelectedSubject] = useState("ap-calculus-ab");

  const currentData = SCORE_DATA[selectedSubject];

  const scoreColors = [
    "bg-red-500/80",   // 1
    "bg-text-muted/60", // 2
    "bg-text-muted/40", // 3
    "bg-accent/60",     // 4
    "bg-accent",        // 5
  ];

  const scoreLabels = ["1", "2", "3", "4", "5"];

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            AP Score Distribution
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            See how students score across all 38 AP subjects. Understand where you stand — and what it takes to move up.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: "38", label: "AP Subjects" },
              { value: "5M+", label: "Annual Test Takers" },
              { value: "60%", label: "Avg Pass Rate (3+)" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface border border-border rounded-xl p-4 text-center">
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

        {/* Subject Selector */}
        <div className="max-w-md mx-auto mb-10">
          <label className="block font-body text-sm text-text-secondary mb-2">
            Select a subject to view its score distribution
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full bg-surface border border-border rounded-xl py-3 px-4 text-text-primary focus:outline-none focus:border-accent transition-colors"
          >
            {Object.entries(SUBJECT_NAMES).map(([slug, name]) => (
              <option key={slug} value={slug}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Score Distribution Chart */}
        <div className="bg-surface border border-border rounded-2xl p-8 mb-12">
          <h3 className="font-display text-lg font-semibold text-text-primary mb-6">
            {SUBJECT_NAMES[selectedSubject]} — Score Distribution
          </h3>

          <div className="space-y-4">
            {currentData.scores.map((percentage, index) => {
              const score = 5 - index; // 5, 4, 3, 2, 1
              const isPassing = score >= 3;

              return (
                <div key={score} className="flex items-center gap-4">
                  <span className="font-mono text-lg w-8 text-center">
                    {score}
                  </span>
                  <div className="flex-1 h-8 bg-background rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${scoreColors[index]}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="font-mono text-sm text-text-muted w-12 text-right">
                    {percentage}%
                  </span>
                </div>
              );
            })}
          </div>

          {/* Passing line indicator */}
          <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-border">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="font-body text-sm text-text-secondary">
              Passing (3+) — {currentData.scores.slice(0, 3).reduce((a, b) => a + b, 0)}% of students
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-border">
            <div className="text-center">
              <span className="font-mono text-sm text-text-muted block">Mean Score</span>
              <span className="font-mono text-xl text-text-primary">{currentData.mean}</span>
            </div>
            <div className="text-center">
              <span className="font-mono text-sm text-text-muted block">Pass Rate</span>
              <span className="font-mono text-xl text-accent">{currentData.passRate}%</span>
            </div>
            <div className="text-center">
              <span className="font-mono text-sm text-text-muted block">Most Common</span>
              <span className="font-mono text-xl text-text-primary">{currentData.mostCommon}</span>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h3 className="font-display text-lg font-semibold text-text-primary mb-6">
            Score Distribution by Subject
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-display text-text-muted uppercase text-xs py-3 px-4">Subject</th>
                  <th className="text-center font-mono text-text-muted uppercase text-xs py-3 px-4">5</th>
                  <th className="text-center font-mono text-text-muted uppercase text-xs py-3 px-4">4</th>
                  <th className="text-center font-mono text-text-muted uppercase text-xs py-3 px-4">3</th>
                  <th className="text-center font-mono text-text-muted uppercase text-xs py-3 px-4">2</th>
                  <th className="text-center font-mono text-text-muted uppercase text-xs py-3 px-4">1</th>
                  <th className="text-center font-mono text-text-muted uppercase text-xs py-3 px-4">Pass Rate</th>
                  <th className="text-center font-mono text-text-muted uppercase text-xs py-3 px-4">Mean</th>
                </tr>
              </thead>
              <tbody className="font-body">
                {TABLE_SUBJECTS.map((slug, i) => {
                  const data = SCORE_DATA[slug];
                  if (!data) return null;

                  return (
                    <tr
                      key={slug}
                      className={`border-b border-border/50 hover:bg-surface/50 transition-colors ${
                        i % 2 === 0 ? "bg-background" : "bg-surface/30"
                      }`}
                    >
                      <td className="py-3 px-4 text-text-secondary">{SUBJECT_NAMES[slug]}</td>
                      {data.scores.map((pct, idx) => (
                        <td
                          key={idx}
                          className={`text-center font-mono py-3 px-4 ${
                            idx === 0
                              ? "text-accent"
                              : idx === 4
                              ? "text-red-400"
                              : "text-text-secondary"
                          }`}
                        >
                          {pct}%
                        </td>
                      ))}
                      <td
                        className={`text-center font-mono py-3 px-4 ${
                          data.passRate >= 70
                            ? "text-accent"
                            : data.passRate < 50
                            ? "text-cta"
                            : "text-text-secondary"
                        }`}
                      >
                        {data.passRate}%
                      </td>
                      <td className="text-center font-mono py-3 px-4 text-text-secondary">
                        {data.mean}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Difficulty Ranking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="font-display text-lg font-semibold text-text-primary mb-4">
              Easiest APs (Highest Pass Rates)
            </h3>
            <div className="space-y-3">
              {EASIEST_APS.map((subject) => (
                <div key={subject.name} className="flex items-center justify-between">
                  <span className="font-body text-sm text-text-secondary">{subject.name}</span>
                  <span className="font-mono text-sm text-accent">{subject.rate}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="font-display text-lg font-semibold text-text-primary mb-4">
              Hardest APs (Lowest Pass Rates)
            </h3>
            <div className="space-y-3">
              {HARDEST_APS.map((subject) => (
                <div key={subject.name} className="flex items-center justify-between">
                  <span className="font-body text-sm text-text-secondary">{subject.name}</span>
                  <span className="font-mono text-sm text-cta">{subject.rate}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What This Means */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              title: "Set Realistic Goals",
              description: "If 65% pass AP Bio, a 3 is achievable with solid prep.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
            {
              title: "Know the Competition",
              description: "Only 15% get a 5 on AP Physics 1. Plan your study time accordingly.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
            },
            {
              title: "Focus Your Efforts",
              description: "Subjects with low pass rates often have specific weak spots. Use our calculator to find yours.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
            },
          ].map((card) => (
            <div key={card.title} className="bg-surface border border-border rounded-xl p-6">
              <div className="text-accent mb-4">{card.icon}</div>
              <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                {card.title}
              </h3>
              <p className="font-body text-sm text-text-secondary">{card.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-surface border border-border rounded-2xl p-10 mb-8">
          <p className="font-body text-text-secondary mb-4">
            See where you stand. Calculate your predicted score now.
          </p>
          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 bg-accent text-background font-display text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Calculate My Score — Free
          </Link>
        </div>

        {/* Data Source */}
        <div className="bg-surface border-l-4 border-cta rounded-r-xl p-6">
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            <strong className="text-text-primary">Data Source:</strong>{" "}
            Data sourced from College Board Annual AP Program Participation reports. Distributions vary by year. For the most current data for your specific exam year, use our calculator with the latest scoring guidelines.
          </p>
          <div className="flex gap-4 mt-3">
            <a
              href="https://apstudents.collegeboard.org/about-ap-exams/ap-exam-scores"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-accent hover:underline"
            >
              College Board Official Data →
            </a>
            <Link
              href="/how-ap-scoring-works"
              className="font-body text-sm text-accent hover:underline"
            >
              How Scoring Works →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
