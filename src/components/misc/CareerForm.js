"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export const positions = ["PGT", "TGT", "PRT", "Sports Coach", "Administration", "Other"];
const initial = { name: "", email: "", phone: "", position: "", experience: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address";
  if (!/^[6-9]\d{9}$/.test(v.phone.replace(/\D/g, "").slice(-10))) e.phone = "Enter a valid 10-digit mobile number";
  if (!v.position) e.position = "Please select a position";
  if (v.experience === "" || Number(v.experience) < 0 || Number(v.experience) > 50) e.experience = "Enter experience in years (0–50)";
  return e;
}

export default function CareerForm() {
  const [v, setV] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const set = (k) => (e) => {
    setV((x) => ({ ...x, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function submit(e) {
    e.preventDefault();
    const found = validate(v);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, type: "career" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="h-16 w-16 text-emerald-500" />
        <h4 className="mt-4 text-xl font-bold text-navy-900">Application received!</h4>
        <p className="mt-2 text-sm text-muted">Thank you, {v.name.split(" ")[0]}. Our HR team will review your profile for the {v.position} role and get in touch.</p>
      </div>
    );
  }

  const field = (k) =>
    `w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
      errors[k] ? "border-brand-500 focus:ring-brand-100" : "border-slate-200 focus:border-navy-600 focus:ring-navy-600/10"
    }`;
  const err = (k) => errors[k] && <p className="mt-1 text-xs font-medium text-brand-600">{errors[k]}</p>;

  return (
    <form onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2">
      <div><input className={field("name")} placeholder="Full Name *" value={v.name} onChange={set("name")} aria-label="Full name" />{err("name")}</div>
      <div><input className={field("email")} type="email" placeholder="Email *" value={v.email} onChange={set("email")} aria-label="Email" />{err("email")}</div>
      <div><input className={field("phone")} inputMode="tel" maxLength={14} placeholder="Mobile Number *" value={v.phone} onChange={set("phone")} aria-label="Mobile number" />{err("phone")}</div>
      <div>
        <select className={field("position")} value={v.position} onChange={set("position")} aria-label="Position">
          <option value="">Position Applying For *</option>
          {positions.map((p) => <option key={p}>{p}</option>)}
        </select>
        {err("position")}
      </div>
      <div className="sm:col-span-2"><input className={field("experience")} type="number" min="0" max="50" placeholder="Experience (years) *" value={v.experience} onChange={set("experience")} aria-label="Experience in years" />{err("experience")}</div>
      <textarea className={`${field("message")} sm:col-span-2`} rows={4} placeholder="Qualifications, subjects and a short note about yourself (you can share your resume link here)" value={v.message} onChange={set("message")} aria-label="Message" />
      {status === "error" && <p className="text-sm font-medium text-brand-600 sm:col-span-2">Something went wrong. Please try again.</p>}
      <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-800 px-6 py-3.5 font-bold text-white shadow-lg shadow-navy-900/10 transition hover:-translate-y-0.5 disabled:opacity-70 sm:col-span-2">
        {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-4 w-4" />}
        {status === "sending" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
