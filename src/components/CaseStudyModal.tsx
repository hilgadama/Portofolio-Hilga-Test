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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-md transition-opacity"
    >
      <div className="relative my-8 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-blue-100 bg-white shadow-2xl shadow-blue-500/10 dark:border-blue-900/60 dark:bg-[#060D1E] dark:shadow-blue-950/60">
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-blue-100 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-blue-950 dark:bg-[#060D1E]/95">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-white">{caseStudy.client}</span>
            <span aria-hidden="true">/</span>
            <span>{caseStudy.year}</span>
            <span aria-hidden="true">/</span>
            <span>{caseStudy.role}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup studi kasus"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 text-slate-600 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-blue-900 dark:text-slate-300 dark:hover:bg-blue-950/60"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Hero Content */}
        <div className="p-6 sm:p-8">
          {/* Unboxed category metadata */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            <span>Studi Kasus UX</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.category === 'aksesibilitas' ? 'Aksesibilitas Digital' : caseStudy.category === 'konversi' ? 'Optimasi Konversi' : 'Riset Pengguna'}</span>
            <span aria-hidden="true">·</span>
            <span>Durasi: {caseStudy.duration}</span>
          </div>

          <h2
            id="modal-case-title"
            className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white"
          >
            {caseStudy.title}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {caseStudy.subtitle}
          </p>

          {/* High-Fidelity Showcase Image Container */}
          <div className="mt-6 overflow-hidden rounded-xl border border-blue-100 bg-slate-100 dark:border-blue-950 dark:bg-slate-950">
            <img
              src={caseStudy.thumbnail}
              alt={`Tampilan UI dari studi kasus ${caseStudy.title}`}
              referrerPolicy="no-referrer"
              className="w-full object-cover max-h-[380px]"
            />
          </div>

          {/* Key Metrics Banner */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:grid-cols-4 dark:border-blue-950 dark:bg-[#0A1428]/60">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-mono text-2xl font-bold text-slate-950 tabular-nums dark:text-white">
                  {metric.value}
                </span>
                <span className="mt-1 text-xs font-semibold text-slate-700 dark:text-blue-100">
                  {metric.label}
                </span>
                <span className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>

          {/* Deep-Dive Navigation Tabs */}
          <div className="mt-8 flex border-b border-blue-100 dark:border-blue-950">
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
                    ? 'border-blue-600 text-blue-900 font-bold dark:border-sky-400 dark:text-white'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
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
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Latar Belakang Proyek
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {caseStudy.overview}
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-blue-50/30 p-5 dark:border-blue-950 dark:bg-slate-900/40">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Tantangan Desain &amp; Friksi Utama
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Before vs After comparison */}
              <div className="rounded-xl border border-blue-100 p-5 dark:border-blue-950">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Perbandingan Alur: Sebelum vs. Sesudah Desain Ulang
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-red-200/80 bg-red-50/40 p-4 dark:border-red-900/40 dark:bg-red-950/20">
                    <span className="text-xs font-bold text-red-700 dark:text-red-400">
                      {caseStudy.beforeAfter.beforeLabel}
                    </span>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {caseStudy.beforeAfter.beforeText}
                    </p>
                  </div>

                  <div className="rounded-lg border border-blue-200/80 bg-blue-50/40 p-4 dark:border-blue-800/40 dark:bg-blue-950/20">
                    <span className="text-xs font-bold text-blue-700 dark:text-sky-300">
                      {caseStudy.beforeAfter.afterLabel}
                    </span>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {caseStudy.beforeAfter.afterText}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-sky-300">
                  <TrendingUp className="h-4 w-4" />
                  <span>{caseStudy.beforeAfter.improvementMetric}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Research */}
          {activeTab === 'research' && (
            <div className="mt-6 space-y-6">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Metodologi Riset &amp; Temuan Kualitatif
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {caseStudy.researchInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-blue-100 bg-white p-5 dark:border-blue-950 dark:bg-slate-900/50"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {insight.title}
                      </h4>
                      <span className="text-[11px] text-blue-600 dark:text-sky-400 font-medium">
                        {insight.method}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
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
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Pendekatan Solusi Antarmuka
                </h3>
                <ul className="mt-3 space-y-2">
                  {caseStudy.solutionApproach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-blue-100 pt-5 dark:border-blue-950">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Peningkatan Aksesibilitas Spesifik (WCAG 2.1)
                </h3>
                <ul className="mt-3 space-y-2">
                  {caseStudy.accessibilityImprovements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" />
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
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Optimasi Konversi &amp; Dampak Terukur
                </h3>
                <ul className="mt-3 space-y-2">
                  {caseStudy.conversionOptimization.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {caseStudy.testimonial && (
                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6 dark:border-blue-900/60 dark:bg-[#0A1630]">
                  <p className="text-sm italic leading-relaxed text-slate-700 dark:text-slate-200">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        {caseStudy.testimonial.author}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {caseStudy.testimonial.role} &middot; {caseStudy.testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation between studies */}
          <div className="mt-10 border-t border-blue-100 pt-6 dark:border-blue-950">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Lihat Studi Kasus Lainnya:</span>
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
                    className="flex flex-col rounded-lg border border-blue-100 p-3 text-left transition-all hover:border-blue-300 dark:border-blue-950 dark:hover:border-blue-700"
                  >
                    <span className="text-xs font-semibold text-slate-900 line-clamp-1 dark:text-white">
                      {study.title}
                    </span>
                    <span className="mt-1 text-[11px] text-blue-600 dark:text-sky-400 line-clamp-1">
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
