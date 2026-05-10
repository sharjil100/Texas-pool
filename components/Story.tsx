"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const STATS = [
  { kind: "count", to: 15, suffix: "", label: "Years building" },
  { kind: "count", to: 6, suffix: "", label: "Quality checkpoints" },
  { kind: "static", value: "3-D", label: "Renderings on every build" },
  { kind: "letters", value: "TX", label: "Veteran owned" },
] as const;

export default function Story() {
  return (
    <section id="story" className="relative py-32 md:py-44 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-y-12 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft flex items-center gap-3">
              <span className="w-8 h-px bg-ink-soft" />
              01 — Story
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2rem,5vw,4.4rem)] leading-[1.05] text-ink max-w-[22ch]"
            >
              Custom-built pools and outdoor living, with the
              <em className="not-italic text-pool-700"> respect, integrity </em>
              and <em className="not-italic text-pool-700">transparency</em> you
              deserve.
            </motion.h2>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
              <p className="text-ink-soft leading-relaxed">
                Texus Custom Outdoors is a veteran and former
                law-enforcement-owned studio based in Katy, building residential
                pools, spas, pergolas, kitchens and outdoor structures across
                Greater Houston — Sugar Land, Fulshear, Conroe, Spring and
                Pearland.
              </p>
              <p className="text-ink-soft leading-relaxed">
                Every project starts with a 3-D rendering and a ground-up price
                — you only pay for the features you choose, with no padded
                line items. An on-site project manager runs each build through
                a six-point quality checkpoint before we hand you the keys.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-line pt-10">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="font-display text-5xl md:text-6xl text-ink leading-none tabular-nums">
                    {s.kind === "count" ? (
                      <CountUp to={s.to} suffix={s.suffix} delay={i * 0.1} />
                    ) : s.kind === "letters" ? (
                      <LetterRise text={s.value} delay={i * 0.1} />
                    ) : (
                      <span>{s.value}</span>
                    )}
                  </div>
                  <div className="mt-2 text-[0.7rem] uppercase tracking-[0.28em] text-ink-soft">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({
  to,
  suffix = "",
  delay = 0,
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, delay, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

function LetterRise({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-flex">
      {text.split("").map((c, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden leading-none"
          style={{ paddingBottom: "0.05em" }}
        >
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {c}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
