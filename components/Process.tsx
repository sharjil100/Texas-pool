"use client";

import { motion } from "framer-motion";

const steps = [
  {
    k: "01",
    t: "Listen",
    d: "Free consultation on your patio. We learn how your family uses the yard, walk the site, and trace the constraints — sun, drainage, sightlines, HOA.",
    weeks: "Week 1",
  },
  {
    k: "02",
    t: "Design in 3-D",
    d: "Every project is rendered in full 3-D before construction starts. You see exact tile, coping, deck and fire-feature placement — and we revise until you sign off.",
    weeks: "Week 2–4",
  },
  {
    k: "03",
    t: "Ground-up Quote",
    d: "Transparent ground-up pricing — every line item is the feature you chose, with no padded minimums. Permits are filed in-house and you see the budget locked.",
    weeks: "Week 5–6",
  },
  {
    k: "04",
    t: "Build",
    d: "Excavation through gunite, plumbing, tile, coping, deck and startup. A dedicated on-site project manager runs daily inspections through a six-point quality checkpoint.",
    weeks: "Week 7–18",
  },
  {
    k: "05",
    t: "Quality Sign-off",
    d: "Personal handover and walkthrough. We don't close the project until each of the six checkpoints passes and you're confident running every feature yourself.",
    weeks: "Final week",
  },
  {
    k: "06",
    t: "Live",
    d: "Ongoing support — chemistry questions, automation tweaks, seasonal start-ups. The phone line that built your pool is the same one that picks up after.",
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
              Six steps. One project manager. Six quality checkpoints.
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
