"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, Info, Lock, LogIn, School, User } from "lucide-react";
import { campuses } from "@/data/site";

export default function ParentLoginCard() {
  const [v, setV] = useState({ user: "", pass: "", campus: "" });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState(false);

  const set = (k) => (e) => {
    setV((x) => ({ ...x, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function submit(e) {
    e.preventDefault();
    const er = {};
    if (!v.campus) er.campus = "Please select your campus";
    if (v.user.trim().length < 3) er.user = "Enter your Admission No. / Username";
    if (v.pass.length < 4) er.pass = "Enter your password";
    setErrors(er);
    if (!Object.keys(er).length) setMsg(true);
  }

  const wrap = (k) =>
    `flex items-center gap-3 rounded-xl border bg-slate-50 px-4 transition focus-within:bg-white focus-within:ring-4 ${
      errors[k] ? "border-brand-500 focus-within:ring-brand-100" : "border-slate-200 focus-within:border-navy-600 focus-within:ring-navy-600/10"
    }`;
  const err = (k) => errors[k] && <p className="mt-1 text-xs font-medium text-brand-600">{errors[k]}</p>;

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div>
        <div className={wrap("campus")}>
          <School className="h-5 w-5 text-slate-400" />
          <select value={v.campus} onChange={set("campus")} className="w-full bg-transparent py-3.5 text-sm text-navy-900 outline-none" aria-label="Campus">
            <option value="">Select Campus</option>
            {campuses.map((c) => <option key={c.slug} value={c.slug}>{c.name}, {c.city}</option>)}
          </select>
        </div>
        {err("campus")}
      </div>
      <div>
        <div className={wrap("user")}>
          <User className="h-5 w-5 text-slate-400" />
          <input value={v.user} onChange={set("user")} placeholder="Admission No. / Username" autoComplete="username" className="w-full bg-transparent py-3.5 text-sm text-navy-900 outline-none" aria-label="Admission number or username" />
        </div>
        {err("user")}
      </div>
      <div>
        <div className={wrap("pass")}>
          <Lock className="h-5 w-5 text-slate-400" />
          <input type={show ? "text" : "password"} value={v.pass} onChange={set("pass")} placeholder="Password" autoComplete="current-password" className="w-full bg-transparent py-3.5 text-sm text-navy-900 outline-none" aria-label="Password" />
          <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? "Hide password" : "Show password"} className="text-slate-400 hover:text-navy-800">
            {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        {err("pass")}
      </div>
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted"><input type="checkbox" className="accent-brand-600" /> Remember me</label>
        <Link href="/contact" className="font-semibold text-brand-600 hover:underline">Forgot password?</Link>
      </div>
      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-sm bg-navy-900 py-3.5 font-bold text-white shadow-lg shadow-navy-900/30 transition hover:-translate-y-0.5">
        <LogIn className="h-5 w-5" /> Login
      </button>
      <AnimatePresence>
        {msg && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-2 rounded-xl bg-gold-100 p-4 text-sm text-navy-900"
          >
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> Parent portal will be linked here (CampusPro).
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
