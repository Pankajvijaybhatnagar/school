import { Bus, Download } from "lucide-react";
import { feeStructure } from "@/data/site";
import { images } from "@/data/images";

const inr = (n) => n.toLocaleString("en-IN");

export default function FeeTable() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-navy-900/10 ring-1 ring-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-navy-800 px-6 py-4 text-white">
        <h3 className="text-xl font-semibold">Fee Structure {feeStructure.session}</h3>
        <a href={images.feeStructure} target="_blank" rel="noopener noreferrer" download className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-950 transition hover:bg-gold-400">
          <Download className="h-4 w-4" /> Download
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-cream text-navy-900">
            <tr>
              {feeStructure.columns.map((c, i) => (
                <th key={c} className={`px-5 py-3.5 font-semibold ${i ? "text-right" : ""}`}>
                  {c}
                  {i > 0 && <span className="ml-1 text-xs font-normal text-muted">(₹)</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {feeStructure.rows.map(([cls, ...nums]) => (
              <tr key={cls} className="border-t border-slate-100 odd:bg-slate-50/60">
                <td className="px-5 py-3 font-semibold text-navy-900">{cls}</td>
                {nums.map((n, j) => (
                  <td key={j} className={`px-5 py-3 text-right tabular-nums ${j === nums.length - 1 ? "font-bold text-brand-600" : "text-navy-900"}`}>{inr(n)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="flex items-start gap-2 border-t border-line bg-gold-100 px-6 py-4 text-sm font-semibold text-brand-700">
        <Bus className="mt-0.5 h-4 w-4 shrink-0" /> Note: {feeStructure.note}
      </p>
    </div>
  );
}
