'use client';

import React, { useState, useMemo } from 'react';
import { Category, Product, CafeConfig } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { CategoryBar } from './CategoryBar';
import { SearchBar } from './SearchBar';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from '../modals/ProductDetailModal';
import { DepartmentCard } from './DepartmentCard';
import { 
  Utensils, 
  Coffee,
  SearchX, 
  Sparkles, 
  Layers,
  ArrowLeft,
  LayoutGrid
} from 'lucide-react';

interface MenuSectionProps {
  categories: Category[];
  products: Product[];
  cafeConfig: CafeConfig;
  tableId?: string | null;
}

export type MenuDepartment = 'all' | 'food' | 'drinks' | 'hub';

export const MenuSection: React.FC<MenuSectionProps> = ({
  categories,
  products,
  cafeConfig,
  tableId
}) => {
  const { t, getLocalized, language } = useLanguage();
  // Start on 'hub' so user first sees the 2 visual department cards (Food & Drinks)
  const [activeDepartment, setActiveDepartment] = useState<MenuDepartment>('hub');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Split categories by department
  const foodCategories = useMemo(() => categories.filter(c => c.section === 'food' || !c.section), [categories]);
  const drinksCategories = useMemo(() => categories.filter(c => c.section === 'drinks'), [categories]);

  // Counts for department cards
  const foodCategoryIds = useMemo(() => new Set(foodCategories.map(c => c.id)), [foodCategories]);
  const drinksCategoryIds = useMemo(() => new Set(drinksCategories.map(c => c.id)), [drinksCategories]);

  const foodProductsCount = useMemo(() => products.filter(p => foodCategoryIds.has(p.categoryId)).length, [products, foodCategoryIds]);
  const drinksProductsCount = useMemo(() => products.filter(p => drinksCategoryIds.has(p.categoryId)).length, [products, drinksCategoryIds]);

  // Visible categories based on selected department
  const visibleCategories = useMemo(() => {
    if (activeDepartment === 'food') return foodCategories;
    if (activeDepartment === 'drinks') return drinksCategories;
    return categories;
  }, [activeDepartment, foodCategories, drinksCategories, categories]);

  // Filter products by department, category, and search query
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Department filter
      if (activeDepartment === 'food' && !foodCategoryIds.has(prod.categoryId)) {
        return false;
      }
      if (activeDepartment === 'drinks' && !drinksCategoryIds.has(prod.categoryId)) {
        return false;
      }

      // Category filter
      if (selectedCategoryId !== 'all' && prod.categoryId !== selectedCategoryId) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameMatch = (prod.name.tr?.toLowerCase().includes(query) || prod.name.en?.toLowerCase().includes(query));
        const descMatch = (prod.description.tr?.toLowerCase().includes(query) || prod.description.en?.toLowerCase().includes(query));
        const ingredientsMatch = (
          prod.ingredients?.tr?.some(i => i.toLowerCase().includes(query)) ||
          prod.ingredients?.en?.some(i => i.toLowerCase().includes(query))
        );
        return nameMatch || descMatch || ingredientsMatch;
      }

      return true;
    });
  }, [products, activeDepartment, selectedCategoryId, searchQuery, foodCategoryIds, drinksCategoryIds]);

  // Group products by category when in 'all' view with no search
  const groupedProducts = useMemo(() => {
    if (selectedCategoryId !== 'all' || searchQuery.trim() !== '') {
      return null;
    }

    const groups: { category: Category; items: Product[] }[] = [];
    visibleCategories.forEach((cat) => {
      const items = products.filter(p => p.categoryId === cat.id);
      if (items.length > 0) {
        groups.push({ category: cat, items });
      }
    });
    return groups;
  }, [visibleCategories, products, selectedCategoryId, searchQuery]);

  return (
    <section id="menu-section" className="w-full transition-all">
      {/* Search Input Bar */}
      <div className="max-w-4xl mx-auto px-4 pt-1 pb-3">
        <SearchBar
          value={searchQuery}
          onChange={(val) => {
            setSearchQuery(val);
            if (val.trim() !== '' && activeDepartment === 'hub') {
              setActiveDepartment('all');
            }
          }}
          onClear={() => setSearchQuery('')}
        />
      </div>

      {/* Main Department Segmented Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-3">
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#F3ECE2] border border-[#E8DFD5] shadow-inner text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              setActiveDepartment('hub');
              setSelectedCategoryId('all');
            }}
            className={`flex-1 py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeDepartment === 'hub'
                ? 'bg-[#1F1612] text-white shadow-xs'
                : 'text-[#6B5E55] hover:text-[#1F1612]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{language === 'tr' ? 'Bölümler' : 'Departments'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveDepartment('food');
              setSelectedCategoryId('all');
            }}
            className={`flex-1 py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeDepartment === 'food'
                ? 'bg-[#C46835] text-white shadow-xs'
                : 'text-[#6B5E55] hover:text-[#1F1612]'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>{t('foodMenu')}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveDepartment('drinks');
              setSelectedCategoryId('all');
            }}
            className={`flex-1 py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeDepartment === 'drinks'
                ? 'bg-[#C46835] text-white shadow-xs'
                : 'text-[#6B5E55] hover:text-[#1F1612]'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>{t('drinksMenu')}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveDepartment('all');
              setSelectedCategoryId('all');
            }}
            className={`hidden sm:flex py-2 px-3 rounded-xl items-center justify-center gap-1.5 transition-all ${
              activeDepartment === 'all'
                ? 'bg-[#1F1612] text-white shadow-xs'
                : 'text-[#6B5E55] hover:text-[#1F1612]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{t('allCategories')}</span>
          </button>
        </div>
      </div>

      {/* VIEW A: VISUAL DEPARTMENT HUB (2 Big Visual Cards for Food & Drinks) */}
      {activeDepartment === 'hub' && searchQuery.trim() === '' && (
        <div className="max-w-4xl mx-auto px-4 py-4 space-y-6 animate-fade-in">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-[#1F1612]">
              {t('selectDepartment')}
            </h2>
            <p className="text-xs text-[#6B5E55]">
              {t('menuSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1: Yiyecekler */}
            <DepartmentCard
              type="food"
              itemCount={foodProductsCount}
              categoryCount={foodCategories.length}
              onClick={() => {
                setActiveDepartment('food');
                setSelectedCategoryId('all');
              }}
            />

            {/* Card 2: İçecekler */}
            <DepartmentCard
              type="drinks"
              itemCount={drinksProductsCount}
              categoryCount={drinksCategories.length}
              onClick={() => {
                setActiveDepartment('drinks');
                setSelectedCategoryId('all');
              }}
            />
          </div>
        </div>
      )}

      {/* VIEW B: CATEGORIES & PRODUCT LISTING (When Food / Drinks / All is Selected or Searching) */}
      {(activeDepartment !== 'hub' || searchQuery.trim() !== '') && (
        <div className="animate-fade-in">
          {/* Sticky Category Bar for Subcategories */}
          <CategoryBar
            categories={visibleCategories}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={(id) => {
              setSelectedCategoryId(id);
              if (searchQuery) setSearchQuery('');
            }}
            sticky={true}
          />

          {/* Products Content Area */}
          <div className="max-w-4xl mx-auto px-4 py-6">
            
            {/* Context breadcrumb header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveDepartment('hub');
                    setSelectedCategoryId('all');
                  }}
                  className="text-xs text-[#C46835] hover:underline font-bold flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{language === 'tr' ? 'Tüm Bölümler' : 'All Departments'}</span>
                </button>
                <span className="text-xs text-[#8C7A6E]">•</span>
                <span className="text-xs font-bold text-[#1F1612]">
                  {activeDepartment === 'food' ? t('foodMenu') : activeDepartment === 'drinks' ? t('drinksMenu') : t('allCategories')}
                </span>
              </div>

              {searchQuery.trim() !== '' && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#C46835] hover:underline font-semibold"
                >
                  {t('resetSearch')}
                </button>
              )}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-16 text-center space-y-3 bg-white rounded-3xl border border-[#E8DFD5] p-8 shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-[#FBF0E9] text-[#C46835] flex items-center justify-center mx-auto">
                  <SearchX className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-base text-[#1F1612]">
                  {t('noProductsFound')}
                </h3>
                <p className="text-xs text-[#6B5E55] max-w-xs mx-auto">
                  {t('noProductsDesc')}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategoryId('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#1F1612] text-white text-xs font-semibold hover:bg-[#34241C]"
                >
                  {t('resetSearch')}
                </button>
              </div>
            )}

            {/* Grouped Products View */}
            {groupedProducts && groupedProducts.length > 0 && (
              <div className="space-y-10">
                {groupedProducts.map(({ category, items }) => (
                  <div key={category.id} className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center justify-between border-b border-[#E8DFD5] pb-2">
                      <div className="space-y-0.5">
                        <h2 className="text-lg sm:text-xl font-extrabold text-[#1F1612] tracking-tight">
                          {getLocalized(category.name)}
                        </h2>
                        {category.description && (
                          <p className="text-xs text-[#8C7A6E]">
                            {getLocalized(category.description)}
                          </p>
                        )}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F3ECE2] text-[#6B5E55]">
                        {items.length}
                      </span>
                    </div>

                    {/* Grid of Product Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {items.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onClick={setSelectedProduct}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Flat Product Grid (When specific subcategory selected or searching) */}
            {(!groupedProducts || groupedProducts.length === 0) && filteredProducts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={setSelectedProduct}
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
