import Link from "next/link";
import Reveal from "./Reveal";
import { Ornament } from "./SectionHeading";

export default function PageHero({ title, highlight, subtitle, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-mesh text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gold-500/40" />
      <div className="container-x relative py-20 text-center sm:py-24">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            <Link href="/" className="transition hover:text-gold-400">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span className="text-gold-500">/</span>
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-gold-400">{c.label}</Link>
                ) : (
                  <span className="text-gold-400">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </h1>
          <div className="mt-6"><Ornament light /></div>
          {subtitle && <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{subtitle}</p>}
        </Reveal>
      </div>
      <div className="h-1 bg-gold-500" />
    </section>
  );
}
