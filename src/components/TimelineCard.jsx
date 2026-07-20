import React, { useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Calendar, Code, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import DecryptedText from './DecryptedText';

export default function TimelineCard({ language, onSelect }) {
  const { locale, t } = useTranslation();
  const cardRef = useRef(null);
  
  // Get translation content
  const content = language[locale] || language.en;
  const brandColor = language.colorBrand || '#6366F1';

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  // Category tags mappings
  const typeLabels = {
    language: { en: 'Language', es: 'Lenguaje', color: 'text-indigo-600 dark:text-cyan-400 bg-indigo-50/50 dark:bg-cyan-950/20 border-indigo-150/40 dark:border-cyan-500/25' },
    framework: { en: 'Framework', es: 'Framework', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-150/40 dark:border-emerald-500/25' },
    milestone: { en: 'Milestone', es: 'Hito Histórico', color: 'text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20 border-amber-150/40 dark:border-amber-500/25' },
    ai: { en: 'AI Revolution', es: 'Era de IA', color: 'text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50/50 dark:bg-fuchsia-950/20 border-fuchsia-150/40 dark:border-fuchsia-500/25' }
  };

  const typeInfo = typeLabels[language.type || 'language'];
  const typeText = locale === 'en' ? typeInfo.en : typeInfo.es;

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onSelect}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      tabIndex={0}
      role="button"
      style={{ 
        '--accent-color': brandColor,
        '--mouse-x': '50%',
        '--mouse-y': '50%'
      }}
      className="group relative flex flex-col justify-between w-full h-[240px] p-5 rounded-2xl border border-white/70 dark:border-white/10 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl hover:bg-white/80 dark:hover:bg-slate-900/40 cursor-pointer shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] dark:shadow-[0_12px_40px_0_rgba(0,0,0,0.6)] hover:shadow-[0_16px_48px_0_rgba(59,130,246,0.15)] dark:hover:shadow-[0_16px_48px_0_rgba(6,182,212,0.25)] hover:border-white/90 dark:hover:border-cyan-400/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 select-none overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/90 dark:before:via-cyan-400/50 before:to-transparent"
    >
      {/* High-Tech Dot Matrix Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px] opacity-20 dark:opacity-30 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

      {/* Liquid Glass Dynamic Surface Reflective Gloss */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/5 dark:from-white/10 dark:via-transparent dark:to-white/5 pointer-events-none" />

      {/* Cyberpunk corner bracket borders */}
      <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-slate-300 dark:border-slate-700 transition-colors duration-300 group-hover:border-indigo-500 dark:group-hover:border-cyan-400" />
      <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-slate-300 dark:border-slate-700 transition-colors duration-300 group-hover:border-indigo-500 dark:group-hover:border-cyan-400" />
      <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-slate-300 dark:border-slate-700 transition-colors duration-300 group-hover:border-indigo-500 dark:group-hover:border-cyan-400" />
      <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-slate-300 dark:border-slate-700 transition-colors duration-300 group-hover:border-indigo-500 dark:group-hover:border-cyan-400" />

      {/* Liquid Glass Specular Spotlight overlay using the brandColor */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 140px at var(--mouse-x) var(--mouse-y), ${brandColor}30, transparent 75%)`
        }}
      />

      <div className="relative z-10 w-full">
        {/* Header line: Year & Category Type Pill */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <span 
            className="font-display font-black text-[10px] tracking-wider px-2 py-0.5 rounded border transition-transform duration-300 group-hover:scale-105"
            style={{ 
              color: brandColor, 
              borderColor: `${brandColor}40`, 
              backgroundColor: `${brandColor}08` 
            }}
          >
            {language.year}
          </span>

          <span 
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider uppercase border ${typeInfo.color}`}
          >
            <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
            {typeText}
          </span>
        </div>

        {/* Title, Logo, and Link Arrow */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 group-hover:border-slate-350 dark:group-hover:border-slate-700/80 transition-colors duration-300">
              <Logo 
                id={language.id} 
                brandColor={brandColor} 
                className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-650 dark:group-hover:text-cyan-400 transition-colors duration-300">
              <DecryptedText 
                text={content.name} 
                animateOn="hover" 
                speed={40} 
                maxIterations={10} 
                sequential={true}
                useOriginalCharsOnly={true} 
              />
            </h3>
          </div>
          
          <ArrowUpRight className="w-4 h-4 text-slate-400/80 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
        </div>

        {/* Tagline blockquote style */}
        <p className="font-serif italic text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 mb-3.5 line-clamp-2 leading-relaxed pl-2.5 border-l border-slate-200 dark:border-slate-800 group-hover:border-indigo-500/40 dark:group-hover:border-cyan-400/40 transition-colors duration-300">
          "{content.tagline}"
        </p>
      </div>

      {/* Footer: Creator & Quick Details link */}
      <div className="flex items-center justify-between gap-2 mt-auto pt-3 border-t border-slate-100/80 dark:border-slate-900/60 relative z-10 w-full">
        {/* Creator Name formatted as terminal input */}
        <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 truncate max-w-[180px]">
          <span className="text-indigo-500 dark:text-cyan-400 font-bold select-none">&gt;_</span>
          <span className="truncate">{language.creator}</span>
        </span>

        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-0.5">
          <span>{locale === 'es' ? 'Ver detalles' : 'View details'}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
