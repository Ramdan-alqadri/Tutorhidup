import React, { useState } from 'react';
import {
  Lightbulb,
  Printer,
  Coffee,
  Maximize2,
  X,
  Building2,
  Users,
} from 'lucide-react';
import { FloorPlanFrontOffice } from '../floorplan/FloorPlanFrontOffice';
import { FloorPlanBackOffice } from '../floorplan/FloorPlanBackOffice';

export const Chapter3DenahLokasi: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'front' | 'back'>('front');
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-full px-5 py-5 text-[#102C54] pb-24">
      {/* Chapter Title */}
      <div className="mb-4">
        <span className="text-3xl font-extrabold text-[#084CAC] tracking-tight block">
          03
        </span>
        <h1 className="text-2xl font-extrabold text-[#084CAC] mt-1 leading-snug">
          Kenali ruanganmu
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Denah tata letak meja dan ruangan Divisi PUR.
        </p>
      </div>

      {/* Golden Rule Card - Hafalkan dalam 3 hari */}
      <div className="p-4 rounded-2xl bg-[#EDF4FF] border border-[#084CAC]/20 mb-5 flex items-start gap-3 shadow-xs">
        <div className="p-2.5 rounded-xl bg-[#084CAC] text-white shrink-0 mt-0.5">
          <Lightbulb size={20} />
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#084CAC]">
            Hafalkan dalam 3 hari pertama!
          </h2>
          <p className="text-sm text-slate-700 mt-1 leading-relaxed">
            Dalam tiga hari pertama, peserta magang <strong>wajib menghafal denah ruangan</strong> agar tidak salah saat membagikan ex-food atau mengantar berkas arsip.
          </p>
        </div>
      </div>

      {/* Tabs Switcher: Ruang Depan vs Back Office */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#EDF4FF] border border-[#084CAC]/15 mb-4">
        <button
          onClick={() => setActiveTab('front')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
            activeTab === 'front'
              ? 'bg-[#084CAC] text-white shadow-xs'
              : 'text-[#102C54] hover:bg-white/60'
          }`}
        >
          <Building2 size={15} />
          <span>Ruang Depan & Khazanah</span>
        </button>

        <button
          onClick={() => setActiveTab('back')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
            activeTab === 'back'
              ? 'bg-[#084CAC] text-white shadow-xs'
              : 'text-[#102C54] hover:bg-white/60'
          }`}
        >
          <Users size={15} />
          <span>Back Office</span>
        </button>
      </div>

      {/* Denah Komponen Presisi Sesuai Draf Awal */}
      <div className="relative mb-5">
        {activeTab === 'front' ? (
          <FloorPlanFrontOffice />
        ) : (
          <FloorPlanBackOffice />
        )}

        {/* Zoom trigger button */}
        <button
          onClick={() => setIsZoomOpen(true)}
          className="mt-3 w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#084CAC]/25 text-[#084CAC] hover:bg-[#EDF4FF] text-xs font-bold transition-colors cursor-pointer shadow-xs"
        >
          <Maximize2 size={14} />
          <span>Buka Denah Mode Penuh</span>
        </button>
      </div>

      {/* Titik Penting yang Wajib Diketahui */}
      <div className="space-y-3 mb-4">
        <h3 className="text-xs font-bold text-[#102C54] uppercase tracking-wider px-1">
          Titik Penting yang Wajib Diingat
        </h3>

        {/* Mesin Fotokopi Depan Khazanah */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-[#EDF4FF] text-[#084CAC] shrink-0">
            <Printer size={18} />
          </div>
          <div className="text-sm leading-relaxed">
            <strong className="text-[#084CAC] font-bold block">
              Mesin Fotokopi Depan Khazanah
            </strong>
            <span className="text-slate-700">
              Mesin fotokopi untuk scan berada tepat di <strong>depan khazanah arsip</strong> (lihat denah Ruang Depan). Digunakan untuk scan cepat dan wajib membawa flashdisk sendiri.
            </span>
          </div>
        </div>

        {/* Meja Pegawai Berjabatan */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-[#EDF4FF] text-[#084CAC] shrink-0">
            <Coffee size={18} />
          </div>
          <div className="text-sm leading-relaxed">
            <strong className="text-[#084CAC] font-bold block">
              Aturan Meja Pegawai Berjabatan
            </strong>
            <span className="text-slate-700">
              Untuk pegawai berjabatan (seperti Pak Yazid, Ustadz Fadil, Pak Andry DJ, Pak Subhan), <strong>ex-food diletakkan di meja samping dekat teko air</strong>, bukan di meja laptop utama.
            </span>
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-4 sm:p-6 max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div>
                <h4 className="text-base font-black text-[#084CAC]">
                  {activeTab === 'front' ? 'Denah Ruang Depan & Khazanah' : 'Denah Back Office'}
                </h4>
                <p className="text-xs text-slate-500">Sentuh meja untuk melihat keterangan</p>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Render selected floor plan */}
            <div className="scale-100 origin-top">
              {activeTab === 'front' ? <FloorPlanFrontOffice /> : <FloorPlanBackOffice />}
            </div>

            <button
              onClick={() => setIsZoomOpen(false)}
              className="mt-4 w-full py-3 rounded-2xl bg-[#084CAC] text-white font-bold text-sm shadow-md cursor-pointer hover:bg-[#073c87]"
            >
              Tutup Denah Penuh
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
