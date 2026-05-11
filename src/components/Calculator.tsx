"use client";

import { useState, useCallback, useMemo } from "react";

interface ScoreSection {
  name: string;
  maxScore: number;
  description?: string;
}

interface CalculatorProps {
  subjectSlug: string;
  subjectName: string;
  sections: ScoreSection[];
  maxScore: number;
}

export function Calculator({ subjectSlug, subjectName, sections, maxScore }: CalculatorProps) {
  const [scores, setScores] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    sections.forEach((section) => {
      initial[section.name] = 0;
    });
    return initial;
  });

  const handleScoreChange = useCallback((sectionName: string, value: number) => {
    setScores((prev) => ({ ...prev, [sectionName]: value }));
  }, []);

  const totalScore = useMemo(() => {
    return Object.values(scores).reduce((sum, score) => sum + score, 0);
  }, [scores]);

  const predictedAPScore = useMemo(() => {
    const percentage = (totalScore / maxScore) * 100;
    if (percentage >= 75) return 5;
    if (percentage >= 60) return 4;
    if (percentage >= 45) return 3;
    if (percentage >= 30) return 2;
    return 1;
  }, [totalScore, maxScore]);

  const percentile = useMemo(() => {
    const percentage = (totalScore / maxScore) * 100;
    if (percentage >= 80) return 95;
    if (percentage >= 70) return 85;
    if (percentage >= 60) return 70;
    if (percentage >= 50) return 55;
    if (percentage >= 40) return 40;
    if (percentage >= 30) return 25;
    return 10;
  }, [totalScore, maxScore]);

  return (
    <div className="bg-surface border border-border rounded-xl p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      <div className="flex justify-between items-center border-b border-border pb-4 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
          Active Session
        </span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] text-accent">Live</span>
        </div>
      </div>

      <div className="mb-5">
        <label className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-2">
          Subject
        </label>
        <div className="w-full bg-background border border-border text-text-primary font-body text-sm p-3 rounded-lg">
          {subjectName}
        </div>
      </div>

      {/* Section Inputs */}
      <div className="space-y-5 mb-8">
        {sections.map((section) => (
          <div key={section.name}>
            <div className="flex items-center justify-between mb-2">
              <label className="font-body text-sm text-text-secondary">
                {section.name}
                {section.description && (
                  <span className="text-text-muted ml-2">({section.description})</span>
                )}
              </label>
              <span className="font-mono text-sm text-accent">
                {scores[section.name] || 0} / {section.maxScore}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={section.maxScore}
              value={scores[section.name] || 0}
              onChange={(e) => handleScoreChange(section.name, parseInt(e.target.value))}
              className="w-full h-2 bg-background border border-border rounded-full appearance-none cursor-pointer accent-accent"
              style={{
                background: `linear-gradient(to right, #00D4AA 0%, #00D4AA ${((scores[section.name] || 0) / section.maxScore) * 100}%, #1E293B ${((scores[section.name] || 0) / section.maxScore) * 100}%, #1E293B 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="font-mono text-[10px] text-text-muted">0</span>
              <span className="font-mono text-[10px] text-text-muted">{section.maxScore}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Real-time Result */}
      <div className="border-t border-border pt-6">
        <div className="text-center mb-4">
          <p className="font-mono text-sm text-text-secondary mb-1">
            Composite Score
          </p>
          <p className="font-mono text-2xl text-text-primary">
            {totalScore} / {maxScore}
          </p>
        </div>

        <div className="text-center mb-4">
          <p className="font-mono text-sm text-text-secondary mb-2">
            Predicted AP Score
          </p>
          <p
            className="font-mono text-6xl md:text-7xl font-bold"
            style={{ color: predictedAPScore >= 3 ? "#00D4AA" : "#EF4444" }}
          >
            {predictedAPScore}
          </p>
        </div>

        <div className="text-center">
          <p className="font-body text-sm text-text-secondary">
            You scored higher than{" "}
            <span className="text-accent font-semibold">{percentile}%</span> of
            students
          </p>
        </div>
      </div>

      <p className="font-mono text-[10px] text-text-muted mt-4 text-center">
        This is an estimate based on official rubrics. Your actual score is determined by College Board.
      </p>
    </div>
  );
}
