"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 md:py-44 px-6 lg:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] relative">
        <div className="relative rounded-3xl overflow-hidden border border-line bg-pool-900">
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=2400&q=85&auto=format&fit=crop"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-50"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-pool-900/85 via-pool-900/55 to-pool-700/40" />

          <div className="relative px-8 py-20 md:px-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-10 text-white">
            <div className="md:col-span-7">
              <div className="text-[0.7rem] uppercase tracking-[0.32em] text-white/60 flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-white/60" />
                06 — Start a project
              </div>
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.98] max-w-[16ch]"
              >
                Bring us your sloped, awkward, impossible backyard.
              </motion.h2>
              <p className="mt-8 max-w-md text-white/80 leading-relaxed">
                We open three to five new conversations each season. Tell us about
                your home, your family, and the way you&apos;d like to spend a
                Saturday in July.
              </p>
            </div>

            <form
              className="md:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-7 md:p-9 border border-white/10 self-start"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-4">
                <Field label="Name" id="name" />
                <Field label="City" id="city" />
                <Field label="Email" id="email" type="email" className="col-span-2" />
                <Field label="Lot size (acres)" id="lot" />
                <Field label="Budget range" id="budget" />
                <div className="col-span-2">
                  <label className="text-[0.7rem] uppercase tracking-[0.28em] text-white/70">
                    Tell us about the yard
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full bg-transparent border-b border-white/30 focus:border-white outline-none text-white placeholder:text-white/40 py-2 transition-colors resize-none"
                    placeholder="Slope, sun, what you'd love to do there…"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-pool-900 px-6 py-4 text-sm uppercase tracking-[0.28em] hover:bg-pool-100 transition-colors"
              >
                Begin the conversation
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  className = "",
}: {
  label: string;
  id: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-[0.7rem] uppercase tracking-[0.28em] text-white/70"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="mt-2 w-full bg-transparent border-b border-white/30 focus:border-white outline-none text-white py-2 transition-colors"
      />
    </div>
  );
}
