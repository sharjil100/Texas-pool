"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const work = [
  {
    title: "Hill Country Vanishing Edge",
    location: "Dripping Springs, TX",
    year: "2025",
    span: "row-span-2",
    image: "/pool1.png",
  },
  {
    title: "Tarrytown Spa Court",
    location: "Austin, TX",
    year: "2024",
    span: "",
    image: "/pool2.png",
  },
  {
    title: "Rice Village Lap House",
    location: "Houston, TX",
    year: "2024",
    span: "",
    image: "/pool3.png",
  },
  {
    title: "Highland Park Plunge",
    location: "Dallas, TX",
    year: "2023",
    span: "row-span-2",
    image: "/pool4.png",
  },
  {
    title: "Lakeway Resort",
    location: "Lake Travis, TX",
    year: "2023",
    span: "",
    image: "/pool5.png",
  },
  {
    title: "Westlake Atrium",
    location: "Westlake, TX",
    year: "2022",
    span: "",
    image: "/pool6.png",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-32 md:py-44 px-6 lg:px-10 bg-surface/60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft flex items-center gap-3">
              <span className="w-8 h-px bg-ink-soft" />
              04 — Selected Work
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4.4rem)] leading-[1.05] text-ink max-w-[22ch]">
              A small archive of backyards we&apos;re still proud of.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.28em] text-ink hover:text-pool-700 transition-colors"
          >
            Full archive
            <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[28vw] md:auto-rows-[22vw] gap-4 md:gap-6">
          {work.map((w, i) => (
            <motion.figure
              key={w.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl bg-ink/5 ${w.span}`}
            >
              <motion.div
                initial={{ scale: 1.18 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-7 flex items-end justify-between text-white">
                <div>
                  <div className="font-display text-2xl md:text-3xl">{w.title}</div>
                  <div className="text-[0.7rem] uppercase tracking-[0.28em] mt-1 opacity-80">
                    {w.location}
                  </div>
                </div>
                <div className="text-[0.7rem] uppercase tracking-[0.28em] opacity-80">
                  {w.year}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
