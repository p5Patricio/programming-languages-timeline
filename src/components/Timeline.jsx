import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import TimelineCard from './TimelineCard';
import { HelpCircle, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import DecryptedText from './DecryptedText';

export default function Timeline({ languages, onSelectLanguage }) {
  const { locale, t } = useTranslation();
  const containerRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [dynamicHeight, setDynamicHeight] = useState('auto');

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update dynamic scroll height for 1:1 scroll feel
  useEffect(() => {
    if (isMobile || !scrollTrackRef.current || languages.length === 0) {
      setDynamicHeight('auto');
      return;
    }

    const calculateHeight = () => {
      if (!scrollTrackRef.current) return;
      const trackWidth = scrollTrackRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate needed scroll. Header is 64px (sticky top-16), so we subtract it.
      const scrollNeeded = Math.max(0, trackWidth - windowWidth);
      setDynamicHeight(`${scrollNeeded + windowHeight - 64}px`);
    };

    // Run after mount and render to ensure elements are measured
    const timer = setTimeout(calculateHeight, 150);
    window.addEventListener('resize', calculateHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateHeight);
    };
  }, [languages, isMobile]);

  // Scroll listener to drive horizontal translation on desktop
  useEffect(() => {
    if (isMobile || languages.length === 0) return;

    const handleScroll = () => {
      if (!containerRef.current || !scrollTrackRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = rect.height;
      
      // Calculate how far down the container the user has scrolled.
      // Offset by 64px to align with sticky top-16 (64px) threshold.
      const scrolled = 64 - rect.top;
      const maxScroll = containerHeight - windowHeight + 64;
      
      if (maxScroll <= 0) return;
      
      let progress = scrolled / maxScroll;
      progress = Math.max(0, Math.min(1, progress));
      
      const trackWidth = scrollTrackRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const maxTranslate = Math.max(0, trackWidth - windowWidth);
      
      const translateX = progress * maxTranslate;
      scrollTrackRef.current.style.transform = `translateX(${-translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set position in case page loads scrolled down
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, dynamicHeight, languages]);

  if (languages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 bg-white dark:bg-slate-950/20 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl mt-8">
        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-600 mb-4 animate-bounce">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h3 className="font-display font-bold text-lg text-slate-950 dark:text-white mb-2">
          {t('noResults')}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 max-w-sm">
          Try expanding your search query, adjusting the year range slider, or resetting the paradigm filter chips.
        </p>
      </div>
    );
  }

  // Mobile layout: Vertical timeline (simple scroll)
  if (isMobile) {
    return (
      <div className="relative mt-6 mb-16 px-2 animate-fade-in">
        {/* Left vertical track line */}
        <div className="absolute left-6 top-2 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-amber-500 dark:from-indigo-650 dark:via-cyan-650 dark:to-amber-650 opacity-30 pointer-events-none" />
        
        <div className="space-y-6">
          {languages.map((lang) => {
            const brandColor = lang.colorBrand || '#6366F1';
            const content = lang[locale] || lang.en;
            
            const typeLabels = {
              language: { en: 'Lang', es: 'Prog', color: 'text-indigo-650 dark:text-cyan-400 bg-indigo-50/50 dark:bg-cyan-950/20 border-indigo-150/40 dark:border-cyan-500/25' },
              framework: { en: 'FW', es: 'FW', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-150/40 dark:border-emerald-500/25' },
              milestone: { en: 'Hito', es: 'Hito', color: 'text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20 border-amber-150/40 dark:border-amber-500/25' },
              ai: { en: 'AI', es: 'IA', color: 'text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50/50 dark:bg-fuchsia-950/20 border-fuchsia-150/40 dark:border-fuchsia-500/25' }
            };
            const typeInfo = typeLabels[lang.type || 'language'];
            const typeText = locale === 'en' ? typeInfo.en : typeInfo.es;

            return (
              <div key={lang.id} className="relative pl-10 flex flex-col group">
                {/* Center Node on Timeline line */}
                <div 
                  className="absolute left-[18px] top-[42px] z-10 flex items-center justify-center w-3 h-3 rounded-full border-2 border-white dark:border-[#0c0d12]"
                  style={{ 
                    backgroundColor: brandColor,
                    boxShadow: `0 0 8px ${brandColor}80` 
                  }}
                >
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: brandColor }} />
                </div>

                {/* Year above the card */}
                <div className="flex items-center gap-2 mb-1.5 ml-1">
                  <span 
                    className="font-display font-black text-[11px] tracking-wider px-2 py-0.5 rounded border transition-transform duration-300 group-hover:scale-105"
                    style={{ 
                      color: brandColor, 
                      borderColor: `${brandColor}30`, 
                      backgroundColor: `${brandColor}08` 
                    }}
                  >
                    {lang.year}
                  </span>
                  <span className="h-px w-6 bg-slate-200/60 dark:bg-slate-800/80" />
                </div>
                
                {/* Compact Card container */}
                <div 
                  onClick={() => onSelectLanguage(lang)}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectLanguage(lang)}
                  tabIndex={0}
                  role="button"
                  className="relative flex items-center justify-between p-3.5 rounded-2xl border border-white/80 dark:border-white/20 bg-white/85 dark:bg-[#0c0d12]/85 backdrop-blur-xl hover:bg-white dark:hover:bg-slate-900/60 active:bg-slate-50 dark:active:bg-slate-900/60 cursor-pointer shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] dark:shadow-[0_10px_35px_0_rgba(0,0,0,0.7)] hover:border-white dark:hover:border-cyan-400/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 select-none overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/90 dark:before:via-cyan-400/60 before:to-transparent"
                >
                  {/* High-Tech Dot Matrix Pattern Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:10px_10px] opacity-20 pointer-events-none" />

                  {/* Liquid Glass Dynamic Surface Reflective Gloss */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/10 dark:from-white/15 dark:via-transparent dark:to-white/5 pointer-events-none" />
                  
                  <div className="flex items-center gap-3 relative z-10 min-w-0">
                    <div className="p-1 rounded-lg border border-slate-200/50 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
                      <Logo 
                        id={lang.id} 
                        brandColor={brandColor} 
                        className="w-6 h-6 object-contain" 
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white truncate">
                        <DecryptedText 
                          text={content.name} 
                          animateOn="hover" 
                          speed={40} 
                          maxIterations={8} 
                          sequential={true}
                          useOriginalCharsOnly={true} 
                        />
                      </h3>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
                        {lang.creator}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 relative z-10 flex-shrink-0">
                    {/* Small paradigm/type pill */}
                    <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase border ${typeInfo.color}`}>
                      {typeText}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop layout: Horizontal timeline driven by vertical scroll
  return (
    <div ref={containerRef} style={{ height: dynamicHeight }} className="relative w-full">
      {/* Sticky wrapper pinning timeline section to screen */}
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-start w-full">
        
        {/* Content horizontal track */}
        <div 
          ref={scrollTrackRef} 
          className="flex items-center gap-16 px-[12vw] relative transition-transform duration-75 ease-out will-change-transform h-full"
        >
          {/* Horizontal Connection Line */}
          <div 
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-amber-500 opacity-40 dark:opacity-30 z-0 pointer-events-none"
            style={{ top: 'calc(50% - 1px)' }}
          />

          {/* Languages list */}
          {languages.map((lang, index) => {
            const isEven = index % 2 === 0;
            const brandColor = lang.colorBrand || '#6366F1';
            
            return (
              <div key={lang.id} className="relative flex flex-col items-center w-[320px] flex-shrink-0 z-10 select-none">
                {/* Upper Half: Card for Even items */}
                <div className="h-[240px] w-full flex items-end justify-center pb-6">
                  {isEven && (
                    <div className="w-full transform transition-all duration-300 hover:-translate-y-2">
                      <TimelineCard 
                        language={lang} 
                        onSelect={() => onSelectLanguage(lang)} 
                      />
                    </div>
                  )}
                </div>

                {/* Center Node on horizontal track line */}
                <div 
                  className="w-4.5 h-4.5 rounded-full border-2 border-white dark:border-[#0c0d12] flex items-center justify-center relative z-20 cursor-pointer transition-transform duration-300 hover:scale-125"
                  onClick={() => onSelectLanguage(lang)}
                  style={{ 
                    backgroundColor: brandColor,
                    boxShadow: `0 0 12px ${brandColor}80` 
                  }}
                >
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: brandColor }} />
                  
                  {/* Dynamic Year label floating above the node */}
                  <span className="absolute -top-7 font-display font-extrabold text-xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-350 shadow-sm border border-slate-200/50 dark:border-slate-800">
                    {lang.year}
                  </span>
                </div>

                {/* Lower Half: Card for Odd items */}
                <div className="h-[240px] w-full flex items-start justify-center pt-6">
                  {!isEven && (
                    <div className="w-full transform transition-all duration-300 hover:translate-y-2">
                      <TimelineCard 
                        language={lang} 
                        onSelect={() => onSelectLanguage(lang)} 
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
