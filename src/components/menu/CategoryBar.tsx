'use client';

import React, { useRef, useEffect } from 'react';
import { Category } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Coffee, 
  GlassWater, 
  CupSoda, 
  UtensilsCrossed, 
  CakeSlice, 
  Sandwich,
  LayoutGrid,
  LucideIcon
} from 'lucide-react';

interface CategoryBarProps {
  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
  sticky?: boolean;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Coffee,
  GlassWater,
  CupSoda,
  UtensilsCrossed,
  CakeSlice,
  Sandwich,
  LayoutGrid
};

export const CategoryBar: React.FC<CategoryBarProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  sticky = true
}) => {
  const { t, getLocalized } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll selected button into center view
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeEl = scrollContainerRef.current.querySelector<HTMLElement>('[data-active="true"]');
    if (activeEl) {
      const container = scrollContainerRef.current;
      const scrollLeft = activeEl.offsetLeft - (container.offsetWidth / 2) + (activeEl.offsetWidth / 2);
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth'
      });
    }
  }, [selectedCategoryId]);

  return (
    <div
      className={`w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD5] transition-all z-30 ${
        sticky ? 'sticky top-[57px] shadow-xs' : ''
      }`}
    >
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-2 overflow-x-auto py-2.5 px-4 no-scrollbar max-w-4xl mx-auto"
      >
        {/* All Categories Pill */}
        <button
          type="button"
          data-active={selectedCategoryId === 'all'}
          onClick={() => onSelectCategory('all')}
          className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
            selectedCategoryId === 'all'
              ? 'bg-[#1F1612] text-[#FAF7F2] shadow-sm'
              : 'bg-white border border-[#E8DFD5] text-[#6B5E55] hover:text-[#1F1612] hover:border-[#DDD3C7]'
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>{t('all')}</span>
        </button>

        {/* Dynamic Categories */}
        {categories.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;
          const IconComponent = ICON_MAP[cat.iconName] || Coffee;

          return (
            <button
              key={cat.id}
              type="button"
              data-active={isSelected}
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
                isSelected
                  ? 'bg-[#C46835] text-white shadow-sm'
                  : 'bg-white border border-[#E8DFD5] text-[#6B5E55] hover:text-[#1F1612] hover:border-[#DDD3C7]'
              }`}
            >
              <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#8C7A6E]'}`} />
              <span>{getLocalized(cat.name)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
