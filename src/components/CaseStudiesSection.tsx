import React, { useState } from 'react';
import { ArrowUpRight, Check, TrendingUp } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy,
}) => {
  const [filter, setFilter] = useState<'all' | 'aksesibilitas' | 'konversi' | 'riset'>('all');

  const filteredStudies =
    filter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === filter);

  return (
    <section id="studi-kasus" className="border-b border-blue-100/80 py-20 dark:border-blue-950/70">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
              <span>Portofolio Riset &amp; Desain</span>
              <span aria-hidden="true">·</span>
              <span>Studi Kasus Nyata</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
              Studi Kasus UX: Riset, Aksesibilitas &amp; Konversi
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Setiap proyek dirancang melalui riset empiris dengan pengguna sebenarnya, divalidasi terhadap standar aksesibilitas tertinggi, dan diukur dengan metrik pertumbuhan bisnis nyata.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons) */}
          <div className="flex items-center gap-1 rounded-lg border border-blue-200/80 bg-blue-50/50 p-1 dark:border-blue-900/60 dark:bg-slate-900 shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-xs dark:bg-blue-500 dark:text-white'
                  : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Semua Proyek
            </button>
            <button
              onClick={() => setFilter('aksesibilitas')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === 'aksesibilitas'
                  ? 'bg-blue-600 text-white shadow-xs dark:bg-blue-500 dark:text-white'
                  : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Aksesibilitas
            </button>
            <button
              onClick={() => setFilter('konversi')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === 'konversi'
                  ? 'bg-blue-600 text-white shadow-xs dark:bg-blue-500 dark:text-white'
                  : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Konversi &amp; CRO
            </button>
            <button
              onClick={() => setFilter('riset')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === 'riset'
                  ? 'bg-blue-600 text-white shadow-xs dark:bg-blue-500 dark:text-white'
                  : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Riset Pengguna
            </button>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {filteredStudies.map((study, index) => {
            // Give first study or wide cards larger col-span
            const isFeatured = index === 0 && filter === 'all';
            const colSpan = isFeatured ? 'lg:col-span-8' : 'lg:col-span-6';

            return (
              <div
                key={study.id}
                onClick={() => onSelectCaseStudy(study)}
                className={`group cursor-pointer overflow-hidden rounded-2xl border border-blue-100 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 dark:border-blue-900/50 dark:bg-[#070F22]/70 dark:hover:border-blue-500 dark:hover:shadow-blue-950/60 ${colSpan} flex flex-col justify-between`}
              >
                <div>
                  {/* Image container */}
                  <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <img
                      src={study.thumbnail}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="h-64 sm:h-72 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90" />

                    {/* Quick Metric Float on Image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xl sm:text-2xl font-bold tabular-nums">
                          {study.metrics[0].value}
                        </span>
                        <span className="text-xs font-medium text-slate-200">
                          {study.metrics[0].label}
                        </span>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/60 backdrop-blur-md transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Clean unboxed metadata with separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>{study.client}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{study.year}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span className="capitalize">{study.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-sky-400">
                      {study.title}
                    </h3>

                    {/* Subtitle / summary */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-2 dark:text-slate-300">
                      {study.subtitle}
                    </p>

                    {/* 2 Key Metrics list */}
                    <div className="mt-5 grid grid-cols-2 gap-3 border-t border-blue-50 pt-4 dark:border-blue-950/60">
                      <div>
                        <span className="block text-[11px] text-slate-500 dark:text-slate-400">Standar / Metrik</span>
                        <span className="text-xs font-bold text-slate-800 dark:text-blue-100 font-mono">
                          {study.metrics[1].value}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-slate-500 dark:text-slate-400">Dampak Pengguna</span>
                        <span className="text-xs font-bold text-slate-800 dark:text-blue-100 font-mono">
                          {study.metrics[2].value}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer action trigger */}
                <div className="px-6 pb-6 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition-colors group-hover:text-blue-700 dark:text-sky-400 dark:group-hover:text-sky-300">
                    <span>Pelajari Studi Kasus Lengkap</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
