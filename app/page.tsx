import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";
import {
  profile,
  pillars,
  consulting,
  publications,
  selectedTalks,
  skills,
  biography,
} from "@/lib/site-data";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe_0,#f8f5ee_35%,#f8fafc_100%)] text-slate-950">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-700">
          AI Leadership · ML Systems · Research
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          {profile.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="#timeline">
              View experience <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="#consulting">Consulting</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href={profile.resume}>Resume</Link>
          </Button>
        </div>

        <div className="mt-8 flex gap-5 text-slate-600">
          <Link href={profile.github}><Github /></Link>
          <Link href={profile.linkedin}><Linkedin /></Link>
          <Link href={`mailto:${profile.email}`}><Mail /></Link>
        </div>
      </section>

      <section id="pillars" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-3xl font-bold">Three strengths</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white/75 p-6 backdrop-blur"
            >
              <h3 className="mb-3 text-xl font-semibold text-blue-700">
                {pillar.title}
              </h3>
              <p className="text-slate-650">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section id="biography" className="mx-auto max-w-6xl px-6 py-24">
  <div className="mb-10">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-700">
      Scientific and artistic trajectory
    </p>
    <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
      {biography.title}
    </h2>
  </div>

  <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
    <div className="rounded-2xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur">
      <h3 className="mb-4 text-xl font-semibold text-slate-950">
        From research to production, from score to stage.
      </h3>

      <p className="text-slate-600">
        A profile built across applied mathematics, machine learning systems,
        AI leadership, opera production and collective creation.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "AI Research",
          "Federated Learning",
          "RAG",
          "MLOps",
          "Opera Production",
          "Leadership",
          "Transmission",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="space-y-5">
      {biography.paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-8 text-slate-700">
          {paragraph}
        </p>
      ))}
    </div>
  </div>
</section>

      <section id="timeline" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-4 text-3xl font-bold">Experience timeline</h2>
        <p className="mb-10 max-w-3xl text-slate-600">
          A multi-track trajectory across research, production ML, consulting and leadership.
        </p>
        <Timeline />
      </section>

      <section id="consulting" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-4 text-3xl font-bold">Consulting</h2>
        <p className="mb-8 max-w-3xl text-slate-650">
          I am open to selected consulting engagements where ML research,
          production constraints and AI strategy meet.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {consulting.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white/75 p-5 text-slate-750"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-8 text-3xl font-bold">Technical stack</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm text-slate-750"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="publications" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-8 text-3xl font-bold">Selected publications</h2>
        <div className="space-y-4">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="rounded-xl border border-slate-200 bg-white/75 p-5"
            >
              <h3 className="font-semibold">{pub.title}</h3>
              <p className="text-sm text-blue-700">
                {pub.venue} · {pub.year}
              </p>
              <div className="mt-3 flex gap-4 text-sm text-slate-600">
                {pub.pdf && <Link href={pub.pdf}>PDF</Link>}
                {pub.code && <Link href={pub.code}>Code</Link>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="talks" className="mx-auto max-w-6xl px-6 py-24">
  <h2 className="mb-8 text-3xl font-bold">Selected talks</h2>

  <div className="grid gap-4 md:grid-cols-2">
    {selectedTalks.map((talk) => (
      <div
        key={`${talk.title}-${talk.year}`}
        className="rounded-xl border border-slate-200 bg-white/75 p-5 shadow-sm backdrop-blur"
      >
        <div className="mb-2 text-sm font-medium text-blue-700">
          {talk.year}
        </div>

        <h3 className="font-semibold text-slate-950">
          {talk.title}
        </h3>

        <p className="mt-1 text-sm text-slate-600">
          {talk.location}
        </p>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}
