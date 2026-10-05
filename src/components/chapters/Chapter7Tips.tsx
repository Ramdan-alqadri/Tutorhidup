import React from 'react';
import {
  Sun,
  Utensils,
  FolderArchive,
  Briefcase,
  Video,
  CheckCircle2,
  Home,
} from 'lucide-react';

interface Chapter7TipsProps {
  onGoHome: () => void;
}

export const Chapter7Tips: React.FC<Chapter7TipsProps> = ({ onGoHome }) => {
  return (
    <div className="flex flex-col min-h-full px-5 py-5 text-[#102C54] pb-24">
      {/* Chapter Title */}
      <div className="mb-5">
        <span className="text-3xl font-extrabold text-[#084CAC] tracking-tight block">
          07
        </span>
        <h1 className="text-2xl font-extrabold text-[#084CAC] mt-1 leading-snug">
          Kecil, tapi penting.
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Rangkuman golden rules agar magangmu di Unit PUR sukses dan tanpa kendala.
        </p>
      </div>


      {/* Grouped Tips */}
      <div className="space-y-4">
        {/* Kelompok Pagi */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-[#084CAC] font-bold text-sm">
            <Sun size={17} />
            <span>Rutinitas Pagi</span>
          </div>
          <ul className="text-xs text-slate-700 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Sudah standby di kantor pukul <strong>07.40</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Hafalkan denah ruangan dalam <strong>tiga hari pertama</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Minta kontak pengantar makanan agar tidak bolak-balik mengecek lobi.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Buat to-do list harian untuk mengatur ritme pekerjaan.</span>
            </li>
          </ul>
        </div>

        {/* Kelompok Ex-Food */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-[#084CAC] font-bold text-sm">
            <Utensils size={17} />
            <span>Pembagian Ex-Food</span>
          </div>
          <ul className="text-xs text-slate-700 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Hitung total jumlah terlebih dahulu sebelum dibagikan.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Bagikan sesuai panduan di spreadsheet.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Ambil satu per satu dari kantong kresek.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Perhatikan lokasi penempatan untuk pegawai berjabatan (di meja samping dekat teko air).</span>
            </li>
          </ul>
        </div>

        {/* Kelompok Scan & Arsip */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-[#084CAC] font-bold text-sm">
            <FolderArchive size={17} />
            <span>Scan dan Pengarsipan</span>
          </div>
          <ul className="text-xs text-slate-700 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Bawa flashdisk sendiri untuk scan di mesin fotokopi depan khazanah arsip.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Selalu izin sebelum menggunakan akses akun pegawai.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Periksa surat tugas sebelum menentukan nama berkas di BI RMS.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Gunakan nama berkas yang singkat dan sesuai kegiatan.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Cek status loker sebelum mencetak label (hindari loker penuh/error).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Pemisahan berkas biasa dan rahasia perlu praktik langsung di meja kerja.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Cocokkan kode loker dan urutan berkas sebelum disimpan ke rak arsip.</span>
            </li>
          </ul>
        </div>

        {/* Kelompok Kedinasan */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-[#084CAC] font-bold text-sm">
            <Briefcase size={17} />
            <span>Kedinasan Luar</span>
          </div>
          <ul className="text-xs text-slate-700 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Periksa daftar hadir, suvenir, kamera, dan seluruh barang bawaan.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Komunikasikan pembagian jobdesk langsung dengan PIC kegiatan.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span><strong>Utamakan membantu rekan di unit PUR</strong> selama acara berlangsung.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Laporan kolase harus selesai pada hari yang sama dan diserahkan ke PIC.</span>
            </li>
          </ul>
        </div>

        {/* Kelompok Konten */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-[#084CAC] font-bold text-sm">
            <Video size={17} />
            <span>Konten Media Sosial</span>
          </div>
          <ul className="text-xs text-slate-700 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#084CAC] shrink-0 mt-0.5" />
              <span>Eksekusi produksi konten baru dimulai setelah script disetujui <strong>Kak Hardiansyah</strong>.</span>
            </li>
          </ul>
        </div>

        {/* Tombol Kembali ke Beranda */}
        <div className="pt-2">
          <button
            onClick={onGoHome}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-sm text-white shadow-md bg-[#084CAC] hover:bg-[#073c87] active:scale-98 transition-all cursor-pointer"
          >
            <Home size={18} />
            <span>Kembali ke Beranda</span>
          </button>
        </div>
      </div>
    </div>
  );
};
