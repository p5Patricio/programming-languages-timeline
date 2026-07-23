import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from './hooks/useTranslation';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Timeline from './components/Timeline';
import LanguageModal from './components/LanguageModal';
import { languages } from './data/languages';
import { Sparkles, Calendar, Github } from 'lucide-react';
import patoLogo from './assets/patodev_logo.png';
import PixelBlast from './components/PixelBlast';
import DecryptedText from './components/DecryptedText';
import ClickSpark from './components/ClickSpark';
import TextType from './components/TextType';
import PrivacyModal from './components/PrivacyModal';

export default function App() {
  const { t, locale } = useTranslation();

  // Privacy Policy modal state
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('app-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Mobile detection for WebGL responsiveness
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter states
  const [search, setSearch] = useState('');
  const [selectedParadigms, setSelectedParadigms] = useState([]);
  const [startYear, setStartYear] = useState(1950);
  const [endYear, setEndYear] = useState(2026);
  const [selectedType, setSelectedType] = useState('all');

  // Selected language for modal details
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Filtered and sorted dataset
  const filteredLanguages = useMemo(() => {
    return languages
      .filter((lang) => {
        // Type filter (default to 'language' if undefined)
        const matchesType =
          selectedType === 'all' ||
          (selectedType === 'language' && (!lang.type || lang.type === 'language')) ||
          lang.type === selectedType;

        // Search query filter (matches name, creator, tagline, description, paradigms in both languages)
        const searchLower = search.toLowerCase();
        const matchesSearch =
          !search ||
          lang.en.name.toLowerCase().includes(searchLower) ||
          lang.es.name.toLowerCase().includes(searchLower) ||
          lang.creator.toLowerCase().includes(searchLower) ||
          lang.en.tagline.toLowerCase().includes(searchLower) ||
          lang.es.tagline.toLowerCase().includes(searchLower) ||
          lang.en.description.toLowerCase().includes(searchLower) ||
          lang.es.description.toLowerCase().includes(searchLower) ||
          lang.paradigms.some((p) => p.toLowerCase().includes(searchLower));

        // Paradigms multi-select logic (matches core paradigms and AI technologies)
        const matchesParadigms =
          selectedParadigms.length === 0 ||
          selectedParadigms.every((p) => {
            if (p === 'AI') {
              return (
                lang.type === 'ai' ||
                lang.paradigms.some((tp) =>
                  ['ai', 'llm', 'learning', 'agent', 'autonomy'].some((k) =>
                    tp.toLowerCase().includes(k)
                  )
                )
              );
            }
            return lang.paradigms.some((tp) =>
              tp.toLowerCase().includes(p.toLowerCase())
            );
          });

        // Year range filter
        const matchesYear = lang.year >= startYear && lang.year <= endYear;

        return matchesType && matchesSearch && matchesParadigms && matchesYear;
      })
      .sort((a, b) => a.year - b.year);
  }, [search, selectedParadigms, startYear, endYear, selectedType]);

  return (
    <ClickSpark sparkColor="#3b82f6" sparkSize={10} sparkRadius={18} sparkCount={10} className="w-full">
      <div className="min-h-screen flex flex-col transition-colors duration-300 relative">
      {/* Premium dynamic pixel blast WebGL background */}
      <PixelBlast
        variant="square"
        pixelSize={isMobile ? 8 : 4}
        color="#3b82f6"
        patternScale={isMobile ? 1.6 : 2.2}
        patternDensity={isMobile ? 1.15 : 0.65}
        pixelSizeJitter={0.5}
        enableRipples={false}
        rippleSpeed={0.5}
        rippleThickness={0.15}
        rippleIntensityScale={1.5}
        liquid={false}
        liquidStrength={0.08}
        liquidRadius={isMobile ? 1.8 : 1.2}
        liquidWobbleSpeed={4.0}
        speed={0.3}
        edgeFade={0}
        transparent={true}
        className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      />

      {/* Header component */}
      <Header theme={theme} toggleTheme={toggleTheme} onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Hero, filters, and status counter in a centered container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        {/* Intro Hero Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-4 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-55 dark:bg-indigo-950/40 text-indigo-650 dark:text-cyan-400 mb-2 border border-indigo-150 dark:border-indigo-900/30">
            <Sparkles className="w-3 h-3" />
            <span>Interactive Chronology</span>
          </div>
          
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight select-none text-slate-900 dark:text-white pb-1">
            <TextType 
              text={t('title')} 
              typingSpeed={50} 
              deletingSpeed={30} 
              pauseDuration={3000} 
              loop={false} 
              cursorCharacter="|" 
            />
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* FilterBar container */}
        <div className="mb-3">
          <FilterBar
            search={search}
            setSearch={setSearch}
            selectedParadigms={selectedParadigms}
            setSelectedParadigms={setSelectedParadigms}
            startYear={startYear}
            setStartYear={setStartYear}
            endYear={endYear}
            setEndYear={setEndYear}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </div>

        {/* Dynamic results status counter */}
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 px-1 mb-1">
          <div>
            {t('showing')} <span className="text-indigo-650 dark:text-cyan-400 font-bold">{filteredLanguages.length}</span> {t('of')} <span className="font-bold">{languages.length}</span> {t('languages')}
          </div>
          {(search || selectedParadigms.length > 0 || startYear > 1950 || endYear < 2026 || selectedType !== 'all') && (
            <div className="text-amber-500 dark:text-amber-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>{t('filterActive')}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main timeline page body (Full Width breakout) */}
      <main className="flex-1 w-full pb-16 md:pb-0">
        <Timeline
          languages={filteredLanguages}
          onSelectLanguage={setSelectedLanguage}
        />
      </main>

      {/* LanguageModal drawer overlay */}
      {selectedLanguage && (
        <LanguageModal
          language={selectedLanguage}
          onClose={() => setSelectedLanguage(null)}
        />
      )}

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Footer component */}
      <footer className="w-full py-8 md:py-4 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/40 backdrop-blur-md transition-colors md:fixed md:bottom-0 md:left-0 md:right-0 md:z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={patoLogo} alt="patodev logo" className="w-9 h-9 object-contain rounded-xl border border-slate-200/60 dark:border-slate-800 bg-white/50 p-1 shadow-sm transition-transform hover:scale-105" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 font-sans">
                Developed by <span className="text-indigo-650 dark:text-cyan-400 font-extrabold hover:underline cursor-pointer">patodev</span>
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium font-sans">
                &copy; {new Date().getFullYear()} ChronosLang. Built with React & Tailwind.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-650 dark:hover:text-cyan-400 font-semibold underline transition-all"
            >
              {locale === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
            </button>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href="https://github.com/p5Patricio/programming-languages-timeline"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-650 dark:hover:text-cyan-400 font-bold transition-all duration-300 hover:translate-x-0.5"
            >
              <Github className="w-4 h-4 text-slate-400" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
    </ClickSpark>
  );
}
