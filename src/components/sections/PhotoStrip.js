import SmartImage from "@/components/ui/SmartImage";
import { featuredGallery, pick } from "@/data/images";

const extra = pick("campus-lawn", "yoga-3", "computer-lab", "republic-day-2", "dance-mustard-field", "games-hoops");

// Endless, slowly scrolling ribbon of photos. The list is doubled so the
// marquee animation (translateX -50%) loops seamlessly.
export default function PhotoStrip({ items = [...featuredGallery, ...extra] }) {
  return (
    <div className="group relative overflow-hidden py-2" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ivory to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ivory to-transparent sm:w-32" />
      <div className="flex w-max animate-marquee gap-4 [animation-duration:80s] group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((g, i) => (
          <figure key={i} className="relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl shadow-lg sm:h-64 sm:w-96">
            <SmartImage src={g.src} alt="" className="absolute inset-0" priority />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-950/85 to-transparent p-4 pt-10 text-sm font-semibold text-white">
              {g.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
