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
  ExternalLink,
  Sparkles,
  SmartphoneNfc
} from 'lucide-react';

interface FooterProps {
  cafeConfig: CafeConfig;
  onOpenWifi?: () => void;
  compact?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ cafeConfig, onOpenWifi, compact = false }) => {
  const { t, getLocalized } = useLanguage();

  if (compact) {
    return (
      <footer className="py-4 px-4 border-t border-[#E8DFD5] bg-[#F3ECE2]/60">
        <div className="max-w-4xl mx-auto flex items-center justify-center text-xs text-[#8C7A6E]">
          <div>© {new Date().getFullYear()} {cafeConfig.name}. {t('allRightsReserved')}</div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-12 bg-[#F3ECE2] border-t border-[#E8DFD5] pt-12 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Prominent High-End Instagram CTA Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1F1612] to-[#34241C] p-6 sm:p-8 text-white shadow-md">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-gradient-to-br from-[#E1306C]/30 to-[#FD1D1D]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-[#DDA15E]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instagram Topluluğumuz</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#FAF7F2] tracking-tight">
                @{cafeConfig.instagram}
              </h3>
              <p className="text-xs sm:text-sm text-[#D5C3B3] max-w-md leading-relaxed">
                Günlük fırın lezzetlerimizi, özel kavrum kahve hikayelerimizi ve etkinliklerimizi Instagram'da takip edin.
              </p>
            </div>

            <a
              href={`https://instagram.com/${cafeConfig.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shrink-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Takip Et</span>
            </a>
          </div>
        </div>

        {/* Info Grid (Address, Phone, Hours) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Address Card */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DFD5] space-y-2">
            <div className="flex items-center gap-2 text-[#C46835]">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F1612]">
                {t('address')}
              </span>
            </div>
            <p className="text-xs text-[#6B5E55] leading-relaxed">
              {getLocalized(cafeConfig.address)}
            </p>
          </div>

          {/* Contact Card */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DFD5] space-y-2">
            <div className="flex items-center gap-2 text-[#C46835]">
              <Phone className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F1612]">
                İletişim &amp; Rezervasyon
              </span>
            </div>
            <a 
              href={`tel:${cafeConfig.phone}`} 
              className="inline-block text-sm font-bold text-[#1F1612] hover:text-[#C46835] transition-colors"
            >
              {cafeConfig.phone}
            </a>
          </div>

          {/* Hours Card */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DFD5] space-y-2">
            <div className="flex items-center gap-2 text-[#C46835]">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F1612]">
                {t('hours')}
              </span>
            </div>
            <p className="text-xs text-[#6B5E55] font-semibold">
              {getLocalized(cafeConfig.workingHours)}
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Language */}
        <div className="pt-4 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6E]">
          <div>© {new Date().getFullYear()} {cafeConfig.name}. {t('allRightsReserved')}</div>
          <LanguageToggle variant="pill" />
        </div>

      </div>
    </footer>
  );
};
