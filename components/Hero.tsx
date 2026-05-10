"use client";

import { motion } from "framer-motion";

const LETTERS = "TEXUS".split("");

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] w-full overflow-hidden bg-pool-900"
    >
      {/*
        Hero video — drop your files into /public/hero/
          • hero.webm  (VP9/AV1, primary — smallest)
          • hero.mp4   (H.264, fallback — broadest support)
          • hero-portrait.mp4  (optional 9:16 mobile cut)
          • poster.jpg (2400×1350 JPG q85, painted instantly while video buffers)
        See /public/hero/README.md for the full spec.
      */}
      <motion.video
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero/poster.jpg"
        aria-hidden
      >
        <source src="/hero/hero-video.mp4" type="video/mp4" />
      </motion.video>

      {/* Legibility veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-pool-900/55 via-pool-900/15 to-pool-900/75" />

      {/* Top corner ticks */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-24 left-6 lg:left-10 hidden md:flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-white/70 pointer-events-none"
      >
        <span className="w-8 h-px bg-white/70" />
        Plate&nbsp;01 &nbsp;/&nbsp; Backyard, At&nbsp;Dusk
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-24 right-6 lg:right-10 hidden md:flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-white/70 pointer-events-none"
      >
        Texus Studio &nbsp;/&nbsp; Katy, TX
        <span className="w-8 h-px bg-white/70" />
      </motion.div>

      {/* Center stack */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.7rem] uppercase tracking-[0.32em] text-white/85 mb-8"
        >
          Custom Pools &nbsp;·&nbsp; 15 Years &nbsp;·&nbsp; Greater Houston
        </motion.span>

        {/* Big TEXUS wordmark — letters write in sequentially */}
        <h1
          aria-label="Texus"
          className="font-display text-white leading-[0.85] flex items-baseline gap-[0.04em] text-[clamp(5rem,22vw,22rem)] drop-shadow-[0_4px_40px_rgba(0,0,0,0.45)]"
        >
          {LETTERS.map((c, i) => (
            <span
              key={i}
              aria-hidden
              className="relative inline-block overflow-hidden leading-[0.85]"
              style={{ paddingBottom: "0.06em" }}
            >
              <motion.span
                initial={{ y: "110%", rotate: 6 }}
                animate={{ y: "0%", rotate: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.45 + i * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {c}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Calligraphic underline that draws in after the letters land */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.45 + LETTERS.length * 0.13 + 0.1,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="mt-2 md:mt-4 h-[2px] w-[clamp(160px,30vw,420px)] bg-white/85"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.45 + LETTERS.length * 0.13 + 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 max-w-xl text-base md:text-lg text-white/85 leading-relaxed"
        >
          Custom-built residential pools, spas and outdoor living, designed
          and built across Greater Houston with transparent pricing and
          on-site project management.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.45 + LETTERS.length * 0.13 + 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm tracking-wide hover:bg-pool-100 transition-colors"
          >
            Start a project
            <span aria-hidden>→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-6 py-3.5 text-sm tracking-wide hover:bg-white/10 transition-colors"
          >
            See the work
          </a>
        </motion.div>
      </div>

      {/* Bottom rail */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 inset-x-0 h-24 flex items-end justify-between px-6 lg:px-10 pb-6 pointer-events-none text-[0.7rem] uppercase tracking-[0.28em] text-white/75"
      >
        <div>· Now Booking · Veteran Owned</div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3"
        >
          Scroll
          <span className="w-12 h-px bg-white/70 relative overflow-hidden">
            <span className="absolute inset-0 bg-white water-shimmer" />
          </span>
        </motion.div>
        <div className="tabular-nums">001 / 008</div>
      </motion.div>
    </section>
  );
}
