export type ChapterId = 
  | 'beranda'
  | 'tentang-unit'
  | 'denah-lokasi'
  | 'pekerjaan'
  | 'kedinasan'
  | 'istilah'
  | 'tips';

export interface ChapterMeta {
  id: ChapterId;
  number: number;
  label: string; // e.g. "01 / Beranda"
  title: string;
  shortTitle: string;
  hash: string;
}

export interface TermItem {
  term: string;
  definition: string;
  category?: string;
  status?: 'confirmed' | 'pending';
}

export interface ShortcutSection {
  id: string;
  label: string;
}
