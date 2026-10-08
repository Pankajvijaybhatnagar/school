import Icon from "@/components/ui/Icon";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import { groupStats } from "@/data/site";

export default function StatsBand({ stats = groupStats }) {
  return (
    <section className="relative overflow-hidden py-20">
      <SmartImage src="statsBg" alt="" className="absolute inset-0" variant="navy" />
      <div className="absolute inset-0 bg-navy-950/90" />
      <div className="container-x relative">
        <Reveal className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="px-4 text-center text-white">
              <Icon name={s.icon || "Award"} className="mx-auto h-8 w-8 text-gold-400" strokeWidth={1.4} />
              <p className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix || ""} />
              </p>
              <span className="mx-auto mt-4 block h-px w-8 bg-gold-500" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/65">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
