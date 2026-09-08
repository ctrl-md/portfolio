"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blueprint via-blueprint to-[#1E2A52] text-paper">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #EC4899, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #6366F1, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#FAFAF9"
              strokeWidth="1"
            />
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

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] py-24 lg:py-32">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-sans text-sm text-amber">
            Lawson Ekhorutomwen
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-[2.1rem] leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.1]"
          >
            {profile.tagline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl font-sans text-lg text-paper/75"
          >
            Production web and mobile apps alongside AI systems,
            backpropagation, retrieval, computer vision, implemented from
            scratch, not assembled from APIs. Frontend Engineer at Sendpiper,
            studying Medicine and Surgery at the University of Benin.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-paper/80 transition hover:border-amber hover:text-amber"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.54-.02 2.79-.02 3.17 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
              </svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-paper/80 transition hover:border-amber hover:text-amber"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            className="absolute inset-0 -z-10 rounded-full opacity-40 blur-2xl"
            style={{
              background: "radial-gradient(circle, #E8A33D, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="overflow-hidden rounded-full border-2 border-paper/15 shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Lawson Ekhorutomwen"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
