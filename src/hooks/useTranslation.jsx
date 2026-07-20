import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    title: "Programming Languages Timeline",
    subtitle: "Exploring the roots, milestones, corporate intrigue, and real-world impact of the languages that shape our digital world.",
    searchPlaceholder: "Search by name, creator, paradigms...",
    paradigms: "Paradigms",
    yearRange: "Year Range",
    minImpact: "Minimum Impact",
    clearFilters: "Clear Filters",
    noResults: "No technologies or milestones found matching your filters.",
    creator: "Creator",
    year: "Year",
    impact: "Impact",
    readMore: "Explore Details",
    close: "Close",
    milestones: "Key Milestones",
    achievements: "Aerospace & Military Impact",
    intrigue: "Corporate Intrigue & Finance",
    allParadigms: "All Paradigms",
    filterActive: "filter active",
    filtersActive: "filters active",
    showing: "Showing",
    of: "of",
    languages: "technologies",
    stars: "stars",
    star: "star"
  },
  es: {
    title: "Línea de Tiempo de Lenguajes de Programación",
    subtitle: "Explorando las raíces, hitos, intrigas corporativas y el impacto real de los lenguajes que dan forma a nuestro mundo digital.",
    searchPlaceholder: "Buscar por nombre, creador, paradigmas...",
    paradigms: "Paradigmas",
    yearRange: "Rango de Años",
    minImpact: "Impacto Mínimo",
    clearFilters: "Limpiar Filtros",
    noResults: "No se encontraron tecnologías o hitos que coincidan con los filtros.",
    creator: "Creador",
    year: "Año",
    impact: "Impacto",
    readMore: "Explorar Detalles",
    close: "Cerrar",
    milestones: "Hitos Clave",
    achievements: "Impacto Aeroespacial y Militar",
    intrigue: "Intriga Corporativa y Finanzas",
    allParadigms: "Todos los Paradigmas",
    filterActive: "filtro activo",
    filtersActive: "filtros activos",
    showing: "Mostrando",
    of: "de",
    languages: "tecnologías",
    stars: "estrellas",
    star: "estrella"
  }
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem('app-locale');
    if (saved === 'en' || saved === 'es') return saved;
    // Default to 'en' or browser language
    const lang = navigator.language || '';
    return lang.startsWith('es') ? 'es' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('app-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key) => {
    return translations[locale][key] || key;
  };

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return React.createElement(
    LanguageContext.Provider,
    { value: { locale, setLocale, t, toggleLocale } },
    children
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
