import React, { useState } from 'react';
import { Search, BookA, Check, Clock } from 'lucide-react';
import { TERMS_LIST } from '../../data/guidebookData';

export const Chapter6Istilah: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = TERMS_LIST.filter(
    (item) =>
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-full px-5 py-5 text-[#102C54] pb-24">
      {/* Chapter Title */}
      <div className="mb-4">
        <span className="text-3xl font-extrabold text-[#084CAC] tracking-tight block">
          06
        </span>
        <h1 className="text-2xl font-extrabold text-[#084CAC] mt-1 leading-snug">
          Bahasa sehari-hari
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Daftar istilah dan singkatan yang sering dipakai di lingkungan Unit PUR.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative mb-5">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search size={16} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari istilah (PUR, WGF, Kuping...)"
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#EDF4FF]/70 border border-[#084CAC]/20 text-sm text-[#102C54] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#084CAC] focus:bg-white transition-all"
        />
      </div>

      {/* Terms List Grid / Cards */}
      <div className="space-y-2.5">
        {filteredTerms.map((item, idx) => {
          const isPending = item.status === 'pending';

          return (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#084CAC]/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center min-w-[70px] px-2.5 py-1 rounded-xl bg-[#EDF4FF] text-[#084CAC] font-black text-sm tracking-wide border border-[#084CAC]/15">
                  {item.term}
                </span>
                <span className="text-sm font-medium text-slate-700 leading-snug">
                  {item.definition}
                </span>
              </div>

              {isPending && (
                <div className="self-end sm:self-center shrink-0">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    <Clock size={11} />
                    Definisi akan dikonfirmasi
                  </span>
                </div>
              )}
            </div>
          );
        })}

        {filteredTerms.length === 0 && (
          <div className="text-center py-8 text-slate-400 text-sm">
            Tidak menemukan istilah "<strong>{searchQuery}</strong>"
          </div>
        )}
      </div>

      {/* Note footer */}
      <div className="mt-6 p-3.5 rounded-2xl bg-[#EDF4FF]/50 border border-[#084CAC]/15 text-xs text-slate-600 leading-relaxed">
        <strong className="text-[#084CAC] font-semibold block mb-0.5">Catatan Istilah:</strong>
        Untuk istilah internal dengan tanda "Definisi akan dikonfirmasi", penjelasan resmi akan dilengkapi setelah konfirmasi bersama staf dan mentor unit PUR.
      </div>
    </div>
  );
};
