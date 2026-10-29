import React from 'react';
import { UX_METHODOLOGY, TOOLCHAIN } from '../data/portfolioData';
import { CheckCircle2, Cpu, Wrench } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <section id="metodologi-ux" className="border-b border-zinc-200/80 py-20 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            <span>Metodologi Human-Centered</span>
            <span aria-hidden="true">·</span>
            <span>Framework Kerja</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
            Cara Saya Mengubah Kompleksitas Menjadi Kesederhanaan
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Desain produk bukan sekadar seni visual atau estetika subjektif; melainkan proses rekayasa empiris yang memvalidasi setiap asumsi menggunakan data nyata sebelum diwujudkan menjadi kode.
          </p>
        </div>

        {/* 4-Step Methodology Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {UX_METHODOLOGY.map((phase) => (
            <div
              key={phase.step}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
            >
              <div>
                <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400">
                  Fase {phase.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-zinc-900 dark:text-white">
                  {phase.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {phase.description}
                </p>

                <div className="mt-5 space-y-2 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                  <span className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-200">
                    Aktivitas Kunci:
                  </span>
                  <ul className="space-y-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                    {phase.activities.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-zinc-100 pt-3 dark:border-zinc-800">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                  Output &amp; Deliverables:
                </span>
                <p className="mt-1 text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
                  {phase.deliverables}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Toolstack */}
        <div className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-8 dark:border-zinc-800 dark:bg-zinc-900/30">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                <Wrench className="h-3.5 w-3.5" />
                <span>Toolchain &amp; Ekosistem Kerja</span>
              </div>
              <h3 className="mt-1 text-lg font-bold text-zinc-900 dark:text-white">
                Perangkat Lunak &amp; Standar yang Saya Kuasai
              </h3>
            </div>
            <span className="text-xs text-zinc-500">
              Menjembatani Riset Kualitatif ke Handover Developer
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {TOOLCHAIN.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-zinc-200 bg-white p-3.5 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">
                    {tool.name}
                  </span>
                  <span className="text-[10px] font-medium text-purple-600 dark:text-purple-400">
                    {tool.category}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-zinc-500 line-clamp-1 dark:text-zinc-400">
                  {tool.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
