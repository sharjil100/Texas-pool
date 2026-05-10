"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  {
    name: "HFS Financial",
    pitch: "Loans up to 120% of the project — covers furniture, accessories and outdoor extras.",
    bullets: ["Quick online application", "Direct lender", "No prepayment penalty"],
    href: "https://www.hfsfinancial.net/promo/65d38e01e3718af231d3848b",
  },
  {
    name: "Lyon Financial",
    pitch: "Locally owned and operated. Special discounts for active military and veterans.",
    bullets: ["Pool-industry specialists", "Military / veteran rates", "Personal loan officer"],
    href: "https://www.lyonfinancial.net/apply/?lid=11-14051",
  },
  {
    name: "Frost Bank",
    pitch: "Unsecured personal loans for outdoor projects, with the rates you'd expect from a Texas bank.",
    bullets: ["Texas-based lender", "No collateral required", "Competitive APR"],
    href: "https://www.frostbank.com/personal/banking/loan-products",
  },
];

export default function Financing() {
  return (
    <section
      id="financing"
      className="relative py-32 md:py-44 px-6 lg:px-10 bg-surface/60"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-y-10 md:gap-12 mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft flex items-center gap-3">
              <span className="w-8 h-px bg-ink-soft" />
              09 — Financing
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
              Three lender partners.
              <em className="not-italic text-pool-700"> Payments like a car loan.</em>
            </motion.h2>
            <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">
              We don&apos;t lend money — we just opened the doors at three of
              the lenders pool buyers ask us about most. Apply directly with
              whichever fits your situation; we&apos;ll keep building.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PARTNERS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.7,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col rounded-2xl border border-line bg-background p-8 md:p-9 hover:border-pool-700 transition-colors"
            >
              <div className="text-[0.7rem] uppercase tracking-[0.28em] text-ink-soft">
                Partner {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-3xl md:text-4xl text-ink">
                {p.name}
              </h3>
              <p className="mt-5 text-ink-soft leading-relaxed">{p.pitch}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-pool-500 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-ink group-hover:text-pool-700 transition-colors"
              >
                Apply with {p.name.split(" ")[0]}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-ink-soft">
          Rates and terms are set by the lenders, not by us. If you&apos;d
          rather have us walk you through the options on a call, dial{" "}
          <a href="tel:+18328707665" className="text-pool-700 hover:underline">
            832-870-POOL
          </a>
          .
        </p>
      </div>
    </section>
  );
}
