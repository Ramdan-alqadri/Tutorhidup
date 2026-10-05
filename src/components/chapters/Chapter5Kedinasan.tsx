import React, { useRef, useState, useEffect } from 'react';
import {
  ClipboardList,
  Camera,
  Gift,
  CheckCircle,
  Users2,
  Clock,
  Sparkles,
  ExternalLink,
  HeartHandshake,
  AlertCircle,
  FileCheck,
} from 'lucide-react';
import { CANVA_LINKS } from '../../data/guidebookData';
import { AbsensiDocumentSection } from '../AbsensiDocumentSection';

export const Chapter5Kedinasan: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'pra' | 'dinas' | 'after'>('pra');

  const praDinasRef = useRef<HTMLDivElement>(null);
  const dinasRef = useRef<HTMLDivElement>(null);
  const afterDinasRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>, sectionId: 'pra' | 'dinas' | 'after') => {
    setActiveSection(sectionId);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ScrollSpy to highlight active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === praDinasRef.current) setActiveSection('pra');
            else if (entry.target === dinasRef.current) setActiveSection('dinas');
            else if (entry.target === afterDinasRef.current) setActiveSection('after');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-55px 0px -65% 0px',
      }
    );

    if (praDinasRef.current) observer.observe(praDinasRef.current);
    if (dinasRef.current) observer.observe(dinasRef.current);
    if (afterDinasRef.current) observer.observe(afterDinasRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-full px-5 py-5 text-[#102C54] pb-24">
      {/* Chapter Title */}
      <div className="mb-4">
        <span className="text-3xl font-extrabold text-[#084CAC] tracking-tight block">
          05
        </span>
        <h1 className="text-2xl font-extrabold text-[#084CAC] mt-1 leading-snug">
          Siap berangkat, siap membantu.
        </h1>
      </div>

      {/* 3 Shortcut Pills - Clean Sticky Navbar */}
      <div className="sticky top-0 z-30 -mx-5 px-5 py-3 bg-white/95 backdrop-blur-md border-b border-[#084CAC]/15 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar mb-6">
        <button
          onClick={() => scrollTo(praDinasRef, 'pra')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
            activeSection === 'pra'
              ? 'bg-[#084CAC] text-white shadow-xs scale-102'
              : 'bg-[#EDF4FF] text-[#084CAC] hover:bg-[#dbe7ff]'
          }`}
        >
          Pra Dinas
        </button>
        <button
          onClick={() => scrollTo(dinasRef, 'dinas')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
            activeSection === 'dinas'
              ? 'bg-[#084CAC] text-white shadow-xs scale-102'
              : 'bg-[#EDF4FF] text-[#084CAC] hover:bg-[#dbe7ff]'
          }`}
        >
          Dinas
        </button>
        <button
          onClick={() => scrollTo(afterDinasRef, 'after')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
            activeSection === 'after'
              ? 'bg-[#084CAC] text-white shadow-xs scale-102'
              : 'bg-[#EDF4FF] text-[#084CAC] hover:bg-[#dbe7ff]'
          }`}
        >
          After Dinas
        </button>
      </div>

      {/* ========================================================
          BAGIAN 1: PRA DINAS
      ======================================================== */}
      <section ref={praDinasRef} className="scroll-mt-16 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Tahap 1</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Pra Dinas</h2>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-3">
          <p className="text-sm text-slate-600 font-medium">
            Sebelum berangkat ke lokasi kegiatan kedinasan, pastikan 4 hal krusial berikut telah dipersiapkan:
          </p>

          <div className="space-y-2.5">
            {/* Absen Prioritas */}
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#084CAC] text-white shrink-0 mt-0.5">
                <ClipboardList size={18} />
              </div>
              <div className="text-sm">
                <span className="inline-block px-2 py-0.5 rounded-full bg-blue-100 text-[#084CAC] text-[11px] font-extrabold mb-1">
                  Paling Penting!
                </span>
                <strong className="block text-[#102C54]">1. Siapkan Absen / Daftar Hadir</strong>
                <p className="text-slate-600 text-xs mt-0.5">
                  Daftar hadir peserta adalah dokumen pertanggungjawaban kegiatan resmi paling utama.
                </p>
              </div>
            </div>

            {/* Suvenir */}
            <div className="p-3.5 rounded-xl bg-[#EDF4FF]/50 border border-[#EDF4FF] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#084CAC]/15 text-[#084CAC] shrink-0 mt-0.5">
                <Gift size={18} />
              </div>
              <div className="text-sm">
                <strong className="block text-[#102C54]">2. Siapkan Suvenir</strong>
                <p className="text-slate-600 text-xs mt-0.5">
                  Pastikan merchandise dan paket suvenir terhitung sesuai kuota undangan.
                </p>
              </div>
            </div>

            {/* Kamera */}
            <div className="p-3.5 rounded-xl bg-[#EDF4FF]/50 border border-[#EDF4FF] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#084CAC]/15 text-[#084CAC] shrink-0 mt-0.5">
                <Camera size={18} />
              </div>
              <div className="text-sm">
                <strong className="block text-[#102C54]">3. Siapkan Kamera Dokumentasi</strong>
                <p className="text-slate-600 text-xs mt-0.5">
                  Pastikan baterai terisi penuh dan memori penyimpanan mencukupi.
                </p>
              </div>
            </div>

            {/* Cek Ulang Barang */}
            <div className="p-3.5 rounded-xl bg-[#EDF4FF]/50 border border-[#EDF4FF] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#084CAC]/15 text-[#084CAC] shrink-0 mt-0.5">
                <CheckCircle size={18} />
              </div>
              <div className="text-sm">
                <strong className="block text-[#102C54]">4. Periksa Ulang Seluruh Barang Bawaan</strong>
                <p className="text-slate-600 text-xs mt-0.5">
                  Lakukan double-check checklist logistik sebelum meninggalkan kantor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulir & Dokumen Absensi Magang */}
        <AbsensiDocumentSection />
      </section>

      {/* ========================================================
          BAGIAN 2: DINAS (SAAT KEGIATAN)
      ======================================================== */}
      <section ref={dinasRef} className="scroll-mt-16 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Tahap 2</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">Dinas (Saat Kegiatan)</h2>
        </div>

        {/* Primary Mandate Banner */}
        <div className="p-4 rounded-2xl bg-[#084CAC] text-white shadow-md flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-white/20 text-white shrink-0">
            <HeartHandshake size={24} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200 block">
              Prinsip Kerja Utama
            </span>
            <strong className="text-base font-extrabold leading-snug block">
              "Utamakan membantu rekan di unit PUR!"
            </strong>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-3">
          <div className="text-sm space-y-2">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#084CAC] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
              <div>
                <strong className="text-[#102C54]">Komunikasikan Jobdesk ke PIC:</strong>
                <p className="text-slate-600 text-xs mt-0.5">
                  Begitu tiba di lokasi, segera hubungi dan koordinasikan tugas spesifik dengan PIC (Person in Charge) kegiatan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#084CAC] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
              <div>
                <strong className="text-[#102C54]">Tugas yang Biasanya Dilakukan:</strong>
                <ul className="text-xs text-slate-600 mt-1 space-y-1 list-disc list-inside">
                  <li>Menjaga meja registrasi peserta acara.</li>
                  <li>Mengambil dokumentasi foto dan video selama kegiatan berlangsung.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 italic">
            *Catatan: Pembagian tugas mengikuti koordinasi langsung dengan PIC kegiatan. Tidak semua peserta magang harus mengerjakan kedua tugas sekaligus.
          </div>
        </div>
      </section>

      {/* ========================================================
          BAGIAN 3: AFTER DINAS (PASCA KEGIATAN)
      ======================================================== */}
      <section ref={afterDinasRef} className="scroll-mt-16 space-y-4">
        <div className="flex items-center gap-2 text-[#084CAC]">
          <span className="text-xs font-extrabold tracking-widest uppercase">Tahap 3</span>
          <span className="text-xs text-slate-300">•</span>
          <h2 className="text-lg font-bold text-[#102C54]">After Dinas</h2>
        </div>

        {/* Warning Banner: Jangan sampai bermalam */}
        <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-xs flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0">
            <Clock size={24} />
          </div>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-900 block">
              Aturan Waktu Laporan
            </span>
            <strong className="text-base font-extrabold text-amber-950 block leading-snug">
              "Laporan jangan sampai bermalam."
            </strong>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-[#EDF4FF] shadow-xs space-y-4">
          <ol className="space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#084CAC]">1.</span>
              <span>
                <strong>Buat laporan dalam bentuk kolase</strong> dokumentasi kegiatan menggunakan template Canva resmi.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#084CAC]">2.</span>
              <span>
                <strong>Kumpulkan kepada PIC kegiatan</strong> untuk segera dicek.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#084CAC]">3.</span>
              <span>
                <strong>Selesaikan pada hari yang sama</strong>, jangan sampai ditunda hingga esok hari, karena laporan akan langsung diteruskan kepada atasan.
              </span>
            </li>
          </ol>

          {/* Canva Template Button */}
          <div className="pt-2">
            <a
              href={CANVA_LINKS.kolaseRecap}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-bold text-sm text-white shadow-md bg-[#084CAC] hover:bg-[#073c87] active:scale-98 transition-all"
            >
              <FileCheck size={18} />
              <span>Buka Template Kolase</span>
              <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
