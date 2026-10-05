import React from 'react';
import { Building2, Sparkles, ChevronRight } from 'lucide-react';
import coverImg from '@/src/assets/images/cover_web.jpg';

interface Chapter1BerandaProps {
  onStart: () => void;
}

export const Chapter1Beranda: React.FC<Chapter1BerandaProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col min-h-full justify-between items-center text-center px-3 py-3 select-none pb-20">
      {/* Top Organization Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-xs mb-2">
        <Building2 size={13} className="text-blue-200" />
        <span>KPw BI Sulawesi Selatan</span>
      </div>

      {/* Main Cover Visual matching uploaded official artwork */}
      <div className="relative w-full max-w-[360px] my-auto flex flex-col items-center">
        {/* Ambient glow in background */}
        <div className="absolute inset-0 bg-blue-400/25 blur-2xl rounded-3xl -z-10 pointer-events-none" />

        <div className="w-full overflow-hidden rounded-3xl border-2 border-white/25 shadow-2xl bg-[#004ecc] transition-transform duration-300">
          <img
            src={coverImg}
            alt="Cover Tutorial Hidup di Unit PUR - presented by PUR TW3 @Ramdan"
            className="w-full h-auto object-cover block aspect-[9/16]"
            loading="eager"
          />
        </div>
      </div>

    </div>
  );
};
