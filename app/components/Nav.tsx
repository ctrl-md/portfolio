"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleLinkClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setOpen(false);
    setTimeout(
      () => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      },
      open ? 220 : 0,
    );
  }

  return (
    <nav
      className={`sticky top-0 z-40 border-b bg-canvas/70 backdrop-blur-lg transition-colors duration-300 ${
        scrolled || open ? "border-hairline shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "#")}
          className="group flex items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber/15 font-display text-[0.8rem] font-semibold text-amber transition group-hover:bg-amber/25">
            LE
          </span>
          <span className="hidden font-display text-sm text-ink sm:block">
            L. Ekhorutomwen
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
                className={`relative rounded-md px-3 py-1.5 font-sans text-sm transition-colors ${
                  isActive ? "text-ink" : "text-ink/55 hover:text-ink"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-amber"
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink/70 transition hover:border-amber hover:text-amber md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[1.05rem] w-[1.05rem]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-hairline bg-canvas/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className={`border-b border-hairline/60 py-3 font-sans text-sm transition last:border-b-0 ${
                    active === l.href ? "text-amber" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
