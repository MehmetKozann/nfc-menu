'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  variant?: 'header' | 'pill' | 'hero';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = 'header', className = '' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'pill') {
    return (
      <div className={`inline-flex items-center p-1 rounded-full bg-[#F0E7DD] border border-[#E2D5C7] ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('tr')}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
            language === 'tr'
              ? 'bg-[#1F1612] text-[#FAF7F2] shadow-sm'
              : 'text-[#6B5E55] hover:text-[#1F1612]'
          }`}
          aria-label="Türkçe"
        >
          TR
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
            language === 'en'
              ? 'bg-[#1F1612] text-[#FAF7F2] shadow-sm'
              : 'text-[#6B5E55] hover:text-[#1F1612]'
          }`}
          aria-label="English"
        >
          EN
        </button>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-1.5 p-1 rounded-full bg-[#F3ECE2] border border-[#E8DFD5] shadow-inner ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe className="w-3.5 h-3.5 text-[#8C7A6E] ml-1.5" />
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          language === 'tr'
            ? 'bg-[#C46835] text-white shadow-sm scale-105'
            : 'text-[#6B5E55] hover:text-[#1F1612]'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-[#C46835] text-white shadow-sm scale-105'
            : 'text-[#6B5E55] hover:text-[#1F1612]'
        }`}
      >
        EN
      </button>
    </div>
  );
};
