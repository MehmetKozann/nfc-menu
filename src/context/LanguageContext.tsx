'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Language, LocalizedString, LocalizedStringArray } from '@/types';
import { translations, TranslationKey } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  getLocalized: (obj: LocalizedString | undefined | null, fallback?: string) => string;
  getLocalizedArray: (obj: LocalizedStringArray | undefined | null) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'nfc_menu_language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage or URL parameter
  useEffect(() => {
    try {
      // Check query param first
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'tr' || urlLang === 'en') {
        setLanguageState(urlLang);
        localStorage.setItem(STORAGE_KEY, urlLang);
      } else {
        const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (savedLang === 'tr' || savedLang === 'en') {
          setLanguageState(savedLang);
        } else {
          // Default to Turkish as requested
          setLanguageState('tr');
        }
      }
    } catch (e) {
      console.warn('Could not access localStorage for language:', e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch (e) {
      console.warn('Could not save language preference:', e);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  }, [language, setLanguage]);

  const t = useCallback((key: TranslationKey, params?: Record<string, string | number>): string => {
    const dict = translations[language] || translations.tr;
    let text = dict[key] || translations.tr[key] || (key as string);
    if (params) {
      Object.entries(params).forEach(([paramKey, val]) => {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(val));
      });
    }
    return text;
  }, [language]);

  const getLocalized = useCallback((obj: LocalizedString | undefined | null, fallback = ''): string => {
    if (!obj) return fallback;
    return obj[language] || obj.tr || obj.en || fallback;
  }, [language]);

  const getLocalizedArray = useCallback((obj: LocalizedStringArray | undefined | null): string[] => {
    if (!obj) return [];
    return obj[language] || obj.tr || obj.en || [];
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        getLocalized,
        getLocalizedArray
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
