'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '@/context/LanguageContext';
import { WifiConfig } from '@/types';
import { 
  Wifi, 
  Copy, 
  Check, 
  X, 
  QrCode, 
  Smartphone, 
  Info,
  ShieldCheck,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface WifiModalProps {
  isOpen: boolean;
  onClose: () => void;
  wifiConfig: WifiConfig;
}

export const WifiModal: React.FC<WifiModalProps> = ({ isOpen, onClose, wifiConfig }) => {
  const { t, language } = useLanguage();
  const [copiedPassword, setCopiedPassword] = useState(false);
  const [copiedSSID, setCopiedSSID] = useState(false);
  const [activeTab, setActiveTab] = useState<'qr' | 'manual' | 'guide'>('qr');
  const [deviceTab, setDeviceTab] = useState<'ios' | 'android' | 'manual'>('ios');

  if (!isOpen) return null;

  // Format standard Wi-Fi URI format for camera barcode scanners:
  // WIFI:S:<SSID>;T:<WPA|WEP|nopass>;P:<PASSWORD>;H:<true|false>;;
  const wifiUri = `WIFI:S:${wifiConfig.ssid};T:${wifiConfig.securityType || 'WPA'};P:${wifiConfig.password};;`;

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(wifiConfig.password);
      setCopiedPassword(true);
      setTimeout(() => setCopiedPassword(false), 2500);
    } catch (e) {
      console.error('Failed to copy password', e);
    }
  };

  const handleCopySSID = async () => {
    try {
      await navigator.clipboard.writeText(wifiConfig.ssid);
      setCopiedSSID(true);
      setTimeout(() => setCopiedSSID(false), 2500);
    } catch (e) {
      console.error('Failed to copy SSID', e);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full sm:max-w-lg bg-[#FAF7F2] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#E8DFD5] max-h-[92vh] overflow-y-auto flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md px-6 py-4 border-b border-[#E8DFD5] flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FBF0E9] border border-[#E8C5B0] flex items-center justify-center text-[#C46835]">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1F1612] leading-tight">
                {t('wifiTitle')}
              </h2>
              <p className="text-xs text-[#6B5E55]">
                {t('wifiSubtitle')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#8C7A6E] hover:text-[#1F1612] hover:bg-[#EFE7DE] transition-colors"
            aria-label={t('close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Main Network Details Card */}
          <div className="bg-white rounded-2xl p-5 border border-[#E8DFD5] shadow-sm space-y-4">
            
            {/* SSID Row */}
            <div>
              <div className="text-[11px] font-semibold text-[#8C7A6E] uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>{t('wifiNetworkName')}</span>
                <span className="text-[10px] text-[#52796F] font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> WPA2 Fiber
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#F8F4EE] rounded-xl px-3.5 py-2.5 border border-[#E8DFD5]">
                <span className="font-bold text-[#1F1612] text-base tracking-wide select-all">
                  {wifiConfig.ssid}
                </span>
                <button
                  type="button"
                  onClick={handleCopySSID}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-[#DDD3C7] text-[#1F1612] hover:bg-[#F3ECE2] active:scale-95 transition-all shadow-xs"
                >
                  {copiedSSID ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-700">{t('wifiCopied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#6B5E55]" />
                      <span>{t('wifiCopySSID')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Password Row */}
            <div>
              <div className="text-[11px] font-semibold text-[#8C7A6E] uppercase tracking-wider mb-1">
                {t('wifiPassword')}
              </div>
              <div className="flex items-center justify-between bg-[#F8F4EE] rounded-xl px-3.5 py-2.5 border border-[#E8DFD5]">
                <span className="font-mono font-bold text-[#1F1612] text-base tracking-wide select-all">
                  {wifiConfig.password}
                </span>
                <button
                  type="button"
                  onClick={handleCopyPassword}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#C46835] text-white hover:bg-[#AF5828] active:scale-95 transition-all shadow-xs"
                >
                  {copiedPassword ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>{t('wifiCopied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white" />
                      <span>{t('wifiCopyPassword')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-white rounded-2xl p-5 border border-[#E8DFD5] shadow-sm text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF0E9] text-[#C46835] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {t('wifiQrTitle')}
            </div>
            
            <p className="text-xs text-[#6B5E55] max-w-xs mx-auto mb-4">
              {t('wifiQrDesc')}
            </p>

            <div className="inline-block p-4 bg-white rounded-2xl border-2 border-dashed border-[#DDD3C7] shadow-inner mb-3">
              <QRCodeSVG
                value={wifiUri}
                size={180}
                level="M"
                includeMargin={false}
                className="mx-auto rounded-lg"
              />
            </div>

            <div className="text-[11px] text-[#8C7A6E]">
              SSID: <span className="font-semibold text-[#1F1612]">{wifiConfig.ssid}</span>
            </div>
          </div>

          {/* Tabbed Step-by-Step Connection Instructions */}
          <div className="bg-[#F3ECE2] rounded-2xl p-5 border border-[#E8DFD5]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-[#1F1612] uppercase tracking-wider flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#C46835]" />
                {t('wifiHelpTitle')}
              </h3>
              
              {/* Device Tabs */}
              <div className="flex p-0.5 rounded-lg bg-white/70 border border-[#DDD3C7] text-[11px]">
                <button
                  type="button"
                  onClick={() => setDeviceTab('ios')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    deviceTab === 'ios'
                      ? 'bg-[#1F1612] text-white shadow-xs'
                      : 'text-[#6B5E55] hover:text-[#1F1612]'
                  }`}
                >
                  {t('wifiTabIos')}
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceTab('android')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    deviceTab === 'android'
                      ? 'bg-[#1F1612] text-white shadow-xs'
                      : 'text-[#6B5E55] hover:text-[#1F1612]'
                  }`}
                >
                  {t('wifiTabAndroid')}
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceTab('manual')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    deviceTab === 'manual'
                      ? 'bg-[#1F1612] text-white shadow-xs'
                      : 'text-[#6B5E55] hover:text-[#1F1612]'
                  }`}
                >
                  {t('wifiTabManual')}
                </button>
              </div>
            </div>

            {/* Instruction Steps */}
            <ol className="space-y-2 text-xs text-[#4A3B32]">
              {deviceTab === 'ios' && (
                <>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#C46835] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                    <span>{t('wifiIosStep1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#C46835] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                    <span>{t('wifiIosStep2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#C46835] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                    <span>{t('wifiIosStep3')}</span>
                  </li>
                </>
              )}

              {deviceTab === 'android' && (
                <>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#C46835] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                    <span>{t('wifiAndroidStep1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#C46835] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                    <span>{t('wifiAndroidStep2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#C46835] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                    <span>{t('wifiAndroidStep3')}</span>
                  </li>
                </>
              )}

              {deviceTab === 'manual' && (
                <>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#C46835] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                    <span>{t('wifiManualStep1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#C46835] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                    <span>{t('wifiManualStep2', { ssid: wifiConfig.ssid })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#C46835] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                    <span>{t('wifiManualStep3', { password: wifiConfig.password })}</span>
                  </li>
                </>
              )}
            </ol>
          </div>

          {/* Honest Technical Disclaimer */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F0E7DD]/70 border border-[#E2D5C7] text-[11px] text-[#6B5E55] leading-relaxed">
            <Info className="w-4 h-4 text-[#8C7A6E] shrink-0 mt-0.5" />
            <p>{t('wifiHonestDisclaimer')}</p>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-4 bg-[#FAF7F2] border-t border-[#E8DFD5] sticky bottom-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-[#1F1612] hover:bg-[#34241C] text-[#FAF7F2] text-sm font-semibold transition-all active:scale-98"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};
