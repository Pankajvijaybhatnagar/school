import Link from "next/link";
import { images } from "@/data/images";
import { school } from "@/data/site";

// School crest from /public/images/logo/gurukul-logo.webp with the name beside it.
export default function Logo({ light = false, compact = false }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${school.name}, ${school.place} — Home`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images.logo}
        alt={`${school.name} logo`}
        className={`${compact ? "h-12 w-12" : "h-16 w-16"} rounded-full object-contain transition-all ${light ? "bg-white p-0.5" : ""}`}
      />
      <span className={`leading-none ${compact ? "" : "border-l border-line pl-3"}`}>
        <span className={`hidden text-[9.5px] font-semibold uppercase tracking-[0.18em] sm:block ${light ? "text-white/60" : "text-muted"}`}>
          Shri Lajja Ram Bashesar Dass
        </span>
        <span className={`mt-1 block font-display ${compact ? "text-lg" : "text-xl sm:text-2xl"} font-semibold ${light ? "text-white" : "text-navy-900"}`}>
          {school.name}
        </span>
        <span className={`mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.3em] ${light ? "text-gold-400" : "text-gold-500"}`}>
          {school.place} • Est. {school.founded}
        </span>
      </span>
    </Link>
  );
}
