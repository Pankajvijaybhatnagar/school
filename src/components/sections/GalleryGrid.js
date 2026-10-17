"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { gallery, galleryCategories } from "@/data/images";
import SmartImage from "@/components/ui/SmartImage";

const PAGE = 24;
const variants = ["maroon", "red", "gold", "maroon"];
// Tile spans for the bento layout: 10 tiles fill a 4×4 grid with no gaps.
const BENTO = ["col-span-2 row-span-2", "", "", "", "row-span-2", "", "", "", "md:col-span-2", "md:col-span-2"];

function Overlay({ g }) {
  return (
    <>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-maroon-950/90 via-maroon-950/10 to-transparent p-4 text-left opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">{g.category}</span>
        <span className="mt-1 font-display text-lg leading-tight text-white">{g.title}</span>
      </div>
      <span className="absolute right-3 top-3 grid h-9 w-9 scale-0 place-items-center rounded-full bg-white/90 text-maroon-900 transition group-hover:scale-100">
        <Expand className="h-4 w-4" />
      </span>
    </>
  );
}

/*
  Two layouts:
  - "bento"   — fixed-height tiles with a few large ones; for short, curated lists.
  - "masonry" — natural aspect ratios in columns, with filters and "load more".
*/
export default function GalleryGrid({ items = gallery, limit, filters = true, layout = "masonry" }) {
  const [cat, setCat] = useState("All");
  const [shown, setShown] = useState(PAGE);
  const [idx, setIdx] = useState(null);

  const filtered = useMemo(() => (cat === "All" ? items : items.filter((g) => g.category === cat)), [cat, items]);
  const list = useMemo(() => filtered.slice(0, limit || shown), [filtered, limit, shown]);

  const prev = useCallback(() => setIdx((i) => (i - 1 + list.length) % list.length), [list.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % list.length), [list.length]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, prev, next]);

  const counts = useMemo(() => {
    const c = { All: items.length };
    for (const g of items) c[g.category] = (c[g.category] || 0) + 1;
    return c;
  }, [items]);

  return (
    <>
      {filters && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {["All", ...galleryCategories].filter((c) => counts[c]).map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setShown(PAGE);
              }}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition ${cat === c ? "text-white" : "bg-ivory text-maroon-800 ring-1 ring-line hover:ring-gold-500"}`}
            >
              {cat === c && <motion.span layoutId="gallery-pill" className="absolute inset-0 rounded-full bg-maroon-800" />}
              <span className="relative">
                {c} <span className={`ml-1 text-xs ${cat === c ? "text-gold-400" : "text-muted"}`}>{counts[c]}</span>
              </span>
            </button>
          ))}
        </div>
      )}

      {layout === "bento" ? (
        <div className="grid grid-flow-dense auto-rows-[170px] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[210px] md:grid-cols-4">
          {list.map((g, i) => (
            <motion.button
              key={g.slug || g.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onClick={() => setIdx(i)}
              className={`group relative overflow-hidden rounded-2xl bg-maroon-900 ${BENTO[i % BENTO.length]}`}
            >
              <SmartImage src={g.src} alt={g.title} label={g.title} variant={variants[i % 4]} className="absolute inset-0 transition duration-700 group-hover:scale-110" />
              <Overlay g={g} />
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
          {list.map((g, i) => (
            <motion.button
              key={`${cat}-${g.slug || g.src}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i % PAGE, 12) * 0.03 }}
              onClick={() => setIdx(i)}
              className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-maroon-900 sm:mb-4"
              style={{ aspectRatio: g.w && g.h ? `${g.w} / ${g.h}` : "4 / 3" }}
            >
              <SmartImage src={g.src} alt={g.title} label={g.title} variant={variants[i % 4]} className="absolute inset-0 transition duration-700 group-hover:scale-105" />
              <Overlay g={g} />
            </motion.button>
          ))}
        </div>
      )}

      {!limit && filtered.length > shown && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShown((s) => s + PAGE)}
            className="inline-flex items-center gap-2 rounded-md bg-maroon-800 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-maroon-700"
          >
            Load More Photos <span className="text-gold-400">({filtered.length - shown})</span>
          </button>
        </div>
      )}

      <AnimatePresence>
        {idx !== null && list[idx] && (
          <motion.div
            className="fixed inset-0 z-[85] flex items-center justify-center bg-maroon-950/95 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIdx(null)}
          >
            <button onClick={() => setIdx(null)} aria-label="Close" className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-ivory text-maroon-900"><X className="h-5 w-5" /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-gold-500 sm:left-6"><ChevronLeft /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-gold-500 sm:right-6"><ChevronRight /></button>
            <motion.figure key={idx} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex max-h-full w-full max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={list[idx].full || list[idx].src} alt={list[idx].title} className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl" />
              <figcaption className="mt-4 text-center text-white">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">{list[idx].category}</span>
                <span className="mx-3 text-white/30">|</span>
                <b className="font-display text-lg font-medium">{list[idx].title}</b>
                <span className="ml-3 text-sm text-white/50">{idx + 1} / {list.length}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
