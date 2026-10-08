"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import { principal } from "@/data/site";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";

export default function PrincipalMessage({ full = false }) {
  const [expanded, setExpanded] = useState(full);
  const short = principal.message.split(". ").slice(0, 4).join(". ") + ".";

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr]">
      <Reveal from="right" className="relative mx-auto w-full max-w-sm">
        <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-navy-800" />
        <SmartImage src={principal.image} alt={principal.name} label={principal.name} className="relative aspect-[4/5] rounded-2xl shadow-xl" />
        <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white p-4 text-center shadow-xl">
          <p className="text-lg font-semibold text-navy-900">{principal.name}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600">{principal.role}</p>
        </div>
      </Reveal>
      <Reveal from="left" className="relative pt-6 lg:pt-0">
        <Quote className="h-14 w-14 text-brand-600/20" />
        <h3 className="mt-2 text-3xl font-semibold text-navy-900 sm:text-4xl">
          From the <span className="text-gradient">Principal&apos;s</span> Desk
        </h3>
        <p className="mt-1 text-sm font-semibold text-muted">{principal.campus}</p>
        <p className="mt-6 text-base leading-8 text-muted">{expanded ? principal.message : short}</p>
        {!full && (
          <button onClick={() => setExpanded((e) => !e)} className="mt-6 rounded-md border-2 border-navy-800 px-6 py-2.5 text-sm font-bold text-navy-800 transition hover:bg-navy-800 hover:text-white">
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
        <p className="mt-8 font-serif text-2xl italic text-navy-800">— {principal.name}</p>
      </Reveal>
    </div>
  );
}
