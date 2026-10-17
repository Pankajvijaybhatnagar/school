"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Trophy, Sparkles, Landmark, Flame } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import { buttonBase } from "@/components/ui/Button";
import { boardResults, feeStructure, school } from "@/data/site";
import { openEnquiry } from "@/components/layout/EnquiryModal";
import { photo } from "@/data/photos";

const DURATION = 7000;
const EASE = [0.22, 0.7, 0.2, 1];

const latestX = boardResults.X.at(-1);
const latestXII = boardResults.XII.at(-1);

const slides = [
  {
    key: "welcome",
    tab: "Gurukul Vidyapeeth",
    bg: photo("smart-classroom"),
    image: photo("havan-2"),
    icon: Flame,
    eyebrow: "Shri Lajja Ram Bashesar Dass",
    title: (
      <>
        Gurukul <em className="font-medium text-gold-400">Vidyapeeth</em>, Jind
      </>
    ),
    text: `${school.tagline} — CBSE affiliated, ${school.classes}, ${school.medium}.`,
    cta: { label: "About Us", href: "/about" },
    card: { value: school.motto, hindi: true, label: "Our Motto", sub: `“${school.mottoMeaning}” — ${school.mottoSource}` },
  },
  {
    key: "results",
    tab: "Board Results",
    bg: photo("felicitation"),
    image: photo("graduation-3"),
    inset: photo("class-senior"),
    icon: Trophy,
    eyebrow: `CBSE Board Results ${latestX.year}`,
    title: (
      <>
        <em className="font-medium text-gold-400">100%</em> Results in Class X &amp; XII
      </>
    ),
    text: `All ${latestX.registered} students of Class X and all ${latestXII.registered} students of Class XII passed the CBSE Board Examination ${latestX.year}.`,
    cta: { label: "View Results", href: "/achievements" },
    card: { value: "100%", label: "Class X & XII", sub: `CBSE Board Examination ${latestX.year}` },
  },
  {
    key: "admission",
    tab: "Admissions Open",
    bg: photo("kids-play-slides"),
    image: photo("kids-ride"),
    icon: Sparkles,
    eyebrow: "Admissions Open",
    title: (
      <>
        Admissions Open <em className="font-medium text-gold-400">{feeStructure.session}</em>
      </>
    ),
    text: "Nursery to Class XII in Hindi and English medium, including the Science stream in Classes XI and XII.",
    cta: { label: "Apply Now", enquiry: true },
    card: { value: "₹500", label: "Registration", sub: `For every class • Session ${feeStructure.session}` },
  },
  {
    key: "legacy",
    tab: "Our Legacy",
    bg: photo("havan"),
    image: photo("dance-stage-2"),
    icon: Landmark,
    eyebrow: "Rishikul Tradition Since 1968",
    title: (
      <>
        Rishikul Sanskaras, <em className="font-medium text-gold-400">Modern Education</em>
      </>
    ),
    text: "Rooted in Shri Lajja Ram Sanskrit Mahavidyalaya (1968), Gurukul Vidyapeeth was founded on Vasant Panchami, 2 February 2006.",
    cta: { label: "Our Story", href: "/about#history" },
    card: { value: "1968", label: "Our Roots", sub: "Shri Lajja Ram Sanskrit Mahavidyalaya, Tirth Pandu-Pindara" },
  },
];

const CHIPS = {
  welcome: ["CBSE", "Hindi Medium", "English Medium", "Nursery – XII"],
  admission: ["Nursery", "LKG", "UKG", "I – X", "XI – XII", "Science"],
};

