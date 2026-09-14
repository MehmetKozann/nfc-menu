'use client';

import React from 'react';
import { ProductTag } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Flame, Leaf, Award, WheatOff, Sprout } from 'lucide-react';

interface ProductTagBadgeProps {
  tag: ProductTag;
  size?: 'sm' | 'md';
}

export const ProductTagBadge: React.FC<ProductTagBadgeProps> = ({ tag, size = 'sm' }) => {
  const { t } = useLanguage();

  const getTagConfig = () => {
    switch (tag) {
      case 'popular':
        return {
          label: t('tagPopular'),
          icon: <Flame className="w-3 h-3 text-[#C46835]" />,
          className: 'bg-[#FBF0E9] text-[#A85324] border-[#F0D5C5]'
        };
      case 'new':
        return {
          label: t('tagNew'),
          icon: <Sparkles className="w-3 h-3 text-[#DDA15E]" />,
          className: 'bg-[#FEF8ED] text-[#97601F] border-[#F2DEBA]'
        };
      case 'vegetarian':
        return {
          label: t('tagVegetarian'),
          icon: <Leaf className="w-3 h-3 text-[#52796F]" />,
          className: 'bg-[#EFF5F3] text-[#355B51] border-[#CFE1DC]'
        };
      case 'vegan':
        return {
          label: t('tagVegan'),
          icon: <Sprout className="w-3 h-3 text-[#2D6A4F]" />,
          className: 'bg-[#EAF4EE] text-[#1B4332] border-[#B7DFC6]'
        };
      case 'gluten_free':
        return {
          label: t('tagGlutenFree'),
          icon: <WheatOff className="w-3 h-3 text-[#8C7A6E]" />,
          className: 'bg-[#F3ECE2] text-[#5A493D] border-[#DDD3C7]'
        };
      case 'chef_special':
        return {
          label: t('tagChefSpecial'),
          icon: <Award className="w-3 h-3 text-[#C46835]" />,
          className: 'bg-[#FBF0E9] text-[#A85324] border-[#E8C5B0]'
        };
      default:
        return {
          label: tag,
          icon: null,
          className: 'bg-stone-100 text-stone-700 border-stone-200'
        };
    }
  };

  const config = getTagConfig();
  const isSmall = size === 'sm';

  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold rounded-full border ${config.className} ${
        isSmall ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
      }`}
    >
      {config.icon}
      <span>{config.label}</span>
    </span>
  );
};
