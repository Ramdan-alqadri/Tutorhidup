import React from 'react';
import { X, CheckCircle, ExternalLink, BookOpen, Compass, Download, Boxes } from 'lucide-react';
import { ChapterMeta } from '../types';
import { CANVA_LINKS, PUR_INVENTORY_URL } from '../data/guidebookData';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  chapters: ChapterMeta[];
  currentIndex: number;
  onSelectChapter: (index: number) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  chapters,
  currentIndex,
  onSelectChapter,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[88vh] overflow-hidden animate-in slide-in-from-bottom duration-300">
        {/* Header with Official App Logo */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#EDF4FF]">
          <div className="flex items-center gap-3">
            <img
              src="/app_logo.jpg"
              alt="Logo Tutorial Hidup di PUR"
              className="w-11 h-11 rounded-xl object-contain border border-blue-100 shadow-xs"
            />
            <div>
              <h2 className="text-sm font-extrabold text-[#102C54] leading-tight">Daftar Bab Panduan</h2>
              <p className="text-[11px] font-semibold text-[#084CAC]">Tutorial Hidup di Unit PUR</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup Menu"
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chapters list */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 custom-scrollbar">
          {chapters.map((ch, idx) => {
            const isActive = idx === currentIndex;
            const isRead = idx < currentIndex;

            return (
              <button
                key={ch.id}
                onClick={() => {
                  onSelectChapter(idx);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#084CAC] text-white shadow-md'
                    : 'bg-[#EDF4FF]/60 hover:bg-[#EDF4FF] text-[#102C54]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-xl font-bold text-xs ${
                      isActive
                        ? 'bg-white text-[#084CAC]'
                        : 'bg-white text-[#084CAC] shadow-xs'
                    }`}
                  >
                    0{ch.number}
                  </span>
                  <div>
                    <h3 className={`font-semibold text-sm leading-tight ${isActive ? 'text-white' : 'text-[#102C54]'}`}>
                      {ch.title}
                    </h3>
                    <p className={`text-xs mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {ch.shortTitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  {isActive && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white">
                      Aktif
                    </span>
                  )}
                  {isRead && !isActive && (
                    <CheckCircle size={18} className="text-[#084CAC]/70" />
                  )}
                </div>
              </button>
            );
          })}

          {/* Quick links banner */}
          <div className="mt-4 pt-3 border-t border-[#EDF4FF]">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2 px-1">
              Template Resmi (Unit PUR)
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={CANVA_LINKS.kolaseRecap}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-[#102C54] transition-colors"
              >
                <span className="truncate font-medium">Template Kolase</span>
                <ExternalLink size={13} className="text-[#084CAC] shrink-0 ml-1" />
              </a>
              <a
                href="/documents/Formulir_Absensi_Magang_PUR_2026.docx"
                download="Formulir_Absensi_Magang_PUR_2026.docx"
                className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#084CAC] transition-colors cursor-pointer"
              >
                <span className="truncate font-bold">Template Absensi</span>
                <Download size={13} className="text-[#084CAC] shrink-0 ml-1" />
              </a>
            </div>

            {/* PUR Inventory Quick Link */}
            <div className="mt-2.5">
              <a
                href={PUR_INVENTORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-blue-900 to-[#084CAC] text-white text-xs font-bold hover:brightness-110 active:scale-98 transition-all shadow-xs"
              >
                <div className="flex items-center gap-2 truncate">
                  <Boxes size={15} className="text-blue-200 shrink-0" />
                  <span className="truncate">PUR Inventory Web App</span>
                </div>
                <ExternalLink size={13} className="text-blue-200 shrink-0 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-[#EDF4FF] bg-slate-50/80 flex items-center justify-between text-xs text-slate-500">
          <span>KPw BI Sulawesi Selatan</span>
          <span>PUR TW3 @Ramdan</span>
        </div>
      </div>
    </div>
  );
};
