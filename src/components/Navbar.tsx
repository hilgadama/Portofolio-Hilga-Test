import React, { useState } from 'react';
import { Moon, Sun, Monitor, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Studi Kasus', href: '#studi-kasus' },
    { label: 'Prototipe', href: '#prototipe-interaktif' },
    { label: 'Aksesibilitas Lab', href: '#aksesibilitas-lab' },
    { label: 'Metodologi', href: '#metodologi-ux' },
    { label: 'Tentang', href: '#tentang-saya' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-blue-100/80 bg-white/85 backdrop-blur-md transition-colors dark:border-blue-950/70 dark:bg-[#030712]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400 whitespace-nowrap shrink-0"
        >
          Hilga Damayanti
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Subtle Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Ganti ke mode ${resolvedTheme === 'dark' ? 'terang' : 'gelap'}`}
            title={`Mode saat ini: ${theme} (${resolvedTheme}). Klik untuk beralih.`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200/80 bg-white text-slate-700 transition-colors hover:border-blue-400 hover:bg-blue-50/50 dark:border-blue-900/60 dark:bg-slate-900 dark:text-blue-200 dark:hover:border-blue-700 dark:hover:bg-slate-800"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="h-4 w-4 text-sky-300 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-blue-700 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Primary CTA: Electric Royal Blue button */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-95 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400 whitespace-nowrap shrink-0"
          >
            <span>Mari Berdiskusi</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 md:hidden items-center justify-center rounded-lg border border-blue-200 text-slate-700 dark:border-blue-900 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-blue-100 bg-white/95 px-6 py-4 backdrop-blur-md md:hidden dark:border-blue-950 dark:bg-[#030712]/95">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-blue-100 dark:border-blue-950 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">Mode Tampilan:</span>
              <div className="flex items-center gap-1 p-1 bg-blue-50 dark:bg-slate-900 rounded-md">
                <button
                  onClick={() => setTheme('light')}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    theme === 'light' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  Terang
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    theme === 'dark' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  Gelap
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    theme === 'system' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  Sistem
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-2 w-full rounded-lg bg-blue-600 py-2.5 text-center text-xs font-semibold text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Mari Berdiskusi Proyek
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
