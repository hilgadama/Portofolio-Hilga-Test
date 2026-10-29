import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="border-b border-blue-100/80 py-20 dark:border-blue-950/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            <span>Testimoni Kolaborator</span>
            <span aria-hidden="true">·</span>
            <span>Bukti Kemitraan</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Apa Kata Pemimpin Produk &amp; Tim Engineering
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Kolaborasi lintas fungsi yang sehat antara UX, Product Management, dan Software Engineering adalah kunci lahirnya produk luar biasa.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 shadow-xs transition-all hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/5 dark:border-blue-900/50 dark:bg-[#071126] dark:hover:border-blue-700"
            >
              <div>
                <Quote className="h-6 w-6 text-blue-500/80 dark:text-sky-400/70" />
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 border-t border-blue-50 pt-4 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  {t.author}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {t.role} &middot; <span className="font-semibold text-blue-600 dark:text-sky-400">{t.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
