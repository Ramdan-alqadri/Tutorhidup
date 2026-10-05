import React from 'react';
import { Landmark, Info, Sparkles, BookOpenCheck, ShieldAlert } from 'lucide-react';

export const Chapter2TentangUnit: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full px-5 py-5 text-[#102C54]">
      {/* Chapter header */}
      <div className="mb-6">
        <span className="text-3xl font-extrabold text-[#084CAC] tracking-tight block">
          02
        </span>
        <h1 className="text-2xl font-extrabold text-[#084CAC] mt-1 leading-snug">
          Kenalan dengan PUR
        </h1>
      </div>

      {/* Main Identity Card */}
      <div className="p-5 rounded-2xl bg-[#EDF4FF] border border-[#084CAC]/15 shadow-xs mb-5 space-y-3">
        <div className="flex items-start gap-3.5">
          <div className="p-3 rounded-xl bg-[#084CAC] text-white shrink-0 mt-0.5 shadow-xs">
            <Landmark size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#084CAC] leading-tight">
              Pengelolaan Uang Rupiah
            </h2>
            <p className="text-sm font-semibold text-[#102C54]/80 mt-0.5">
              KPw Bank Indonesia Sulawesi Selatan
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-[#084CAC]/15 text-sm leading-relaxed text-[#102C54]">
          <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-[#084CAC] uppercase tracking-wider">
            <span>Identitas Unit</span>
          </div>
          <p className="text-base font-medium">
            <strong className="text-[#084CAC] font-bold">PUR</strong> adalah singkatan dari{' '}
            <strong className="font-semibold text-[#102C54]">Pengelolaan Uang Rupiah</strong>, divisi yang bertugas memastikan ketersediaan uang rupiah yang layak edar, aman, dan tepercaya di wilayah Sulawesi Selatan.
          </p>
        </div>
      </div>

      {/* Purpose Card */}
      <div className="p-5 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs mb-5">
        <div className="flex items-center gap-2.5 mb-2.5 text-[#084CAC]">
          <BookOpenCheck size={20} />
          <h3 className="font-bold text-base text-[#102C54]">Tujuan Buku Saku Ini</h3>
        </div>
        <p className="text-base leading-relaxed text-slate-700">
          Buku saku ini ditujukan untuk membantu peserta magang baru mengenali lingkungan kerja, alur tugas harian, etika operasional, dan kebiasaan sehari-hari di Divisi PUR agar masa adaptasi berjalan lancar dan nyaman.
        </p>
      </div>

      {/* Note regarding pending info */}
      <div className="p-4 rounded-2xl bg-[#EDF4FF]/70 border border-[#084CAC]/20 text-[#102C54] mt-auto">
        <div className="flex items-start gap-2.5">
          <Info size={18} className="text-[#084CAC] shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <p className="font-bold text-[#084CAC] mb-0.5">Catatan Informasi:</p>
            <p className="text-slate-600">
              Profil terperinci, fungsi unit, struktur tim, dan uraian peran resmi peserta magang akan ditambahkan saat informasi dokumen resmi tersedia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
