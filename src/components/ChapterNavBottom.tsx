import React from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface ChapterNavBottomProps {
  currentIndex: number;
  totalChapters: number;
  onPrev: () => void;
  onNext: () => void;
  onGoHome: () => void;
  isCover: boolean;
}

export const ChapterNavBottom: React.FC<ChapterNavBottomProps> = ({
  currentIndex,
  totalChapters,
  onPrev,
  onNext,
  onGoHome,
  isCover,
}) => {
  // Bab 1 (Beranda)
  if (currentIndex === 0) {
    return (
      <div className="sticky bottom-0 z-20 w-full px-4 pt-2 pb-4 safe-bottom backdrop-blur-md bg-gradient-to-t from-[#084CAC] to-transparent">
        <button
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-base shadow-lg transition-transform active:scale-98 cursor-pointer text-[#084CAC] bg-white hover:bg-slate-50"
        >
          <span>Mulai</span>
          <ChevronRight size={20} />
        </button>
      </div>
    );
  }

  // Bab 7 (Terakhir: Tips & Catatan Penting)
  if (currentIndex === totalChapters - 1) {
    return (
      <div className="sticky bottom-0 z-20 w-full px-4 pt-2 pb-4 safe-bottom backdrop-blur-md bg-white/95 border-t border-[#EDF4FF]">
        <div className="flex items-center gap-3">
          <button
            onClick={onPrev}
            className="flex-1 flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-xl font-semibold text-sm transition-all border border-[#084CAC]/20 text-[#084CAC] bg-[#EDF4FF] hover:bg-[#dbe7ff] active:scale-98 cursor-pointer"
          >
            <ChevronLeft size={18} />
            <span>Sebelumnya</span>
          </button>

          <button
            onClick={onGoHome}
            className="flex-[1.5] flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm text-white shadow-md transition-all active:scale-98 cursor-pointer bg-[#084CAC] hover:bg-[#073c87]"
          >
            <Home size={18} />
            <span>Kembali ke Beranda</span>
          </button>
        </div>
      </div>
    );
  }

  // Bab 2 sampai Bab 6
  return (
    <div className="sticky bottom-0 z-20 w-full px-4 pt-2 pb-4 safe-bottom backdrop-blur-md bg-white/95 border-t border-[#EDF4FF]">
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          className="flex-1 flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-xl font-semibold text-sm transition-all border border-[#084CAC]/20 text-[#084CAC] bg-[#EDF4FF] hover:bg-[#dbe7ff] active:scale-98 cursor-pointer"
        >
          <ChevronLeft size={18} />
          <span>Sebelumnya</span>
        </button>

        <button
          onClick={onNext}
          className="flex-1 flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-xl font-bold text-sm text-white shadow-md transition-all active:scale-98 cursor-pointer bg-[#084CAC] hover:bg-[#073c87]"
        >
          <span>Selanjutnya</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
