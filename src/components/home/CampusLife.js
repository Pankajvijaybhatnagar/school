import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import SectionHeading from "@/components/ui/SectionHeading";
import { photo } from "@/data/photos";

const tiles = [
  { title: "Science Laboratories", text: "Physics, chemistry and biology — learnt by doing.", image: "science-lab-4", href: "/facilities#labs", span: "md:col-span-2 md:row-span-2" },
  { title: "Computer Lab", text: "A computer for every learner.", image: "computer-lab-3", href: "/facilities#computers" },
  { title: "Library", text: "Shelves full of stories and knowledge.", image: "library", href: "/facilities#library" },
  { title: "Pre-Primary Play Zone", text: "Colourful rooms where little ones learn through play.", image: "kids-play-slides-2", href: "/facilities#pre-primary", span: "md:row-span-2" },
  { title: "Sports & Yoga", text: "Kabaddi, kho-kho, athletics and daily yoga.", image: "sports-team-3", href: "/facilities#sports", span: "md:row-span-2" },
  { title: "Culture & Festivals", text: "Folk dance, havan, Republic Day and the annual function.", image: "dance-haryanvi-3", href: "/gallery", span: "md:col-span-2" },
];

export default function CampusLife() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="container-x relative">
        <SectionHeading light eyebrow="Campus Life" title="Where Learning" highlight="Comes Alive" text="A glimpse of everyday life on the Sigma Vidya Kunj campus — labs, library, playgrounds and celebrations." />
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[230px]">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.08} className={t.span || ""}>
              <Link href={t.href} className="group relative block h-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                <SmartImage src={photo(t.image)} alt={t.title} label={t.title} className="absolute inset-0 transition duration-[1200ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent transition duration-500 group-hover:from-navy-950" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="mb-3 block h-0.5 w-10 bg-gold-500 transition-all duration-500 group-hover:w-20" />
                  <h3 className="text-2xl font-semibold leading-tight">{t.title}</h3>
                  <p className="mt-1 max-h-20 overflow-hidden text-sm text-white/75 md:max-h-0 md:opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">{t.text}</p>
                </div>
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur transition group-hover:rotate-45 group-hover:bg-gold-500">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
