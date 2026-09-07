import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="font-display text-3xl text-ink">About</h2>
      <p className="mt-6 max-w-[65ch] font-sans text-[1.05rem] leading-relaxed text-ink/80">
        {profile.bio}
      </p>
      <div className="mt-10 flex flex-col gap-1 border-l-2 border-amber pl-5 font-sans text-sm text-slate">
        <span className="text-ink">{profile.education.degree}</span>
        <span>
          {profile.education.school} &middot; {profile.education.location}
        </span>
        <span>{profile.education.expected}</span>
      </div>
    </section>
  );
}
