import React, { useState, useEffect, useRef } from 'react';
import {
  Palette,
  Type,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  ShieldAlert,
  Sliders,
  Smartphone,
  Video,
  FileCheck,
  Image,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  ExternalLink,
  Upload,
} from 'lucide-react';

export const CbpBrandManualSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'colors' | 'copywriting' | 'typography' | 'dos_donts' | 'unsur'>('colors');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [customPdf, setCustomPdf] = useState<{
    name: string;
    dataUrl: string;
    size: string;
  } | null>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('pur_custom_brand_manual_pdf');
      if (saved) {
        setCustomPdf(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      const fileData = {
        name: file.name,
        dataUrl,
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      };
      setCustomPdf(fileData);
      try {
        localStorage.setItem('pur_custom_brand_manual_pdf', JSON.stringify(fileData));
      } catch (err) {
        console.warn('Storage quota exceeded, kept in memory', err);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadPdf = () => {
    if (customPdf) {
      const link = document.createElement('a');
      link.href = customPdf.dataUrl;
      link.download = customPdf.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const link = document.createElement('a');
      link.href = '/documents/Social_Media_Brand_Manual_CBP_Rupiah_2025.pdf';
      link.download = 'Social_Media_Brand_Manual_CBP_Rupiah_2025.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHex(text);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const primaryColors = [
    { name: 'Blue Family (Utama)', hex: '#1C3281', cmyk: 'C:78 M:61 Y:0 K:49', rgb: '28, 50, 129', role: 'Warna latar wajib seluruh media utama' },
    { name: 'Red Family (Aksen)', hex: '#CF1A25', cmyk: 'C:0 M:87 Y:82 K:19', rgb: '207, 26, 37', role: 'Aksen desain visual & penegas pesan' },
    { name: 'White Family (Teks)', hex: '#FFFFFF', cmyk: 'C:0 M:0 Y:0 K:0', rgb: '255, 255, 255', role: 'Warna teks utama di atas latar biru' },
    { name: 'Purple Family (Sekunder)', hex: '#800080', cmyk: 'C:0 M:100 Y:0 K:50', rgb: '128, 0, 128', role: 'Aksen sekunder pendukung' },
  ];

  const serambiColors = [
    { name: 'Dark Green (Latar Serambi)', hex: '#143834', role: 'Background utama acara Serambi Ramadhan' },
    { name: 'Gold (Judul & Aksen)', hex: '#D2B848', role: 'Font judul dan hiasan emas' },
    { name: 'Dark Blue', hex: '#194257', role: 'Percampuran gradasi latar' },
  ];

  const forbiddenColors = [
    { name: 'Green Standar', hex: '#16a34a' },
    { name: 'Brown / Cokelat', hex: '#78350f' },
    { name: 'Lime Green', hex: '#84cc16' },
    { name: 'Mint Green', hex: '#6ee7b7' },
    { name: 'Bright Orange', hex: '#ea580c' },
    { name: 'Yellow Terang', hex: '#eab308' },
  ];

  return (
    <div className="rounded-3xl border-2 border-[#1C3281]/25 bg-white p-4 sm:p-5 shadow-md">
      {/* Header Badge & Title */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1C3281] text-white text-[11px] font-extrabold uppercase tracking-wide">
            <Sparkles size={12} />
            <span>Brand Manual 2025</span>
          </div>
          <h3 className="text-base font-extrabold text-[#102C54] mt-1.5 leading-snug">
            Social Media Brand Manual CBP Rupiah
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Panduan resmi standar visual, copywriting, dan identitas konten Bank Indonesia.
          </p>
        </div>
      </div>

      {/* Featured PDF Download Action Card */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#1C3281] to-[#084CAC] text-white shadow-sm mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-xs text-white shrink-0">
            <FileText size={24} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full">
                Dokumen Resmi PDF
              </span>
              <span className="text-[10px] text-blue-200">2025</span>
            </div>
            <strong className="text-sm font-bold block mt-0.5">
              {customPdf ? customPdf.name : 'Social Media Brand Manual CBP (PDF)'}
            </strong>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadPdf}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-[#1C3281] hover:bg-slate-100 active:scale-98 font-extrabold text-xs transition-all shadow-md cursor-pointer"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </button>

          <a
            href={customPdf ? customPdf.dataUrl : '/documents/Social_Media_Brand_Manual_CBP_Rupiah_2025.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 active:scale-98 text-white font-bold text-xs transition-all border border-white/30 cursor-pointer"
            title="Buka PDF di Tab Baru"
          >
            <ExternalLink size={14} />
            <span>Buka</span>
          </a>

          <input
            type="file"
            ref={pdfInputRef}
            onChange={handlePdfUpload}
            accept=".pdf"
            className="hidden"
          />

          <button
            onClick={() => pdfInputRef.current?.click()}
            className="p-2.5 rounded-xl bg-white/15 hover:bg-white/25 active:scale-98 text-white transition-all border border-white/30 cursor-pointer"
            title="Upload file PDF versi Anda sendiri"
          >
            <Upload size={14} />
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 p-1 rounded-2xl bg-[#EDF4FF] border border-[#1C3281]/15 mb-4 text-xs font-bold">
        <button
          onClick={() => setActiveTab('colors')}
          className={`py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeTab === 'colors'
              ? 'bg-[#1C3281] text-white shadow-xs'
              : 'text-[#102C54] hover:bg-white/60'
          }`}
        >
          <Palette size={13} />
          <span>Warna</span>
        </button>

        <button
          onClick={() => setActiveTab('copywriting')}
          className={`py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeTab === 'copywriting'
              ? 'bg-[#1C3281] text-white shadow-xs'
              : 'text-[#102C54] hover:bg-white/60'
          }`}
        >
          <MessageSquare size={13} />
          <span>Copywriting</span>
        </button>

        <button
          onClick={() => setActiveTab('typography')}
          className={`py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeTab === 'typography'
              ? 'bg-[#1C3281] text-white shadow-xs'
              : 'text-[#102C54] hover:bg-white/60'
          }`}
        >
          <Type size={13} />
          <span>Tipografi</span>
        </button>

        <button
          onClick={() => setActiveTab('dos_donts')}
          className={`py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeTab === 'dos_donts'
              ? 'bg-[#1C3281] text-white shadow-xs'
              : 'text-[#102C54] hover:bg-white/60'
          }`}
        >
          <ShieldAlert size={13} />
          <span>Do's & Don'ts</span>
        </button>

        <button
          onClick={() => setActiveTab('unsur')}
          className={`col-span-2 sm:col-span-1 py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeTab === 'unsur'
              ? 'bg-[#1C3281] text-white shadow-xs'
              : 'text-[#102C54] hover:bg-white/60'
          }`}
        >
          <BookOpen size={13} />
          <span>Unsur CBP</span>
        </button>
      </div>

      {/* ========================================================
          TAB 1: WARNA RESMI
      ======================================================== */}
      {activeTab === 'colors' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div>
            <h4 className="text-xs font-bold text-[#102C54] uppercase tracking-wider mb-2">
              Primary Colors (Wajib Digunakan)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {primaryColors.map((c) => (
                <div
                  key={c.hex}
                  className="p-3 rounded-2xl border border-slate-200 bg-slate-50 flex items-center gap-3 shadow-xs"
                >
                  <div
                    className="w-12 h-12 rounded-xl shadow-xs shrink-0 border border-black/10 flex items-center justify-center font-mono text-[10px] font-bold"
                    style={{ backgroundColor: c.hex, color: c.hex === '#FFFFFF' ? '#333' : '#FFF' }}
                  >
                    {c.hex}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <strong className="text-xs font-bold text-slate-800 truncate block">
                        {c.name}
                      </strong>
                      <button
                        onClick={() => copyToClipboard(c.hex)}
                        className="text-[10px] text-blue-600 hover:text-blue-800 flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-50 border border-blue-200 shrink-0 cursor-pointer"
                      >
                        {copiedHex === c.hex ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                        <span>{copiedHex === c.hex ? 'Disalin' : 'Salin'}</span>
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono block mt-0.5">
                      {c.cmyk}
                    </span>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-tight">
                      {c.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tematik Serambi */}
          <div className="p-3.5 rounded-2xl bg-[#EDF4FF] border border-[#1C3281]/20">
            <span className="text-xs font-extrabold text-[#1C3281] block mb-2">
              🌙 Palet Tematik Event: "SERAMBI" (Ramadan & Idulfitri)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {serambiColors.map((s) => (
                <div key={s.hex} className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-md border border-black/10" style={{ backgroundColor: s.hex }} />
                    <code className="font-mono text-[11px] font-bold text-[#1C3281]">{s.hex}</code>
                  </div>
                  <strong className="text-slate-800 block text-[11px]">{s.name}</strong>
                  <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{s.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Warna yang DILARANG */}
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-xs mb-2">
              <XCircle size={15} />
              <span>Warna yang DILARANG pada Elemen Desain Utama</span>
            </div>
            <p className="text-[11px] text-rose-900 mb-2 leading-relaxed">
              Hindari warna-warna berikut untuk elemen desain atau font reguler demi menjaga konsistensi identitas brand:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {forbiddenColors.map((fc) => (
                <span
                  key={fc.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-rose-700 text-[11px] font-semibold border border-rose-200 line-through decoration-rose-500"
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: fc.hex }} />
                  {fc.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: COPYWRITING & TONE OF VOICE
      ======================================================== */}
      {activeTab === 'copywriting' && (
        <div className="space-y-4 animate-in fade-in duration-150 text-xs leading-relaxed">
          {/* Persona Card */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#EDF4FF] to-blue-50 border border-[#1C3281]/20">
            <span className="text-xs font-extrabold text-[#1C3281] uppercase tracking-wide block mb-1">
              Formula Persona Brand CBP (Target Umur 18 - 34 Tahun)
            </span>
            <p className="text-slate-700 mb-3">
              Karakter akun sosial media CBP Rupiah dibangun dari perpaduan dua figur:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-white border border-blue-200">
                <strong className="text-[#1C3281] block text-xs">🎓 Persona Jerome Polin</strong>
                <span className="text-[11px] text-slate-500 block mb-1 font-semibold">Freedom • Sage • Knowledge</span>
                <p className="text-[11px] text-slate-600">
                  Cerdas, edukatif, suka berbagi ilmu finansial dan fakta uang Rupiah dengan cara terstruktur.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-blue-200">
                <strong className="text-[#1C3281] block text-xs">😂 Persona Fadil Jaidi</strong>
                <span className="text-[11px] text-slate-500 block mb-1 font-semibold">Social • Pleasure • Jester</span>
                <p className="text-[11px] text-slate-600">
                  Humoris, akrab, santai, ceplas-ceplos, dan sangat relatable dengan keseharian audiens muda.
                </p>
              </div>
            </div>
            <p className="text-[11px] text-[#1C3281] font-semibold mt-2.5">
              Panggilan resmi admin: <span className="underline font-black">"minRu"</span> (Mimin Rupiah).
            </p>
          </div>

          {/* Tone of Voice Rules */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <strong className="text-xs font-bold text-slate-800 block">
              Prinsip Penulisan Tone of Voice:
            </strong>
            <ul className="space-y-1.5 text-slate-700 text-[11px]">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bahasa Asyik & Santai:</strong> Seperti lagi ngobrol santai ("Yuk, bareng-bareng kita ngerti Rupiah, biar makin cinta dan bangga!").</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Fakta dengan Komedi:</strong> "Pacar aja dirawat, masak uang Rupiah enggak sih? Gini nih, cara simple ngerawat Rupiah tercinta."</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Relatable dengan Keseharian:</strong> "Coba deh hitung, kira-kira berapa kali kalian udah pakai uang receh buat beli kopsus gula aren?"</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Tren Sopan:</strong> "Lengah dikit habis gajian, pesanan anda sedang kami proses."</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Akhiri dengan CTA:</strong> Ajak interaksi audiens, misal "Kalian tim nabung di bank atau investasi online?"</span>
              </li>
            </ul>
          </div>

          {/* Contoh Caption Benar vs Salah */}
          <div className="space-y-2">
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1.5 mb-1">
                <CheckCircle2 size={14} />
                <span>Contoh Caption yang BENAR (Santai & Relatable)</span>
              </span>
              <p className="text-[11px] text-emerald-950 italic">
                "Antara investasi masa depan, atau investasi lemari sepatu. Sobat Rupiah, siapa nih yang relate? 🤔 #BelanjaBijak #PahamRupiah #CBPRupiah #CintaBanggaPahamRupiah #BankIndonesia"
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200">
              <span className="text-[11px] font-bold text-rose-800 flex items-center gap-1.5 mb-1">
                <XCircle size={14} />
                <span>Contoh Caption yang SALAH (Terlalu Kaku & Formal)</span>
              </span>
              <p className="text-[11px] text-rose-950 italic">
                "Mengatur keuangan dengan baik adalah kunci untuk mencapai stabilitas finansial. Oleh karena itu, penting untuk menahan godaan konsumtif..." (Terlalu kaku, tidak relevan dengan bahasa anak muda).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 3: TIPOGRAFI & UKURAN KANVAS
      ======================================================== */}
      {activeTab === 'typography' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          {/* Font Family Rules */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-[#102C54] uppercase tracking-wider">
              3 Font Resmi Konten CBP
            </h4>

            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#1C3281] uppercase">Headings / Judul Utama</span>
                <span className="text-[10px] font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded">Bold (65pt)</span>
              </div>
              <strong className="text-lg font-black tracking-tight text-slate-900 block mt-1">
                League Spartan
              </strong>
              <p className="text-[11px] text-slate-500 mt-0.5">Digunakan untuk judul poster, cover feeds, dan headline reels.</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#1C3281] uppercase">Sub-Headings</span>
                <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Regular</span>
              </div>
              <strong className="text-base font-bold text-slate-800 block mt-1">
                Montserrat Regular
              </strong>
              <p className="text-[11px] text-slate-500 mt-0.5">Digunakan untuk sub-judul, poin pembahasan, atau penjelas singkat.</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#1C3281] uppercase">Body Text / Keterangan</span>
                <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Light</span>
              </div>
              <strong className="text-sm font-normal text-slate-700 block mt-1">
                Open Sans Light
              </strong>
              <p className="text-[11px] text-slate-500 mt-0.5">Digunakan untuk paragraf panjang, isi kutipan, atau detail teks pendukung.</p>
            </div>
          </div>

          {/* Standar Ukuran Kanvas */}
          <div className="p-4 rounded-2xl bg-[#EDF4FF] border border-[#1C3281]/20">
            <h4 className="text-xs font-bold text-[#1C3281] uppercase tracking-wider mb-2.5">
              Standar Resolusi Kanvas Desain
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <strong className="text-slate-800 block">Instagram Feed (Post / Carousel)</strong>
                <span className="font-mono text-xs font-bold text-[#1C3281]">1080 x 1350 px (4:5)</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Rasio vertikal terbaik untuk eksplorasi feed IG</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <strong className="text-slate-800 block">Instagram Reels / Story</strong>
                <span className="font-mono text-xs font-bold text-[#1C3281]">1080 x 1920 px (9:16)</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Layar penuh vertikal untuk cover & video</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <strong className="text-slate-800 block">Banner / Backdrop Kegiatan</strong>
                <span className="font-mono text-xs font-bold text-[#1C3281]">1890 x 1134 px (50 x 30 cm)</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Standar cetak spanduk & backdrop panggung</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <strong className="text-slate-800 block">Flyer Brosur Cetak</strong>
                <span className="font-mono text-xs font-bold text-[#1C3281]">1123 x 794 px (29.7 x 21 cm)</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Ukuran brosur edukasi A4 lanskap</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 4: ATURAN LOGO & DO'S AND DON'TS
      ======================================================== */}
      {activeTab === 'dos_donts' && (
        <div className="space-y-4 animate-in fade-in duration-150 text-xs">
          {/* Logo Placement */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <strong className="text-xs font-bold text-[#102C54] block">
              Posisi & Standar Logo Resmi:
            </strong>
            <ul className="space-y-1.5 text-slate-700 text-[11px]">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#1C3281] shrink-0 mt-0.5" />
                <span><strong>Logo Bersanding:</strong> Logo Bank Indonesia (kiri) dan Logo CBP Rupiah (kanan) selalu bersanding di pojok atas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#1C3281] shrink-0 mt-0.5" />
                <span><strong>Versi Warna:</strong> Logo Biru (standar utama pada latar putih/terang), Logo Putih (*Reversed white*) pada latar foto gelap.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#1C3281] shrink-0 mt-0.5" />
                <span><strong>Clear Space:</strong> Beri jarak aman di sekeliling logo setara tinggi huruf (*x-height*).</span>
              </li>
            </ul>
          </div>

          {/* Don'ts Table */}
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2.5">
            <div className="flex items-center gap-1.5 text-rose-800 font-bold">
              <ShieldAlert size={16} />
              <span>Hal yang DILARANG Dilakukan pada Logo:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-rose-950">
              <div className="p-2 rounded-xl bg-white/90 border border-rose-200">
                ❌ <strong>JANGAN</strong> mengubah rasio logo (gepeng/tertarik).
              </div>
              <div className="p-2 rounded-xl bg-white/90 border border-rose-200">
                ❌ <strong>JANGAN</strong> menambahkan outline atau stroke pada logo.
              </div>
              <div className="p-2 rounded-xl bg-white/90 border border-rose-200">
                ❌ <strong>JANGAN</strong> mengubah warna font logo di luar pedoman.
              </div>
              <div className="p-2 rounded-xl bg-white/90 border border-rose-200">
                ❌ <strong>JANGAN</strong> memberi efek glow, drop shadow tebal, atau filter.
              </div>
              <div className="p-2 rounded-xl bg-white/90 border border-rose-200">
                ❌ <strong>JANGAN</strong> menaruh logo pada latar foto yang terlalu ramai.
              </div>
              <div className="p-2 rounded-xl bg-white/90 border border-rose-200">
                ❌ <strong>JANGAN</strong> menambah spasi longgar antar-huruf pada logo.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 5: UNSUR 3D & 5J CBP RUPIAH
      ======================================================== */}
      {activeTab === 'unsur' && (
        <div className="space-y-4 animate-in fade-in duration-150 text-xs">
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
            <span className="text-xs font-black text-[#1C3281] block">
              1. CINTA RUPIAH
            </span>
            <p className="text-slate-700 text-[11px]">
              Menyayangi dan merawat fisik uang Rupiah melalui dua prinsip utama:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
              <div className="p-2.5 rounded-xl bg-white border border-blue-200">
                <strong className="text-[#1C3281] block mb-1">Mengenali dengan 3D:</strong>
                <p className="text-slate-700">• <strong>Dilihat</strong> warna cerah & gambar pahlawan</p>
                <p className="text-slate-700">• <strong>Diraba</strong> tekstur kasar cetak timbul</p>
                <p className="text-slate-700">• <strong>Diterawang</strong> tanda air (watermark)</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-blue-200">
                <strong className="text-[#1C3281] block mb-1">Merawat dengan 5J:</strong>
                <p className="text-slate-700">• <strong>Jangan Dilipat</strong></p>
                <p className="text-slate-700">• <strong>Jangan Dicoret</strong></p>
                <p className="text-slate-700">• <strong>Jangan Distaples</strong></p>
                <p className="text-slate-700">• <strong>Jangan Dibasahi</strong></p>
                <p className="text-slate-700">• <strong>Jangan Diremas</strong></p>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <strong className="text-xs font-bold text-slate-800 block mb-1">
              2. BANGGA RUPIAH
            </strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Memahami Rupiah sebagai simbol kedaulatan bangsa dan satu-satunya alat pembayaran yang sah di seluruh wilayah Negara Kesatuan Republik Indonesia (NKRI).
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <strong className="text-xs font-bold text-slate-800 block mb-1">
              3. PAHAM RUPIAH
            </strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Bijak dalam berbelanja (*Belanja Bijak*), berhemat, menghindari investasi bodong, mendukung produk UMKM lokal, dan mengoptimalkan peran Rupiah dalam menjaga kestabilan ekonomi bangsa.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
