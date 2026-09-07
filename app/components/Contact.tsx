import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-blueprint text-paper">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-display text-3xl">Get in touch</h2>
        <p className="mt-4 max-w-[55ch] font-sans text-paper/70">
          Open to engineering roles, especially where medicine and AI meet. Reach out directly
          or download the resume below.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm">
          <a href={`mailto:${profile.email}`} className="underline decoration-amber underline-offset-4 hover:text-amber">
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-amber underline-offset-4 hover:text-amber"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-amber underline-offset-4 hover:text-amber"
          >
            LinkedIn
          </a>
          <a href="/resume.pdf" download className="underline decoration-amber underline-offset-4 hover:text-amber">
            Resume (PDF)
          </a>
        </div>

        <p className="mt-16 font-sans text-xs text-paper/40">
          {profile.location}
        </p>
      </div>
    </section>
  );
}
