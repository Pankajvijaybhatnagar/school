"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageSquareText } from "lucide-react";
import { primaryContact, social } from "@/data/site";
import { FacebookIcon, InstagramIcon, WhatsappIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { openEnquiry } from "./EnquiryModal";

const side = [
  { key: "facebook", Icon: FacebookIcon, bg: "bg-navy-800" },
  { key: "instagram", Icon: InstagramIcon, bg: "bg-navy-800" },
  { key: "youtube", Icon: YoutubeIcon, bg: "bg-navy-800" },
];

export default function FloatingActions() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
      setScrolled(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showTop = progress > 0.08;
  // Floating buttons stay out of the hero; they appear once the visitor scrolls.
  const showFloating = scrolled;

  return (
    <>
      {/* Reading progress */}
      <div className="fixed inset-x-0 top-0 z-[90] h-1 origin-left bg-navy-800" style={{ transform: `scaleX(${progress})` }} />

      {/* Left social rail */}
      <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col min-[1400px]:flex">
        {side.map(({ key, Icon, bg }) => (
          <a
            key={key}
            href={social[key]}
            aria-label={key}
            className={`group flex h-11 w-11 items-center justify-center text-white transition-all duration-300 hover:w-14 ${bg}`}
          >
            <Icon className="h-4 w-4 transition group-hover:scale-125" />
          </a>
        ))}
      </div>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${primaryContact.whatsapp}?text=${encodeURIComponent("Hello RPS, I would like to know about admissions.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        tabIndex={showFloating ? 0 : -1}
        className={`fixed bottom-5 left-5 z-40 grid h-13 w-13 place-items-center rounded-full bg-emerald-600 text-white shadow-lg shadow-navy-900/20 transition-all duration-500 ${showFloating ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
      >
        <WhatsappIcon className="h-6 w-6" />
      </a>

      {/* Enquiry + back to top */}
      <div className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-500 ${showFloating ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="relative grid h-12 w-12 place-items-center rounded-full bg-white text-navy-900 shadow-xl"
            >
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
                <circle cx="24" cy="24" r="22" fill="none" stroke="#e5e7ef" strokeWidth="3" />
                <circle cx="24" cy="24" r="22" fill="none" stroke="var(--color-brand-600)" strokeWidth="3" strokeLinecap="round" strokeDasharray={138.2} strokeDashoffset={138.2 * (1 - progress)} />
              </svg>
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
        <button
          onClick={openEnquiry}
          className="flex items-center gap-2 rounded-md bg-navy-900 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-navy-900/30 transition hover:-translate-y-1"
        >
          <MessageSquareText className="h-4 w-4" /> Enquiry Now!
        </button>
      </div>
    </>
  );
}
