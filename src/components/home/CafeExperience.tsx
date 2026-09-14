'use client';

import React, { useState } from 'react';
import { CafeConfig, Category, Product } from '@/types';
import { Navbar } from '../common/Navbar';
import { HeroSection } from './HeroSection';
import { MenuSection } from '../menu/MenuSection';
import { WifiModal } from '../wifi/WifiModal';
import { ServiceModal } from '../modals/ServiceModal';
import { Footer } from '../common/Footer';

interface CafeExperienceProps {
  cafeConfig: CafeConfig;
  categories: Category[];
  products: Product[];
  tableId?: string | null;
}

export const CafeExperience: React.FC<CafeExperienceProps> = ({
  cafeConfig,
  categories,
  products,
  tableId
}) => {
  const [isWifiOpen, setIsWifiOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const handleScrollToMenu = () => {
    const menuEl = document.getElementById('menu-section');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F1612] flex flex-col selection:bg-[#FBF0E9] selection:text-[#C46835]">
      {/* Sticky Header */}
      <Navbar
        cafeConfig={cafeConfig}
        tableId={tableId}
        onOpenWifi={() => setIsWifiOpen(true)}
        onOpenService={() => setIsServiceOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Welcome / Landing Hero Section */}
        <HeroSection
          cafeConfig={cafeConfig}
          tableId={tableId}
          onViewMenuClick={handleScrollToMenu}
          onOpenWifiClick={() => setIsWifiOpen(true)}
        />

        {/* Digital Menu Section */}
        <MenuSection
          categories={categories}
          products={products}
          cafeConfig={cafeConfig}
          tableId={tableId}
        />
      </main>

      {/* Footer */}
      <Footer
        cafeConfig={cafeConfig}
        onOpenWifi={() => setIsWifiOpen(true)}
      />

      {/* Realistic Wi-Fi Modal */}
      <WifiModal
        isOpen={isWifiOpen}
        onClose={() => setIsWifiOpen(false)}
        wifiConfig={cafeConfig.wifi}
      />

      {/* Waiter / Table Service Modal */}
      <ServiceModal
        isOpen={isServiceOpen}
        onClose={() => setIsServiceOpen(false)}
        tableId={tableId}
      />
    </div>
  );
};
