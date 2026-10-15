import Link from "next/link";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { Ornament } from "./SectionHeading";

const positions = { center: "object-center", top: "object-top", bottom: "object-bottom" };

// `image` (a registry key or path) puts a darkened photo behind the heading.
export default function PageHero({ title, highlight, subtitle, crumbs = [], image, position = "center" }) {
  return (
    <section className="relative overflow-hidden bg-mesh text-white">
      {image && (
        <>
          <SmartImage src={image} alt="" className="absolute inset-0 animate-hero-zoom" imgClassName={positions[position]} variant="navy" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(10_20_38/0.6)_100%)]" />
        </>
      )}
      <div className="absolute inset-x-0 top-0 h-px bg-gold-500/40" />
      <div className={`container-x relative text-center ${image ? "py-24 sm:py-32" : "py-20 sm:py-24"}`}>
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
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
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight drop-shadow-lg sm:text-5xl lg:text-6xl">
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </h1>
          <div className="mt-6"><Ornament light /></div>
          {subtitle && <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{subtitle}</p>}
        </Reveal>
      </div>
      <div className="relative h-1 bg-gold-500" />
    </section>
  );
}
