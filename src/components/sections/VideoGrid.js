"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { videos, social } from "@/data/site";
import SmartImage from "@/components/ui/SmartImage";
import { YoutubeIcon } from "@/components/ui/SocialIcons";

function Card({ v, big = false, onOpen }) {
  return (
    <button
      onClick={() => onOpen(v)}
      className={`group relative block w-full overflow-hidden rounded-3xl text-left shadow-xl shadow-navy-900/10 ${big ? "aspect-video lg:aspect-auto lg:h-full" : "aspect-video"}`}
    >
      <SmartImage src={v.image} alt={v.title} className="absolute inset-0 transition duration-700 group-hover:scale-110" variant="navy" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent" />
      <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-navy-950/30 text-white backdrop-blur-sm transition duration-300 group-hover:border-gold-400 group-hover:bg-gold-500">
        <Play className="ml-1 h-6 w-6 fill-white" />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-gold-400">
          <YoutubeIcon className="h-4 w-4 text-gold-400" /> {v.channel}
        </p>
        <h4 className={`mt-1 font-bold text-white ${big ? "text-xl sm:text-2xl" : "text-sm sm:text-base"}`}>{v.title}</h4>
      </div>
    </button>
  );
}

export default function VideoGrid({ items = videos, featured = true }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const [first, ...rest] = items;
  const list = featured ? rest : items;


  return (
    <>
      {featured ? (
        <div className="grid gap-5 lg:grid-cols-2">
          <Card v={first} big onOpen={setActive} />
          <div className="grid gap-5 sm:grid-cols-2">
            {list.map((v) => <Card key={v.title} v={v} onOpen={setActive} />)}
          </div>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((v) => <Card key={v.title} v={v} onOpen={setActive} />)}
        </div>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[85] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setActive(null)} aria-label="Close video" className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-white text-navy-900">
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-video overflow-hidden rounded-2xl bg-black">
                {active.id ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
                    title={active.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center text-white">
                    <YoutubeIcon className="h-16 w-16 text-gold-400" />
                    <p className="text-xl font-bold">{active.title}</p>
                    <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gold-400 px-6 py-3 font-bold">
                      Watch on YouTube
                    </a>
                  </div>
                )}
              </div>
              <p className="mt-4 text-center font-semibold text-white">{active.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
