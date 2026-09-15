'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Utensils, Coffee, ArrowRight, Sparkles } from 'lucide-react';

interface DepartmentCardProps {
  type: 'food' | 'drinks';
  itemCount: number;
  categoryCount: number;
  onClick: () => void;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({
  type,
  itemCount,
  categoryCount,
  onClick
}) => {
  const { t, language } = useLanguage();

  const isFood = type === 'food';

  const title = isFood ? t('foodMenu') : t('drinksMenu');
  const description = isFood ? t('foodMenuDesc') : t('drinksMenuDesc');
  const exploreText = isFood ? t('exploreFood') : t('exploreDrinks');

  const imageUrl = isFood
    ? 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' // Steak/Food
    : 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80'; // Coffee/Drinks

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl bg-white border border-[#E8DFD5] border-l-4 border-l-[#C46835] shadow-md hover:shadow-2xl transition-all duration-400 cursor-pointer active:scale-[0.98] flex flex-col justify-between book-spine-left transform hover:-translate-y-1.5"
    >
      {/* High Quality Banner Image Container */}
      <div className="relative w-full aspect-16/10 sm:aspect-16/9 bg-[#F3ECE2] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Gradient Overlay with Book Lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        {/* Floating Top Category Count Badge */}
        <div className="absolute top-3 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/25 shadow-sm">
          {isFood ? <Utensils className="w-3.5 h-3.5 text-[#DDA15E]" /> : <Coffee className="w-3.5 h-3.5 text-[#DDA15E]" />}
          <span>{categoryCount} {language === 'tr' ? 'Kategori' : 'Categories'}</span>
        </div>

        {/* Floating Item Count Badge */}
        <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#1F1612] text-xs font-black shadow-md border border-[#E8DFD5]">
          {itemCount} {language === 'tr' ? 'Çeşit' : 'Items'}
        </div>

        {/* Title on Image */}
        <div className="absolute bottom-3.5 left-4 right-4 z-10">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 drop-shadow-md">
            <span>{title}</span>
          </h3>
        </div>
      </div>

      {/* Description & Action Footer */}
      <div className="p-4 sm:p-5 bg-white flex flex-col justify-between flex-1 gap-4">
        <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed font-medium">
          {description}
        </p>

        <div className="pt-3 border-t border-[#F3ECE2] flex items-center justify-between text-xs font-extrabold text-[#C46835] group-hover:text-[#A85324] transition-colors">
          <span className="tracking-wide uppercase text-[11px]">{exploreText}</span>
          <div className="w-8 h-8 rounded-full bg-[#FBF0E9] border border-[#E8C5B0] flex items-center justify-center group-hover:bg-[#C46835] group-hover:text-white group-hover:translate-x-1.5 transition-all shadow-xs">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
