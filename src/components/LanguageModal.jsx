import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { X, Award, Shield, Landmark, Rocket, Sparkles, Calendar, Briefcase } from 'lucide-react';
import Logo from './Logo';

export default function LanguageModal({ language, onClose }) {
  const { locale, t } = useTranslation();
  const modalRef = useRef(null);

  // Esc key listener and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Click outside listener
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!language) return null;

  const content = language[locale] || language.en;
  const brandColor = language.colorBrand || '#6366F1';

  return (
    <div 
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 dark:bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div 
        ref={modalRef}
        style={{ '--accent-color': brandColor }}
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0c0d12] shadow-2xl overflow-hidden animate-slide-up"
      >
        {/* Colorful accent header banner */}
        <div 
          className="w-full h-3 sm:h-4"
          style={{ backgroundColor: brandColor }}
        />

        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-2">
            <span 
              className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: brandColor }}
            >
              {language.year}
            </span>
            <span className="text-slate-400 font-mono text-xs">/ {language.creator}</span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            aria-label={t('close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
          
          {/* Main Title and Tagline */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <Logo 
                id={language.id} 
                brandColor={brandColor} 
                className="w-10 h-10" 
              />
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                {content.name}
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: brandColor }} />
              </h2>
            </div>
            <p className="font-serif italic text-xl sm:text-2xl text-indigo-600 dark:text-cyan-400 mt-3 leading-relaxed">
              "{content.tagline}"
            </p>
            <p className="text-sm sm:text-base text-slate-650 dark:text-slate-300 mt-4 leading-relaxed font-sans">
              {content.description}
            </p>
          </div>

          {/* Grids for Detailed Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Grid: Achievements & Paradigms */}
            <div className="flex flex-col gap-8">
              
              {/* Paradigms */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  {t('paradigms')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {language.paradigms.map((p) => (
                    <span 
                      key={p} 
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Aerospace, Defense & Government Impact */}
              <div className="p-5 rounded-2xl border border-indigo-100 dark:border-indigo-950/30 bg-indigo-50/20 dark:bg-indigo-950/5 flex flex-col gap-4">
                <h4 className="text-sm font-bold tracking-tight text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
                  <Rocket className="w-4.5 h-4.5 text-indigo-500 dark:text-cyan-400" />
                  {t('achievements')}
                </h4>
                <ul className="flex flex-col gap-3">
                  {content.achievements.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-cyan-500 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Grid: Intrigue & Milestones */}
            <div className="flex flex-col gap-8">
              
              {/* Corporate Intrigue & Finance */}
              {content.intrigue && (
                <div className="p-5 rounded-2xl border border-amber-100 dark:border-amber-950/20 bg-amber-50/20 dark:bg-amber-950/5 flex flex-col gap-3">
                  <h4 className="text-sm font-bold tracking-tight text-amber-800 dark:text-amber-300 flex items-center gap-2">
                    <Landmark className="w-4.5 h-4.5 text-amber-500 dark:text-amber-400" />
                    {t('intrigue')}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {content.intrigue}
                  </p>
                </div>
              )}

              {/* Milestones timeline */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {t('milestones')}
                </h4>
                <div className="relative pl-5 border-l-2 border-slate-200 dark:border-slate-800 flex flex-col gap-6">
                  {content.milestones.map((m, idx) => (
                    <div key={idx} className="relative group/item">
                      {/* Timeline dot */}
                      <span 
                        className="absolute -left-[27px] top-1 w-3 h-3 rounded-full border-2 border-white dark:border-[#0c0d12] transition-transform duration-200 group-hover/item:scale-125"
                        style={{ backgroundColor: brandColor }}
                      />
                      
                      <div className="flex items-center gap-2">
                        <span className="font-display font-extrabold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                          {m.year}
                        </span>
                        <span className="text-slate-400 dark:text-slate-600 font-mono text-[10px] sm:text-xs">|</span>
                        <h5 className="font-sans font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                          {m.title}
                        </h5>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
