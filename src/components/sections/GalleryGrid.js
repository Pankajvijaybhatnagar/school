"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { gallery } from "@/data/images";
import SmartImage from "@/components/ui/SmartImage";

const variants = ["navy", "red", "gold", "navy"];

export default function GalleryGrid({ limit, filters = true }) {
  const cats = useMemo(() => ["All", ...new Set(gallery.map((g) => g.category))], []);
  const [cat, setCat] = useState("All");
  const [idx, setIdx] = useState(null);

  const list = useMemo(() => {
    const l = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);
    return limit ? l.slice(0, limit) : l;
  }, [cat, limit]);

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
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, prev, next]);

  return (
    <>
      {filters && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`relative rounded-md px-5 py-2 text-sm font-semibold transition ${cat === c ? "text-white" : "bg-white text-navy-800 ring-1 ring-slate-200 hover:ring-navy-600"}`}
            >
              {cat === c && <motion.span layoutId="gallery-pill" className="absolute inset-0 rounded-full bg-navy-800" />}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid grid-flow-dense auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
        <AnimatePresence>
          {list.map((g, i) => (
            <motion.button
              layout
              key={g.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              onClick={() => setIdx(i)}
              className={`group relative overflow-hidden rounded-2xl ${i % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""} ${i % 7 === 4 ? "md:row-span-2" : ""}`}
            >
              <SmartImage src={g.src} alt={g.title} label={g.title} variant={variants[i % 4]} className="absolute inset-0 transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/90 via-transparent to-transparent p-4 text-left opacity-0 transition group-hover:opacity-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">{g.category}</span>
                <span className="font-bold text-white">{g.title}</span>
              </div>
              <span className="absolute right-3 top-3 grid h-9 w-9 scale-0 place-items-center rounded-full bg-white/90 text-navy-900 transition group-hover:scale-100">
                <Expand className="h-4 w-4" />
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {idx !== null && list[idx] && (
          <motion.div
            className="fixed inset-0 z-[85] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIdx(null)}
          >
            <button onClick={() => setIdx(null)} aria-label="Close" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-navy-900"><X className="h-5 w-5" /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-brand-600 sm:left-6"><ChevronLeft /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-brand-600 sm:right-6"><ChevronRight /></button>
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <SmartImage src={list[idx].src} alt={list[idx].title} label={list[idx].title} className="aspect-[16/10] w-full rounded-2xl" imgClassName="!object-contain bg-black" />
              <p className="mt-4 text-center text-white"><b>{list[idx].title}</b> <span className="text-white/60">— {idx + 1} / {list.length}</span></p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
