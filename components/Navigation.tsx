"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#coverage", label: "Coverage" },
  { href: "#financing", label: "Financing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-sky-500/90 backdrop-blur-md border-b border-white/15 shadow-[0_10px_30px_-12px_rgba(14,165,233,0.45)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" aria-label="Texas Custom Outdoors home">
            <Logo />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm tracking-wide text-white/85 hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className={cn(
                "hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm tracking-wide transition-colors",
                scrolled
                  ? "bg-white text-sky-700 hover:bg-sky-50"
                  : "bg-white text-ink hover:bg-pool-100"
              )}
            >
              Start a project
              <span aria-hidden>→</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-white"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background"
          >
            <div className="h-20 px-6 flex items-center justify-between border-b border-line">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-line"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="px-6 py-10 flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-5xl text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
