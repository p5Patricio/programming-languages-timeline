import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Sun, Moon, Languages, Sparkles } from 'lucide-react';

export default function Header({ theme, toggleTheme }) {
  const { locale, toggleLocale, t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#0c0d12]/75 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 animate-pulse-subtle" />
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-indigo-100 dark:to-white bg-clip-text text-transparent">
              ChronosLang
            </h1>
            <p className="text-[10px] sm:text-[11px] font-sans font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase">
              {locale === 'en' ? 'Historical Timeline' : 'Línea de Tiempo Histórica'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Locale switcher */}
          <button
            onClick={toggleLocale}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium transition-all duration-300 group active:scale-95"
            aria-label="Toggle language"
          >
            <Languages className="w-4 h-4 text-indigo-500 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="uppercase text-xs tracking-wider font-bold">
              {locale === 'en' ? 'ES' : 'EN'}
            </span>
          </button>

          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 transition-all duration-300 active:scale-95 overflow-hidden"
            aria-label="Toggle dark/light theme"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* Sun icon */}
              <Sun className={`absolute w-5 h-5 text-amber-500 transition-transform duration-500 ease-out ${
                theme === 'dark' ? 'translate-y-8 rotate-45 scale-50' : 'translate-y-0 rotate-0 scale-100'
              }`} />
              
              {/* Moon icon */}
              <Moon className={`absolute w-4.5 h-4.5 text-indigo-400 transition-transform duration-500 ease-out ${
                theme === 'light' ? '-translate-y-8 -rotate-45 scale-50' : 'translate-y-0 rotate-0 scale-100'
              }`} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
