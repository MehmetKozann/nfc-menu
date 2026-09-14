'use client';

import React, { useState, useMemo } from 'react';
import { Category, Product, CafeConfig } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { CategoryBar } from './CategoryBar';
import { SearchBar } from './SearchBar';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from '../modals/ProductDetailModal';
import { 
  Utensils, 
  SearchX, 
  Sparkles, 
  Flame,
  LayoutGrid
} from 'lucide-react';

interface MenuSectionProps {
  categories: Category[];
  products: Product[];
  cafeConfig: CafeConfig;
  tableId?: string | null;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  categories,
  products,
  cafeConfig,
  tableId
}) => {
  const { t, getLocalized, language } = useLanguage();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products by category and search term
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Category filter
      if (selectedCategoryId !== 'all' && prod.categoryId !== selectedCategoryId) {
        return false;
      }

      // Search filter
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
  }, [products, selectedCategoryId, searchQuery]);

  // Group products by category when in 'all' view with no search query
  const groupedProducts = useMemo(() => {
    if (selectedCategoryId !== 'all' || searchQuery.trim() !== '') {
      return null;
    }

    const groups: { category: Category; items: Product[] }[] = [];
    categories.forEach((cat) => {
      const items = products.filter(p => p.categoryId === cat.id);
      if (items.length > 0) {
        groups.push({ category: cat, items });
      }
    });
    return groups;
  }, [categories, products, selectedCategoryId, searchQuery]);

  return (
    <section id="menu-section" className="w-full transition-all">
      {/* Search Input Bar */}
      <div className="max-w-4xl mx-auto px-4 pt-2 pb-3">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />
      </div>

      {/* Sticky Category Navigation Bar */}
      <CategoryBar
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={(id) => {
          setSelectedCategoryId(id);
          // If searching, clear search when clicking another category
          if (searchQuery) setSearchQuery('');
        }}
        sticky={true}
      />

      {/* Product Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        
        {/* Search Results Context Notice */}
        {searchQuery.trim() !== '' && (
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs text-[#6B5E55]">
              {t('searchResultsFor')} <strong className="text-[#1F1612]">"{searchQuery}"</strong> ({filteredProducts.length})
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#C46835] hover:underline font-semibold"
            >
              {t('resetSearch')}
            </button>
          </div>
        )}

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

        {/* Grouped View (Default 'All' view with category section titles) */}
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

        {/* Filtered Grid (When category selected or searching) */}
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

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
