"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    n: "I",
    title: "Custom Pools",
    body: "Geometric or free-form, every pool is custom-designed and rendered in 3-D before construction starts. Hand-set tile, full-tile coping, and the exact finish you choose.",
    image: "/pool1.png",
  },
  {
    n: "II",
    title: "Spas & Hot Tubs",
    body: "Integrated spas built into the pool shell or stand-alone hot tubs — bench seating, hydrotherapy jets, sheer-descent spillovers and quiet, automated heating you can run from your phone.",
    image: "/pool4.png",
  },
  {
    n: "III",
    title: "Outdoor Living",
    body: "Covered and enclosed patios, custom pergolas, and outdoor kitchens — designed alongside the pool so the architecture feels like one continuous backyard.",
    image: "/pool3.png",
  },
  {
    n: "IV",
    title: "Fire & Water Features",
    body: "Fire pits, fireplaces, fire bowls, water bowls and bubbler fountains — automated lighting and chemistry included, so the pool stays the centerpiece long after sundown.",
    image: "/pool2.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-44 px-6 lg:px-10 bg-surface/60">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft flex items-center gap-3">
              <span className="w-8 h-px bg-ink-soft" />
              02 — Services
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4.4rem)] leading-[1.05] text-ink max-w-[20ch]">
              Four disciplines, one continuous backyard.
            </h2>
          </div>
          <p className="text-ink-soft max-w-md">
            Pools, spas, outdoor living, and fire and water features —
            designed together, built by one accountable team, priced from the
            ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-background border border-line"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.div
                  initial={{ scale: 1.18 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </motion.div>
                <div className="absolute top-5 left-5 font-display text-2xl text-white/90 mix-blend-difference">
                  {s.n}
                </div>
              </div>
              <div className="p-7 md:p-9">
                <h3 className="font-display text-3xl md:text-4xl text-ink">{s.title}</h3>
                <p className="mt-4 text-ink-soft leading-relaxed max-w-[42ch]">
                  {s.body}
                </p>
                <div className="mt-7 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-ink-soft group-hover:text-pool-700 transition-colors">
                  Explore discipline
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
