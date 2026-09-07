"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden bg-blueprint text-paper">
      {/* Technical drawing accents: corner registration marks + a faint grid */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FAFAF9" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {[
        "top-8 left-8",
        "top-8 right-8 rotate-90",
        "bottom-8 left-8 -rotate-90",
        "bottom-8 right-8 rotate-180",
      ].map((pos, i) => (
        <svg
          key={i}
          className={`absolute ${pos} h-6 w-6 text-amber/70`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M12 2v8M2 12h8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-[88vh] max-w-4xl flex-col justify-center px-6 py-32"
      >
        <motion.p variants={item} className="font-sans text-sm text-amber">
          Lawson Ekhorutomwen
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-5 font-display text-[2.4rem] leading-[1.15] tracking-tight sm:text-6xl sm:leading-[1.1]"
        >
          Full-stack developer and AI engineer who builds from first principles.
        </motion.h1>

        <motion.p variants={item} className="mt-7 max-w-xl font-sans text-lg text-paper/75">
          Production web and mobile apps alongside AI systems, backpropagation, retrieval,
          computer vision, implemented from scratch, not assembled from APIs. Frontend Engineer
          at Sendpiper, studying Medicine and Surgery at the University of Benin.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-sm bg-amber px-6 py-3 font-sans text-sm font-medium text-blueprint transition hover:bg-amber/90"
          >
            View projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-sm border border-paper/30 px-6 py-3 font-sans text-sm font-medium text-paper transition hover:border-paper/60"
          >
            Download resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
