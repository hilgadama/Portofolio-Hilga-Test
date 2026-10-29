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
    <section id="studi-kasus" className="border-b border-zinc-200/80 py-20 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <span>Portofolio Riset &amp; Desain</span>
              <span aria-hidden="true">·</span>
              <span>Studi Kasus Nyata</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Studi Kasus UX: Riset, Aksesibilitas &amp; Konversi
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Setiap proyek dirancang melalui riset empiris dengan pengguna sebenarnya, divalidasi terhadap standar aksesibilitas tertinggi, dan diukur dengan metrik pertumbuhan bisnis nyata.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons) */}
          <div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-800 dark:bg-zinc-900 shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Semua Proyek
            </button>
            <button
              onClick={() => setFilter('aksesibilitas')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === 'aksesibilitas'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Aksesibilitas
            </button>
            <button
              onClick={() => setFilter('konversi')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === 'konversi'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Konversi &amp; CRO
            </button>
            <button
              onClick={() => setFilter('riset')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === 'riset'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
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
                className={`group cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/60 dark:hover:border-zinc-700 ${colSpan} flex flex-col justify-between`}
              >
                <div>
                  {/* Image container */}
                  <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                    <img
                      src={study.thumbnail}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="h-64 sm:h-72 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-80" />

                    {/* Quick Metric Float on Image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xl sm:text-2xl font-bold tabular-nums">
                          {study.metrics[0].value}
                        </span>
                        <span className="text-xs font-medium text-zinc-200">
                          {study.metrics[0].label}
                        </span>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Clean unboxed metadata with separators */}
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <span>{study.client}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{study.year}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span className="capitalize">{study.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                      {study.title}
                    </h3>

                    {/* Subtitle / summary */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 line-clamp-2 dark:text-zinc-300">
                      {study.subtitle}
                    </p>

                    {/* 2 Key Metrics Pills alternative: clean tabular list */}
                    <div className="mt-5 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                      <div>
                        <span className="block text-[11px] text-zinc-500">Standar / Metrik</span>
                        <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 font-mono">
                          {study.metrics[1].value}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-zinc-500">Dampak Pengguna</span>
                        <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 font-mono">
                          {study.metrics[2].value}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer action trigger */}
                <div className="px-6 pb-6 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 transition-colors group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300">
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
