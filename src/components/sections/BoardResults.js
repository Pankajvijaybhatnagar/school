import { Trophy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { boardResults } from "@/data/site";

function ResultCard({ cls, rows, delay }) {
  return (
    <Reveal delay={delay} className="overflow-hidden rounded-2xl bg-ivory shadow-xl shadow-maroon-900/10 ring-1 ring-line">
      <div className="flex items-center justify-between bg-maroon-800 px-6 py-4 text-white">
        <h3 className="text-xl font-semibold">Result Class {cls}</h3>
        <Trophy className="h-5 w-5 text-gold-400" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
        {rows.map((r) => (
          <div key={r.year} className="px-3 py-6 text-center">
            <p className={`font-display text-3xl font-semibold sm:text-4xl ${r.pct === 100 ? "text-saffron-600" : "text-maroon-900"}`}>{r.pct}%</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gold-500">{r.year}</p>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-cream text-maroon-900">
            <tr>
              <th className="px-3 py-3 sm:px-5 font-semibold">Year</th>
              <th className="px-3 py-3 sm:px-5 font-semibold">Registered</th>
              <th className="px-3 py-3 sm:px-5 font-semibold">Passed</th>
              <th className="px-3 py-3 sm:px-5 font-semibold">Pass %</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.year} className="border-t border-line">
                <td className="px-3 py-3 sm:px-5 font-semibold text-muted">{r.year}</td>
                <td className="px-3 py-3 sm:px-5 text-maroon-900">{r.registered}</td>
                <td className="px-3 py-3 sm:px-5 text-maroon-900">{r.passed}</td>
                <td className="px-3 py-3 sm:px-5 font-bold text-maroon-900">{r.pct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}

export default function BoardResults() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <ResultCard cls="X" rows={boardResults.X} />
      <ResultCard cls="XII" rows={boardResults.XII} delay={0.1} />
    </div>
  );
}
