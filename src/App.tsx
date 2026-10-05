import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CHAPTERS, CANVA_LINKS, PUR_INVENTORY_URL } from './data/guidebookData';
import { ChapterMeta } from './types';
import { ChapterHeader } from './components/ChapterHeader';
import { MenuDrawer } from './components/MenuDrawer';
import { FloatingMenuButton } from './components/FloatingMenuButton';
import { Chapter1Beranda } from './components/chapters/Chapter1Beranda';
import { Chapter2TentangUnit } from './components/chapters/Chapter2TentangUnit';
import { Chapter3DenahLokasi } from './components/chapters/Chapter3DenahLokasi';
import { Chapter4Pekerjaan } from './components/chapters/Chapter4Pekerjaan';
import { Chapter5Kedinasan } from './components/chapters/Chapter5Kedinasan';
import { Chapter6Istilah } from './components/chapters/Chapter6Istilah';
import { Chapter7Tips } from './components/chapters/Chapter7Tips';
import {
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Keyboard,
  Compass,
  MapPin,
  Boxes,
} from 'lucide-react';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDesktopExpanded, setIsDesktopExpanded] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Touch gesture state for Instagram Story swipe
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);

  const currentChapter: ChapterMeta = CHAPTERS[currentIndex] || CHAPTERS[0];
  const isCover = currentIndex === 0;

  // Sync hash on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const foundIdx = CHAPTERS.findIndex((c) => c.hash === hash);
      if (foundIdx !== -1 && foundIdx !== currentIndex) {
        setSlideDirection(foundIdx > currentIndex ? 'next' : 'prev');
        setCurrentIndex(foundIdx);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentIndex]);

  // Navigate to specific chapter with directional slide transition
  const goToChapter = useCallback((index: number) => {
    const targetIdx = Math.max(0, Math.min(CHAPTERS.length - 1, index));
    if (targetIdx === currentIndex) return;

    setSlideDirection(targetIdx > currentIndex ? 'next' : 'prev');
    setCurrentIndex(targetIdx);
    window.location.hash = CHAPTERS[targetIdx].hash;

    // Reset scroll to top
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        goToChapter(currentIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToChapter(currentIndex - 1);
      } else if (e.key === 'Escape') {
        setIsMenuOpen(false);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToChapter(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, goToChapter]);

  // Touch handlers for horizontal swipe (Instagram Story experience)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    isSwiping.current = true;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    isSwiping.current = false;

    const deltaX = touchEndX.current - touchStartX.current;
    const deltaY = touchEndY.current - touchStartY.current;

    // Must be predominantly horizontal gesture to avoid fighting vertical scroll
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        // Swiped Left -> Next Chapter / Story
        if (currentIndex < CHAPTERS.length - 1) {
          goToChapter(currentIndex + 1);
        }
      } else {
        // Swiped Right -> Previous Chapter / Story
        if (currentIndex > 0) {
          goToChapter(currentIndex - 1);
        }
      }
    }
  };

  // Render chapter content based on index
  const renderChapterContent = () => {
    switch (currentIndex) {
      case 0:
        return <Chapter1Beranda onStart={() => goToChapter(1)} />;
      case 1:
        return <Chapter2TentangUnit />;
      case 2:
        return <Chapter3DenahLokasi />;
      case 3:
        return <Chapter4Pekerjaan />;
      case 4:
        return <Chapter5Kedinasan />;
      case 5:
        return <Chapter6Istilah />;
      case 6:
        return <Chapter7Tips onGoHome={() => goToChapter(0)} />;
      default:
        return <Chapter1Beranda onStart={() => goToChapter(1)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#06152B] flex flex-col items-center justify-center p-0 md:p-4 lg:p-6 select-none font-sans">
      {/* Desktop Wrapper Layout */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center gap-8">
        
        {/* Left Desktop Sidebar / Companion Panel (Visible on Desktop) */}
        <div className="hidden lg:flex flex-col w-80 bg-[#0A2244] border border-blue-900/50 rounded-3xl p-6 text-white shadow-2xl h-[860px] justify-between">
          <div>
            {/* Header info with Official App Logo */}
            <div className="mb-6 flex items-center gap-3.5">
              <img
                src="/app_logo.jpg"
                alt="Logo Tutorial Hidup di PUR"
                className="w-14 h-14 rounded-2xl object-contain bg-white/10 p-1 border border-white/20 shadow-md shrink-0"
              />
              <div>
                <span className="text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 inline-block">
                  Guidebook PUR
                </span>
                <h1 className="text-base font-extrabold text-white mt-1 leading-snug">
                  Tutorial Hidup di Unit PUR
                </h1>
                <p className="text-[11px] text-blue-200/80">
                  KPw BI Sulawesi Selatan
                </p>
              </div>
            </div>

            {/* Chapter Table of Contents */}
            <div className="space-y-1.5 mb-6">
              <span className="text-[11px] font-semibold text-blue-300/70 uppercase tracking-wider block px-1 mb-2">
                Daftar Bab (Story)
              </span>
              {CHAPTERS.map((ch, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={ch.id}
                    onClick={() => goToChapter(idx)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#084CAC] text-white shadow-md font-bold'
                        : 'text-blue-100 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                        isActive ? 'bg-white text-[#084CAC]' : 'bg-blue-950 text-blue-300'
                      }`}>
                        {ch.number}
                      </span>
                      <span className="truncate">{ch.title}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Desktop Companion Links & Shortcuts */}
          <div className="pt-4 border-t border-blue-900/60 space-y-3 text-xs text-blue-200">
            <div className="flex items-center gap-2 text-slate-300">
              <Keyboard size={15} className="text-blue-400" />
              <span>Gunakan keyboard <kbd className="px-1.5 py-0.5 rounded bg-blue-950 border border-blue-800 text-[10px] text-white">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-blue-950 border border-blue-800 text-[10px] text-white">→</kbd> untuk swipe</span>
            </div>

            <div className="p-3 rounded-2xl bg-blue-950/60 border border-blue-900/80">
              <span className="text-[11px] font-bold text-white block mb-1">
                Denah Ruangan Terkini
              </span>
              <button
                onClick={() => goToChapter(2)}
                className="flex items-center justify-between text-xs text-blue-300 hover:text-white transition-colors w-full cursor-pointer text-left"
              >
                <span>Lihat Front & Back Office</span>
                <MapPin size={13} />
              </button>
            </div>

            <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-950 to-blue-900/90 border border-blue-700/50">
              <span className="text-[11px] font-bold text-blue-200 block mb-1">
                Sistem Terpadu
              </span>
              <a
                href={PUR_INVENTORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs text-white hover:text-blue-200 transition-colors w-full cursor-pointer font-semibold"
              >
                <span className="flex items-center gap-1.5 truncate">
                  <Boxes size={14} className="text-blue-400 shrink-0" />
                  <span className="truncate">PUR Inventory Web</span>
                </span>
                <ExternalLink size={12} className="shrink-0 text-blue-300" />
              </a>
            </div>

            <div className="text-[11px] text-blue-400/80 text-center">
              presented by PUR TW3 @Ramdan
            </div>
          </div>
        </div>

        {/* Center: Mobile Instagram Story Phone Viewport */}
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className={`relative w-full ${
            isDesktopExpanded ? 'max-w-2xl' : 'max-w-[420px]'
          } h-[100dvh] md:h-[860px] md:max-h-[92vh] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col border-0 md:border-8 md:border-slate-800/80 transition-all duration-300`}
          style={{
            backgroundColor: isCover ? '#084CAC' : '#FFFFFF',
          }}
        >
          {/* Header Progress & Story Controls */}
          <ChapterHeader
            currentChapter={currentChapter}
            allChapters={CHAPTERS}
            currentIndex={currentIndex}
            onSelectChapter={goToChapter}
            isCover={isCover}
          />

          {/* Scrollable Story Content Area with Story Slide Animation */}
          <main
            ref={scrollContainerRef}
            key={currentIndex}
            className="flex-1 overflow-y-auto overscroll-contain custom-scrollbar select-text transition-all duration-300 ease-out animate-in fade-in"
            style={{
              animationDuration: '240ms',
            }}
          >
            {renderChapterContent()}
          </main>


          {/* FLOATING GUIDEBOOK MENU BUTTON AT BOTTOM-RIGHT */}
          <FloatingMenuButton
            onClick={() => setIsMenuOpen(true)}
            currentChapterNum={currentChapter.number}
          />

          {/* Mobile Bottom Swipe Indicator Overlay */}
          <div className="pointer-events-none absolute bottom-1.5 left-0 right-0 flex justify-center pb-1">
            <div
              className="w-28 h-1 rounded-full transition-opacity duration-300 opacity-40"
              style={{ backgroundColor: isCover ? '#FFFFFF' : '#102C54' }}
            />
          </div>
        </div>

        {/* Right Desktop Info & View Controls */}
        <div className="hidden xl:flex flex-col w-64 bg-[#0A2244]/80 border border-blue-900/40 rounded-3xl p-5 text-white shadow-xl h-[860px] justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-blue-900/50">
              <span className="text-xs font-bold text-blue-200">Mode Layar</span>
              <button
                onClick={() => setIsDesktopExpanded(!isDesktopExpanded)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 text-xs font-medium cursor-pointer transition-colors"
                title="Perlebar frame tampilan"
              >
                {isDesktopExpanded ? (
                  <>
                    <Minimize2 size={13} />
                    <span>Kompak</span>
                  </>
                ) : (
                  <>
                    <Maximize2 size={13} />
                    <span>Lebar</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-blue-950/60 border border-blue-900/60 space-y-2">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Compass size={14} className="text-blue-400" />
                <span>Navigasi Instagram Story</span>
              </span>
              <p className="text-xs text-blue-200/90 leading-relaxed">
                Di layar sentuh, <strong>swipe kiri</strong> untuk bab berikutnya dan <strong>swipe kanan</strong> untuk bab sebelumnya. Tombol <strong>Daftar Bab</strong> mengambang di pojok kanan bawah.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-blue-950/60 border border-blue-900/60 space-y-2">
              <span className="text-xs font-bold text-white block">
                Palet Warna Panduan
              </span>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#084CAC] border border-white/20 inline-block" />
                  <span className="text-slate-300">#084CAC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#EDF4FF] border border-white/20 inline-block" />
                  <span className="text-slate-300">#EDF4FF</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#102C54] border border-white/20 inline-block" />
                  <span className="text-slate-300">#102C54</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-white border border-white/20 inline-block" />
                  <span className="text-slate-300">#FFFFFF</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#084CAC]/20 border border-[#084CAC]/40 text-center">
            <span className="text-[11px] font-medium text-blue-300 block">
              Unit PUR 2026
            </span>
            <span className="text-xs font-bold text-white">
              KPw BI Sulsel
            </span>
          </div>
        </div>
      </div>

      {/* Menu Drawer Component */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        chapters={CHAPTERS}
        currentIndex={currentIndex}
        onSelectChapter={goToChapter}
      />
    </div>
  );
}
