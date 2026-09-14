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
      className="group relative overflow-hidden rounded-3xl bg-white border border-[#E8DFD5] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-[0.985] flex flex-col justify-between"
    >
      {/* High Quality Banner Image Container */}
      <div className="relative w-full aspect-16/10 sm:aspect-16/9 bg-[#F3ECE2] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Floating Top Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/20">
          {isFood ? <Utensils className="w-3.5 h-3.5 text-[#DDA15E]" /> : <Coffee className="w-3.5 h-3.5 text-[#DDA15E]" />}
          <span>{categoryCount} {language === 'tr' ? 'Kategori' : 'Categories'}</span>
        </div>

        {/* Floating Item Count Badge */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-white/90 text-[#1F1612] text-xs font-extrabold shadow-sm">
          {itemCount} {language === 'tr' ? 'Çeşit' : 'Items'}
        </div>

        {/* Title on Image */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span>{title}</span>
          </h3>
        </div>
      </div>

      {/* Description & Action Footer */}
      <div className="p-4 sm:p-5 bg-white flex flex-col justify-between flex-1 gap-4">
        <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed">
          {description}
        </p>

        <div className="pt-2 border-t border-[#F3ECE2] flex items-center justify-between text-xs font-bold text-[#C46835] group-hover:text-[#A85324]">
          <span>{exploreText}</span>
          <div className="w-7 h-7 rounded-full bg-[#FBF0E9] flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4 text-[#C46835]" />
          </div>
        </div>
      </div>
    </div>
  );
};
