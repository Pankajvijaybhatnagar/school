"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import SmartImage from "@/components/ui/SmartImage";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);

  const t = testimonials[i];

  return (
    <div className="mx-auto max-w-5xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl shadow-navy-900/10 sm:p-12">
        <Quote className="absolute right-8 top-8 h-24 w-24 text-gold-100" />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45 }}
            className="relative grid items-center gap-8 md:grid-cols-[180px_1fr]"
          >
            <div className="mx-auto">
              <div className="relative h-40 w-40">
                <SmartImage src={t.image} alt={t.name} label={t.name} className="absolute inset-3 rounded-full" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="mb-3 flex justify-center gap-1 md:justify-start">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-gold-500 text-gold-500" />)}
              </div>
              <p className="font-serif text-xl leading-relaxed text-navy-900 sm:text-2xl">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-6 text-lg font-semibold text-navy-900">{t.name}</p>
              <p className="text-sm font-medium text-brand-600">{t.role} • {t.campus}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous testimonial" className="grid h-12 w-12 place-items-center rounded-full bg-white text-navy-900 shadow-lg transition hover:bg-brand-600 hover:text-white">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((x, k) => (
            <button key={x.name} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} className={`h-2.5 rounded-full transition-all ${k === i ? "w-8 bg-brand-600" : "w-2.5 bg-slate-300"}`} />
          ))}
        </div>
        <button onClick={() => setI((i + 1) % n)} aria-label="Next testimonial" className="grid h-12 w-12 place-items-center rounded-full bg-white text-navy-900 shadow-lg transition hover:bg-brand-600 hover:text-white">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
