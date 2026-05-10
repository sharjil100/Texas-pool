"use client";

import { motion } from "framer-motion";

const CITIES = [
  { name: "Katy", note: "Studio · HQ", hq: true },
  { name: "Sugar Land", note: "Fort Bend County" },
  { name: "Fulshear", note: "Cross Creek Ranch" },
  { name: "Conroe", note: "North Houston" },
  { name: "Spring", note: "The Woodlands area" },
  { name: "Pearland", note: "South Houston" },
];

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="relative py-32 md:py-44 px-6 lg:px-10 bg-surface/60"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-y-12 md:gap-12 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft flex items-center gap-3">
              <span className="w-8 h-px bg-ink-soft" />
              07 — Coverage
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2rem,5vw,4.4rem)] leading-[1.05] text-ink max-w-[22ch]"
            >
              Designing across Greater Houston, finished
              <em className="not-italic text-pool-700"> at your door</em>.
            </motion.h2>
            <p className="mt-8 max-w-xl text-ink-soft leading-relaxed">
              Our studio is in Katy and our crews build daily across the Houston
              metro. If your home is in one of the neighborhoods below, we can
              be on-site for a walkthrough this week.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CITIES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                "relative rounded-2xl border p-7 md:p-8 transition-colors " +
                (c.hq
                  ? "bg-pool-900 border-pool-900 text-white"
                  : "bg-background border-line text-ink hover:border-pool-700")
              }
            >
              <div className="flex items-start justify-between">
                <div>
                  <div
                    className={
                      "text-[0.7rem] uppercase tracking-[0.28em] " +
                      (c.hq ? "text-white/60" : "text-ink-soft")
                    }
                  >
                    {c.note}
                  </div>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl">
                    {c.name}
                  </h3>
                </div>
                <span
                  aria-hidden
                  className={
                    "mt-1 inline-block w-2 h-2 rounded-full " +
                    (c.hq ? "bg-pool-300" : "bg-pool-500")
                  }
                />
              </div>
              <div
                className={
                  "mt-6 text-[0.7rem] uppercase tracking-[0.28em] " +
                  (c.hq ? "text-white/60" : "text-ink-soft")
                }
              >
                {c.hq ? "Visit by appointment" : "Free site walk · 24-hr reply"}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-ink-soft">
          <p className="max-w-xl">
            Just outside our standard radius? Call us — we still take selected
            projects across the broader Houston region.
          </p>
          <a
            href="tel:+18328707665"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm tracking-wide hover:bg-pool-900 transition-colors"
          >
            832-870-POOL
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
