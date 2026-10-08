import { Megaphone, Sparkles } from "lucide-react";
import { highlights } from "@/data/site";

export default function Ticker() {
  const items = [...highlights, ...highlights];
  return (
    <div className="relative flex items-stretch overflow-hidden bg-navy-800 text-white">
      <div className="relative z-10 flex shrink-0 items-center gap-2 bg-brand-600 px-4 py-2.5 text-sm font-bold uppercase tracking-wider sm:px-6">
        <Megaphone className="h-4 w-4" />
        <span className="hidden sm:inline">Highlights</span>
        <span className="absolute -right-3 top-0 h-full w-6 skew-x-[-20deg] bg-brand-600" />
      </div>
      <div className="group relative flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee items-center py-2.5 group-hover:[animation-play-state:paused]">
          {items.map((h, i) => (
            <span key={i} className="flex items-center gap-3 px-6 text-sm font-medium text-white/90">
              <Sparkles className="h-4 w-4 text-gold-400" />
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
