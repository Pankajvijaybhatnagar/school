"use client";

import { motion } from "framer-motion";

const dirs = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 60 },
  right: { x: -60 },
  zoom: { scale: 0.9 },
  none: {},
};

export default function Reveal({ children, from = "up", delay = 0, className = "", id }) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, ...dirs[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
