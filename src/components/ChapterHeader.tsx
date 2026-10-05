import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChapterMeta } from '../types';

interface ChapterHeaderProps {
  currentChapter: ChapterMeta;
  allChapters: ChapterMeta[];
  currentIndex: number;
  onSelectChapter: (index: number) => void;
  isCover: boolean;
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({
  currentChapter,
  allChapters,
  currentIndex,
  onSelectChapter,
  isCover,
}) => {
  return (
    <header
      className="sticky top-0 z-30 w-full px-4 pt-3 pb-2 transition-colors select-none backdrop-blur-md bg-opacity-95"
      style={{
        backgroundColor: isCover ? 'rgba(8, 76, 172, 0.96)' : 'rgba(255, 255, 255, 0.96)',
        borderBottom: isCover ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #EDF4FF',
      }}
    >
      {/* 7 Segment Story Progress Indicators */}
      <div className="flex items-center gap-1.5 w-full mb-2">
        {allChapters.map((ch, idx) => {
          const isActive = idx === currentIndex;
          const isPassed = idx < currentIndex;

          return (
            <button
              key={ch.id}
              onClick={() => onSelectChapter(idx)}
              aria-label={`Buka Bab ${ch.number}: ${ch.title}`}
              className="group relative flex-1 h-1.5 sm:h-2 rounded-full transition-all duration-200 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{
                backgroundColor: isCover
                  ? isActive
                    ? '#FFFFFF'
                    : isPassed
                    ? 'rgba(255, 255, 255, 0.6)'
                    : 'rgba(255, 255, 255, 0.25)'
                  : isActive
                  ? '#084CAC'
                  : isPassed
                  ? '#084CAC'
                  : '#D8E5F8',
                opacity: isPassed && !isCover ? 0.45 : 1,
              }}
            >
              <span className="sr-only">{ch.label}</span>
            </button>
          );
        })}
      </div>

      {/* Chapter Label and Story Navigation Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 min-w-0">
          <img
            src="/app_logo.jpg"
            alt="Logo"
            className="w-5 h-5 rounded-md object-contain shrink-0 shadow-xs"
          />
          <span
            className="text-xs sm:text-sm font-black tracking-wider uppercase px-2 py-0.5 rounded-full shrink-0"
            style={{
              backgroundColor: isCover ? 'rgba(255, 255, 255, 0.2)' : '#EDF4FF',
              color: isCover ? '#FFFFFF' : '#084CAC',
            }}
          >
            {currentChapter.label}
          </span>
          <span
            className="text-xs font-semibold truncate max-w-[190px]"
            style={{ color: isCover ? '#E2E8F0' : '#475569' }}
          >
            {currentChapter.title}
          </span>
        </div>

        {/* Quick previous & next controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => onSelectChapter(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            aria-label="Bab Sebelumnya (Swipe Kanan)"
            className="p-1.5 rounded-full transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer active:scale-95"
            style={{
              color: isCover ? '#FFFFFF' : '#102C54',
              backgroundColor: isCover ? 'rgba(255, 255, 255, 0.12)' : '#EDF4FF',
            }}
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={() => onSelectChapter(Math.min(allChapters.length - 1, currentIndex + 1))}
            disabled={currentIndex === allChapters.length - 1}
            aria-label="Bab Selanjutnya (Swipe Kiri)"
            className="p-1.5 rounded-full transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer active:scale-95"
            style={{
              color: isCover ? '#FFFFFF' : '#102C54',
              backgroundColor: isCover ? 'rgba(255, 255, 255, 0.12)' : '#EDF4FF',
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
