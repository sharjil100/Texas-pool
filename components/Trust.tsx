"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Star, Users, Hammer, Flag } from "lucide-react";

const BADGES = [
  {
    icon: ShieldCheck,
    label: "BBB Accredited",
    sub: "Better Business Bureau",
  },
  {
    icon: Award,
    label: "HomeAdvisor",
    sub: "Top Rated Pro",
  },
  {
    icon: Hammer,
    label: "HomeAdvisor",
    sub: "Elite Pro",
  },
  {
    icon: Users,
    label: "Houzz Rated",
    sub: "Verified Reviews",
  },
  {
    icon: Star,
    label: "Google Rated",
    sub: "Verified Reviews",
  },
  {
    icon: Flag,
    label: "Veteran Owned",
    sub: "& Operated",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="relative py-28 md:py-36 px-6 lg:px-10 border-y border-line"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-y-10 md:gap-12 mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft flex items-center gap-3">
              <span className="w-8 h-px bg-ink-soft" />
              08 — Recognition
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(1.8rem,4.4vw,3.6rem)] leading-[1.05] text-ink max-w-[24ch]"
            >
              Accredited where it matters.
              <em className="not-italic text-pool-700"> Reviewed where you look.</em>
            </motion.h2>
            <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">
              We are a veteran and former law-enforcement-owned company. Every
              accreditation below is independently verified — feel free to look
              us up before you call.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {BADGES.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label + b.sub}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col items-center text-center rounded-2xl border border-line bg-background px-5 py-8 hover:border-pool-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center text-pool-700 group-hover:bg-pool-100 transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="mt-5 font-display text-xl text-ink leading-tight">
                  {b.label}
                </div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.24em] text-ink-soft">
                  {b.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