/* Slide-specific detail row under the buttons. */
function Extra({ type }) {
  if (type === "results") {
    const rows = [
      ...boardResults.X.map((r) => ({ ...r, cls: "X" })),
      ...boardResults.XII.map((r) => ({ ...r, cls: "XII" })),
    ];
    return (
      <div className="grid max-w-2xl grid-cols-3 border border-white/15 bg-maroon-950/40 backdrop-blur-sm sm:grid-cols-6">
        {rows.map((b, i) => (
          <motion.div
            key={`${b.cls}-${b.year}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.07, ease: EASE }}
            className="border-white/15 px-2 py-3 text-center [&:not(:last-child)]:border-r max-sm:[&:nth-child(-n+3)]:border-b max-sm:[&:nth-child(3)]:border-r-0"
          >
            <p className="font-display text-2xl font-semibold leading-none text-white">{b.pct}%</p>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-gold-400">Class {b.cls} • {b.year}</p>
          </motion.div>
        ))}
      </div>
    );
  }
  if (CHIPS[type]) {
    return (
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-6">
        {CHIPS[type].map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.06, ease: EASE }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85 [&:not(:last-child)]:after:ml-5 [&:not(:last-child)]:after:text-gold-500 [&:not(:last-child)]:after:content-['◆']"
          >
            {s}
          </motion.span>
        ))}
      </div>
    );
  }
  return (
    <div className="grid max-w-md grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-6">
      {[
        ["1968", "Mahavidyalaya"],
        ["2006", "Gurukul Founded"],
        ["2009", "School Opened"],
      ].map(([v, l], i) => (
        <motion.div
          key={l}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + i * 0.1, ease: EASE }}
          className="px-4 text-center first:pl-0 first:text-left"
        >
          <p className="font-display text-3xl font-semibold text-gold-400">{v}</p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/70">{l}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* Rotating circular seal — a classic crest motif. */
function Seal() {
  return (
    <div className="relative h-36 w-36">
      <div className="absolute inset-0 rounded-full bg-maroon-900 shadow-2xl shadow-maroon-950/50 ring-1 ring-gold-500/60" />
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        <defs>
          <path id="seal-path" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text className="fill-gold-400" style={{ fontSize: 11.5, fontWeight: 600 }}>
          {/* textLength = circumference (2πr), so the words wrap the ring exactly once */}
          <textPath href="#seal-path" textLength="463" lengthAdjust="spacing">
            GURUKUL VIDYAPEETH • JIND • SINCE 2006 • CBSE •
          </textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-[30px] grid place-items-center rounded-full border border-gold-500/50 text-center">
        <span>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-gold-400">Est.</span>
          <span className="mt-1 block font-display text-2xl font-semibold leading-none text-white">2006</span>
        </span>
      </div>
    </div>
  );
}

/* Gold L-shaped corner ornaments. */
function Corners() {
  const c = "absolute h-10 w-10 border-gold-500/60";
  return (
    <div className="pointer-events-none absolute inset-5 hidden lg:block" aria-hidden="true">
      <span className={`${c} left-0 top-0 border-l border-t`} />
      <span className={`${c} right-0 top-0 border-r border-t`} />
      <span className={`${c} bottom-0 left-0 border-b border-l`} />
      <span className={`${c} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touch = useRef(null);
  const n = slides.length;

  const go = useCallback((d) => setI((x) => (x + d + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), DURATION);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  const s = slides[i];
  const SlideIcon = s.icon;

  return (
    <section
      className="relative overflow-hidden bg-maroon-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touch.current = null;
      }}
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      {/* Background: full-bleed slide photo with a slow zoom, darkened toward the copy */}
      <AnimatePresence mode="sync">
        <motion.div
          key={s.key}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: DURATION / 1000 + 2, ease: "linear" }}
          >
            <SmartImage src={s.bg} alt="" className="absolute inset-0" variant="maroon" priority />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/80 to-maroon-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-transparent to-maroon-950/40" />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgb(198_145_53/0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,rgb(255_255_255/0.025)_0_1px,transparent_1px_14px)]" />
      <Corners />

      <div className="container-x relative grid min-h-[600px] items-center gap-12 pb-28 pt-14 sm:pt-16 lg:min-h-[660px] lg:grid-cols-12 lg:pb-32 lg:pt-16 xl:min-h-[700px]">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div key={s.key} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400"
              >
                <span className="h-px w-10 bg-gold-500" />
                <SlideIcon className="h-4 w-4" /> {s.eyebrow}
              </motion.span>

              <div className="mt-6 overflow-hidden pb-2">
                <motion.h1
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
                  className="text-[2.6rem] font-semibold leading-[1.08] sm:text-6xl xl:text-[4.4rem]"
                >
                  {s.title}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
              >
                {s.text}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
                className="mt-9 flex flex-wrap gap-3"
              >
                {s.cta.enquiry ? (
                  <button onClick={openEnquiry} className={`${buttonBase} bg-saffron-600 text-white hover:bg-saffron-500`}>
                    {s.cta.label} <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <Link href={s.cta.href} className={`${buttonBase} bg-saffron-600 text-white hover:bg-saffron-500`}>
                    {s.cta.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                <button onClick={openEnquiry} className={`${buttonBase} border border-white/40 text-white hover:border-white hover:bg-ivory hover:text-maroon-900`}>
                  Admission Enquiry
                </button>
              </motion.div>

              <div className="mt-10">
                <Extra type={s.key} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: arched photo, highlight card and seal */}
        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px]">
            {/* offset gold outline */}
            <div className="absolute -inset-3 rounded-t-full border border-gold-500/60" />
            {/* arch photo */}
            <div className="absolute inset-0 overflow-hidden rounded-t-full border-[6px] border-white/95 bg-cream shadow-2xl shadow-maroon-950/60">
              <AnimatePresence mode="sync">
                <motion.div
                  key={s.key}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 0.9 }, scale: { duration: DURATION / 1000 + 1, ease: "linear" } }}
                >
                  <SmartImage src={s.image} alt={s.eyebrow} label="Hero Photo" variant="light" className="absolute inset-0" priority />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* second framed photo, for slides that have one */}
            <AnimatePresence>
              {s.inset && (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 24, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: 3 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                  className="absolute -right-6 bottom-32 w-44 border-[5px] border-ivory bg-cream shadow-2xl shadow-maroon-950/50 ring-1 ring-gold-500/60 xl:-right-14 xl:w-52"
                >
                  <SmartImage src={s.inset} alt="Senior students in class" variant="light" className="aspect-[4/3]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* seal */}
            <div className="absolute -right-3 top-10 xl:-right-10">
              <Seal />
            </div>

            {/* highlight card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
                className="absolute -left-6 bottom-12 w-60 xl:-left-14 border-t-2 border-gold-500 bg-ivory p-5 text-maroon-900 shadow-2xl shadow-maroon-950/40"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-500">{s.card.label}</p>
                <p className={`mt-2 leading-none ${s.card.hindi ? "font-hindi text-3xl" : "font-display text-4xl font-semibold"}`}>
                  {s.card.value}
                  {s.card.unit && <span className="text-lg text-muted">{s.card.unit}</span>}
                </p>
                <span className="my-3 block h-px w-10 bg-gold-500" />
                <p className="text-xs leading-snug text-muted">{s.card.sub}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide tabs */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-maroon-950/60 backdrop-blur-sm">
        <div className="container-x flex items-stretch">
          <div className="hidden flex-1 grid-cols-4 xl:grid">
            {slides.map((sl, k) => (
              <button
                key={sl.key}
                onClick={() => setI(k)}
                aria-label={`Show slide ${k + 1}: ${sl.tab}`}
                aria-current={k === i}
                className={`group relative border-r border-white/10 px-5 py-5 text-left transition-colors first:border-l ${k === i ? "bg-white/[0.04]" : "hover:bg-white/[0.03]"}`}
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-white/10">
                  {k === i && (
                    <motion.span
                      key={`${i}-${paused}`}
                      className="absolute inset-y-0 left-0 bg-gold-500"
                      initial={{ width: paused ? "100%" : "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: paused ? 0 : DURATION / 1000, ease: "linear" }}
                    />
                  )}
                </span>
                <span className={`font-display text-lg ${k === i ? "text-gold-400" : "text-white/40 group-hover:text-white/70"}`}>0{k + 1}</span>
                <span className={`ml-3 text-[12px] font-semibold uppercase tracking-[0.16em] ${k === i ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                  {sl.tab}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile progress */}
          <div className="flex flex-1 items-center gap-2 py-5 xl:hidden">
            {slides.map((sl, k) => (
              <button key={sl.key} onClick={() => setI(k)} aria-label={`Show slide ${k + 1}`} className="relative h-0.5 max-w-16 flex-1 overflow-hidden bg-white/25">
                {k === i && <span className="absolute inset-0 bg-gold-500" />}
              </button>
            ))}
            <span className="ml-2 font-display text-sm text-white/70"><span className="text-gold-400">0{i + 1}</span> / 0{n}</span>
          </div>

          <div className="flex items-center gap-2 pl-4">
            <button onClick={() => go(-1)} aria-label="Previous slide" className="grid h-10 w-10 place-items-center border border-white/25 transition hover:border-white hover:bg-ivory hover:text-maroon-900">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => go(1)} aria-label="Next slide" className="grid h-10 w-10 place-items-center bg-gold-500 transition hover:bg-gold-400">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
