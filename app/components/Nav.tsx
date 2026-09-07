"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-sm text-ink">
          L. Ekhorutomwen
        </a>
        <div className="flex gap-6 font-sans text-sm text-ink/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-amber">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
