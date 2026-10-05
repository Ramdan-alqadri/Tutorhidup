import React, { useState } from 'react';
import { Compass, Sparkles } from 'lucide-react';

interface DeskItem {
  id: string;
  name: string;
  role?: string;
  type?: 'desk' | 'room' | 'empty' | 'facility';
  note?: string;
  badgeColor?: 'yellow' | 'red';
}

export const FloorPlanBackOffice: React.FC = () => {
  const [selectedDesk, setSelectedDesk] = useState<DeskItem | null>(null);

  const deskDetails: Record<string, DeskItem> = {
    'meja-stempel': {
      id: 'meja-stempel',
      name: 'Meja Stempel',
      role: 'Operasional',
      badgeColor: 'red',
      note: 'Meja khusus tempat stempel dan legalisir dokumen operasional.',
    },
    'pak-taufan': {
      id: 'pak-taufan',
      name: 'Pak Taufan',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai tetap unit PUR.',
    },
    'pak-muslimin': {
      id: 'pak-muslimin',
      name: 'Pak Muslimin',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai tetap unit PUR.',
    },
    'kak-munarfa': {
      id: 'kak-munarfa',
      name: 'Kak Munarfa',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai unit PUR.',
    },
    'kak-haksam': {
      id: 'kak-haksam',
      name: 'Kak Haksam',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai unit PUR.',
    },
    'kak-pian': {
      id: 'kak-pian',
      name: 'Kak Pian',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai unit PUR.',
    },
    'kak-aji': {
      id: 'kak-aji',
      name: 'Kak Aji',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai unit PUR.',
    },
    'kak-mawan': {
      id: 'kak-mawan',
      name: 'Kak Mawan',
      role: 'Status Swakelola ⭐',
      badgeColor: 'yellow',
      note: 'Jika pembagian ex-food belum jelas, tanyakan langsung kepada Kak Mawan!',
    },
    'kak-bombom': {
      id: 'kak-bombom',
      name: 'Kak BOMBOM',
      role: 'Kak Hardiansyah / Hardy (Swakelola) ⭐',
      badgeColor: 'yellow',
      note: 'Reviewer dan penentu persetujuan (acc) script/konsep konten CBP Rupiah.',
    },
    'kak-andry': {
      id: 'kak-andry',
      name: 'Kak Andry',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai unit PUR.',
    },
    'kak-bobby': {
      id: 'kak-bobby',
      name: 'Kak Bobby',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Salah satu opsi akun pegawai untuk akses input BI RMS (wajib izin dulu).',
    },
    'kosong-r3c4': {
      id: 'kosong-r3c4',
      name: 'KOSONG',
      role: 'Meja Kosong',
      badgeColor: 'red',
      note: 'Meja kerja saat ini tidak berpenghuni.',
    },
    'meja-dala': {
      id: 'meja-dala',
      name: 'Meja Dala :3',
      role: 'Meja Kerja',
      badgeColor: 'yellow',
      note: 'Meja kerja operasional.',
    },
    'kak-ahmad': {
      id: 'kak-ahmad',
      name: 'Kak Ahmad',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai unit PUR.',
    },
    'kak-ardi': {
      id: 'kak-ardi',
      name: 'Kak Ardi',
      role: 'Pak Ardi / Kak Ardi ⭐',
      badgeColor: 'yellow',
      note: 'Tanyakan kode klasifikasi BI RMS kepada Pak Ardi / Pak Hamid jika ragu.',
    },
    'kak-irwan': {
      id: 'kak-irwan',
      name: 'Kak Irwan',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai unit PUR.',
    },
    'kosong-r5c1': {
      id: 'kosong-r5c1',
      name: 'KOSONG',
      role: 'Meja Kosong',
      badgeColor: 'red',
      note: 'Meja kerja saat ini tidak berpenghuni.',
    },
    'kak-ilham': {
      id: 'kak-ilham',
      name: 'Kak Ilham',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai unit PUR.',
    },
    'kak-arnold': {
      id: 'kak-arnold',
      name: 'Kak Arnold',
      role: 'Pegawai PUR',
      badgeColor: 'yellow',
      note: 'Pegawai unit PUR.',
    },
    'kak-hamid': {
      id: 'kak-hamid',
      name: 'Kak Hamid',
      role: 'Pak Hamid / Kak Hamid ⭐',
      badgeColor: 'yellow',
      note: 'Koordinasikan ketersediaan berkas FC dan klasifikasi arsip BI RMS dengan Kak Hamid.',
    },
    'wc': {
      id: 'wc',
      name: 'WC',
      role: 'Toilet / Kamar Kecil',
      badgeColor: 'yellow',
      note: 'Fasilitas toilet unit.',
    },
    'pantry': {
      id: 'pantry',
      name: 'PANTRY',
      role: 'Dapur / Ruang Makan',
      badgeColor: 'yellow',
      note: 'Area pantry dan air minum.',
    },
    'mushollah': {
      id: 'mushollah',
      name: 'MUSHOLLAH',
      role: 'Ruang Ibadah',
      badgeColor: 'yellow',
      note: 'Tempat ibadah shalat untuk karyawan unit.',
    },
  };

  const handleDeskClick = (key: string) => {
    if (deskDetails[key]) {
      setSelectedDesk(deskDetails[key]);
    }
  };

  const gridRows = [
    // Row 1
    ['meja-stempel', 'pak-taufan', 'pak-muslimin', 'kak-munarfa'],
    // Row 2
    ['kak-haksam', 'kak-pian', 'kak-aji', 'kak-mawan'],
    // Row 3
    ['kak-bombom', 'kak-andry', 'kak-bobby', 'kosong-r3c4'],
    // Row 4
    ['meja-dala', 'kak-ahmad', 'kak-ardi', 'kak-irwan'],
    // Row 5
    ['kosong-r5c1', 'kak-ilham', 'kak-arnold', 'kak-hamid'],
  ];

  return (
    <div className="relative w-full bg-white rounded-3xl border-2 border-[#084CAC]/20 p-3 sm:p-4 shadow-sm overflow-hidden select-none">
      {/* Header with North Compass & Back Office Title */}
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
              BACK OFFICE
            </h4>
            <p className="text-[11px] text-slate-500">Ruang kerja utama staf PUR</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#084CAC] bg-[#EDF4FF] px-2.5 py-1 rounded-full border border-[#084CAC]/15">
          <Sparkles size={12} />
          <span>Denah 02</span>
        </div>
      </div>

      {/* Main Floor Plan Grid */}
      <div className="relative w-full max-w-[380px] mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-2 sm:p-3 overflow-hidden space-y-2">
        {/* Top Back Office Banner */}
        <div className="w-full bg-[#0052CC] rounded-xl p-2 flex items-center justify-between shadow-xs">
          <span className="px-3 py-1 rounded bg-[#FFC72C] text-[#102C54] font-black text-xs">
            BACK OFFICE
          </span>
          <span className="text-[11px] font-bold text-white/90">
            4 Baris Meja Kerja
          </span>
        </div>

        {/* 5 Rows x 4 Desks */}
        <div className="space-y-2 pt-1">
          {gridRows.map((row, rIdx) => (
            <div key={rIdx} className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {row.map((deskKey) => {
                const item = deskDetails[deskKey];
                const isRed = item?.badgeColor === 'red';
                const isStar = ['kak-mawan', 'kak-bombom', 'kak-ardi', 'kak-hamid'].includes(deskKey);

                return (
                  <button
                    key={deskKey}
                    onClick={() => handleDeskClick(deskKey)}
                    className={`h-14 sm:h-16 bg-[#0052CC] rounded-xl flex items-center justify-center p-1 cursor-pointer transition-transform active:scale-95 shadow-xs hover:brightness-110 ${
                      isStar ? 'ring-2 ring-yellow-400' : ''
                    }`}
                  >
                    <span
                      className={`px-1 py-0.5 rounded font-black text-[9px] sm:text-[10px] leading-tight text-center truncate max-w-full ${
                        isRed
                          ? 'bg-[#E02424] text-white'
                          : 'bg-[#FFC72C] text-[#102C54]'
                      }`}
                    >
                      {item?.name}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom Section: Facilities (WC, Pantry with Door, Mushollah) */}
        <div className="pt-2">
          {/* Door indicator above Pantry */}
          <div className="flex justify-center pb-1">
            <svg viewBox="0 0 40 20" width="30" height="15" className="text-slate-500">
              <path d="M 5,18 A 15,15 0 0,1 25,5 L 5,5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2" />
              <line x1="5" y1="5" x2="5" y2="18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <div className="grid grid-cols-12 gap-1.5 sm:gap-2">
            {/* WC */}
            <button
              onClick={() => handleDeskClick('wc')}
              className="col-span-3 h-14 bg-[#0052CC] rounded-xl flex items-center justify-center cursor-pointer transition-transform active:scale-95 shadow-xs hover:brightness-110"
            >
              <span className="px-2 py-1 rounded bg-[#FFC72C] text-[#102C54] font-black text-xs">
                WC
              </span>
            </button>

            {/* Pantry */}
            <button
              onClick={() => handleDeskClick('pantry')}
              className="col-span-5 h-14 bg-[#0052CC] rounded-xl flex items-center justify-center cursor-pointer transition-transform active:scale-95 shadow-xs hover:brightness-110"
            >
              <span className="px-2.5 py-1 rounded bg-[#FFC72C] text-[#102C54] font-black text-xs">
                PANTRY
              </span>
            </button>

            {/* Mushollah */}
            <button
              onClick={() => handleDeskClick('mushollah')}
              className="col-span-4 h-14 bg-[#0052CC] rounded-xl flex items-center justify-center cursor-pointer transition-transform active:scale-95 shadow-xs hover:brightness-110"
            >
              <span className="px-1.5 py-1 rounded bg-[#FFC72C] text-[#102C54] font-black text-[10px] sm:text-xs">
                MUSHOLLAH
              </span>
            </button>
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
          Sentuh salah satu meja pada denah di atas untuk membaca info & tugas penting.
        </div>
      )}
    </div>
  );
};
