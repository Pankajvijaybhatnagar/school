"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { images } from "@/data/images";

// Uses /public/images/logo/rps-logo.png when it exists, otherwise draws a
// text logo in the RPS colours.
export default function Logo({ light = false, compact = false }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="RPS Group of Schools — Home">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={images.logo}
          alt="RPS Group of Schools"
          onError={() => setFailed(true)}
          className={`${compact ? "h-11" : "h-14"} w-auto object-contain transition-all`}
        />
      ) : (
        <>
          {/* Crest-style monogram */}
          <span
            className={`relative grid ${compact ? "h-11 w-11" : "h-14 w-14"} place-items-center rounded-full border-2 border-gold-500 transition-all ${
              light ? "bg-navy-800" : "bg-navy-900"
            }`}
          >
            <span className="absolute inset-[3px] rounded-full border border-gold-500/40" />
            <span className={`font-display ${compact ? "text-sm" : "text-base"} font-semibold tracking-wider text-white`}>RPS</span>
          </span>
          <span className={`leading-none ${compact ? "" : "border-l border-line pl-3"}`}>
            <span className={`block font-display ${compact ? "text-xl" : "text-2xl"} font-semibold tracking-wide ${light ? "text-white" : "text-navy-900"}`}>
              RPS
            </span>
            <span className={`mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.3em] ${light ? "text-gold-400" : "text-gold-500"}`}>
              Group of Schools
            </span>
          </span>
        </>
      )}
    </Link>
  );
}
