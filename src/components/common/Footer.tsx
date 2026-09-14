'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CafeConfig } from '@/types';
import { LanguageToggle } from './LanguageToggle';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Clock, 
  Wifi, 
  SmartphoneNfc,
  Heart
} from 'lucide-react';

interface FooterProps {
  cafeConfig: CafeConfig;
  onOpenWifi: () => void;
}

export const Footer: React.FC<FooterProps> = ({ cafeConfig, onOpenWifi }) => {
  const { t, getLocalized } = useLanguage();

  return (
    <footer className="mt-16 bg-[#F3ECE2] border-t border-[#E8DFD5] pt-10 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Brand & Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#1F1612]">
              <div className="w-7 h-7 rounded-lg bg-[#1F1612] text-[#FAF7F2] flex items-center justify-center">
                <Coffee className="w-3.5 h-3.5 text-[#DDA15E]" />
              </div>
              <span className="font-extrabold text-base tracking-tight">{cafeConfig.name}</span>
            </div>
            <p className="text-xs text-[#6B5E55] leading-relaxed">
              {getLocalized(cafeConfig.description)}
            </p>
          </div>

          {/* Contact & Address */}
          <div className="space-y-2.5 text-xs text-[#6B5E55]">
            <h4 className="font-bold text-[#1F1612] uppercase tracking-wider text-[11px]">
              {t('address')}
            </h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C46835] shrink-0 mt-0.5" />
              <span>{getLocalized(cafeConfig.address)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C46835] shrink-0" />
              <a href={`tel:${cafeConfig.phone}`} className="hover:text-[#1F1612] font-semibold">
                {cafeConfig.phone}
              </a>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-2.5 text-xs text-[#6B5E55]">
            <h4 className="font-bold text-[#1F1612] uppercase tracking-wider text-[11px]">
              {t('hours')}
            </h4>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#C46835] shrink-0 mt-0.5" />
              <span>{getLocalized(cafeConfig.workingHours)}</span>
            </div>
            <div className="pt-1">
              <a
                href={`https://instagram.com/${cafeConfig.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E8DFD5] text-[#1F1612] font-semibold hover:border-[#C46835] transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>@{cafeConfig.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        {/* NFC Reminder Banner */}
        <div className="p-4 rounded-2xl bg-white border border-[#E8DFD5] flex items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FBF0E9] text-[#C46835] flex items-center justify-center shrink-0">
              <SmartphoneNfc className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-[#1F1612]">{t('poweredBy')}</div>
              <div className="text-[#8C7A6E]">{t('tapAgainNote')}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenWifi}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#DDD3C7] text-xs font-bold text-[#1F1612] hover:bg-[#F3ECE2]"
          >
            {t('connectWifi')}
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6E]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {cafeConfig.name}. {t('allRightsReserved')}</span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle variant="pill" />
          </div>
        </div>
      </div>
    </footer>
  );
};
