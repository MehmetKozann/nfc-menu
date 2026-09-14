'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { ProductTagBadge } from '../menu/ProductTagBadge';
import { 
  X, 
  Clock, 
  Flame, 
  AlertTriangle, 
  CheckCircle2, 
  Utensils, 
  Info,
  Sparkles
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { getLocalized, getLocalizedArray, t } = useLanguage();
  const [imageError, setImageError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});

  if (!product) return null;

  const ingredients = getLocalizedArray(product.ingredients);
  const allergens = getLocalizedArray(product.allergens);

  const calculateTotalPrice = () => {
    let total = product.price;
    if (product.options) {
      product.options.forEach((opt, optIndex) => {
        const selectedChoiceIndex = selectedOptions[optIndex] ?? 0;
        const choice = opt.choices[selectedChoiceIndex];
        if (choice && choice.priceDiff) {
          total += choice.priceDiff;
        }
      });
    }
    return total;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg bg-[#FAF7F2] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#E8DFD5] max-h-[90vh] overflow-y-auto flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Container */}
        <div className="relative w-full aspect-16/10 sm:aspect-16/9 bg-[#F3ECE2] shrink-0">
          {!imageError ? (
            <img
              src={product.image}
              alt={getLocalized(product.name)}
              className="w-full h-full object-cover object-center"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#EFE7DE] text-[#8C7A6E]">
              {getLocalized(product.name)}
            </div>
          )}

          {/* Close Floating Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-all shadow-md z-10"
            aria-label={t('close')}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tags floating on image */}
          {product.tags && product.tags.length > 0 && (
            <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5 z-10">
              {product.tags.map((tag) => (
                <ProductTagBadge key={tag} tag={tag} size="md" />
              ))}
            </div>
          )}
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Title & Price Header */}
          <div className="border-b border-[#E8DFD5] pb-4">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F1612] leading-tight">
                {getLocalized(product.name)}
              </h2>
              <div className="text-right shrink-0">
                <span className="text-xl sm:text-2xl font-black text-[#C46835]">
                  {calculateTotalPrice()} {product.currency}
                </span>
              </div>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex items-center gap-3 mt-2.5 text-xs text-[#6B5E55]">
              {product.prepTime && (
                <div className="flex items-center gap-1 bg-[#F3ECE2] px-2.5 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-[#C46835]" />
                  <span>{product.prepTime} {t('approxMinutes')}</span>
                </div>
              )}
              {product.calories && (
                <div className="flex items-center gap-1 bg-[#F3ECE2] px-2.5 py-1 rounded-full">
                  <Flame className="w-3.5 h-3.5 text-[#DDA15E]" />
                  <span>{product.calories} {t('kcal')}</span>
                </div>
              )}
              <div className="flex items-center gap-1 bg-[#EFF5F3] text-[#355B51] px-2.5 py-1 rounded-full font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t('available')}</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-[#4A3B32] leading-relaxed">
              {getLocalized(product.description)}
            </p>
          </div>

          {/* Product Options / Customizations (e.g. Milk choice) */}
          {product.options && product.options.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#8C7A6E] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C46835]" />
                {t('customization')}
              </h3>
              {product.options.map((option, optIdx) => (
                <div key={optIdx} className="space-y-2 bg-white rounded-2xl p-4 border border-[#E8DFD5]">
                  <div className="text-xs font-semibold text-[#1F1612]">
                    {getLocalized(option.title)}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {option.choices.map((choice, choiceIdx) => {
                      const isSelected = (selectedOptions[optIdx] ?? 0) === choiceIdx;
                      return (
                        <button
                          key={choiceIdx}
                          type="button"
                          onClick={() => setSelectedOptions(prev => ({ ...prev, [optIdx]: choiceIdx }))}
                          className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-medium border transition-all text-left ${
                            isSelected
                              ? 'bg-[#FBF0E9] border-[#C46835] text-[#C46835] font-bold'
                              : 'bg-[#FAF7F2] border-[#E8DFD5] text-[#4A3B32] hover:border-[#DDD3C7]'
                          }`}
                        >
                          <span>{getLocalized(choice.name)}</span>
                          {choice.priceDiff ? (
                            <span className="text-[11px] text-[#8C7A6E]">
                              +{choice.priceDiff} {product.currency}
                            </span>
                          ) : (
                            <span className="text-[11px] text-[#52796F]">Dahil</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Ingredients Section */}
          {ingredients && ingredients.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold text-[#8C7A6E] uppercase tracking-wider flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-[#C46835]" />
                {t('ingredients')}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {ingredients.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#4A3B32] shadow-2xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Allergens Information */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-[#8C7A6E] uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-[#C46835]" />
              {t('allergens')}
            </h3>
            {allergens && allergens.length > 0 ? (
              <div className="p-3.5 rounded-2xl bg-[#FBF0E9] border border-[#E8C5B0] text-xs text-[#A85324] space-y-1">
                <p className="font-semibold">{allergens.join(' • ')}</p>
              </div>
            ) : (
              <div className="p-3.5 rounded-2xl bg-[#EFF5F3] border border-[#CFE1DC] text-xs text-[#355B51] font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#52796F]" />
                <span>{t('noAllergens')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar / Action */}
        <div className="p-4 bg-[#FAF7F2] border-t border-[#E8DFD5] sticky bottom-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-[#1F1612] hover:bg-[#34241C] text-[#FAF7F2] text-sm font-semibold transition-all active:scale-98"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};
