"use client";

import { motion } from "framer-motion";

const items = [
  "Gunite Construction",
  "Spa Integration",
  "Tanning Ledges",
  "Negative Edge",
  "Outdoor Kitchens",
  "Fire Features",
  "Pergolas",
  "Smart Automation",
  "Travertine Decks",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
      className="border-y border-line bg-surface/60 overflow-hidden py-7"
    >
      <div className="flex marquee-track gap-12 whitespace-nowrap">
        {doubled.map((label, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-4xl text-ink/80 flex items-center gap-12"
          >
            {label}
            <span className="inline-block w-2 h-2 rounded-full bg-pool-500" />
          </span>
        ))}
      </div>
    </motion.section>
  );
}
