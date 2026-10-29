import React, { useEffect, useState } from 'react';
import {
  X,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Users,
  Search,
  Sparkles,
  Layers,
  Award,
} from 'lucide-react';
import { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSelectAnother: (study: CaseStudy) => void;
  allCaseStudies: CaseStudy[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onSelectAnother,
  allCaseStudies,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'research' | 'solution' | 'impact'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-zinc-950/80 p-4 backdrop-blur-md transition-opacity"
    >
      <div className="relative my-8 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-[#0E0E12]">
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-[#0E0E12]/95">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">{caseStudy.client}</span>
            <span aria-hidden="true">/</span>
            <span>{caseStudy.year}</span>
            <span aria-hidden="true">/</span>
            <span>{caseStudy.role}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup studi kasus"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Hero Content */}
        <div className="p-6 sm:p-8">
          {/* Unboxed category metadata */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            <span>Studi Kasus UX</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.category === 'aksesibilitas' ? 'Aksesibilitas Digital' : caseStudy.category === 'konversi' ? 'Optimasi Konversi' : 'Riset Pengguna'}</span>
            <span aria-hidden="true">·</span>
            <span>Durasi: {caseStudy.duration}</span>
          </div>

          <h2
            id="modal-case-title"
            className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white"
          >
            {caseStudy.title}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            {caseStudy.subtitle}
          </p>

          {/* High-Fidelity Showcase Image Container */}
          <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <img
              src={caseStudy.thumbnail}
              alt={`Tampilan UI dari studi kasus ${caseStudy.title}`}
              referrerPolicy="no-referrer"
              className="w-full object-cover max-h-[380px]"
            />
          </div>

          {/* Key Metrics Banner */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5 sm:grid-cols-4 dark:border-zinc-800 dark:bg-zinc-900/60">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-mono text-2xl font-bold text-zinc-950 tabular-nums dark:text-white">
                  {metric.value}
                </span>
                <span className="mt-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {metric.label}
                </span>
                <span className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>

          {/* Deep-Dive Navigation Tabs */}
          <div className="mt-8 flex border-b border-zinc-200 dark:border-zinc-800">
            {[
              { id: 'overview', label: 'Ringkasan & Tantangan' },
              { id: 'research', label: 'Riset & Temuan Kunci' },
              { id: 'solution', label: 'Solusi & Aksesibilitas' },
              { id: 'impact', label: 'Dampak Bisnis' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`border-b-2 px-4 py-2.5 text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-zinc-950 font-bold dark:border-purple-400 dark:text-white'
                    : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Latar Belakang Proyek
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {caseStudy.overview}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/30">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Tantangan Desain &amp; Friksi Utama
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Before vs After comparison */}
              <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Perbandingan Alur: Sebelum vs. Sesudah Desain Ulang
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-red-200/80 bg-red-50/40 p-4 dark:border-red-900/40 dark:bg-red-950/20">
                    <span className="text-xs font-bold text-red-700 dark:text-red-400">
                      {caseStudy.beforeAfter.beforeLabel}
                    </span>
                    <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                      {caseStudy.beforeAfter.beforeText}
                    </p>
                  </div>

                  <div className="rounded-lg border border-emerald-200/80 bg-emerald-50/40 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      {caseStudy.beforeAfter.afterLabel}
                    </span>
                    <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                      {caseStudy.beforeAfter.afterText}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-300">
                  <TrendingUp className="h-4 w-4" />
                  <span>{caseStudy.beforeAfter.improvementMetric}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Research */}
          {activeTab === 'research' && (
            <div className="mt-6 space-y-6">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                Metodologi Riset &amp; Temuan Kualitatif
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {caseStudy.researchInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                        {insight.title}
                      </h4>
                      <span className="text-[11px] text-zinc-500 font-medium">
                        {insight.method}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {insight.finding}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Solution */}
          {activeTab === 'solution' && (
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Pendekatan Solusi Antarmuka
                </h3>
                <ul className="mt-3 space-y-2">
                  {caseStudy.solutionApproach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Peningkatan Aksesibilitas Spesifik (WCAG 2.1)
                </h3>
                <ul className="mt-3 space-y-2">
                  {caseStudy.accessibilityImprovements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 4: Impact */}
          {activeTab === 'impact' && (
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Optimasi Konversi &amp; Dampak Terukur
                </h3>
                <ul className="mt-3 space-y-2">
                  {caseStudy.conversionOptimization.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                      <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {caseStudy.testimonial && (
                <div className="rounded-xl border border-zinc-200 bg-purple-50/40 p-6 dark:border-zinc-800 dark:bg-purple-950/20">
                  <p className="text-sm italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div>
                      <p className="text-xs font-bold text-zinc-900 dark:text-white">
                        {caseStudy.testimonial.author}
                      </p>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        {caseStudy.testimonial.role} &middot; {caseStudy.testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation between studies */}
          <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <span className="text-xs font-semibold text-zinc-500">Lihat Studi Kasus Lainnya:</span>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {allCaseStudies
                .filter((s) => s.id !== caseStudy.id)
                .slice(0, 3)
                .map((study) => (
                  <button
                    key={study.id}
                    onClick={() => {
                      onSelectAnother(study);
                      setActiveTab('overview');
                    }}
                    className="flex flex-col rounded-lg border border-zinc-200 p-3 text-left transition-all hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-700"
                  >
                    <span className="text-xs font-semibold text-zinc-900 line-clamp-1 dark:text-white">
                      {study.title}
                    </span>
                    <span className="mt-1 text-[11px] text-zinc-500 line-clamp-1">
                      {study.metrics[0].value} {study.metrics[0].label}
                    </span>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
