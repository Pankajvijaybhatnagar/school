"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { campuses } from "@/data/site";
import MapEmbed from "@/components/sections/MapEmbed";
import { WhatsappIcon } from "@/components/ui/SocialIcons";

export default function ContactTabs() {
  const [i, setI] = useState(0);
  const c = campuses[i];

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist">
        {campuses.map((x, k) => (
          <button
            key={x.slug}
            role="tab"
            aria-selected={k === i}
            onClick={() => setI(k)}
            className={`relative rounded-md px-5 py-2.5 text-sm font-semibold transition ${k === i ? "text-white" : "bg-white text-navy-800 ring-1 ring-slate-200 hover:ring-navy-600"}`}
          >
            {k === i && <motion.span layoutId="contact-pill" className="absolute inset-0 rounded-full bg-brand-600" />}
            <span className="relative">{x.city}{x.city === "Gurugram" ? " Sec-89" : ""}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={c.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 lg:grid-cols-5"
        >
          <div className="relative overflow-hidden rounded-3xl bg-mesh p-8 text-white lg:col-span-2">
            <div className="absolute inset-0 bg-dots opacity-40" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-400">{c.city}</p>
              <h3 className="mt-1 text-2xl font-semibold">{c.fullName}</h3>
              <p className="mt-1 text-sm text-white/70">{c.board}</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" /> {c.address}</li>
                {c.phones.map((p) => (
                  <li key={p.number} className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                    <span>{p.label}: <a href={`tel:${p.number}`} className="font-bold hover:text-gold-400">{p.number}</a></span>
                    {p.whatsapp && (
                      <a href={`https://wa.me/91${p.number.replace(/\D/g, "").slice(-10)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-emerald-400">
                        <WhatsappIcon className="h-5 w-5" />
                      </a>
                    )}
                  </li>
                ))}
                {c.emails.map((m) => (
                  <li key={m} className="flex items-center gap-3"><Mail className="h-5 w-5 shrink-0 text-gold-400" /><a href={`mailto:${m}`} className="hover:text-gold-400">{m}</a></li>
                ))}
              </ul>
              <span className="mt-6 inline-block rounded-md bg-gold-500 px-4 py-1.5 text-xs font-bold text-navy-950">{c.admissions}</span>
            </div>
          </div>
          <MapEmbed query={c.mapQuery} title={`${c.fullName} map`} className="h-[420px] lg:col-span-3" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
