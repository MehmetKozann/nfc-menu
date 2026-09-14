'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin } from 'lucide-react';

interface TableBadgeProps {
  tableId?: string | null;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TableBadge: React.FC<TableBadgeProps> = ({ tableId, className = '', size = 'md' }) => {
  const { t } = useLanguage();

  if (!tableId) {
    return null;
  }

  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full border transition-all shadow-xs ${
        isSmall
          ? 'px-2.5 py-0.5 text-xs bg-[#FBF0E9] border-[#E8C5B0] text-[#C46835]'
          : isLarge
          ? 'px-4 py-1.5 text-sm bg-[#FBF0E9] border-[#E8C5B0] text-[#A85324] font-semibold'
          : 'px-3 py-1 text-xs bg-[#FBF0E9] border-[#E8C5B0] text-[#C46835] font-medium'
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C46835] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C46835]"></span>
      </span>
      <MapPin className={`${isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-[#C46835]`} />
      <span>
        {t('table')} <strong className="font-bold">{tableId}</strong>
      </span>
    </div>
  );
};
