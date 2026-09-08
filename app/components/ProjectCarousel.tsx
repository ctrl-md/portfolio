"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const project = projects[index];

  function go(delta: number) {
    setDirection(delta);
    setIndex((prev) => (prev + delta + projects.length) % projects.length);
  }

  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-3xl text-ink">Projects</h2>
        <span className="font-sans text-sm text-slate">
          {index + 1} / {projects.length}
        </span>
      </div>

      <div className="relative mt-8 min-h-[42rem] overflow-hidden rounded-2xl sm:min-h-[38rem]">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.article
            key={project.slug}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: project.tint, borderColor: project.accent }}
            className="overflow-hidden rounded-2xl border-2"
          >
            <div className="h-48 w-full overflow-hidden sm:h-64">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span
                style={{ color: project.accent }}
                className="font-sans text-xs font-semibold uppercase tracking-wide"
              >
                {project.category}
              </span>
              {project.metric && (
                <span
                  style={{ backgroundColor: project.accent }}
                  className="rounded-full px-3 py-1 font-sans text-xs font-medium text-white shadow-sm"
                >
                  {project.metric}
                </span>
              )}
            </div>

            <h3 className="mt-4 font-display text-2xl text-ink">{project.title}</h3>
            <p className="mt-3 max-w-[65ch] font-sans text-[0.95rem] leading-relaxed text-ink/75">
              {project.summary}
            </p>
            <p className="mt-4 max-w-[65ch] font-sans text-[0.9rem] leading-relaxed text-ink/60">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  style={{ borderColor: project.accent, color: project.accent }}
                  className="rounded-full border bg-white/70 px-2.5 py-1 font-sans text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-5 font-sans text-sm font-medium">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: project.accent }}
                  className="underline decoration-2 underline-offset-4 hover:opacity-70"
                >
                  Live site
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: project.accent }}
                  className="underline decoration-2 underline-offset-4 hover:opacity-70"
                >
                  Source code
                </a>
              )}
              {!project.liveUrl && !project.codeUrl && (
                <span className="text-slate">Case study — link on request</span>
              )}
            </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => go(-1)}
          aria-label="Previous project"
          style={{ borderColor: project.accent, color: project.accent }}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white transition hover:scale-105"
        >
          ←
        </button>

        <div className="flex gap-2">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to ${p.title}`}
              style={{ backgroundColor: i === index ? p.accent : "#E5E7EB" }}
              className="h-2.5 w-2.5 rounded-full transition-all"
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next project"
          style={{ borderColor: project.accent, color: project.accent }}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white transition hover:scale-105"
        >
          →
        </button>
      </div>
    </section>
  );
}
