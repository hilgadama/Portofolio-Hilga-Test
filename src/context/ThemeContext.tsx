import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'system' | 'light' | 'dark';
export type A11yFilterMode = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'low-vision' | 'high-contrast';

interface ThemeContextType {
  theme: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  a11yFilter: A11yFilterMode;
  setA11yFilter: (filter: A11yFilterMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('hilga_portfolio_theme');
    return (saved as ThemeMode) || 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');
  const [a11yFilter, setA11yFilter] = useState<A11yFilterMode>('none');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const isDark =
        theme === 'dark' || (theme === 'system' && mediaQuery.matches);

      const html = document.documentElement;
      if (isDark) {
        html.classList.add('dark');
        setResolvedTheme('dark');
      } else {
        html.classList.remove('dark');
        setResolvedTheme('light');
      }
    };

    applyTheme();

    const listener = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [theme]);

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem('hilga_portfolio_theme', mode);
  };

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
        a11yFilter,
        setA11yFilter,
      }}
    >
      <div
        className={`min-h-screen transition-colors duration-300 ${
          a11yFilter === 'protanopia'
            ? 'filter-protanopia'
            : a11yFilter === 'deuteranopia'
            ? 'filter-deuteranopia'
            : a11yFilter === 'tritanopia'
            ? 'filter-tritanopia'
            : a11yFilter === 'low-vision'
            ? 'filter-low-vision'
            : a11yFilter === 'high-contrast'
            ? 'filter-high-contrast'
            : ''
        }`}
      >
        {/* SVG Color Blindness Matrix Filters for true Accessibility Lab simulation */}
        <svg aria-hidden="true" className="sr-only">
          <defs>
            {/* Protanopia (Red-blind) */}
            <filter id="protanopia-filter">
              <feColorMatrix
                type="matrix"
                values="0.567, 0.433, 0,     0, 0
                        0.558, 0.442, 0,     0, 0
                        0,     0.242, 0.758, 0, 0
                        0,     0,     0,     1, 0"
              />
            </filter>
            {/* Deuteranopia (Green-blind) */}
            <filter id="deuteranopia-filter">
              <feColorMatrix
                type="matrix"
                values="0.625, 0.375, 0,   0, 0
                        0.7,   0.3,   0,   0, 0
                        0,     0.3,   0.7, 0, 0
                        0,     0,     0,   1, 0"
              />
            </filter>
            {/* Tritanopia (Blue-blind) */}
            <filter id="tritanopia-filter">
              <feColorMatrix
                type="matrix"
                values="0.95, 0.05,  0,     0, 0
                        0,    0.433, 0.567, 0, 0
                        0,    0.475, 0.525, 0, 0
                        0,    0,     0,     1, 0"
              />
            </filter>
          </defs>
        </svg>

        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
