"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    function onSystemChange(e: MediaQueryListEvent) {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("theme");
      } catch {
        /* ignore */
      }
      // Only follow the system when the visitor hasn't made an explicit choice.
      if (stored === "dark" || stored === "light") return;
      setDark(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    }
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink/70 transition hover:border-amber hover:text-amber ${className}`}
    >
      {mounted && dark ? (
        <svg
          viewBox="0 0 24 24"
          className="h-[1.05rem] w-[1.05rem]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-[1.05rem] w-[1.05rem]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
