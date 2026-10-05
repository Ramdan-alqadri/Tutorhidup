import React from 'react';
import { Compass, BookOpen } from 'lucide-react';

interface FloatingMenuButtonProps {
  onClick: () => void;
  currentChapterNum: number;
}

export const FloatingMenuButton: React.FC<FloatingMenuButtonProps> = ({
  onClick,
  currentChapterNum,
}) => {
  return (
    <div className="fixed sm:absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 pointer-events-auto">
      <button
        onClick={onClick}
        aria-label="Buka Daftar Bab Panduan"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#084CAC] hover:bg-[#073c87] text-white shadow-xl hover:shadow-2xl border-2 border-white/60 active:scale-95 transition-all duration-200 cursor-pointer group"
      >
        <div className="p-1 rounded-full bg-white/20 text-white">
          <BookOpen size={16} />
        </div>
        <span className="text-xs font-bold tracking-wide pr-1">
          Daftar Bab
        </span>
        <span className="w-5 h-5 rounded-full bg-white text-[#084CAC] text-[10px] font-extrabold flex items-center justify-center shadow-xs">
          0{currentChapterNum}
        </span>
      </button>
    </div>
  );
};
