"use client";

import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import { timeline } from "@/data/site";

export default function Timeline({ light = false }) {
  return (
    <div className="relative">
      {/* Desktop: horizontal */}
      <div className="relative hidden lg:block">
        <div className={`absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 border-t-2 border-dashed ${light ? "border-white/30" : "border-navy-700/30"}`} />
        <motion.div
          className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-navy-800"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <div className="relative grid grid-cols-7">
          {timeline.map((t, i) => {
            const top = i % 2 === 0;
            return (
              <motion.div
                key={`${t.year}-${t.place}`}
                initial={{ opacity: 0, y: top ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.25 }}
                className="flex h-96 flex-col items-center"
              >
                <div className={`flex h-1/2 w-full flex-col items-center px-1 ${top ? "justify-end pb-9" : "order-3 justify-start pt-9"}`}>
                  <span className={`h-6 w-px ${top ? "order-last" : "order-first"} bg-gold-500/60`} />
                  <div className={`w-full rounded-2xl px-3 py-3 text-center shadow-lg ${light ? "glass text-white" : "bg-white ring-1 ring-slate-100"}`}>
                    <p className="font-display text-2xl font-bold text-gold-500">{t.year}</p>
                    <p className={`text-sm font-bold leading-snug ${light ? "text-white" : "text-navy-900"}`}>{t.title}</p>
                    <p className={`text-xs ${light ? "text-white/70" : "text-muted"}`}>{t.place}</p>
                  </div>
                </div>
                <span className="relative z-10 order-2 -my-6 grid h-12 w-12 place-items-center rounded-full bg-navy-900 text-white ring-4 ring-gold-500">
                  <Landmark className="h-5 w-5" />
                </span>
                <div className={`h-1/2 ${top ? "order-3" : "order-1"}`} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical */}
      <ol className={`relative space-y-6 border-l-2 border-dashed pl-8 lg:hidden ${light ? "border-white/30" : "border-navy-700/30"}`}>
        {timeline.map((t, i) => (
          <motion.li
            key={`${t.year}-${t.place}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[3.05rem] top-1 grid h-9 w-9 place-items-center rounded-full bg-navy-900 text-white ring-4 ring-gold-500">
              <Landmark className="h-4 w-4" />
            </span>
            <div className={`rounded-2xl p-4 shadow ${light ? "glass text-white" : "bg-white ring-1 ring-slate-100"}`}>
              <p className="font-display text-xl font-bold text-gold-500">{t.year}</p>
              <p className={`font-bold ${light ? "text-white" : "text-navy-900"}`}>{t.title}</p>
              <p className={`text-sm ${light ? "text-white/70" : "text-muted"}`}>{t.place}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
