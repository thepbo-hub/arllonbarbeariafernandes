import React, { useEffect, useState } from 'react';
import { CONFIG } from '../config';

interface CookieBannerProps {
  onOpenCookiesPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenCookiesPolicy }) => {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('af_cookie_consent');
      if (stored === 'accepted' || stored === 'rejected') {
        setConsentGiven(true);
      } else {
        setConsentGiven(false);
      }
    } catch {
      setConsentGiven(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('af_cookie_consent', 'accepted');
      localStorage.setItem('af_cookie_consent_date', new Date().toISOString());
    } catch {
      // Ignored
    }
    setConsentGiven(true);
  };

  const handleReject = () => {
    try {
      localStorage.setItem('af_cookie_consent', 'rejected');
      localStorage.setItem('af_cookie_consent_date', new Date().toISOString());
    } catch {
      // Ignored
    }
    setConsentGiven(true);
  };

  // Do not render if consent has already been made or checking
  if (consentGiven !== false) {
    return null;
  }

  return (
    <aside
      role="region"
      aria-label="Aviso de Privacidade e Cookies"
      className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:max-w-md z-50 p-4 sm:p-5 rounded-2xl bg-[#091733]/98 border-2 border-cyan-400/40 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(0,210,255,0.25)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300 text-white"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300 mt-0.5" aria-hidden="true">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <div className="space-y-2 text-left">
          <h2 className="text-xs sm:text-sm font-bold font-mono tracking-wide text-cyan-300 uppercase">
            Privacidade & Cookies (LGPD)
          </h2>
          <p className="text-xs text-[#C9CED6] leading-relaxed">
            Utilizamos apenas cookies essenciais para garantir o funcionamento técnico e a segurança deste biosite. Nenhum dado de rastreamento publicitário ou identificador comportamental é carregado sem sua escolha expressa.
          </p>
          <div className="pt-0.5">
            <button
              type="button"
              onClick={onOpenCookiesPolicy}
              className="text-xs text-cyan-300 hover:text-white underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded"
            >
              Consultar Política de Cookies
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2.5 mt-4 pt-3 border-t border-cyan-400/20">
        <button
          type="button"
          onClick={handleReject}
          className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 text-[#C9CED6] hover:text-white border border-white/20 text-xs font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Recusar cookies não essenciais"
        >
          Recusar todos
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-95 text-[#050B17] font-bold text-xs tracking-wide shadow-[0_0_12px_rgba(0,210,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Aceitar cookies essenciais e termos"
        >
          Aceitar
        </button>
      </div>
    </aside>
  );
};
