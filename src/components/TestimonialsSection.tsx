import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="border-b border-zinc-200/80 py-20 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            <span>Testimoni Kolaborator</span>
            <span aria-hidden="true">·</span>
            <span>Bukti Kemitraan</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
            Apa Kata Pemimpin Produk &amp; Tim Engineering
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Kolaborasi lintas fungsi yang sehat antara UX, Product Management, dan Software Engineering adalah kunci lahirnya produk luar biasa.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
            >
              <div>
                <Quote className="h-6 w-6 text-purple-400/80 dark:text-purple-500/60" />
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <p className="text-xs font-bold text-zinc-900 dark:text-white">
                  {t.author}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  {t.role} &middot; <span className="font-semibold">{t.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
