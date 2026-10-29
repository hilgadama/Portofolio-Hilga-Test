import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-blue-100 bg-white py-12 transition-colors dark:border-blue-950/80 dark:bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand & Mission Statement */}
          <div>
            <a
              href="#"
              className="text-base font-bold tracking-tight text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-sky-400"
            >
              Hilga Damayanti
            </a>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              UX Specialist &middot; Inclusive Product Design &middot; Conversion Optimization
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a href="#studi-kasus" className="transition-colors hover:text-blue-600 dark:hover:text-sky-400">
              Studi Kasus
            </a>
            <a href="#prototipe-interaktif" className="transition-colors hover:text-blue-600 dark:hover:text-sky-400">
              Prototipe
            </a>
            <a href="#aksesibilitas-lab" className="transition-colors hover:text-blue-600 dark:hover:text-sky-400">
              Aksesibilitas Lab
            </a>
            <a href="#metodologi-ux" className="transition-colors hover:text-blue-600 dark:hover:text-sky-400">
              Metodologi
            </a>
            <button onClick={onOpenResume} className="transition-colors hover:text-blue-600 dark:hover:text-sky-400">
              Resume
            </button>
            <a href="#kontak" className="transition-colors hover:text-blue-600 dark:hover:text-sky-400">
              Kontak
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200 text-slate-600 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white self-start md:self-auto"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom copyright and accessibility statement */}
        <div className="mt-8 border-t border-blue-50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:border-blue-950/60">
          <p>
            &copy; {new Date().getFullYear()} Hilga Damayanti. Hak Cipta Dilindungi.
          </p>
          <p className="text-[11px] text-slate-500">
            Dirancang dengan prinsip WCAG 2.1 AAA &middot; Kontras Tinggi &middot; Ramah Screen Reader
          </p>
        </div>
      </div>
    </footer>
  );
};
