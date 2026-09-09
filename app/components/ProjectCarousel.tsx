"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const project = projects[index];

  const go = useCallback((delta: number) => {
    setDirection(delta);
    setIndex((prev) => (prev + delta + projects.length) % projects.length);
  }, []);

  const jump = useCallback(
    (i: number) => {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    },
    [index],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto flex max-w-4xl items-baseline justify-between px-6">
        <h2 className="font-display text-3xl text-ink">Projects</h2>
        <span className="font-sans text-sm tabular-nums text-slate">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-1 text-slate/50">/</span>
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-10 w-full">
        {/* Vertically centered controls */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="group absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-surface/80 text-ink shadow-lg backdrop-blur transition hover:border-amber hover:text-amber hover:shadow-xl sm:left-6 lg:h-14 lg:w-14"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next project"
          className="group absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-surface/80 text-ink shadow-lg backdrop-blur transition hover:border-amber hover:text-amber hover:shadow-xl sm:right-6 lg:h-14 lg:w-14"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Fixed-size full-width stage */}
        <div className="relative h-136 w-full overflow-hidden border-y border-hairline bg-surface sm:h-120">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.article
              key={project.slug}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 grid grid-rows-[40%_60%] md:grid-cols-2 md:grid-rows-1"
            >
              {/* Media */}
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${project.accent}26, transparent 55%)`,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{ color: project.accent }}
                  className="absolute left-5 top-5 rounded-full bg-surface/90 px-3 py-1 font-sans text-[0.7rem] font-semibold uppercase tracking-wide shadow-sm backdrop-blur"
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="relative flex h-full flex-col overflow-y-auto px-6 py-7 sm:px-10 md:px-12 md:py-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1"
                  style={{ backgroundColor: project.accent }}
                />

                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl leading-tight text-ink sm:text-2xl">
                    {project.title}
                  </h3>
                  {project.metric && (
                    <span
                      style={{ backgroundColor: project.accent }}
                      className="shrink-0 rounded-full px-3 py-1 font-sans text-[0.7rem] font-medium text-white shadow-sm"
                    >
                      {project.metric}
                    </span>
                  )}
                </div>

                <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink/80">
                  {project.summary}
                </p>
                <p className="mt-3 font-sans text-[0.88rem] leading-relaxed text-slate">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        borderColor: `${project.accent}55`,
                        color: project.accent,
                      }}
                      className="rounded-full border bg-surface px-2.5 py-1 font-sans text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-5 pt-6 font-sans text-sm font-medium">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: project.accent }}
                      className="inline-flex items-center gap-1 underline decoration-2 underline-offset-4 hover:opacity-70"
                    >
                      Live site
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: project.accent }}
                      className="inline-flex items-center gap-1 underline decoration-2 underline-offset-4 hover:opacity-70"
                    >
                      Source code
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                  {!project.liveUrl && !project.codeUrl && (
                    <span className="text-slate">
                      Case study — link on request
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-2.5">
        {projects.map((p, i) => (
          <button
            key={p.slug}
            onClick={() => jump(i)}
            aria-label={`Go to ${p.title}`}
            aria-current={i === index}
            style={{
              backgroundColor: i === index ? p.accent : "transparent",
              borderColor: i === index ? p.accent : "var(--color-hairline)",
            }}
            className={`h-2.5 rounded-full border transition-all duration-300 ${
              i === index ? "w-7" : "w-2.5 hover:opacity-70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
