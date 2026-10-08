"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { downloads } from "@/data/site";

export default function DownloadsList() {
  const cats = useMemo(() => ["All", ...new Set(downloads.map((d) => d.category))], []);
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? downloads : downloads.filter((d) => d.category === cat);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`relative rounded-md px-5 py-2 text-sm font-semibold transition ${cat === c ? "text-white" : "bg-white text-navy-800 ring-1 ring-slate-200 hover:ring-navy-600"}`}
          >
            {cat === c && <motion.span layoutId="dl-pill" className="absolute inset-0 rounded-full bg-navy-800" />}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {list.map((d) => (
            <motion.div
              layout
              key={d.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-800 text-white shadow-lg">
                  <FileText className="h-7 w-7" />
                </span>
                <span className="rounded-md bg-gold-100 px-3 py-1 text-xs font-bold text-navy-900">{d.category}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">{d.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">PDF Document</p>
              <a
                href={d.file}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-navy-800 px-5 py-2.5 text-sm font-bold text-white transition group-hover:bg-brand-600"
              >
                <Download className="h-4 w-4" /> Download
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
