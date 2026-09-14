'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { TableBadge } from './TableBadge';
import { LanguageToggle } from './LanguageToggle';
import { CafeConfig } from '@/types';
import { Wifi, Coffee, BellRing } from 'lucide-react';

interface NavbarProps {
  cafeConfig: CafeConfig;
  tableId?: string | null;
  onOpenWifi: () => void;
  onOpenService?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cafeConfig,
  tableId,
  onOpenWifi,
  onOpenService
}) => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8DFD5] transition-all">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
        {/* Left: Brand Identity */}
        <Link 
          href={tableId ? `/table/${tableId}` : '/'}
          className="flex items-center gap-2.5 text-[#1F1612] hover:opacity-85 transition-opacity"
        >
          <div className="w-8 h-8 rounded-xl bg-[#1F1612] text-[#FAF7F2] flex items-center justify-center shadow-xs">
            <Coffee className="w-4 h-4 text-[#DDA15E]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-tight leading-none text-[#1F1612]">
              {cafeConfig.name}
            </span>
            <span className="text-[10px] text-[#8C7A6E] font-medium tracking-wide">
              {cafeConfig.shortName} Roastery
            </span>
          </div>
        </Link>

        {/* Center: Table Badge if at a specific table */}
        <div className="hidden xs:flex items-center">
          <TableBadge tableId={tableId} size="sm" />
        </div>

        {/* Right: Actions (Wi-Fi, Service, Language Toggle) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Wi-Fi Button */}
          <button
            type="button"
            onClick={onOpenWifi}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#F3ECE2] border border-[#E8DFD5] text-[#1F1612] hover:bg-[#EAE0D3] active:scale-95 transition-all text-xs font-semibold"
            title={t('connectWifi')}
          >
            <Wifi className="w-3.5 h-3.5 text-[#C46835]" />
            <span className="hidden sm:inline">Wi-Fi</span>
          </button>

          {/* Quick Service Button */}
          {onOpenService && (
            <button
              type="button"
              onClick={onOpenService}
              className="p-1.5 rounded-full bg-[#F3ECE2] border border-[#E8DFD5] text-[#6B5E55] hover:text-[#1F1612] hover:bg-[#EAE0D3] active:scale-95 transition-all"
              title={t('callWaiter')}
            >
              <BellRing className="w-4 h-4 text-[#DDA15E]" />
            </button>
          )}

          {/* Language Switcher */}
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};
