import React, { useRef, useState, useEffect } from 'react';
import {
  Clock,
  Radio,
  Users,
  UtensilsCrossed,
  PhoneCall,
  CheckCircle2,
  Printer,
  FileText,
  AlertTriangle,
  FolderOpen,
  Archive,
  ExternalLink,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  Download,
  Boxes,
} from 'lucide-react';
import { CANVA_LINKS, PUR_INVENTORY_URL } from '../../data/guidebookData';
import { CbpBrandManualSection } from '../CbpBrandManualSection';

export const Chapter4Pekerjaan: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'pagi' | 'scancopy' | 'arsip' | 'konten'>('pagi');

  const pagiRef = useRef<HTMLDivElement>(null);
  const scancopyRef = useRef<HTMLDivElement>(null);
  const arsipRef = useRef<HTMLDivElement>(null);
  const kontenRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>, sectionId: 'pagi' | 'scancopy' | 'arsip' | 'konten') => {
    setActiveSection(sectionId);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ScrollSpy to highlight active section on scroll
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === pagiRef.current) setActiveSection('pagi');
            else if (entry.target === scancopyRef.current) setActiveSection('scancopy');
            else if (entry.target === arsipRef.current) setActiveSection('arsip');
            else if (entry.target === kontenRef.current) setActiveSection('konten');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-55px 0px -65% 0px',
      }
    );

    if (pagiRef.current) observer.observe(pagiRef.current);
    if (scancopyRef.current) observer.observe(scancopyRef.current);
    if (arsipRef.current) observer.observe(arsipRef.current);
    if (kontenRef.current) observer.observe(kontenRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-full px-5 py-5 text-[#102C54] pb-24">
      {/* Chapter Title */}
      <div className="mb-4">
        <span className="text-3xl font-extrabold text-[#084CAC] tracking-tight block">
          04
        </span>
        <h1 className="text-2xl font-extrabold text-[#084CAC] mt-1 leading-snug">
          Kerjaan sehari-hari
        </h1>
      </div>

      {/* Horizontal Shortcut Pills - Clean Sticky Navbar */}
      <div className="sticky top-0 z-30 -mx-5 px-5 py-3 bg-white/95 backdrop-blur-md border-b border-[#084CAC]/15 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar mb-6">
        <button
          onClick={() => scrollTo(pagiRef, 'pagi')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
            activeSection === 'pagi'
              ? 'bg-[#084CAC] text-white shadow-xs scale-102'
              : 'bg-[#EDF4FF] text-[#084CAC] hover:bg-[#dbe7ff]'
          }`}
        >
          Pagi
        </button>
        <button
          onClick={() => scrollTo(scancopyRef, 'scancopy')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
            activeSection === 'scancopy'
              ? 'bg-[#084CAC] text-white shadow-xs scale-102'
              : 'bg-[#EDF4FF] text-[#084CAC] hover:bg-[#dbe7ff]'
          }`}
        >
          Scan / Copy
        </button>
        <button
          onClick={() => scrollTo(arsipRef, 'arsip')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
            activeSection === 'arsip'
              ? 'bg-[#084CAC] text-white shadow-xs scale-102'
              : 'bg-[#EDF4FF] text-[#084CAC] hover:bg-[#dbe7ff]'
          }`}
        >
          Arsip
        </button>
        <button
          onClick={() => scrollTo(kontenRef, 'konten')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
            activeSection === 'konten'
              ? 'bg-[#084CAC] text-white shadow-xs scale-102'
              : 'bg-[#EDF4FF] text-[#084CAC] hover:bg-[#dbe7ff]'
          }`}
        >
          Konten CBP
        </button>
      </div>

      {/* ========================================================
          BAGIAN A: RUTINITAS PAGI
      ======================================================== */}
      <section ref={pagiRef} className="scroll-mt-16 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Bagian A</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Rutinitas Pagi</h2>
        </div>

        {/* 07.40 Highlight Card */}
        <div className="p-4 rounded-2xl bg-[#084CAC] text-white shadow-md flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider block">
              Wajib Hadir Tepat Waktu
            </span>
            <span className="text-3xl font-black tracking-tight text-white block mt-0.5">
              07.40
            </span>
            <p className="text-xs text-blue-100 mt-1">
              Sudah standby di kantor untuk briefing harian
            </p>
          </div>
          <div className="p-3 rounded-2xl bg-white/15 text-white backdrop-blur-xs">
            <Clock size={32} />
          </div>
        </div>

        {/* Step-by-step Pagi */}
        <div className="space-y-2.5">
          <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#EDF4FF] text-[#084CAC] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </div>
            <div className="text-sm leading-relaxed">
              <strong className="text-[#102C54]">Standby di Kantor:</strong> Pukul <strong>07.40</strong> sudah tiba dan standby di kantor bersiap mengikuti briefing.
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#EDF4FF] text-[#084CAC] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </div>
            <div className="text-sm leading-relaxed">
              <strong className="text-[#102C54]">Tanda Briefing:</strong> Lagu{' '}
              <em>"Selamat Pagi Bank Indonesia"</em> diputar di radio kantor sebagai aba-aba briefing dimulai.
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#EDF4FF] text-[#084CAC] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </div>
            <div className="text-sm leading-relaxed">
              <strong className="text-[#102C54]">Berkumpul:</strong> Seluruh tim berkumpul bersama di <strong>tengah ruangan</strong> kantor.
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#EDF4FF] text-[#084CAC] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              4
            </div>
            <div className="text-sm leading-relaxed">
              <strong className="text-[#102C54]">Pembagian WGF & Cek Kehadiran:</strong> Ikuti pembagian WGF harian dan periksa siapa rekan yang sedang berstatus cuti.
              <p className="text-xs text-slate-500 mt-1 italic">
                *WGF dalam catatan ini merujuk pada tugas harian karyawan PUR. Kepanjangan resminya belum dikonfirmasi.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#EDF4FF] text-[#084CAC] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              5
            </div>
            <div className="text-sm leading-relaxed">
              <strong className="text-[#102C54]">Pantau Ex-Food:</strong> Setelah briefing selesai, sekitar <strong>pukul 08.00 lewat</strong>, pantau kedatangan paket ex-food di lobi.
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#EDF4FF] text-[#084CAC] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              6
            </div>
            <div className="text-sm leading-relaxed">
              <strong className="text-[#102C54]">Simpan Kontak Kurir:</strong> Minta nomor kontak pengantar makanan agar tidak perlu bolak-balik memeriksa ke lobi.
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#EDF4FF] text-[#084CAC] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              7
            </div>
            <div className="text-sm leading-relaxed">
              <strong className="text-[#102C54]">Buat To-Do List:</strong> Susun daftar tugas harian Anda agar pekerjaan terselesaikan teratur dan terencana.
            </div>
          </div>
        </div>

        {/* Note scan/copy timing */}
        <div className="p-3.5 rounded-xl bg-[#EDF4FF] border border-[#084CAC]/20 text-xs text-[#102C54] leading-relaxed">
          <span className="font-bold text-[#084CAC]">Catatan penting:</span> Scan/copy <strong>tidak wajib</strong> langsung dilakukan sesudah pembagian ex-food, karena tidak ada urutan kaku antara kedua tugas tersebut.
        </div>
      </section>

      {/* ========================================================
          BAGIAN B: PEMBAGIAN EX-FOOD
      ======================================================== */}
      <section className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Bagian B</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Pembagian Ex-Food</h2>
        </div>

        {/* Aturan Penerima Card */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs">
          <h3 className="text-sm font-bold text-[#084CAC] mb-2.5 flex items-center gap-1.5">
            <Users size={16} />
            <span>Ketentuan Penerima Ex-Food</span>
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-[#084CAC] font-bold">•</span>
              <span><strong>Hanya untuk pegawai tetap.</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Pak Oddang</strong> bukan pegawai.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Kak Bombom</strong> dan <strong>Kak Mawan</strong> berstatus swakelola.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>Pegawai yang berstatus <strong>cuti tetapi tetap datang</strong> ke kantor, tetap berhak mendapat ex-food.</span>
            </li>
          </ul>
        </div>

        {/* Langkah Pembagian */}
        <div className="p-4 rounded-2xl bg-[#EDF4FF] border border-[#084CAC]/20 shadow-xs">
          <h3 className="text-sm font-bold text-[#084CAC] mb-3 flex items-center gap-1.5">
            <UtensilsCrossed size={16} />
            <span>Langkah Pembagian Ex-Food</span>
          </h3>
          <ol className="space-y-2.5 text-sm text-[#102C54]">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#084CAC] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span><strong>Hitung total terlebih dahulu</strong> sebelum dibagikan ke meja.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#084CAC] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span>Bagikan sesuai dengan data pada <strong>spreadsheet</strong>.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#084CAC] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span><strong>Ambil satu per satu</strong> dari kresek, jangan diangkat sekaligus banyak.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#084CAC] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
              <span>Untuk pegawai berjabatan: <strong>letakkan di meja samping dekat teko air</strong>, jangan di meja laptop.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#084CAC] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
              <span>Jika pembagian belum jelas, segera tanyakan langsung kepada <strong>Kak Mawan</strong>.</span>
            </li>
          </ol>
        </div>

        {/* Clarification note on sisa WGF */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
          <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Catatan Data:</strong>
            Sumber catatan menyebut <em>"sisa WGF yang nggak jelas"</em>. Maksud istilah ini belum pasti dan ditandai sebagai detail yang perlu dikonfirmasi langsung dengan pembimbing magang.
          </div>
        </div>
      </section>

      {/* ========================================================
          BAGIAN C: SCAN DAN COPY DOKUMEN
      ======================================================== */}
      <section ref={scancopyRef} className="scroll-mt-16 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Bagian C</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Scan dan Copy Dokumen</h2>
        </div>

        {/* 2 Mesin Side-by-Side Cards */}
        <div className="grid grid-cols-1 gap-3">
          {/* Opsi 1: Mesin Printer */}
          <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#EDF4FF] text-[#084CAC]">
                Pilihan 1
              </span>
              <span className="text-xs text-slate-500 font-medium">Kualitas Tinggi</span>
            </div>
            <h3 className="text-base font-bold text-[#102C54] mb-1">
              Mesin Printer
            </h3>
            <ul className="text-sm text-slate-700 space-y-1.5 list-disc list-inside">
              <li>Gunakan dengan <strong>akses akun pegawai</strong>.</li>
              <li>Hasil cetaknya <strong>lebih bagus</strong> dan warna lebih jelas.</li>
              <li>Bisa dipakai scan, namun pengiriman hasil scan <strong>agak lama</strong>.</li>
            </ul>
          </div>

          {/* Opsi 2: Mesin Fotokopi Depan Khazanah */}
          <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 text-[#084CAC]">
                Pilihan 2
              </span>
              <span className="text-xs text-emerald-600 font-semibold">Scan Cepat</span>
            </div>
            <h3 className="text-base font-bold text-[#102C54] mb-1">
              Mesin Fotokopi Depan Khazanah Arsip
            </h3>
            <ul className="text-sm text-slate-700 space-y-1.5 list-disc list-inside">
              <li>Dapat digunakan untuk <strong>scan yang lebih cepat</strong>.</li>
              <li><strong>Harus membawa flashdisk sendiri</strong> untuk menyimpan file hasil scan.</li>
            </ul>
          </div>
        </div>

        {/* Pengiriman & Copy Dokumen */}
        <div className="p-4 rounded-2xl bg-[#EDF4FF] border border-[#084CAC]/20 text-sm space-y-2">
          <div>
            <strong className="text-[#084CAC] block font-bold">Pengiriman Hasil Scan:</strong>
            <p className="text-slate-700">
              Hasil scan dapat dikirimkan melalui <strong>email pegawai</strong> yang bersangkutan atau via <strong>WhatsApp</strong>.
            </p>
          </div>
          <div className="pt-2 border-t border-[#084CAC]/15">
            <strong className="text-[#084CAC] block font-bold">Cara Copy Dokumen:</strong>
            <p className="text-slate-700">
              Teknik dan tata cara pengoperasian mesin fotokopi akan dipelajari melalui <strong>praktik langsung di tempat</strong> bersama pembimbing.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          BAGIAN D: PENGARSIPAN - PENERIMAAN & PEMERIKSAAN AWAL
      ======================================================== */}
      <section ref={arsipRef} className="scroll-mt-16 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Bagian D & E</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Pengarsipan Dokumen</h2>
        </div>

        {/* Workflow Overview Banner */}
        <div className="p-4 rounded-2xl bg-[#084CAC] text-white shadow-md">
          <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider block mb-1">
            Alur Kerja Pengarsipan
          </span>
          <div className="text-xs font-medium leading-relaxed bg-white/10 p-2.5 rounded-xl backdrop-blur-xs flex items-center justify-between flex-wrap gap-1">
            <span>Input Surat</span>
            <span>→</span>
            <span>Cetak Dafis</span>
            <span>→</span>
            <span>Cetak Kuping</span>
            <span>→</span>
            <span>Pisahkan Berkas</span>
            <span>→</span>
            <span>Finishing</span>
            <span>→</span>
            <span>Penyimpanan</span>
          </div>
        </div>

        {/* Reminder Loker Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-xs flex items-start gap-3">
          <AlertTriangle size={22} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm text-amber-900 leading-snug">
            <strong className="font-extrabold block text-amber-950 mb-0.5">
              PENTING: Cek Status Loker!
            </strong>
            Cek status loker sebelum mencetak label. <strong>Jangan gunakan loker yang penuh atau berstatus error.</strong>
          </div>
        </div>

        {/* Penerimaan dan Penamaan Berkas */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-[#084CAC] flex items-center gap-2">
            <FolderOpen size={18} />
            <span>Penerimaan & Pemeriksaan Awal</span>
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-[#084CAC] font-bold">1.</span>
              <span>Dokumen diserahkan langsung oleh pegawai.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#084CAC] font-bold">2.</span>
              <span>Untuk berkas FC yang tersedia, koordinasikan dengan <strong>Kak Hamid</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#084CAC] font-bold">3.</span>
              <span>Periksa surat tugas untuk mengetahui nama dan deskripsi kegiatannya.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#084CAC] font-bold">4.</span>
              <span>Nama berkas di BI RMS <strong>mengikuti kegiatan pada surat tugas</strong> (singkat & jelas).</span>
            </li>
          </ul>

          <div className="p-3 rounded-xl bg-[#EDF4FF] text-xs space-y-1 text-[#102C54]">
            <span className="font-bold text-[#084CAC] block">Contoh Penamaan Berkas:</span>
            <p>• Pengiriman uang: <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-[#084CAC]">Remise + dd/mm/yy</code></p>
            <p>• Sosialisasi: <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-[#084CAC]">Sosialisasi CBP ke Kabupaten Sinjai 12–14 Sept</code></p>
          </div>

          <p className="text-xs text-slate-500 italic">
            *Pemisahan berkas biasa dan rahasia perlu dipelajari melalui latihan langsung di meja kerja.
          </p>
        </div>

        {/* Bagian E: Akses Akun Pegawai */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-[#084CAC] flex items-center gap-2">
            <Lock size={18} />
            <span>Akses Akun Pegawai</span>
          </h3>
          <p className="text-sm text-slate-700">
            Selalu <strong>minta izin terlebih dahulu</strong> sebelum menggunakan akun pegawai:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#EDF4FF] border border-[#084CAC]/20 font-medium text-[#102C54]">
              <span className="font-bold text-[#084CAC] block">1. Kak Aswan</span>
              <span>Paling sering digunakan (wajib izin dulu)</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-[#102C54]">
              <span className="font-bold text-[#084CAC] block">2. Pak Haruna</span>
              <span>Opsi akun cadangan</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-[#102C54]">
              <span className="font-bold text-[#084CAC] block">3. Kak Boby</span>
              <span>Opsi akun cadangan</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-[#102C54]">
              <span className="font-bold text-[#084CAC] block">4. Pak Ardi / Pak Hamid</span>
              <span>Jika tidak sedang sibuk</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          BAGIAN F: INPUT BI RMS - ARSIP FC
      ======================================================== */}
      <section className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Bagian F</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Input BI RMS: Arsip FC</h2>
        </div>

        {/* Key-Value Parameter Table */}
        <div className="overflow-hidden rounded-2xl border border-[#EDF4FF] bg-white shadow-xs">
          <div className="bg-[#084CAC] px-4 py-2.5 text-white text-xs font-bold uppercase tracking-wider flex justify-between">
            <span>Kolom Parameter</span>
            <span>Nilai Input BI RMS</span>
          </div>

          <div className="divide-y divide-slate-100 text-sm">
            <div className="p-3.5 flex justify-between items-center bg-[#EDF4FF]/30">
              <span className="font-semibold text-slate-600">Kontainer</span>
              <span className="font-bold text-[#084CAC] text-right">Pilih yang kosong (contoh: 0302)*</span>
            </div>

            <div className="p-3.5 flex justify-between items-center">
              <span className="font-semibold text-slate-600">Lokasi Simpan</span>
              <code className="font-mono font-bold bg-[#EDF4FF] text-[#084CAC] px-2 py-0.5 rounded text-xs">
                MKS/SPDU/02
              </code>
            </div>

            <div className="p-3.5 flex justify-between items-center bg-[#EDF4FF]/30">
              <span className="font-semibold text-slate-600">Klasifikasi</span>
              <span className="text-slate-800 text-xs text-right">Salin kode sesuai (tanyakan Pak Ardi/Hamid)</span>
            </div>

            <div className="p-3.5 flex justify-between items-center">
              <span className="font-semibold text-slate-600">Nama Berkas</span>
              <span className="font-medium text-slate-800 text-xs text-right">Sesuai kegiatan ST (ex: Remise + tgl)</span>
            </div>

            <div className="p-3.5 flex justify-between items-center bg-[#EDF4FF]/30">
              <span className="font-semibold text-slate-600">Kata Kunci</span>
              <span className="font-medium text-slate-800 text-xs">Contoh: "Surat Tugas"</span>
            </div>

            <div className="p-3.5 flex justify-between items-center">
              <span className="font-semibold text-slate-600">Jenis Berkas</span>
              <span className="font-bold text-slate-800">Folder</span>
            </div>

            <div className="p-3.5 flex justify-between items-center bg-[#EDF4FF]/30">
              <span className="font-semibold text-slate-600">Sifat Berkas</span>
              <span className="font-bold text-slate-800">Biasa**</span>
            </div>

            <div className="p-3.5 flex justify-between items-center">
              <span className="font-semibold text-slate-600">Validator</span>
              <span className="font-bold text-[#084CAC] text-xs text-right">Pak Fadli Muin</span>
            </div>
          </div>
        </div>

        {/* Pending confirmations notice */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
          <p><strong>*Catatan 0302:</strong> Perlu dikonfirmasi sebagai kode kontainer.</p>
          <p><strong>**Catatan Sifat Berkas:</strong> Jangan terapkan sifat "Biasa" otomatis pada berkas rahasia; mintalah arahan pegawai.</p>
          <p><strong>***Catatan Validator:</strong> Validator resmi yang dipilih saat penginputan adalah <strong>Pak Fadli Muin</strong>.</p>
        </div>
      </section>

      {/* ========================================================
          BAGIAN G: ARSIP KHAZANAH - LABEL SAMPUL
      ======================================================== */}
      <section className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Bagian G</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Arsip Khazanah: Label Sampul</h2>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-3">
          <div className="text-sm space-y-2">
            <div className="flex items-start justify-between">
              <span className="text-slate-500 font-medium">Keterangan Sampul:</span>
              <span className="font-bold text-[#084CAC] text-right text-xs">
                "Surat Tugas & BA" / "ST, Laporan & Lainnya" / "Kastip"
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Periode:</span>
              <span className="font-semibold text-slate-700 text-xs">Tambahkan periode/tahun</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Kata Kunci:</span>
              <span className="font-semibold text-slate-700 text-xs">"Surat Tugas" (+ kata lain jika relevan)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Jenis File:</span>
              <span className="font-bold text-slate-800 text-xs">Ordner</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Sifat:</span>
              <span className="font-bold text-slate-800 text-xs">Biasa</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Validator:</span>
              <span className="font-bold text-[#084CAC] text-xs">Pak Fadli Muin</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Kontainer:</span>
              <span className="font-semibold text-slate-700 text-xs">Rak yang belum penuh</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Lokasi Khazanah:</span>
              <code className="font-mono font-bold bg-[#EDF4FF] text-[#084CAC] px-2 py-0.5 rounded text-xs">
                SP/DU/2
              </code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Kode Klasifikasi:</span>
              <span className="font-semibold text-slate-700 text-xs">PO, SHUM, atau opsi sesuai</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-xs text-amber-800 bg-amber-50/70 p-2.5 rounded-xl">
            <strong>Perhatian Format Lokasi:</strong> Penulisan lokasi pada FC (<code className="font-mono">MKS/SPDU/02</code>) dan Khazanah (<code className="font-mono">SP/DU/2</code>) dipertahankan sesuai catatan sumber, dan perbedaan ini perlu dikonfirmasi.
          </div>
        </div>
      </section>

      {/* ========================================================
          BAGIAN H, I, J: CETAK DAFIS, LABEL KUPING & PROSES PRINT
      ======================================================== */}
      <section className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Bagian H, I & J</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Cetak & Printing</h2>
        </div>

        {/* Cetak Dafis */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs">
          <h3 className="text-sm font-bold text-[#084CAC] mb-3 flex items-center gap-2">
            <FileText size={18} />
            <span>Cetak Daftar Isi Berkas (Dafis)</span>
          </h3>
          <ol className="space-y-1.5 text-xs text-slate-700 list-decimal list-inside">
            <li>Buka menu <strong>Cetak → Daftar Isi Berkas</strong>.</li>
            <li>Pilih sections / dokumen sesuai data.</li>
            <li>Pilih <strong>Cetak</strong>.</li>
            <li>Pilih <strong>Share → PDF</strong>.</li>
            <li>Pilih <strong>Export</strong>.</li>
          </ol>
        </div>

        {/* Cetak Label / Kuping */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs">
          <h3 className="text-sm font-bold text-[#084CAC] mb-3 flex items-center gap-2">
            <Printer size={18} />
            <span>Cetak Label Berkas / Kuping (10 Langkah)</span>
          </h3>
          <ol className="space-y-1.5 text-xs text-slate-700 list-decimal list-inside">
            <li>Buka menu <strong>Cetak → Label Berkas</strong>.</li>
            <li>Isi tanggal awal dan akhir.</li>
            <li>Pilih <strong>Cetak</strong>.</li>
            <li>Pilih <strong>Share → Excel (97–2003)</strong>.</li>
            <li>Pilih <strong>Export</strong>.</li>
            <li>Buka file di Microsoft Excel.</li>
            <li>Pilih area label dan terapkan <strong>Outside Border</strong>.</li>
            <li>Tekan tombol keyboard <strong>Ctrl + P</strong>.</li>
            <li>Buka menu <strong>Page Setup</strong>.</li>
            <li>Atur skala ke <strong>85%</strong>, lalu klik <strong>OK</strong>.</li>
          </ol>
        </div>

        {/* Proses Print */}
        <div className="p-4 rounded-2xl bg-[#EDF4FF] border border-[#084CAC]/20 text-xs text-[#102C54] space-y-1.5">
          <strong className="text-[#084CAC] text-sm block">Proses Print:</strong>
          <p>1. Gunakan akun yang telah disimpan untuk print.</p>
          <p>2. Informasi akses mengikuti arahan pegawai dan grup internal.</p>
          <p>3. Pilih opsi print di komputer.</p>
          <p>4. <strong>Cetak daftar isi dan label sekaligus</strong> untuk efisiensi.</p>
        </div>
      </section>

      {/* ========================================================
          BAGIAN K: FINISHING FISIK & PENYIMPANAN
      ======================================================== */}
      <section className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Bagian K</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Finishing Fisik & Penyimpanan</h2>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-3">
          <ol className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#084CAC]">1.</span>
              <span>Gunting label yang telah dicetak rapi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#084CAC]">2.</span>
              <span>Tempel pada <strong>kuping map berwarna pink / orange</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#084CAC]">3.</span>
              <span>Masukkan berkas FC beserta daftar isi yang sudah dicetak ke dalam map.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#084CAC]">4.</span>
              <span>Simpan ke dalam loker sesuai label kode.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#084CAC]">5.</span>
              <span>Jika ada 3 digit di bagian akhir kode, <strong>susun sesuai urutan berkas</strong>.</span>
            </li>
          </ol>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <span className="font-bold text-slate-700 block">Contoh Kode Penyimpanan:</span>
            <p>• <code className="font-mono text-[#084CAC] font-bold">03/02</code> → simpan di loker FC 03/02</p>
            <p>• <code className="font-mono text-[#084CAC] font-bold">03/02/186</code> → loker FC 03/02, urutan berkas ke-186</p>
          </div>

          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#084CAC] font-semibold text-center">
            "Periksa status loker sebelum mencetak label, bukan setelahnya."
          </div>
        </div>

        {/* Banner Link Aplikasi PUR Inventory */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#084CAC] to-[#102C54] text-white shadow-md">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/20 text-white shrink-0 mt-0.5">
              <Boxes size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full">
                  Aplikasi Internal
                </span>
                <span className="text-[10px] text-blue-200">Online Web App</span>
              </div>
              <h4 className="text-base font-extrabold leading-snug">
                Sistem PUR Inventory
              </h4>
              <p className="text-xs text-blue-100 mt-1 leading-relaxed">
                Pantau ketersediaan barang dinas, status loker arsip, dan logistik Unit PUR secara terpadu.
              </p>

              <div className="mt-3.5">
                <a
                  href={PUR_INVENTORY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-extrabold text-xs text-[#084CAC] bg-white hover:bg-blue-50 active:scale-98 transition-all shadow-md cursor-pointer"
                >
                  <Boxes size={15} />
                  <span>Buka pur-inventory.vercel.app</span>
                  <ExternalLink size={14} className="ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          BAGIAN L: KONTEN CBP RUPIAH & TEMPLATE RESMI CANVA
      ======================================================== */}
      <section ref={kontenRef} className="scroll-mt-16 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Bagian L</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Konten CBP Rupiah</h2>
        </div>

        {/* Alur Konten Card */}
        <div className="p-4 rounded-2xl bg-[#EDF4FF] border border-[#084CAC]/20 shadow-xs space-y-2.5">
          <h3 className="text-sm font-bold text-[#084CAC]">
            Alur Pembuatan Konten
          </h3>
          <ol className="space-y-2 text-xs text-[#102C54]">
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#084CAC]">1.</span>
              <span>Ikuti tema konten yang sudah ditentukan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#084CAC]">2.</span>
              <span>Siapkan beberapa alternatif script / konsep.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#084CAC]">3.</span>
              <span>Bahas script dengan <strong>Kak Hardiansyah</strong> (akrab dipanggil <strong>Kak Bombom</strong> / <strong>Kak Hardy</strong>).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#084CAC]">4.</span>
              <span><strong>Persetujuan konten ditentukan oleh beliau.</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#084CAC]">5.</span>
              <span>Jika script sudah disetujui, barulah lanjutkan eksekusi produksi konten.</span>
            </li>
          </ol>

          <p className="text-[11px] text-slate-500 pt-1 border-t border-[#084CAC]/15 italic">
            *Catatan: Siapa yang menentukan tema dan siapa yang melakukan posting ke akun resmi belum disebutkan dalam catatan (akan dikonfirmasi).
          </p>
        </div>

        {/* Brand Manual Resmi Konten CBP Rupiah 2025 */}
        <CbpBrandManualSection />

        {/* Daftar Template Resmi */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-bold text-[#102C54] uppercase tracking-wider px-1">
            Template Resmi (Unit PUR)
          </h3>

          <a
            href="/documents/Formulir_Absensi_Magang_PUR_2026.docx"
            download="Formulir_Absensi_Magang_PUR_2026.docx"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#EDF4FF] hover:border-[#084CAC]/40 hover:bg-[#EDF4FF]/50 shadow-xs transition-all group cursor-pointer"
          >
            <div>
              <span className="text-xs font-semibold text-[#084CAC] uppercase tracking-wide block">
                Dokumen Resmi (.docx)
              </span>
              <strong className="text-sm font-bold text-[#102C54]">
                Template Absensi Magang
              </strong>
            </div>
            <div className="p-2 rounded-xl bg-[#EDF4FF] group-hover:bg-[#084CAC] group-hover:text-white text-[#084CAC] transition-colors">
              <Download size={16} />
            </div>
          </a>

          <a
            href={CANVA_LINKS.feedCbp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#EDF4FF] hover:border-[#084CAC]/40 hover:bg-[#EDF4FF]/50 shadow-xs transition-all group"
          >
            <div>
              <span className="text-xs font-semibold text-[#084CAC] uppercase tracking-wide block">
                Post Instagram
              </span>
              <strong className="text-sm font-bold text-[#102C54]">
                Feed CBP Rupiah
              </strong>
            </div>
            <div className="p-2 rounded-xl bg-[#EDF4FF] group-hover:bg-[#084CAC] group-hover:text-white text-[#084CAC] transition-colors">
              <ExternalLink size={16} />
            </div>
          </a>

          <a
            href={CANVA_LINKS.storyCbp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#EDF4FF] hover:border-[#084CAC]/40 hover:bg-[#EDF4FF]/50 shadow-xs transition-all group"
          >
            <div>
              <span className="text-xs font-semibold text-[#084CAC] uppercase tracking-wide block">
                Story Vertikal
              </span>
              <strong className="text-sm font-bold text-[#102C54]">
                Story CBP Rupiah
              </strong>
            </div>
            <div className="p-2 rounded-xl bg-[#EDF4FF] group-hover:bg-[#084CAC] group-hover:text-white text-[#084CAC] transition-colors">
              <ExternalLink size={16} />
            </div>
          </a>

          <a
            href={CANVA_LINKS.kolaseRecap}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#EDF4FF] hover:border-[#084CAC]/40 hover:bg-[#EDF4FF]/50 shadow-xs transition-all group"
          >
            <div>
              <span className="text-xs font-semibold text-[#084CAC] uppercase tracking-wide block">
                Laporan & Dokumentasi
              </span>
              <strong className="text-sm font-bold text-[#102C54]">
                Kolase Recap Kegiatan
              </strong>
            </div>
            <div className="p-2 rounded-xl bg-[#EDF4FF] group-hover:bg-[#084CAC] group-hover:text-white text-[#084CAC] transition-colors">
              <ExternalLink size={16} />
            </div>
          </a>

          <a
            href={CANVA_LINKS.pamfletSenam}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#EDF4FF] hover:border-[#084CAC]/40 hover:bg-[#EDF4FF]/50 shadow-xs transition-all group"
          >
            <div>
              <span className="text-xs font-semibold text-[#084CAC] uppercase tracking-wide block">
                Acara / Publikasi
              </span>
              <strong className="text-sm font-bold text-[#102C54]">
                Pamflet Senam
              </strong>
            </div>
            <div className="p-2 rounded-xl bg-[#EDF4FF] group-hover:bg-[#084CAC] group-hover:text-white text-[#084CAC] transition-colors">
              <ExternalLink size={16} />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
