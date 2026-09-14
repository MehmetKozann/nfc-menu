'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onClear,
  className = ''
}) => {
  const { t } = useLanguage();

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-[#8C7A6E] pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t('search')}
          className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#E8DFD5] rounded-2xl text-sm text-[#1F1612] placeholder-[#9E8F84] focus:outline-none focus:ring-2 focus:ring-[#C46835]/30 focus:border-[#C46835] transition-all shadow-2xs"
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 p-1 rounded-full text-[#8C7A6E] hover:text-[#1F1612] hover:bg-[#F3ECE2] transition-colors"
            aria-label={t('clear')}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
