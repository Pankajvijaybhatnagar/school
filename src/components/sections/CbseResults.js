"use client";

import { motion } from "framer-motion";
import { cbseX2026, group } from "@/data/site";
import Counter from "@/components/ui/Counter";
import SmartImage from "@/components/ui/SmartImage";

export default function CbseResults({ showToppers = true }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {cbseX2026.bands.map((b, i) => (
          <motion.div
            key={b.pct}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl bg-white p-5 text-center shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift"
          >
            <span className="absolute inset-x-0 top-0 h-1.5 bg-navy-800" />
            <p className="font-display text-3xl font-bold text-navy-900">
              {b.pct}<span className="text-lg text-brand-600">%</span>
            </p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted">&amp; above</p>
            <div className="mx-auto my-3 h-px w-10 bg-slate-200" />
            <Counter value={b.students} className="font-display text-4xl font-bold text-brand-600" />
            <p className="text-xs font-bold uppercase tracking-wider text-navy-700">Students</p>
          </motion.div>
        ))}
      </div>

      {showToppers && (
        <div className="mt-14">
          <div className="mb-8 text-center">
            <p className="font-display text-7xl font-bold leading-none text-gradient sm:text-8xl">{cbseX2026.topScore}%</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.3em] text-navy-800">Top Marks — Our Stars</p>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {cbseX2026.toppers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative mx-auto aspect-square w-full max-w-44">
                  <span className="absolute inset-0 rounded-full bg-navy-800 transition group-hover:rotate-12" />
                  <SmartImage src={t.image} alt={t.name} label={t.name} className="absolute inset-1.5 rounded-full" variant="navy" />
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-md bg-navy-900 px-3 py-1 text-xs font-bold text-gold-400 shadow-lg">
                    {cbseX2026.topScore}%
                  </span>
                </div>
                <h4 className="mt-5 text-base font-semibold uppercase text-navy-900">{t.name}</h4>
                <p className="text-xs text-muted">{t.parents}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-center font-serif text-2xl italic text-navy-800 sm:text-3xl">{group.closing}</p>
        </div>
      )}
    </div>
  );
}
