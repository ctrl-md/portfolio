# Lawson Ekhorutomwen — Portfolio

A personal portfolio built in Next.js, TypeScript, and Tailwind CSS, with Framer Motion for
the hero entrance and project carousel transitions. Design concept: a technical-drawing /
blueprint aesthetic (navy hero with registration marks and a grid, paper-white content
sections, spec-sheet style project cards), grounded in the "built from first principles"
theme running through the actual projects it showcases.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
├── layout.tsx          Root layout, fonts (Fraunces + Space Grotesk)
├── page.tsx             Assembles all sections
├── globals.css          Theme tokens (color, font, reduced-motion handling)
└── components/
    ├── Nav.tsx           Sticky section navigation
    ├── Hero.tsx          Blueprint hero, single orchestrated entrance animation
    ├── About.tsx         Bio + education
    ├── ProjectCarousel.tsx   Paged project cards with real links, keyboard-free nav
    ├── Experience.tsx    Work history
    ├── Skills.tsx        Grouped skill tags
    └── Contact.tsx       Links + resume download
lib/
└── data.ts               All content: profile, projects, skills, experience — edit here
public/
└── resume.pdf            Downloadable resume, served at /resume.pdf
```

## Editing content

Everything text-based lives in `lib/data.ts` — project descriptions, links, skills, the bio,
and the experience entry. There's no CMS; it's a single typed file, edit and redeploy.

To update the resume, replace `public/resume.pdf` with a new export (same filename).

## Notes

- Three projects (Rave, Poseidon Forum, Gallery) and one AI project (ASL Translator) link to
  their real GitHub repos. The three curriculum projects (GPT from scratch, Clinical NLP,
  Clinical paper reproduction) link directly to their specific files inside the
  `ai-engineer-journey` repo, since that repo holds the full 39-week curriculum, not just
  these three pieces.
- Fonts (Fraunces, Space Grotesk) load from Google Fonts at build time via `next/font` —
  needs normal internet access on first build, same as any Next.js project using this system.
