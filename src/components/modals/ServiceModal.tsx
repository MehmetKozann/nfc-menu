'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import confetti from 'canvas-confetti';
import { 
  BellRing, 
  Receipt, 
  GlassWater, 
  CreditCard, 
  Banknote, 
  CheckCircle2, 
  X, 
  Smile
} from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  tableId?: string | null;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, tableId }) => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<'waiter' | 'bill' | 'water' | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'meal'>('card');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (type: 'waiter' | 'bill' | 'water') => {
    setSelectedService(type);
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#C46835', '#DDA15E', '#52796F']
      });
    } catch (e) {
      console.warn('Confetti error', e);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedService(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md bg-[#FAF7F2] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#E8DFD5] p-6 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD5] mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FBF0E9] text-[#C46835] flex items-center justify-center">
              <BellRing className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#1F1612]">
                {t('serviceTitle')}
              </h3>
              {tableId && (
                <span className="text-xs text-[#C46835] font-semibold">
                  {t('table')} {tableId}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#8C7A6E] hover:text-[#1F1612] hover:bg-[#EFE7DE]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EFF5F3] text-[#52796F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#1F1612]">
                {t('serviceRequestSent')}
              </h4>
              <p className="text-xs text-[#6B5E55] mt-1 max-w-xs mx-auto">
                {t('serviceRequestDesc')}
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-[#1F1612] text-white text-sm font-semibold hover:bg-[#34241C]"
            >
              {t('close')}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-xs text-[#6B5E55]">
              {t('serviceSubtitle')}
            </p>

            {/* Service Action Buttons */}
            <div className="grid grid-cols-1 gap-3">
              {/* Call Waiter */}
              <button
                type="button"
                onClick={() => handleSubmit('waiter')}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#C46835] text-left transition-all active:scale-98 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FBF0E9] text-[#C46835] flex items-center justify-center shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1F1612]">{t('callWaiter')}</div>
                  <div className="text-xs text-[#8C7A6E]">Masanıza bir garson arkadaşımız yönlendirilsin</div>
                </div>
              </button>

              {/* Request Bill */}
              <button
                type="button"
                onClick={() => handleSubmit('bill')}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#C46835] text-left transition-all active:scale-98 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FEF8ED] text-[#DDA15E] flex items-center justify-center shrink-0">
                  <Receipt className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1F1612]">{t('requestBill')}</div>
                  <div className="text-xs text-[#8C7A6E]">Hesap pusulanız masanıza getirilsin</div>
                </div>
              </button>

              {/* Request Water */}
              <button
                type="button"
                onClick={() => handleSubmit('water')}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#52796F] text-left transition-all active:scale-98 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFF5F3] text-[#52796F] flex items-center justify-center shrink-0">
                  <GlassWater className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1F1612]">{t('requestWater')}</div>
                  <div className="text-xs text-[#8C7A6E]">Masanıza taze bardak su ikramı</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
