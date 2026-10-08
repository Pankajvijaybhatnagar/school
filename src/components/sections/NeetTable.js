"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownUp, Crown, Medal, Search } from "lucide-react";
import { neet2026 } from "@/data/site";

const rows = neet2026.achievers.map(([name, father, marks], i) => ({ sr: i + 1, name, father, marks }));
const bands = [
  { label: "All", min: 0 },
  { label: "650+", min: 650 },
  { label: "600+", min: 600 },
  { label: "550+", min: 550 },
];

export default function NeetTable({ limit }) {
  const [q, setQ] = useState("");
  const [band, setBand] = useState(0);
  const [asc, setAsc] = useState(false);
  const [showAll, setShowAll] = useState(!limit);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = rows.filter(
      (r) => r.marks >= bands[band].min && (!term || r.name.toLowerCase().includes(term) || r.father.toLowerCase().includes(term))
    );
    return asc ? [...list].sort((a, b) => a.marks - b.marks || b.sr - a.sr) : list;
  }, [q, band, asc]);

  const visible = showAll ? filtered : filtered.slice(0, limit);
  const top3 = rows.slice(0, 3);

  return (
    <div>
      {/* Podium */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        {[top3[1], top3[0], top3[2]].map((r, i) => {
          const rank = r.sr;
          const tall = rank === 1;
          return (
            <motion.div
              key={r.sr}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative overflow-hidden rounded-3xl p-6 text-center text-white shadow-xl ${
                tall ? "bg-navy-800 sm:-mt-6 sm:pb-10" : "bg-navy-900"
              } ${i === 1 ? "order-first sm:order-none" : ""}`}
            >
              <div className="absolute inset-0 bg-dots opacity-40" />
              <div className="relative">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/15 ring-4 ring-white/20">
                  {tall ? <Crown className="h-7 w-7 text-white" /> : <Medal className="h-7 w-7 text-gold-400" />}
                </span>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/75">Rank #{rank}</p>
                <h4 className="mt-1 text-xl font-semibold">{r.name}</h4>
                <p className="text-sm text-white/75">{r.father}</p>
                <p className="mt-3 font-display text-5xl font-bold">{r.marks}<span className="text-lg font-bold text-white/70">/720</span></p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <label className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setShowAll(true); }}
            placeholder="Search student or father's name..."
            className="w-full rounded-sm border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-navy-600 focus:ring-4 focus:ring-navy-600/10"
          />
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {bands.map((b, i) => (
            <button
              key={b.label}
              onClick={() => { setBand(i); setShowAll(true); }}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                band === i ? "bg-navy-800 text-white shadow-lg" : "bg-white text-navy-800 ring-1 ring-slate-200 hover:ring-navy-600"
              }`}
            >
              {b.label}
            </button>
          ))}
          <button
            onClick={() => setAsc((a) => !a)}
            className="flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-navy-800 ring-1 ring-slate-200 hover:ring-navy-600"
            aria-label="Toggle sort order"
          >
            <ArrowDownUp className="h-4 w-4" /> {asc ? "Low → High" : "High → Low"}
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-navy-900/5">
        <div className="max-h-[640px] overflow-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="sticky top-0 z-10 bg-navy-800 text-white">
              <tr>
                <th className="px-5 py-4 font-semibold">SR</th>
                <th className="px-5 py-4 font-semibold">Name of RPSian</th>
                <th className="px-5 py-4 font-semibold">Father&apos;s Name</th>
                <th className="px-5 py-4 text-right font-semibold">Marks Obtained</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((r) => (
                <tr key={r.sr} className="border-b border-slate-100 transition odd:bg-gold-100/30 hover:bg-gold-100">
                  <td className="px-5 py-3 font-semibold text-muted">{r.sr}</td>
                  <td className="px-5 py-3 font-bold uppercase text-navy-900">{r.name}</td>
                  <td className="px-5 py-3 uppercase text-muted">{r.father}</td>
                  <td className="px-5 py-3 text-right">
                    <span className={`inline-block min-w-14 rounded-md px-3 py-1 text-center font-bold ${r.marks >= 650 ? "bg-gold-500 text-navy-950" : r.marks >= 600 ? "bg-brand-600 text-white" : "bg-navy-800 text-white"}`}>
                      {r.marks}
                    </span>
                  </td>
                </tr>
              ))}
              {!visible.length && (
                <tr><td colSpan={4} className="px-5 py-12 text-center text-muted">No achiever matches “{q}”.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 bg-slate-50 px-5 py-4 text-sm text-muted sm:flex-row">
          <span>Showing <b className="text-navy-900">{visible.length}</b> of {filtered.length} achievers</span>
          {limit && filtered.length > limit && (
            <button onClick={() => setShowAll((s) => !s)} className="rounded-md bg-brand-600 px-5 py-2 font-bold text-white hover:bg-brand-700">
              {showAll ? "Show Less" : `View All ${filtered.length} Achievers`}
            </button>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-5 rounded-3xl bg-navy-800 p-6 text-white sm:flex-row sm:p-8">
        <div className="shrink-0 text-center sm:text-left">
          <p className="font-display text-6xl font-bold leading-none">500<span className="text-gold-400">+</span></p>
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">&amp; above marks</p>
        </div>
        <div className="hidden h-16 w-px bg-white/30 sm:block" />
        <div className="shrink-0 text-center">
          <p className="font-display text-5xl font-bold leading-none">{neet2026.above500}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">RPSians</p>
        </div>
        <p className="text-sm leading-relaxed text-white/90 sm:ml-4">{neet2026.note}</p>
      </div>
    </div>
  );
}
