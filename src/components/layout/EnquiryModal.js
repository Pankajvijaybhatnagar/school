"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import EnquiryForm from "@/components/sections/EnquiryForm";

const EVENT = "rps:open-enquiry";

// Call from anywhere to open the admission enquiry popup.
export function openEnquiry() {
  window.dispatchEvent(new Event(EVENT));
}

export default function EnquiryModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => setOpen(true);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener(EVENT, show);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(EVENT, show);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-navy-950/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="relative my-8 grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-5"
            initial={{ scale: 0.92, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative hidden overflow-hidden bg-mesh p-8 text-white md:col-span-2 md:block">
              <div className="absolute inset-0 bg-dots opacity-50" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-3 py-1 text-xs font-bold uppercase text-navy-950">
                  <Sparkles className="h-3.5 w-3.5" /> Admissions Open
                </span>
                <h3 className="mt-5 text-3xl font-semibold leading-tight">
                  Session <span className="text-gold-400">2026-27</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  Join a legacy of 28 years. 55,000+ pupils, 140 NEET achievers with 500+ marks and 1,668 students scoring 90%+ in CBSE Class X 2026.
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  {["IIT • NEET • NDA • NTSE • CLAT • CPT", "Smart Classrooms & Labs", "3 Swimming Pools & Sports Complex", "Cambridge International (Sec-89)"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-6 sm:p-8 md:col-span-3">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-navy-900 transition hover:rotate-90 hover:bg-brand-600 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 id="enquiry-title" className="text-2xl font-semibold text-navy-900">Admission Enquiry</h3>
              <p className="mb-6 mt-1 text-sm text-muted">Fill in the details and our admission team will call you back.</p>
              <EnquiryForm compact onDone={() => setTimeout(() => setOpen(false), 2500)} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
