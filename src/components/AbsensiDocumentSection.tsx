import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Download,
  Upload,
  CheckCircle2,
  Eye,
  X,
  FileSpreadsheet,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

export const AbsensiDocumentSection: React.FC = () => {
  const [customFile, setCustomFile] = useState<{
    name: string;
    dataUrl: string;
    size: string;
  } | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load previously uploaded custom file from localStorage if any
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pur_custom_absen_doc');
      if (saved) {
        setCustomFile(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      const fileData = {
        name: file.name,
        dataUrl,
        size: `${(file.size / 1024).toFixed(1)} KB`,
      };
      setCustomFile(fileData);
      try {
        localStorage.setItem('pur_custom_absen_doc', JSON.stringify(fileData));
      } catch (err) {
        console.warn('Storage quota exceeded, file kept in memory', err);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    if (customFile) {
      // Download the user's custom uploaded file
      const link = document.createElement('a');
      link.href = customFile.dataUrl;
      link.download = customFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Download default generated official docx
      const link = document.createElement('a');
      link.href = '/documents/Formulir_Absensi_Magang_PUR_2026.docx';
      link.download = 'Formulir_Absensi_Magang_PUR_2026.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleResetToDefault = () => {
    setCustomFile(null);
    localStorage.removeItem('pur_custom_absen_doc');
  };

  return (
    <div className="p-4 sm:p-5 rounded-3xl bg-white border-2 border-[#084CAC]/20 shadow-md">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3.5">
        <div className="p-2.5 rounded-2xl bg-[#084CAC] text-white shrink-0 mt-0.5">
          <FileText size={22} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#084CAC] bg-[#EDF4FF] px-2 py-0.5 rounded-md">
              Dokumen Resmi
            </span>
            <span className="text-xs text-slate-400">• .docx</span>
          </div>
          <h3 className="text-base font-extrabold text-[#102C54] mt-0.5 leading-snug">
            Formulir Absensi & Log Magang PUR
          </h3>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Format resmi Microsoft Word (.docx) pencatatan jam datang, jam pulang, uraian tugas harian, dan paraf pembimbing lapangan.
          </p>
        </div>
      </div>

      {/* Status file indicator */}
      {customFile ? (
        <div className="mb-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-800">
          <div className="flex items-center gap-2 truncate pr-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span className="truncate font-semibold">{customFile.name} ({customFile.size})</span>
          </div>
          <button
            onClick={handleResetToDefault}
            className="text-[11px] text-emerald-700 hover:text-emerald-900 underline shrink-0 cursor-pointer"
          >
            Reset
          </button>
        </div>
      ) : null}

      {/* Action Buttons */}
      <div className="space-y-2 pt-1">
        {/* Main Download Button */}
        <button
          onClick={handleDownload}
          className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl font-extrabold text-sm text-white shadow-md bg-[#084CAC] hover:bg-[#073c87] active:scale-98 transition-all cursor-pointer"
        >
          <Download size={18} />
          <span>
            {customFile ? `Unduh ${customFile.name}` : 'Unduh Template Absen (.docx)'}
          </span>
        </button>

        {/* Secondary options: Upload custom file & View preview */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".docx,.doc,.pdf,.xlsx"
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#084CAC]/25 text-[#084CAC] bg-[#EDF4FF] hover:bg-[#e0edff] active:scale-98 font-bold text-xs transition-colors cursor-pointer"
          >
            <Upload size={14} />
            <span>Upload File Docs</span>
          </button>

          <button
            onClick={() => setIsPreviewOpen(true)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100 active:scale-98 font-bold text-xs transition-colors cursor-pointer"
          >
            <Eye size={14} />
            <span>Pratinjau Format</span>
          </button>
        </div>
      </div>

      {/* Modal Pratinjau Format Tabel Absensi */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-5 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div>
                <h4 className="text-sm font-extrabold text-[#084CAC]">
                  Pratinjau Format Dokumen Absensi
                </h4>
                <p className="text-[11px] text-slate-500">Unit Pengelolaan Uang Rupiah (PUR)</p>
              </div>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* Document Header Representation */}
            <div className="text-center pb-3 border-b border-dashed border-slate-200 mb-3">
              <span className="text-[10px] font-extrabold text-blue-900 uppercase tracking-widest block">
                BANK INDONESIA
              </span>
              <span className="text-xs font-bold text-slate-800 block">
                KANTOR PERWAKILAN PROVINSI SULAWESI SELATAN
              </span>
              <span className="text-[11px] text-slate-500 font-semibold block">
                UNIT PENGELOLAAN UANG RUPIAH (PUR)
              </span>
              <span className="text-xs font-black text-[#084CAC] uppercase underline block mt-2">
                FORMULIR ABSENSI & CATATAN KEGIATAN HARIAN MAGANG
              </span>
            </div>

            {/* Metadata Fields */}
            <div className="text-[11px] text-slate-700 space-y-1 mb-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <p><strong>Nama Peserta:</strong> [Diisi Peserta]</p>
              <p><strong>NIM / NPM:</strong> [Nomor Induk Mahasiswa]</p>
              <p><strong>Universitas:</strong> [Asal Kampus]</p>
              <p><strong>Periode Magang:</strong> Triwulan 3 (TW3) 2026</p>
              <p><strong>Unit Penempatan:</strong> Pengelolaan Uang Rupiah (PUR)</p>
            </div>

            {/* Table Mockup */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-[#EDF4FF] text-[#084CAC] font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-2 text-center w-8">No</th>
                    <th className="p-2">Hari / Tanggal</th>
                    <th className="p-2 text-center">Datang</th>
                    <th className="p-2 text-center">Pulang</th>
                    <th className="p-2">Uraian Tugas</th>
                    <th className="p-2 text-center">Paraf</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-2 text-center font-bold">1</td>
                    <td className="p-2 whitespace-nowrap">Senin, 06 Juli 2026</td>
                    <td className="p-2 text-center font-semibold text-emerald-700">07:35</td>
                    <td className="p-2 text-center">17:00</td>
                    <td className="p-2">Briefing awal unit PUR, hafal denah meja & loker</td>
                    <td className="p-2 text-center text-slate-400">✓</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-center font-bold">2</td>
                    <td className="p-2 whitespace-nowrap">Selasa, 07 Juli 2026</td>
                    <td className="p-2 text-center font-semibold text-emerald-700">07:38</td>
                    <td className="p-2 text-center">17:00</td>
                    <td className="p-2">Scan berkas di depan khazanah, verifikasi dokumen</td>
                    <td className="p-2 text-center text-slate-400">✓</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-center font-bold">3</td>
                    <td className="p-2 whitespace-nowrap">Rabu, 08 Juli 2026</td>
                    <td className="p-2 text-center font-semibold text-emerald-700">07:35</td>
                    <td className="p-2 text-center">17:00</td>
                    <td className="p-2">Persiapan barang dinas, koordinasi kas keliling</td>
                    <td className="p-2 text-center text-slate-400">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Signature Area */}
            <div className="text-right text-[11px] text-slate-600 space-y-1 mb-4 pr-2">
              <p>Makassar, ________________ 2026</p>
              <p className="font-bold">Mengetahui,</p>
              <p>Pembimbing Lapangan / PIC Unit PUR</p>
              <div className="h-10" />
              <p className="font-bold underline text-slate-800">( _________________________ )</p>
            </div>

            <button
              onClick={handleDownload}
              className="w-full py-2.5 rounded-xl bg-[#084CAC] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={15} />
              <span>Download File Dokumen Ini (.docx)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
