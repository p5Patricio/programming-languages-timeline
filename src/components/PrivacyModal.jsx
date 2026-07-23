import React from 'react';
import { X, ShieldCheck, Cookie, Lock, Eye, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function PrivacyModal({ isOpen, onClose }) {
  const { locale } = useTranslation();

  if (!isOpen) return null;

  const isEs = locale === 'es';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-2xl bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl border border-white/80 dark:border-white/15 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-8">
        
        {/* Top Header bar with specular edge glow */}
        <div className="relative p-5 sm:p-6 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-indigo-500/50 dark:before:via-cyan-400/50 before:to-transparent">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-cyan-950/40 border border-indigo-200/50 dark:border-cyan-800/40 text-indigo-600 dark:text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight">
                {isEs ? 'Política de Privacidad y Cookies' : 'Privacy & Cookie Policy'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                {isEs ? 'Información sobre protección de datos y Google AdSense' : 'Data protection and Google AdSense disclosures'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label={isEs ? 'Cerrar' : 'Close'}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[65vh] overflow-y-auto custom-scrollbar text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          
          {/* Section 1: General Overview */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
              <span>{isEs ? '1. Compromiso de Privacidad' : '1. Privacy Commitment'}</span>
            </h4>
            <p>
              {isEs 
                ? 'En patodev.com y sus subdominios (incluyendo cronologia-lenguajes.patodev.com), respetamos y protegemos la privacidad de nuestros visitantes. Esta aplicación interactiva es de uso libre y educativo.' 
                : 'At patodev.com and its subdomains (including cronologia-lenguajes.patodev.com), we respect and protect our visitors privacy. This interactive application is free and educational.'}
            </p>
          </div>

          {/* Section 2: Google AdSense & Cookies */}
          <div className="p-4 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 space-y-2">
            <h4 className="font-bold text-indigo-950 dark:text-indigo-200 text-sm sm:text-base flex items-center gap-2">
              <Cookie className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
              <span>{isEs ? '2. Cookies de Google AdSense y Terceros' : '2. Google AdSense & Third-Party Cookies'}</span>
            </h4>
            <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li>
                {isEs 
                  ? 'Proveedores de terceros, incluido Google, utilizan cookies para mostrar anuncios basados en las visitas anteriores del usuario a este sitio web o a otros sitios web.'
                  : 'Third-party vendors, including Google, use cookies to serve ads based on a user’s prior visits to this website or other websites.'}
              </li>
              <li>
                {isEs
                  ? 'El uso de cookies publicitarias de Google le permite a este y a sus socios mostrar anuncios basados en las visitas realizadas por los usuarios en este sitio y en otros sitios de Internet.'
                  : 'Google’s use of advertising cookies enables it and its partners to serve ads to users based on their visit to your sites and/or other sites on the Internet.'}
              </li>
              <li>
                {isEs
                  ? 'Los usuarios pueden inhabilitar la publicidad personalizada consultando las Preferencias de anuncios de Google en'
                  : 'Users may opt out of personalized advertising by visiting Google Ads Settings at'}{' '}
                <a 
                  href="https://www.google.com/settings/ads" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-600 dark:text-cyan-400 font-semibold underline hover:opacity-80"
                >
                  www.google.com/settings/ads
                </a>.
              </li>
            </ul>
          </div>

          {/* Section 3: Data Collection & Analytics */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
              <Eye className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
              <span>{isEs ? '3. Recopilación de Datos y Estadísticas' : '3. Data Collection & Analytics'}</span>
            </h4>
            <p>
              {isEs
                ? 'No almacenamos datos personales identificables (PII) en nuestros servidores. Las únicas métricas recopiladas son estadísticas anónimas de rendimiento y uso de la aplicación para optimizar la velocidad y la experiencia del usuario.'
                : 'We do not store personally identifiable information (PII) on our servers. The only metrics collected are anonymous performance and usage statistics to optimize speed and user experience.'}
            </p>
          </div>

          {/* Section 4: Contact Information */}
          <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Domain: patodev.com</span>
            <span>{isEs ? 'Última actualización: Julio 2026' : 'Last updated: July 2026'}</span>
          </div>

        </div>

        {/* Modal Footer Button */}
        <div className="p-4 bg-slate-50/80 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800/80 flex justify-end">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white dark:text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isEs ? 'Entendido y Aceptar' : 'Understood & Accept'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
