import { ChapterMeta, TermItem } from '../types';

export const CHAPTERS: ChapterMeta[] = [
  {
    id: 'beranda',
    number: 1,
    label: '01 / Beranda',
    title: 'Tutorial Hidup di Unit PUR',
    shortTitle: 'Beranda',
    hash: 'beranda',
  },
  {
    id: 'tentang-unit',
    number: 2,
    label: '02 / Tentang Unit',
    title: 'Kenalan dengan PUR',
    shortTitle: 'Tentang Unit',
    hash: 'tentang-unit',
  },
  {
    id: 'denah-lokasi',
    number: 3,
    label: '03 / Denah Lokasi',
    title: 'Kenali ruanganmu',
    shortTitle: 'Denah Lokasi',
    hash: 'denah-lokasi',
  },
  {
    id: 'pekerjaan',
    number: 4,
    label: '04 / Pekerjaan',
    title: 'Kerjaan sehari-hari',
    shortTitle: 'Pekerjaan',
    hash: 'pekerjaan',
  },
  {
    id: 'kedinasan',
    number: 5,
    label: '05 / Kedinasan',
    title: 'Siap berangkat, siap membantu.',
    shortTitle: 'Kedinasan',
    hash: 'kedinasan',
  },
  {
    id: 'istilah',
    number: 6,
    label: '06 / Istilah & Singkatan',
    title: 'Bahasa sehari-hari',
    shortTitle: 'Istilah',
    hash: 'istilah',
  },
  {
    id: 'tips',
    number: 7,
    label: '07 / Tips & Catatan Penting',
    title: 'Kecil, tapi penting.',
    shortTitle: 'Tips Penting',
    hash: 'tips',
  },
];

export const CANVA_LINKS = {
  coverReels: 'https://canva.link/npaj6mpio5zmgjf',
  feedCbp: 'https://canva.link/c6fefyyn8y6zwk2',
  storyCbp: 'https://canva.link/bift462m0whaydr',
  kolaseRecap: 'https://canva.link/veq8skkvzfwzqnb',
  pamfletSenam: 'https://canva.link/1ams1oe9onp4ps4',
};

export const PUR_INVENTORY_URL = 'https://pur-inventory.vercel.app';

export const TERMS_LIST: TermItem[] = [
  {
    term: 'PUR',
    definition: 'Pengelolaan Uang Rupiah (Divisi di KPw Bank Indonesia Sulawesi Selatan).',
    status: 'confirmed',
  },
  {
    term: 'CBP',
    definition: 'Digunakan dalam konteks konten dan kegiatan sosialisasi Rupiah (Cinta, Bangga, Paham Rupiah). *Definisi akan dikonfirmasi.',
    status: 'pending',
  },
  {
    term: 'UTLE',
    definition: 'Istilah operasional peredaran uang. Definisi akan dikonfirmasi.',
    status: 'pending',
  },
  {
    term: 'WGF',
    definition: 'Dalam catatan operasional merujuk pada tugas harian karyawan PUR. Kepanjangan resmi belum diberikan (akan dikonfirmasi).',
    status: 'pending',
  },
  {
    term: 'FC',
    definition: 'Digunakan dalam konteks berkas fisik, kontainer arsip, dan loker arsip. Definisi akan dikonfirmasi.',
    status: 'pending',
  },
  {
    term: 'Kuping',
    definition: 'Bagian lipatan/tepi map (berwarna pink/orange) tempat label berkas ditempel; juga dipakai dalam istilah "cetak kuping".',
    status: 'confirmed',
  },
  {
    term: 'Swakelola',
    definition: 'Status kepegawaian yang disebut untuk Kak Mawan dan Kak Bombom. Definisi akan dikonfirmasi.',
    status: 'pending',
  },
  {
    term: 'Dafis',
    definition: 'Daftar Isi Berkas yang dicetak dari sistem BI RMS untuk disertakan ke dalam map arsip.',
    status: 'confirmed',
  },
  {
    term: 'Remise',
    definition: 'Digunakan sebagai nama kegiatan pengiriman uang pada format penamaan berkas di BI RMS (contoh: Remise + dd/mm/yy).',
    status: 'confirmed',
  },
  {
    term: 'Kastip',
    definition: 'Istilah dalam catatan sampul arsip Khazanah (Kas Titipan). Definisi akan dikonfirmasi.',
    status: 'pending',
  },
  {
    term: 'PO & SHUM',
    definition: 'Contoh opsi kode klasifikasi arsip pada sistem BI RMS. Penjelasan rincian akan dikonfirmasi.',
    status: 'pending',
  },
  {
    term: 'PIC',
    definition: 'Person in Charge (Penanggung Jawab kegiatan kedinasan atau pekerjaan).',
    status: 'confirmed',
  },
];
