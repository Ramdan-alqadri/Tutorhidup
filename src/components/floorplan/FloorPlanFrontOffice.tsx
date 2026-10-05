import React, { useState } from 'react';
import { Compass, Info, Check, User, Sparkles } from 'lucide-react';

interface DeskItem {
  id: string;
  name: string;
  role?: string;
  type?: 'desk' | 'room' | 'empty' | 'facility';
  note?: string;
}

export const FloorPlanFrontOffice: React.FC = () => {
  const [selectedDesk, setSelectedDesk] = useState<DeskItem | null>(null);

  const deskDetails: Record<string, DeskItem> = {
    'upal': {
      id: 'upal',
      name: 'Verifikasi UPAL',
      role: 'Area Pemeriksaan Uang Palsu',
      type: 'room',
      note: 'Meja verifikasi keaslian uang rupiah dan analisis UPAL.',
    },
    'frontliner': {
      id: 'frontliner',
      name: 'Frontliner',
      role: 'Layanan Nasabah / Tamu Eksternal',
      type: 'room',
      note: 'Meja penerimaan tamu dan loket layanan PUR.',
    },
    'gudang': {
      id: 'gudang',
      name: 'Gudang',
      role: 'Penyimpanan Logistik',
      type: 'room',
      note: 'Gudang penyimpanan perlengkapan unit PUR.',
    },
    'yazid': {
      id: 'yazid',
      name: 'Pak Yazid',
      role: 'Deputi Ka. Divisi',
      type: 'desk',
      note: 'Pegawai berjabatan: letakkan ex-food di meja samping dekat teko air, bukan di meja laptop!',
    },
    'andry-dj': {
      id: 'andry-dj',
      name: 'Pak Andry DJ',
      role: 'ASMEN (Asisten Manajer)',
      type: 'desk',
      note: 'Pegawai berjabatan: letakkan ex-food di meja samping dekat teko air.',
    },
    'ustadz-fadil': {
      id: 'ustadz-fadil',
      name: 'Ustadz Fadil',
      role: 'Manajer PUR',
      type: 'desk',
      note: 'Pegawai berjabatan: letakkan ex-food di meja samping dekat teko air, bukan di meja laptop.',
    },
    'oddang': {
      id: 'oddang',
      name: 'Pak Oddang',
      role: 'Mesengger',
      type: 'desk',
      note: 'Pak Oddang bukan pegawai tetap (tidak menerima jatah ex-food).',
    },
    'ahmad-haruna': {
      id: 'ahmad-haruna',
      name: 'Pak Ahmad Haruna',
      role: 'Pegawai PUR',
      type: 'desk',
      note: 'Akun beliau dapat digunakan untuk akses pengarsipan BI RMS bila berizin.',
    },
    'aswan': {
      id: 'aswan',
      name: 'Kak Aswan',
      role: 'Pegawai PUR',
      type: 'desk',
      note: 'Akun Kak Aswan paling sering digunakan untuk input BI RMS (wajib izin terlebih dahulu).',
    },
    'kosong-1': {
      id: 'kosong-1',
      name: 'Kosong',
      role: 'Meja Kosong',
      type: 'empty',
      note: 'Meja kerja cadangan / belum berpenghuni tetap.',
    },
    'subhan': {
      id: 'subhan',
      name: 'Pak Subhan',
      role: 'ASMEN (Asisten Manajer)',
      type: 'desk',
      note: 'Pegawai berjabatan: letakkan ex-food di meja samping dekat teko air.',
    },
    'fadly': {
      id: 'fadly',
      name: 'Kak fadly',
      role: 'Pegawai PUR',
      type: 'desk',
      note: 'Pegawai tetap unit PUR.',
    },
    'ruang-rapat': {
      id: 'ruang-rapat',
      name: 'Ruang Rapat',
      role: 'Meeting Room',
      type: 'room',
      note: 'Ruang pertemuan internal koordinasi unit PUR.',
    },
    'khazanah': {
      id: 'khazanah',
      name: 'Khazanah',
      role: 'Khazanah & Arsip Dokumen',
      type: 'room',
      note: 'Mesin fotokopi untuk scan cepat berada tepat di depan khazanah arsip. Wajib bawa flashdisk sendiri!',
    },
  };

  const handleDeskClick = (key: string) => {
    if (deskDetails[key]) {
      setSelectedDesk(deskDetails[key]);
    }
  };

  return (
    <div className="relative w-full bg-white rounded-3xl border-2 border-[#084CAC]/20 p-3 sm:p-4 shadow-sm overflow-hidden select-none">
      {/* North Compass Indicator & Title */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          {/* SVG Compass Arrow */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-black text-[#084CAC]">N</span>
            <svg width="18" height="24" viewBox="0 0 20 30" className="drop-shadow-xs">
              <polygon points="10,0 2,26 10,20 18,26" fill="#084CAC" />
              <polygon points="10,0 10,20 18,26" fill="#102C54" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-black text-[#084CAC] uppercase tracking-wide">
              Ruang Depan & Khazanah
            </h4>
            <p className="text-[11px] text-slate-500">Klik meja untuk melihat info pegawai</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#084CAC] bg-[#EDF4FF] px-2.5 py-1 rounded-full border border-[#084CAC]/15">
          <Sparkles size={12} />
          <span>Denah 01</span>
        </div>
      </div>

      {/* Main Floor Plan SVG / Canvas Grid */}
      <div className="relative w-full max-w-[380px] mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-2 sm:p-3 overflow-hidden">
        {/* Top Area: Verifikasi UPAL + Frontliner + Pintu */}
        <div className="grid grid-cols-12 gap-2 mb-3">
          {/* Verifikasi UPAL */}
          <button
            onClick={() => handleDeskClick('upal')}
            className="col-span-4 h-16 bg-[#0052CC] rounded-xl flex flex-col items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
          >
            <span className="px-1.5 py-0.5 rounded bg-[#FFC72C] text-[#102C54] font-black text-[10px] leading-tight text-center">
              Verifikasi UPAL
            </span>
          </button>

          {/* Frontliner */}
          <button
            onClick={() => handleDeskClick('frontliner')}
            className="col-span-6 h-16 bg-[#0052CC] rounded-xl flex items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
          >
            <span className="px-2 py-1 rounded bg-[#FFC72C] text-[#102C54] font-black text-xs">
              Frontliner
            </span>
          </button>

          {/* Door icon / entrance symbol */}
          <div className="col-span-2 h-16 border-r-2 border-t-2 border-slate-400 rounded-tr-2xl flex items-center justify-center">
            <svg viewBox="0 0 30 30" width="22" height="22" className="text-slate-500">
              <path d="M 5,28 A 20,20 0 0,1 25,8 L 5,8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2" />
              <line x1="5" y1="8" x2="5" y2="28" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Middle Section: Left column (Officials), Center Column (Staff & Compass), Right Column (Ruang Rapat) */}
        <div className="grid grid-cols-12 gap-2 mb-3">
          {/* Left Column: Gudang, Pak Yazid, Pak Andry, Ustadz Fadil */}
          <div className="col-span-4 flex flex-col gap-2">
            {/* Gudang */}
            <button
              onClick={() => handleDeskClick('gudang')}
              className="h-20 bg-[#0052CC] rounded-xl flex items-center justify-center cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#FFC72C] text-[#102C54] font-black text-[11px] rotate-[-90deg]">
                Gudang
              </span>
            </button>

            {/* Pak Yazid */}
            <button
              onClick={() => handleDeskClick('yazid')}
              className="h-16 bg-[#0052CC] rounded-xl flex flex-col items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#FFC72C] text-[#102C54] font-black text-[9px] leading-tight text-center">
                Pak Yazid<br/>(Deputi Ka. Divisi)
              </span>
            </button>

            {/* Pak Andry DJ */}
            <button
              onClick={() => handleDeskClick('andry-dj')}
              className="h-16 bg-[#0052CC] rounded-xl flex flex-col items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#FFC72C] text-[#102C54] font-black text-[9px] leading-tight text-center">
                Pak Andry DJ<br/>(ASMEN)
              </span>
            </button>

            {/* Ustadz Fadil */}
            <button
              onClick={() => handleDeskClick('ustadz-fadil')}
              className="h-16 bg-[#0052CC] rounded-xl flex flex-col items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#FFC72C] text-[#102C54] font-black text-[9px] leading-tight text-center">
                Ustadz Fadil<br/>(Manajer)
              </span>
            </button>
          </div>

          {/* Center Column: North, Pak Oddang, Pak Haruna, Kak Aswan, Kosong, Pak Subhan, Kak Fadly */}
          <div className="col-span-5 flex flex-col gap-2">
            {/* Pak Oddang */}
            <button
              onClick={() => handleDeskClick('oddang')}
              className="h-12 bg-[#0052CC] rounded-xl flex flex-col items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#FFC72C] text-[#102C54] font-black text-[9px] leading-tight text-center">
                Pak Oddang (Mesengger)
              </span>
            </button>

            {/* Pak Ahmad Haruna */}
            <button
              onClick={() => handleDeskClick('ahmad-haruna')}
              className="h-12 bg-[#0052CC] rounded-xl flex flex-col items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#FFC72C] text-[#102C54] font-black text-[9px] leading-tight text-center">
                Pak Ahmad Haruna
              </span>
            </button>

            {/* Kak Aswan */}
            <button
              onClick={() => handleDeskClick('aswan')}
              className="h-12 bg-[#0052CC] rounded-xl flex flex-col items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110 border-2 border-yellow-300"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#FFC72C] text-[#102C54] font-black text-[10px] leading-tight text-center">
                Kak Aswan ⭐
              </span>
            </button>

            {/* Kosong */}
            <button
              onClick={() => handleDeskClick('kosong-1')}
              className="h-12 bg-[#0052CC] rounded-xl flex flex-col items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
            >
              <span className="px-2 py-0.5 rounded bg-[#E02424] text-white font-black text-[10px]">
                Kosong
              </span>
            </button>

            {/* Pak Subhan (ASMEN) */}
            <button
              onClick={() => handleDeskClick('subhan')}
              className="h-12 bg-[#0052CC] rounded-xl flex flex-col items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#FFC72C] text-[#102C54] font-black text-[9px] leading-tight text-center">
                Pak Subhan (ASMEN)
              </span>
            </button>

            {/* Kak Fadly */}
            <button
              onClick={() => handleDeskClick('fadly')}
              className="h-12 bg-[#0052CC] rounded-xl flex flex-col items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#FFC72C] text-[#102C54] font-black text-[10px]">
                Kak fadly
              </span>
            </button>
          </div>

          {/* Right Column: Ruang Rapat */}
          <div className="col-span-3 flex">
            <button
              onClick={() => handleDeskClick('ruang-rapat')}
              className="w-full bg-[#0052CC] rounded-xl flex items-center justify-center p-2 cursor-pointer transition-transform active:scale-95 shadow-sm hover:brightness-110"
            >
              <span className="px-2 py-1 rounded bg-[#FFC72C] text-[#102C54] font-black text-xs rotate-[-90deg] whitespace-nowrap">
                Ruang Rapat
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Section: Khazanah + Magang PUR Avatars sticker */}
        <div className="w-full h-16 bg-[#0052CC] rounded-xl p-2 flex items-center justify-between shadow-sm cursor-pointer hover:brightness-110"
          onClick={() => handleDeskClick('khazanah')}
        >
          <div className="px-2.5 py-1 rounded bg-[#FFC72C] text-[#102C54] font-black text-sm">
            Khazanah
          </div>

          <div className="flex items-center gap-1.5 px-2 py-1 bg-white/20 rounded-lg text-white text-[11px] font-bold">
            <span>Mesin Fotokopi Depan Khazanah 🖨️</span>
          </div>
        </div>
      </div>

      {/* Selected Desk Detail Card */}
      {selectedDesk ? (
        <div className="mt-3 p-3.5 rounded-2xl bg-[#EDF4FF] border border-[#084CAC]/25 text-[#102C54] animate-in fade-in duration-150">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-[#084CAC]">
                {selectedDesk.name}
              </span>
              {selectedDesk.role && (
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white text-[#084CAC] border border-[#084CAC]/20">
                  {selectedDesk.role}
                </span>
              )}
            </div>
            <button
              onClick={() => setSelectedDesk(null)}
              className="text-xs text-slate-400 hover:text-slate-700 font-bold px-1"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {selectedDesk.note}
          </p>
        </div>
      ) : (
        <div className="mt-2 text-center text-[11px] text-slate-400 italic">
          Sentuh salah satu meja pada denah di atas untuk membaca catatan penting.
        </div>
      )}
    </div>
  );
};
