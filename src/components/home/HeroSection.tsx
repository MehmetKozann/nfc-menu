'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CafeConfig } from '@/types';
import { TableBadge } from '../common/TableBadge';
import { LanguageToggle } from '../common/LanguageToggle';
import { 
  Coffee, 
  Wifi, 
  Sparkles, 
  Clock, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Flame,
  ChevronDown
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
    <section className="relative overflow-hidden pt-4 pb-8 px-4">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-72 bg-gradient-to-b from-[#F3ECE2] via-[#FAF7F2] to-transparent -z-10 rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-xl mx-auto space-y-6 text-center">
        
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
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3ECE2] border border-[#E8DFD5] text-[#8C7A6E] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#DDA15E]" />
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
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#E8DFD5] shadow-soft space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F1612]">
              {t('welcomeTitle')}
            </h2>
            <p className="text-sm text-[#6B5E55] leading-relaxed max-w-md mx-auto">
              {t('welcomeSubtitle')}
            </p>
          </div>

          {/* Primary & Secondary Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
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

          {/* Quick Hours Note */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#8C7A6E]">
            <Clock className="w-3.5 h-3.5 text-[#C46835]" />
            <span>{getLocalized(cafeConfig.workingHours)}</span>
          </div>
        </div>

        {/* Scroll down prompt to menu */}
        <button
          type="button"
          onClick={onViewMenuClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C7A6E] hover:text-[#1F1612] transition-colors pt-1 animate-bounce"
        >
          <span>{t('viewMenu')}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
