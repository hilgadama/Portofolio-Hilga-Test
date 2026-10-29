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
    <footer className="border-t border-zinc-200 bg-white py-12 transition-colors dark:border-zinc-800 dark:bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand & Mission Statement */}
          <div>
            <a
              href="#"
              className="text-base font-bold tracking-tight text-zinc-900 dark:text-white"
            >
              Hilga Damayanti
            </a>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              UX Specialist &middot; Inclusive Product Design &middot; Conversion Optimization
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600 dark:text-zinc-400">
            <a href="#studi-kasus" className="hover:text-zinc-950 dark:hover:text-white">
              Studi Kasus
            </a>
            <a href="#prototipe-interaktif" className="hover:text-zinc-950 dark:hover:text-white">
              Prototipe
            </a>
            <a href="#aksesibilitas-lab" className="hover:text-zinc-950 dark:hover:text-white">
              Aksesibilitas Lab
            </a>
            <a href="#metodologi-ux" className="hover:text-zinc-950 dark:hover:text-white">
              Metodologi
            </a>
            <button onClick={onOpenResume} className="hover:text-zinc-950 dark:hover:text-white">
              Resume
            </button>
            <a href="#kontak" className="hover:text-zinc-950 dark:hover:text-white">
              Kontak
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 self-start md:self-auto"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom copyright and accessibility statement */}
        <div className="mt-8 border-t border-zinc-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:border-zinc-900">
          <p>
            &copy; {new Date().getFullYear()} Hilga Damayanti. Hak Cipta Dilindungi.
          </p>
          <p className="text-[11px] text-zinc-500">
            Dirancang dengan prinsip WCAG 2.1 AAA &middot; Kontras Tinggi &middot; Ramah Screen Reader
          </p>
        </div>
      </div>
    </footer>
  );
};
