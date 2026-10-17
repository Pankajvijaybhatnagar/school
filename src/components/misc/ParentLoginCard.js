"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, Info, Lock, LogIn, User } from "lucide-react";

export default function ParentLoginCard() {
  const [v, setV] = useState({ user: "", pass: "" });
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
    if (v.user.trim().length < 3) er.user = "Enter your Admission No. / Username";
    if (v.pass.length < 4) er.pass = "Enter your password";
    setErrors(er);
    if (!Object.keys(er).length) setMsg(true);
  }

  const wrap = (k) =>
    `flex items-center gap-3 rounded-xl border bg-cream px-4 transition focus-within:bg-ivory focus-within:ring-4 ${
      errors[k] ? "border-saffron-500 focus-within:ring-saffron-100" : "border-line focus-within:border-maroon-600 focus-within:ring-maroon-600/10"
    }`;
  const err = (k) => errors[k] && <p className="mt-1 text-xs font-medium text-saffron-600">{errors[k]}</p>;

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div>
        <div className={wrap("user")}>
          <User className="h-5 w-5 text-muted" />
          <input value={v.user} onChange={set("user")} placeholder="Admission No. / Username" autoComplete="username" className="w-full bg-transparent py-3.5 text-sm text-maroon-900 outline-none" aria-label="Admission number or username" />
        </div>
        {err("user")}
      </div>
      <div>
        <div className={wrap("pass")}>
          <Lock className="h-5 w-5 text-muted" />
          <input type={show ? "text" : "password"} value={v.pass} onChange={set("pass")} placeholder="Password" autoComplete="current-password" className="w-full bg-transparent py-3.5 text-sm text-maroon-900 outline-none" aria-label="Password" />
          <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? "Hide password" : "Show password"} className="text-muted hover:text-maroon-800">
            {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        {err("pass")}
      </div>
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted"><input type="checkbox" className="accent-saffron-600" /> Remember me</label>
        <Link href="/contact" className="font-semibold text-saffron-600 hover:underline">Forgot password?</Link>
      </div>
      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-sm bg-maroon-900 py-3.5 font-bold text-white shadow-lg shadow-maroon-900/30 transition hover:-translate-y-0.5">
        <LogIn className="h-5 w-5" /> Login
      </button>
      <AnimatePresence>
        {msg && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-2 rounded-xl bg-gold-100 p-4 text-sm text-maroon-900"
          >
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-saffron-600" /> The online parent portal will be linked here soon. Please contact the school office for details.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
