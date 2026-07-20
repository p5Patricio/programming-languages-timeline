import React, { useMemo } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Search, X, Layers, Calendar, Grid, Cpu, Terminal, Compass } from 'lucide-react';

export default function FilterBar({
  search,
  setSearch,
  selectedParadigms,
  setSelectedParadigms,
  startYear,
  setStartYear,
  endYear,
  setEndYear,
  selectedType,
  setSelectedType
}) {
  const { t, locale } = useTranslation();

  // Core main paradigms featured in the UI
  const coreParadigms = useMemo(() => [
    { id: 'Object-Oriented', en: 'Object-Oriented', es: 'Orientado a Objetos' },
    { id: 'Functional', en: 'Functional', es: 'Funcional' },
    { id: 'Imperative', en: 'Imperative', es: 'Imperativo' },
    { id: 'Declarative', en: 'Declarative', es: 'Declarativo' },
    { id: 'Multi-paradigm', en: 'Multi-paradigm', es: 'Multi-paradigma' },
    { id: 'AI', en: 'AI & Agents', es: 'IA y Agentes' }
  ], []);

  const handleToggleParadigm = (pId) => {
    setSelectedParadigms((prev) =>
      prev.includes(pId) ? prev.filter((item) => item !== pId) : [...prev, pId]
    );
  };

  const handleDecadeSelect = (decade) => {
    if (decade === 'all') {
      setStartYear(1950);
      setEndYear(2026);
    } else {
      setStartYear(decade);
      setEndYear(Math.min(2026, decade + 9));
    }
  };

  const hasActiveFilters = useMemo(() => {
    return (
      search !== '' ||
      selectedParadigms.length > 0 ||
      startYear > 1950 ||
      endYear < 2026 ||
      selectedType !== 'all'
    );
  }, [search, selectedParadigms, startYear, endYear, selectedType]);

  const handleClearFilters = () => {
    setSearch('');
    setSelectedParadigms([]);
    setStartYear(1950);
    setEndYear(2026);
    setSelectedType('all');
  };

  const categories = [
    { id: 'all', en: 'All', es: 'Todo', icon: Grid },
    { id: 'language', en: 'Languages', es: 'Lenguajes', icon: Terminal },
    { id: 'framework', en: 'Frameworks', es: 'Frameworks', icon: Layers },
    { id: 'milestone', en: 'Milestones', es: 'Hitos', icon: Compass },
    { id: 'ai', en: 'AI', es: 'IA', icon: Cpu }
  ];

  return (
    <div className="w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border border-white/80 dark:border-white/15 rounded-2xl p-3.5 sm:p-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] dark:shadow-[0_10px_35px_0_rgba(0,0,0,0.6)] transition-all duration-300">
      <div className="flex flex-col gap-3 sm:gap-4">
        
        {/* Row 1: Search Input & Category Pills */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Search Input with touch friendly height */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-10 pr-9 py-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-950/80 focus:bg-white dark:focus:bg-slate-950 text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 dark:focus:border-cyan-400 transition-all duration-200 min-h-[40px]"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 custom-scrollbar">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              const isSelected = selectedType === cat.id;
              const label = locale === 'en' ? cat.en : cat.es;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedType(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 flex-shrink-0 min-h-[38px] ${
                    isSelected
                      ? 'bg-gradient-to-tr from-indigo-500 to-indigo-600 dark:from-cyan-500 dark:to-cyan-600 text-white dark:text-slate-950 shadow-md shadow-indigo-500/20 dark:shadow-cyan-500/10'
                      : 'bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <CatIcon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/70 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase transition-all duration-200 active:scale-95 flex-shrink-0 min-h-[38px]"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t('clearFilters')}</span>
            </button>
          )}
        </div>

        {/* Row 2: Featured Core Paradigms + Decade Filters */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
          
          {/* Main Core Paradigms Chips */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex-shrink-0 select-none">
              <Layers className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
              <span>{t('paradigms')}:</span>
            </span>

            <div className="flex items-center gap-1.5 overflow-x-auto py-1 custom-scrollbar">
              {coreParadigms.map((p) => {
                const isSelected = selectedParadigms.includes(p.id);
                const label = locale === 'en' ? p.en : p.es;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleToggleParadigm(p.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex-shrink-0 transition-all duration-200 active:scale-95 min-h-[34px] ${
                      isSelected
                        ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm shadow-indigo-500/20 dark:bg-cyan-500 dark:border-cyan-500 dark:text-slate-950'
                        : 'bg-slate-100/60 dark:bg-slate-900/60 border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Decade Filters */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 select-none">
              <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
            </span>

            <div className="flex items-center gap-1.5 overflow-x-auto py-1 custom-scrollbar">
              <button
                onClick={() => handleDecadeSelect('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all active:scale-95 min-h-[32px] ${
                  startYear === 1950 && endYear === 2026
                    ? 'bg-indigo-50 dark:bg-cyan-950/50 border-indigo-300 dark:border-cyan-700 text-indigo-650 dark:text-cyan-400'
                    : 'border-slate-200/70 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {locale === 'es' ? 'Todo' : 'All'}
              </button>
              {[1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020].map((d) => (
                <button
                  key={d}
                  onClick={() => handleDecadeSelect(d)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all active:scale-95 min-h-[32px] ${
                    startYear === d && endYear === Math.min(2026, d + 9)
                      ? 'bg-indigo-50 dark:bg-cyan-950/50 border-indigo-300 dark:border-cyan-700 text-indigo-650 dark:text-cyan-400'
                      : 'border-slate-200/70 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {d}s
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
