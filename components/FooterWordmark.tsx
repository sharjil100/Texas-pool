"use client";

import { motion } from "framer-motion";

const TEXT = "CUSTOM POOLS";

export default function FooterWordmark() {
  return (
    <div className="mt-12 w-full px-2 md:px-4 select-none pointer-events-none">
      <div
        aria-label={TEXT}
        className="font-display text-center whitespace-nowrap text-white/35"
        style={{
          fontSize: "clamp(2.5rem, 13.5vw, 15rem)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {TEXT.split("").map((c, i) => (
          <motion.span
            key={i}
            aria-hidden
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {c === " " ? " " : c}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
