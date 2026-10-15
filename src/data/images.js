// Image registry. Components refer to images by these keys (or a direct path).
// Until a file exists, the site shows a styled placeholder automatically.

import { photo, photoList, thumb } from "./photos";

export const images = {
  // Logo
  logo: "/images/logo/gurukul-logo.webp",

  // Documents shown as images
  feeStructure: "/images/admission/fee-structure-2027-28.jpg",

  // People
  chairman: "/images/people/chairman.webp",
  chairmanPortrait: "/images/people/chairman-portrait.webp",
  viceChairman: "/images/people/vice-chairman.webp",

  // Campus photos
  welcome: photo("campus-students-walk"),
  welcome2: thumb("science-lab-4"),
  statsBg: photo("campus-panorama"),
};

// Gallery items: `src` is the grid thumbnail, `full` the lightbox image.
const toItem = (p) => ({ ...p, src: thumb(p.slug), full: photo(p.slug) });

// Interleave categories so the "All" view mixes campus, labs, sports, culture...
function interleave(list) {
  const groups = {};
  for (const p of list) (groups[p.category] ||= []).push(p);
  const out = [];
  for (let i = 0; out.length < list.length; i++) {
    for (const g of Object.values(groups)) if (g[i]) out.push(g[i]);
  }
  return out;
}

export const galleryCategories = [...new Set(photoList.map((p) => p.category))];
export const gallery = interleave(photoList).map(toItem);

const bySlug = Object.fromEntries(photoList.map((p) => [p.slug, toItem(p)]));
export const pick = (...slugs) => slugs.map((s) => bySlug[s]);

// Hand-picked mix for the home page and facilities page grids.
export const featuredGallery = pick(
  "dance-haryanvi",
  "science-lab-4",
  "kids-play-slides",
  "computer-lab-3",
  "dance-stage-2",
  "havan",
  "library",
  "republic-day",
  "games-rings",
  "graduation-3",
);

export const campusGallery = pick(
  "campus-building",
  "lab-room",
  "computer-lab-4",
  "library-2",
  "kids-ride",
  "av-room",
  "mural-solar-system",
  "campus-entrance",
  "pre-primary-corridor",
  "campus-panorama",
);
