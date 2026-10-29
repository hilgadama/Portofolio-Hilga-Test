import React from 'react';
import { ArrowDown, CheckCircle2, FileText, Sparkles, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenResume: () => void;
  onExploreCaseStudies: () => void;
  onOpenA11yLab: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onExploreCaseStudies,
  onOpenA11yLab,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-blue-100/80 pt-12 pb-16 dark:border-blue-950/70 lg:pt-18 lg:pb-20">
      {/* Subtle futuristic luminous blue ambient aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl filter dark:bg-blue-600/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-10 -z-10 h-80 w-80 rounded-full bg-sky-300/15 blur-3xl filter dark:bg-cyan-500/10"
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Split-screen layout (Left: Typographic hierarchy, Right: Large visual container) */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: 7 cols */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <span className="text-blue-600 dark:text-sky-400">UX Specialist</span>
              <span aria-hidden="true">·</span>
              <span>Riset Pengguna</span>
              <span aria-hidden="true">·</span>
              <span>Aksesibilitas &amp; Konversi</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl lg:leading-[1.12] dark:text-white [text-wrap:balance]">
              Mendesain Pengalaman Digital yang Inklusif, Intuitif &amp; Berdampak Tinggi.
            </h1>

            {/* Warm, professional lead copy */}
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300 [text-wrap:balance]">
              Halo! Saya <strong className="font-semibold text-slate-900 dark:text-white">Hilga Damayanti</strong>.
              Saya memadukan ketajaman riset kualitatif, empati aksesibilitas digital (<span className="underline decoration-blue-500 decoration-2 underline-offset-2">WCAG 2.1 AA/AAA</span>),
              dan arsitektur psikologi konversi untuk merancang produk digital yang tidak hanya mudah digunakan oleh semua orang, namun juga mendorong pertumbuhan bisnis yang terukur.
            </p>

            {/* Action buttons with strict single-line controls */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreCaseStudies}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/25 transition-all hover:bg-blue-500 active:scale-98 dark:bg-blue-500 dark:hover:bg-blue-400 whitespace-nowrap shrink-0"
              >
                <span>Lihat Studi Kasus</span>
                <ArrowDown className="h-4 w-4" />
              </button>

              <button
                onClick={onOpenA11yLab}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all hover:border-blue-400 hover:bg-blue-50/60 active:scale-98 dark:border-blue-900/60 dark:bg-slate-900 dark:text-blue-200 dark:hover:border-blue-700 dark:hover:bg-slate-800 whitespace-nowrap shrink-0"
              >
                <SlidersHorizontal className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                <span>Uji Lab Aksesibilitas</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300 whitespace-nowrap shrink-0"
              >
                <FileText className="h-4 w-4" />
                <span>Resume &amp; CV</span>
              </button>
            </div>

            {/* Trust markers */}
            <div className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-6 border-t border-blue-100/80 pt-6 text-xs text-slate-500 dark:border-blue-950/70 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                <span>Nielsen Norman Group (NN/g) Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                <span>CPACC Accessibility Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                <span>6+ Tahun Pengalaman Produk</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 cols (Matching height photo container) */}
          <div className="flex items-center justify-center lg:col-span-5">
            <div className="relative w-full max-w-md">
              {/* Subtle background framing container with blue border aura */}
              <div className="relative overflow-hidden rounded-2xl border border-blue-200/80 bg-white shadow-xl shadow-blue-500/5 dark:border-blue-900/60 dark:bg-slate-900 dark:shadow-blue-950/40">
                <img
                  src="/src/assets/images/hilga_portrait_1793178791201.jpg"
                  alt="Hilga Damayanti, UX Specialist & Product Designer"
                  referrerPolicy="no-referrer"
                  className="aspect-square w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                />

                {/* Scrim overlay with clean attribution */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Hilga Damayanti</p>
                      <p className="text-xs text-blue-200">UX Specialist &amp; Product Designer</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      <span>Terbuka untuk Proyek</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient micro card */}
              <div className="absolute -bottom-4 -left-4 hidden sm:block rounded-xl border border-blue-100 bg-white/95 p-3.5 shadow-lg shadow-blue-500/10 backdrop-blur-md dark:border-blue-900/80 dark:bg-[#0B1528]/95">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/70 dark:text-sky-300">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Human-Centered Design</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Riset bukti nyata &middot; Bebas bias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof Row below the hero split (Full-width row) */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-blue-100/80 pt-10 sm:grid-cols-4 dark:border-blue-950/70">
          <div className="flex flex-col">
            <span className="font-mono text-3xl font-bold tracking-tight text-slate-950 tabular-nums dark:text-white">
              +42%
            </span>
            <span className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
              Lonjakan Konversi Funnel
            </span>
            <span className="mt-0.5 text-[11px] text-blue-600/70 dark:text-sky-400/80">
              Rata-rata peningkatan e-KYC
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-3xl font-bold tracking-tight text-slate-950 tabular-nums dark:text-white">
              100%
            </span>
            <span className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
              Standar WCAG 2.1 AA/AAA
            </span>
            <span className="mt-0.5 text-[11px] text-blue-600/70 dark:text-sky-400/80">
              Audit aksesibilitas terverifikasi
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-3xl font-bold tracking-tight text-slate-950 tabular-nums dark:text-white">
              85+
            </span>
            <span className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
              Sesi Wawancara Pengguna
            </span>
            <span className="mt-0.5 text-[11px] text-blue-600/70 dark:text-sky-400/80">
              Meliputi ragam demografi &amp; disabilitas
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-3xl font-bold tracking-tight text-slate-950 tabular-nums dark:text-white">
              92.4
            </span>
            <span className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
              Skor Usability (SUS)
            </span>
            <span className="mt-0.5 text-[11px] text-blue-600/70 dark:text-sky-400/80">
              Dari standar industri 68.0
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
