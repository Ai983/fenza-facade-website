// Every image used by the Journal lives in journal-images.json, keyed by a slot id ("stick-hero",
// "stick-1", ...). Articles refer to slots only, so changing a photo means editing the JSON and
// adding the file, never touching an article.
//
// An entry:
//   file          file name in /public/images, without ".webp"
//   alt           what the photo shows (screen readers + SEO); describe it, do not repeat the title
//   w, h          real pixel size (the audit fails if it does not match the file)
//   source        URL of the photo's Unsplash page (docs/journal-photos.md lists them all)
//   url           optional: a full URL (e.g. Supabase storage) that is used INSTEAD of the file
//   credit        optional "Name / Source": if set, printed at the end of the article (Unsplash
//                 photos do not require it)
//   placeholder   optional: true = a stand-in; the audit warns for every one

import data from "./journal-images.json";

export interface JournalImage {
  file: string;
  alt: string;
  w: number;
  h: number;
  url?: string;
  credit?: string;
  source?: string;
  licence?: string;
  placeholder?: boolean;
}

/** Where the browser loads a photo from: the `url` override if set, else the local file. */
export const journalSrc = (img: JournalImage): string => img.url ?? `/images/${img.file}.webp`;

export const JOURNAL_IMAGES = data as Record<string, JournalImage>;

/** Looks a slot up. A typo fails the build (prerender throws) instead of shipping a broken image. */
export const journalImage = (id: string): JournalImage => {
  const img = JOURNAL_IMAGES[id];
  if (!img) throw new Error(`journal-images.json has no slot "${id}"`);
  return img;
};
