"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ChevronLeft, ChevronRight, Images, Newspaper, Video, UserPlus } from "lucide-react";
import { news } from "@/data/site";
import { openEnquiry } from "@/components/layout/EnquiryModal";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const noop = () => () => {};

function Calendar() {
  // The page is pre-rendered, so "today" is read in the browser only.
  const todayKey = useSyncExternalStore(noop, () => new Date().toDateString(), () => null);
  const today = todayKey ? new Date(todayKey) : null;
  const [offset, setOffset] = useState(0);
  const base = today || new Date(2026, 9, 1);
  const total = base.getFullYear() * 12 + base.getMonth() + offset;
  const view = { y: Math.floor(total / 12), m: total % 12 };
  const eventDays = useMemo(
    () => new Set(news.map((n) => n.date).filter((d) => d.startsWith(`${view.y}-${String(view.m + 1).padStart(2, "0")}`)).map((d) => +d.slice(8))),
    [view.y, view.m]
  );

  const first = new Date(view.y, view.m, 1).getDay();
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const prevDays = new Date(view.y, view.m, 0).getDate();
  const cells = [];
  for (let k = first - 1; k >= 0; k--) cells.push({ d: prevDays - k, muted: true });
  for (let d = 1; d <= days; d++) cells.push({ d });
  while (cells.length % 7) cells.push({ d: cells.length - days - first + 1, muted: true });

  const shift = (delta) => setOffset((o) => o + delta);

  const isToday = (d) => today && d === today.getDate() && view.m === today.getMonth() && view.y === today.getFullYear();

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-navy-900/10 ring-1 ring-slate-100">
      <div className="bg-navy-800 py-3 text-center text-lg font-bold text-white">Calendar</div>
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <button onClick={() => shift(-1)} aria-label="Previous month" className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-slate-200 hover:bg-navy-800 hover:text-white"><ChevronLeft className="h-4 w-4" /></button>
          <div className="text-center">
            <p className="font-bold text-navy-900">{MONTHS[view.m]}</p>
            <p className="text-xs text-muted">{view.y}</p>
          </div>
          <button onClick={() => shift(1)} aria-label="Next month" className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-slate-200 hover:bg-navy-800 hover:text-white"><ChevronRight className="h-4 w-4" /></button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {DAYS.map((d) => <span key={d} className={`py-1 font-bold ${d === "Sun" ? "text-brand-600" : "text-navy-800"}`}>{d}</span>)}
          {cells.map((c, k) => (
            <span
              key={k}
              className={`relative grid aspect-square place-items-center rounded-full text-sm transition ${
                c.muted ? "text-slate-300" : isToday(c.d) ? "bg-brand-600 font-bold text-white shadow-lg shadow-navy-900/10" : "text-navy-900 hover:bg-slate-100"
              }`}
            >
              {c.d}
              {!c.muted && eventDays.has(c.d) && <span className="absolute bottom-1 h-1 w-1 rounded-full bg-gold-500" />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const tiles = [
  { label: "Gallery", icon: Images, href: "/gallery" },
  { label: "Campus Tour", icon: Video, href: "/videos" },
  { label: "Facilities", icon: Building2, href: "/facilities" },
  { label: "Admission", icon: UserPlus, enquiry: true },
];

export default function NewsCalendar() {
  const fmt = (d) => {
    const dt = new Date(d);
    return { day: dt.getDate(), mon: MONTHS[dt.getMonth()].slice(0, 3), y: dt.getFullYear() };
  };

  return (
    <section className="bg-cream py-24">
      <div className="container-x grid gap-6 lg:grid-cols-3">
        {/* News */}
        <div className="flex flex-col overflow-hidden rounded-3xl bg-navy-800 text-white shadow-xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">
            <Newspaper className="h-5 w-5 text-gold-400" />
            <h3 className="text-lg font-bold">News &amp; Events</h3>
          </div>
          <div className="group relative h-[340px] overflow-hidden">
            <div className="absolute inset-x-0 top-0 animate-[scroll-up_22s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...news, ...news].map((n, k) => {
                const f = fmt(n.date);
                return (
                  <div key={k} className="flex gap-4 border-b border-white/10 px-6 py-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white text-center leading-none text-navy-900">
                      <span>
                        <span className="block font-display text-xl font-bold text-brand-600">{f.day}</span>
                        <span className="text-[10px] font-bold uppercase">{f.mon} {String(f.y).slice(2)}</span>
                      </span>
                    </span>
                    <span>
                      <span className="mb-1 inline-block rounded-md bg-gold-500/20 px-2 py-0.5 text-[10px] font-bold uppercase text-gold-400">{n.tag}</span>
                      <span className="block text-sm font-semibold leading-snug">{n.title}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick tiles */}
        <div className="grid grid-cols-2 gap-4">
          {tiles.map(({ label, icon: I, href, enquiry }, k) => {
            const inner = (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: k * 0.08 }}
                className="group flex h-full flex-col items-center justify-center gap-4 rounded-3xl bg-white p-6 text-center shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift"
              >
                <span className={`grid h-20 w-20 place-items-center rounded-full border border-gold-500/50 bg-cream text-navy-800 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-gold-400`}>
                  <I className="h-9 w-9" />
                </span>
                <span className="font-bold text-navy-900">{label}</span>
              </motion.span>
            );
            return enquiry ? (
              <button key={label} onClick={openEnquiry} className="text-left">{inner}</button>
            ) : (
              <Link key={label} href={href}>{inner}</Link>
            );
          })}
        </div>

        <Calendar />
      </div>
    </section>
  );
}
