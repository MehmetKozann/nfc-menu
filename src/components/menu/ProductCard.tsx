'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { ProductTagBadge } from './ProductTagBadge';
import { Clock, Flame, AlertCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { getLocalized, getLocalizedArray, t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const allergens = getLocalizedArray(product.allergens);
  const hasAllergens = allergens && allergens.length > 0;

  return (
    <div
      onClick={() => onClick(product)}
      className="group bg-white rounded-2xl border border-[#E8DFD5] p-3.5 sm:p-4 hover:border-[#D5C3B3] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden active:scale-[0.985]"
    >
      <div>
        {/* Image Container with Badges */}
        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#F3ECE2] mb-3">
          {!imageError ? (
            <img
              src={product.image}
              alt={getLocalized(product.name)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#EFE7DE] text-[#8C7A6E] text-xs">
              {getLocalized(product.name)}
            </div>
          )}

          {/* Primary Tag / Chef's Special Overlay */}
          {product.tags && product.tags.length > 0 && (
            <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1 z-10">
              <ProductTagBadge tag={product.tags[0]} size="sm" />
            </div>
          )}

          {/* Prep Time pill if present */}
          {product.prepTime && (
            <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" />
              <span>{product.prepTime} {t('approxMinutes')}</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-sm sm:text-base text-[#1F1612] leading-snug group-hover:text-[#C46835] transition-colors">
              {getLocalized(product.name)}
            </h3>
          </div>

          <p className="text-xs text-[#6B5E55] line-clamp-2 leading-relaxed">
            {getLocalized(product.description)}
          </p>
        </div>
      </div>

      {/* Footer / Price & Meta */}
      <div className="pt-3 mt-2 border-t border-[#F3ECE2] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-base sm:text-lg font-extrabold text-[#1F1612] tracking-tight">
            {product.price} {product.currency}
          </span>
          {product.calories && (
            <span className="text-[11px] text-[#9E8F84] hidden sm:inline-block">
              • {product.calories} {t('kcal')}
            </span>
          )}
        </div>

        {/* Quick Allergen Indicator badge */}
        {hasAllergens ? (
          <span
            className="text-[10px] text-[#A85324] bg-[#FBF0E9] px-2 py-0.5 rounded-md font-medium flex items-center gap-1"
            title={allergens.join(', ')}
          >
            <AlertCircle className="w-3 h-3" />
            <span className="hidden xs:inline">{t('allergens')}</span>
          </span>
        ) : (
          <span className="text-[10px] text-[#52796F] bg-[#EFF5F3] px-2 py-0.5 rounded-md font-medium">
            100% Doğal
          </span>
        )}
      </div>
    </div>
  );
};
