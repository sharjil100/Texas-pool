"use client";

import { motion } from "framer-motion";

const steps = [
  {
    k: "01",
    t: "Listen",
    d: "We sit on your patio at golden hour, learn how your family actually uses the yard, and trace the constraints — sun, wind, sightlines, drainage.",
    weeks: "Week 1–2",
  },
  {
    k: "02",
    t: "Design",
    d: "A small set of hand-drawn options, then a single 3D walkthrough. We size every radius, finish and fixture before we touch a shovel.",
    weeks: "Week 3–6",
  },
  {
    k: "03",
    t: "Engineer",
    d: "Soils report, structural drawings, hydraulic plan. Permits handled in-house. You see the budget locked, line by line.",
    weeks: "Week 7–9",
  },
  {
    k: "04",
    t: "Build",
    d: "Excavation through gunite, plumbing, tile, coping, deck and start-up. One project manager, daily updates, one accountable team.",
    weeks: "Week 10–22",
  },
  {
    k: "05",
    t: "Live",
    d: "Handover with a personal walkthrough. Lifetime structural warranty, two-year cosmetic, and a quiet phone line that always picks up.",
    weeks: "Year 1+",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 md:py-44 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-y-12 md:gap-12 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft flex items-center gap-3">
              <span className="w-8 h-px bg-ink-soft" />
              03 — Process
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-[clamp(2rem,5vw,4.4rem)] leading-[1.05] text-ink max-w-[22ch]">
              Five steps. One year. A pool you&apos;ll still love in twenty.
            </h2>
          </div>
        </div>

        <ol className="border-t border-line">
          {steps.map((s, i) => (
            <motion.li
              key={s.k}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-line py-8 md:py-12 grid grid-cols-12 gap-6 md:gap-12 group hover:bg-surface/40 transition-colors"
            >
              <div className="col-span-2 md:col-span-1 font-display text-3xl md:text-5xl text-pool-700">
                {s.k}
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-3xl md:text-5xl text-ink">{s.t}</h3>
              </div>
              <div className="col-span-12 md:col-span-5 text-ink-soft leading-relaxed">
                {s.d}
              </div>
              <div className="col-span-12 md:col-span-2 text-[0.7rem] uppercase tracking-[0.28em] text-ink-soft md:text-right">
                {s.weeks}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
