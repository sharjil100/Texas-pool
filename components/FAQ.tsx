"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "How long have you been building pools?",
    a: "Fifteen years of designing and building residential pools, spas, pergolas, outdoor kitchens and outdoor structures across Greater Houston.",
  },
  {
    q: "Where do you build?",
    a: "Our studio is in Katy and we serve Sugar Land, Fulshear, Conroe, Spring and Pearland in particular — and most of the Greater Houston area beyond. If you're nearby and unsure, call us.",
  },
  {
    q: "Do you use templates, or is every build custom?",
    a: "Every build is fully custom — geometric or free-form, your call. We deliver a full 3-D rendering of the project before construction begins, so you see exactly what you're getting.",
  },
  {
    q: "How do you price projects?",
    a: "Ground-up pricing. You only pay for the features you actually choose — there are no mandatory minimums or padded line items. Pricing is fully transparent before you sign.",
  },
  {
    q: "Who manages my project on-site?",
    a: "A dedicated on-site project manager oversees every build from excavation to startup. Tracy Glenn leads our PM operations and is on every project.",
  },
  {
    q: "How do you ensure quality?",
    a: "A six-point quality checkpoint process runs across the build. Every stage is inspected before the next begins, and nothing is hidden behind drywall or decking until you've signed off.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes — we work with three lender partners. HFS Financial loans up to 120% of the project (so you can include outdoor furniture and accessories), Lyon Financial offers special discounts for active military and veterans, and Frost Bank provides unsecured outdoor-project loans.",
  },
  {
    q: "What's included beyond the pool itself?",
    a: "Spas and hot tubs, covered and enclosed patios, pergolas, outdoor kitchens, fire pits and fireplaces, fire bowls, water bowls, sheer descents and water features. Everything that turns a yard into a place you'd rather be than the living room.",
  },
  {
    q: "Are you licensed and accredited?",
    a: "We're BBB Accredited, HomeAdvisor Top Rated and Elite Pro, Houzz and Google rated, and proudly veteran and former-law-enforcement-owned and operated.",
  },
  {
    q: "How do I get started?",
    a: "Free quote and free design consultation. Call 832-870-POOL or send us your details on the contact form below — we usually reply within a business day.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-32 md:py-44 px-6 lg:px-10"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-y-12 md:gap-12 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft flex items-center gap-3">
              <span className="w-8 h-px bg-ink-soft" />
              10 — Questions
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
              The questions buyers ask
              <em className="not-italic text-pool-700"> before they call</em>.
            </motion.h2>
          </div>
        </div>

        <ul className="border-t border-line">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <li key={f.q} className="border-b border-line">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-7 md:py-9 text-left group"
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    <span className="font-display text-pool-700 text-xl md:text-2xl tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl md:text-3xl leading-tight text-ink">
                      {f.q}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className={
                      "shrink-0 w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink-soft transition-all duration-300 " +
                      (isOpen
                        ? "rotate-45 bg-pool-700 text-white border-pool-700"
                        : "group-hover:border-pool-700 group-hover:text-pool-700")
                    }
                  >
                    <Plus size={18} strokeWidth={1.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-10 md:pl-[calc(2.5rem+2.5rem)] pr-12 max-w-3xl text-ink-soft leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-ink-soft">
          <p>Still have a question? We&apos;d rather you ask than guess.</p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+18328707665"
              className="inline-flex items-center gap-2 rounded-full border border-line text-ink px-5 py-2.5 text-sm tracking-wide hover:border-pool-700 hover:text-pool-700 transition-colors"
            >
              832-870-POOL
            </a>
            <a
              href="mailto:Info@texascustomoutdoors.com"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-2.5 text-sm tracking-wide hover:bg-pool-900 transition-colors"
            >
              Email the studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
