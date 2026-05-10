"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    q: "The 3-D rendering matched what they actually built — down to the tile and the fire-bowl spacing. Smoothest design process we've been through on any home project.",
    n: "M. & A. Reyes",
    l: "Katy",
  },
  {
    q: "Tracy and the team were responsive every single day of the build. Ground-up pricing meant no surprise line items at the end.",
    n: "Jordan H.",
    l: "Sugar Land",
  },
  {
    q: "Two years in, the tile lines are still dead-flat and the automation just works. That is what the six-point checkpoint was buying us.",
    n: "S. Patel",
    l: "Spring",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 md:py-44 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft flex items-center gap-3 mb-16">
          <span className="w-8 h-px bg-ink-soft" />
          05 — In Their Words
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {quotes.map((t, i) => (
            <motion.figure
              key={t.n}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-ink pt-8"
            >
              <span aria-hidden className="font-display text-5xl text-pool-700 leading-none">
                &ldquo;
              </span>
              <blockquote className="mt-3 font-display text-2xl md:text-[1.65rem] text-ink leading-snug">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 text-[0.7rem] uppercase tracking-[0.28em] text-ink-soft">
                {t.n} &nbsp;·&nbsp; {t.l}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
