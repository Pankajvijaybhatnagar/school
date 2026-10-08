"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export default function CeoContactForm() {
  const [v, setV] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const set = (k) => (e) => {
    setV((x) => ({ ...x, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function submit(e) {
    e.preventDefault();
    const er = {};
    if (v.name.trim().length < 2) er.name = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(v.phone.replace(/\D/g, "").slice(-10))) er.phone = "Enter a valid 10-digit mobile number";
    if (v.message.trim().length < 10) er.message = "Please write at least 10 characters";
    setErrors(er);
    if (Object.keys(er).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, type: "ceo-window" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-500" />
        <p className="mt-3 text-lg font-bold text-navy-900">Thank you, {v.name.split(" ")[0]}!</p>
        <p className="mt-1 text-sm text-muted">Your message has been sent to the CEO&apos;s office.</p>
      </div>
    );
  }

  const cls = (k) =>
    `w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:bg-white focus:ring-4 ${
      errors[k] ? "border-brand-500 focus:ring-brand-100" : "border-slate-200 focus:border-navy-600 focus:ring-navy-600/10"
    }`;

  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <div>
        <input className={cls("name")} placeholder="Your Name *" value={v.name} onChange={set("name")} aria-label="Your name" />
        {errors.name && <p className="mt-1 text-xs text-brand-600">{errors.name}</p>}
      </div>
      <div>
        <input className={cls("phone")} placeholder="Mobile Number *" inputMode="tel" value={v.phone} onChange={set("phone")} aria-label="Mobile number" />
        {errors.phone && <p className="mt-1 text-xs text-brand-600">{errors.phone}</p>}
      </div>
      <div>
        <textarea className={cls("message")} rows={5} placeholder="Your message / suggestion / feedback *" value={v.message} onChange={set("message")} aria-label="Message" />
        {errors.message && <p className="mt-1 text-xs text-brand-600">{errors.message}</p>}
      </div>
      {status === "error" && <p className="text-sm text-brand-600">Something went wrong. Please try again.</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 disabled:opacity-70"
      >
        {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-4 w-4" />}
        {status === "sending" ? "Sending..." : "Send to CEO"}
      </button>
    </form>
  );
}
