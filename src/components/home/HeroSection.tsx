'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CafeConfig } from '@/types';
import { 
  Coffee, 
  Wifi, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

interface HeroSectionProps {
  cafeConfig: CafeConfig;
  tableId?: string | null;
  onViewMenuClick: () => void;
  onOpenWifiClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  cafeConfig,
  tableId,
  onViewMenuClick,
  onOpenWifiClick
}) => {
  const { t, getLocalized } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-2 pb-6 px-4 w-full">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-72 bg-gradient-to-b from-[#F3ECE2] via-[#FAF7F2] to-transparent -z-10 rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-xl mx-auto space-y-5 text-center">
        
        {/* Top Badges & Context */}
        <div className="flex flex-col items-center gap-3">
          {tableId ? (
            <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0E9] border border-[#E8C5B0] text-[#A85324] text-xs font-bold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C46835] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C46835]"></span>
              </span>
              <span>{t('tableDetected')}:</span>
              <span className="underline underline-offset-2 decoration-[#C46835] font-extrabold">
                {t('table')} {tableId}
              </span>
            </div>
          ) : (
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#F3ECE2] border border-[#E8DFD5] text-[#8C7A6E] text-xs font-semibold">
              <span>{t('poweredBy')}</span>
            </div>
          )}
        </div>

        {/* Cafe Logo & Brand Branding */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#1F1612] text-[#FAF7F2] flex items-center justify-center shadow-lg border-2 border-[#E8DFD5] transform hover:rotate-3 transition-transform">
            <Coffee className="w-8 h-8 sm:w-10 sm:h-10 text-[#DDA15E]" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-black text-[#1F1612] tracking-tight">
            {cafeConfig.name}
          </h1>
          
          <p className="text-xs sm:text-sm font-medium text-[#C46835] uppercase tracking-wider">
            {getLocalized(cafeConfig.tagline)}
          </p>
        </div>

        {/* Hero Card Container */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#E8DFD5] shadow-soft space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F1612]">
              {t('welcomeTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed max-w-md mx-auto">
              {t('welcomeSubtitle')}
            </p>
          </div>

          {/* Primary & Secondary Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Primary Action: Menüyü Gör */}
            <button
              type="button"
              onClick={onViewMenuClick}
              className="w-full py-4 px-6 rounded-2xl bg-[#1F1612] hover:bg-[#34241C] text-[#FAF7F2] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98 group"
            >
              <Coffee className="w-5 h-5 text-[#DDA15E] group-hover:scale-110 transition-transform" />
              <span>{t('viewMenu')}</span>
              <ArrowRight className="w-4 h-4 text-[#DDA15E] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Action: Wi-Fi'ye Bağlan */}
            <button
              type="button"
              onClick={onOpenWifiClick}
              className="w-full py-4 px-6 rounded-2xl bg-[#FBF0E9] hover:bg-[#F5E2D5] border border-[#E8C5B0] text-[#A85324] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all active:scale-98 shadow-xs"
            >
              <Wifi className="w-5 h-5 text-[#C46835]" />
              <span>{t('connectWifi')}</span>
            </button>
          </div>
        </div>

        {/* Prominent High-End Instagram Showcase Card */}
        <div className="pt-1">
          <a
            href={`https://instagram.com/${cafeConfig.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-[#1F1612] via-[#2C1E18] to-[#1F1612] p-4 text-white shadow-md border border-[#E8DFD5] transition-all hover:shadow-lg active:scale-[0.99]"
          >
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-gradient-to-br from-[#E1306C]/40 to-[#FD1D1D]/20 rounded-full blur-xl pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-[#DDA15E] uppercase tracking-wider">
                    Instagram'da Bizi Takip Edin
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-[#FAF7F2]">
                    @{cafeConfig.instagram}
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-xs font-bold text-white shadow-sm shrink-0 group-hover:opacity-90 transition-opacity">
                <span>{t('followUs')}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
