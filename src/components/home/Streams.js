import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { streams } from "@/data/site";

export default function Streams() {
  return (
    <section className="relative bg-mesh py-24 text-white">
      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Beyond the Classroom"
          title="Preparing Champions for"
          highlight="Every Dream"
          text="Integrated guidance for India's toughest competitive examinations — right inside the school campus."
        />
        <Reveal className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-3 lg:grid-cols-6">
          {streams.map((s) => (
            <div
              key={s.name}
              className="group relative border-b border-r border-white/10 px-5 py-10 text-center transition-colors duration-500 hover:bg-white"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100" />
              <Icon name={s.icon} className="mx-auto h-9 w-9 text-gold-400 transition-colors group-hover:text-brand-600" strokeWidth={1.4} />
              <p className="mt-5 font-display text-2xl font-semibold tracking-wide transition-colors group-hover:text-navy-900">{s.name}</p>
              <p className="mt-2 text-xs leading-snug text-white/60 transition-colors group-hover:text-muted">{s.full}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
