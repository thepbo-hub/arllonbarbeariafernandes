import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-[#1E4FA3]/95 text-white border border-white/30 shadow-[0_10px_25px_rgba(0,0,0,0.5)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200"
    >
      <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center text-[#0A1F44] font-bold text-xs shadow-sm">
        ✓
      </div>
      <span className="text-sm font-semibold tracking-wide text-white">{message}</span>
    </div>
  );
};
