'use client';

import React, { useState } from 'react';
import { CafeConfig, Category, Product } from '@/types';
import { Navbar } from '../common/Navbar';
import { HeroSection } from './HeroSection';
import { MenuSection } from '../menu/MenuSection';
import { WifiModal } from '../wifi/WifiModal';
import { ServiceModal } from '../modals/ServiceModal';
import { Footer } from '../common/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, Coffee, Wifi, BellRing, Sparkles } from 'lucide-react';

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
  const { t } = useLanguage();
  const [currentView, setCurrentView] = useState<'welcome' | 'menu'>('welcome');
  const [isWifiOpen, setIsWifiOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const handleOpenWifi = () => {
    // Detect iOS to trigger profile download immediately if Apple device
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        // Trigger Apple profile prompt
        window.location.href = '/api/wifi-profile';
      }
    }
    setIsWifiOpen(true);
  };

  const handleViewMenu = () => {
    setCurrentView('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToWelcome = () => {
    setCurrentView('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F1612] flex flex-col selection:bg-[#FBF0E9] selection:text-[#C46835]">
      {/* Sticky Header */}
      <Navbar
        cafeConfig={cafeConfig}
        tableId={tableId}
        onOpenWifi={handleOpenWifi}
        onOpenService={() => setIsServiceOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentView === 'welcome' ? (
          /* STEP 1: Dedicated Full Welcome Screen */
          <div className="flex flex-col justify-center min-h-[calc(100vh-3.5rem)] animate-fade-in">
            <HeroSection
              cafeConfig={cafeConfig}
              tableId={tableId}
              onViewMenuClick={handleViewMenu}
              onOpenWifiClick={handleOpenWifi}
            />
          </div>
        ) : (
          /* STEP 2: Dedicated Digital Menu Screen */
          <div className="animate-fade-in py-4">
            {/* Top Navigation Bar inside Menu */}
            <div className="max-w-4xl mx-auto px-4 mb-3 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBackToWelcome}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFD5] text-[#1F1612] hover:bg-[#F3ECE2] transition-all text-xs font-bold shadow-xs active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#C46835]" />
                <span>{t('backToWelcome')}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleOpenWifi}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBF0E9] border border-[#E8C5B0] text-[#A85324] text-xs font-bold shadow-xs hover:bg-[#F5E2D5] active:scale-95 transition-all"
                >
                  <Wifi className="w-3.5 h-3.5 text-[#C46835]" />
                  <span>Wi-Fi</span>
                </button>
              </div>
            </div>

            {/* Menu List & Category Browser */}
            <MenuSection
              categories={categories}
              products={products}
              cafeConfig={cafeConfig}
              tableId={tableId}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        cafeConfig={cafeConfig}
        onOpenWifi={handleOpenWifi}
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
