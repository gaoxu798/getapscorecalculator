import type { Metadata } from "next";
import { Calculator } from "@/components/Calculator";
import Link from "next/link";
import { getSubjectConfig, getAllSubjectSlugs } from "@/lib/subject-configs";
import { SUBJECTS } from "@/lib/subjects";

interface SubjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSubjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SubjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getSubjectConfig(slug);
  if (!config) {
    return {
      title: "Subject Not Found | AP Score Calculator",
    };
  }
  return {
    title: `${config.name} Score Calculator 2026 | AP Score Calculator`,
    description: `Free ${config.name} score calculator. Predict your AP score (1-5) based on official 2026 College Board scoring guidelines. ${config.sections.length} sections, max score ${config.maxScore}. No signup required.`,
    openGraph: {
      title: `${config.name} Score Calculator 2026`,
      description: `Predict your ${config.name} AP score instantly. Based on official scoring rubrics.`,
    },
  };
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { slug } = await params;
  const config = getSubjectConfig(slug);

  if (!config) {
    return (
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-3xl font-bold text-text-primary mb-4">
            Subject Not Found
          </h1>
          <p className="font-body text-text-secondary mb-6">
            The subject you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 bg-accent text-background font-display text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            View All Subjects
          </Link>
        </div>
      </main>
    );
  }

  // Get related subjects data
  const relatedSubjectsData = config.relatedSubjects
    .map((relatedSlug) => {
      const relatedConfig = getSubjectConfig(relatedSlug);
      const relatedSubject = SUBJECTS.find((s) => s.slug === relatedSlug);
      if (!relatedConfig || !relatedSubject) return null;
      return {
        slug: relatedSlug,
        name: relatedConfig.name,
        category: relatedSubject.category,
      };
    })
    .filter(Boolean);

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs text-text-muted mb-6">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/subjects" className="hover:text-accent transition-colors">
            Subjects
          </Link>
          <span>/</span>
          <span className="text-text-secondary">{config.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
            {config.name} Score Calculator 2026
          </h1>
          <p className="font-body text-lg text-text-secondary">
            Based on official College Board scoring guidelines
          </p>
        </div>

        {/* Calculator */}
        <div className="mb-12">
          <Calculator subjectSlug={slug} subjectName={config.name} sections={config.sections} maxScore={config.maxScore} />
        </div>

        {/* How Scoring Works */}
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
            How {config.name} Is Scored
          </h2>
          <ul className="space-y-2 font-body text-sm text-text-secondary">
            {config.scoringExplanation.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-surface border border-border rounded-lg p-4 text-center">
              <span className="font-mono text-2xl font-bold text-accent">{config.mcqWeight}%</span>
              <p className="font-mono text-xs text-text-muted mt-1 uppercase">MCQ Weight</p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4 text-center">
              <span className="font-mono text-2xl font-bold text-accent">{config.frqWeight}%</span>
              <p className="font-mono text-xs text-text-muted mt-1 uppercase">FRQ Weight</p>
            </div>
          </div>
        </section>

        {/* Score Meaning */}
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
            What Your Score Means
          </h2>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((score) => (
              <div
                key={score}
                className={`text-center p-3 rounded-lg border ${
                  score >= 3
                    ? "border-accent/30 bg-accent/5"
                    : "border-border bg-surface"
                }`}
              >
                <span
                  className={`font-mono text-2xl font-bold ${
                    score >= 3 ? "text-accent" : "text-text-muted"
                  }`}
                >
                  {score}
                </span>
                <p className="font-mono text-[10px] text-text-muted mt-1 uppercase">
                  {score === 5
                    ? "Extremely Well"
                    : score === 4
                    ? "Well Qualified"
                    : score === 3
                    ? "Qualified"
                    : score === 2
                    ? "Possibly Qualified"
                    : "No Recommendation"}
                </p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-text-secondary mt-4">
            Scores of 3, 4, or 5 are generally considered passing and may earn college credit or advanced placement.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
            Tips to Improve Your {config.name.replace("AP ", "")} Score
          </h2>
          <div className="space-y-4">
            {config.tips.map((tip, index) => (
              <div key={index} className="bg-surface border border-border rounded-xl p-5">
                <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                  {tip.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {config.faq.map((faq, index) => (
              <div key={index} className="bg-surface border border-border rounded-xl p-5">
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

        {/* Related Subjects */}
        {relatedSubjectsData.length > 0 && (
          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Related Subjects
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {relatedSubjectsData.map((subject) => (
                <Link
                  key={subject!.slug}
                  href={`/${subject!.slug}`}
                  className="group bg-surface border border-border rounded-xl p-4 hover:border-accent transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    {subject!.category}
                  </span>
                  <h3 className="font-display text-sm font-semibold text-text-primary group-hover:text-accent transition-colors mt-1">
                    {subject!.name}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Disclaimer */}
        <section className="border-t border-border pt-6">
          <p className="font-mono text-xs text-text-muted leading-relaxed">
            <strong>Disclaimer:</strong> This calculator provides an estimate based on 
            official College Board scoring rubrics. Your actual AP score is determined 
            solely by College Board. AP® and Advanced Placement® are registered 
            trademarks of College Board, which is not affiliated with this tool.
          </p>
        </section>
      </div>
    </main>
  );
}
