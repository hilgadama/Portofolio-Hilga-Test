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
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-[#09090B]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300 whitespace-nowrap shrink-0"
        >
          Hilga Damayanti
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100 whitespace-nowrap shrink-0"
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
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-300 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-zinc-700 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white whitespace-nowrap shrink-0"
          >
            <span>Mari Berdiskusi</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 md:hidden items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-md md:hidden dark:border-zinc-800 dark:bg-[#09090B]/95">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Mode Tampilan:</span>
              <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-md">
                <button
                  onClick={() => setTheme('light')}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    theme === 'light' ? 'bg-white dark:bg-zinc-700 shadow-xs' : 'text-zinc-500'
                  }`}
                >
                  Terang
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    theme === 'dark' ? 'bg-white dark:bg-zinc-700 shadow-xs' : 'text-zinc-500'
                  }`}
                >
                  Gelap
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    theme === 'system' ? 'bg-white dark:bg-zinc-700 shadow-xs' : 'text-zinc-500'
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
              className="mt-2 w-full rounded-lg bg-zinc-900 py-2.5 text-center text-xs font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900"
            >
              Mari Berdiskusi Proyek
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
