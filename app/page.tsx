import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Quote,
  FileText,
  Presentation,
  PlayCircle,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";
import {
  profile,
  pillars,
  publications,
  selectedTalks,
  biography,
  timelineItems,
  phdResources,
  distinctions,
} from "@/lib/site-data";
import { citationForPublication } from "@/lib/scholar";
import scholarStats from "../public/scholar.json";

const GOOGLE_SCHOLAR_AUTHOR_ID = "RIBv3lgAAAAJ";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe_0,#f8f5ee_35%,#f8fafc_100%)] text-slate-950">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <p className="mb-2 text-xl font-semibold text-slate-900">
          Constantin Philippenko
        </p>

        <p className="mb-6 text-base text-slate-600">
          Lead ML Scientist at Agence France-Presse · Ph.D. in Machine Learning,
          École polytechnique
        </p>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-700">
          AI Leadership · ML Systems · Research
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Building reliable AI systems from research to production.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-700">
          I work at the intersection of AI research, production systems and
          organizational transformation.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "AI research",
            "Federated Learning",
            "RAG Systems",
            "LLM Evaluation",
            "ML Deployment",
            "Technical Leadership",
            "Lectures and conferences",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="#timeline">
              Experience <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="#phd">Ph.D.</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="#publications">Research</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="#talks">Talks</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="#about">Biography</Link>
          </Button>
        </div>

        <div className="mt-8 flex gap-5 text-slate-600">
          <Link href={profile.github}>
            <Github />
          </Link>

          <Link href={profile.linkedin}>
            <Linkedin />
          </Link>

          <Link href={`mailto:${profile.email}`}>
            <Mail />
          </Link>
        </div>
      </section>

      <section id="timeline" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-700">
            Experience
          </p>

          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            Timeline
          </h2>
        </div>

        <Timeline items={timelineItems} />
      </section>

      <section id="phd" className="mx-auto max-w-6xl px-6 py-24">
  <div className="mb-10">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-700">
      Doctoral research
    </p>

    <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
      Ph.D. manuscript, slides and distinctions
    </h2>

    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
      My Ph.D. work focused on federated learning, distributed optimization,
      bidirectional compression, client heterogeneity and convergence
      guarantees.
    </p>
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    {phdResources.map((resource) => (
      <Link
        key={resource.title}
        href={resource.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
      >
        {resource.kind === "video" && resource.thumbnail ? (
          <div className="relative mb-5 overflow-hidden rounded-xl border border-slate-200">
            <Image
              src={resource.thumbnail}
              alt={resource.title}
              width={1280}
              height={720}
              className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
            </div>
          </div>
        ) : (
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            {resource.kind === "manuscript" && (
              <FileText className="h-5 w-5" />
            )}

            {resource.kind === "slides" && (
              <Presentation className="h-5 w-5" />
            )}
          </div>
        )}

        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
          {resource.label}
        </p>

        <h3 className="text-xl font-semibold text-slate-950 group-hover:text-blue-700">
          {resource.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {resource.description}
        </p>
      </Link>
    ))}

    {distinctions.map((distinction) => (
      <div
        key={distinction.title}
        className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
      >
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Award className="h-5 w-5" />
        </div>

        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
          {distinction.label}
        </p>

        <h3 className="text-xl font-semibold text-slate-950">
          {distinction.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {distinction.description}
        </p>

        {distinction.organizers && (
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Organizers: {distinction.organizers}
          </p>
        )}
      </div>
    ))}
  </div>
</section>

      <section id="publications" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-700">
              Research impact
            </p>

            <h2 className="text-3xl font-bold">Selected publications</h2>
          </div>

          <Link
            href={`https://scholar.google.com/citations?user=${GOOGLE_SCHOLAR_AUTHOR_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-700 hover:underline"
          >
            Google Scholar profile
          </Link>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
            <div className="text-3xl font-bold">
              {scholarStats.citations ?? "—"}
            </div>

            <div className="mt-1 text-sm text-slate-600">Citations</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
            <div className="text-3xl font-bold">
              {scholarStats.hIndex ?? "—"}
            </div>

            <div className="mt-1 text-sm text-slate-600">h-index</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
            <div className="text-3xl font-bold">
              {scholarStats.i10Index ?? "—"}
            </div>

            <div className="mt-1 text-sm text-slate-600">i10-index</div>
          </div>
        </div>

        <div className="space-y-4">
          {publications.map((pub) => {
            const citations = citationForPublication(
              pub.title,
              scholarStats.papers,
            );

            return (
              <div
                key={pub.title}
                className="rounded-xl border border-slate-200 bg-white/75 p-5 shadow-sm backdrop-blur"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <h3 className="font-semibold">{pub.title}</h3>

                    <p className="mt-1 text-sm text-blue-700">
                      {pub.venue} · {pub.year}
                    </p>
                  </div>

                  {citations !== null && (
                    <div className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                      <Quote className="h-4 w-4 text-blue-700" />
                      {citations} citations
                    </div>
                  )}
                </div>

                <div className="mt-3 flex gap-4 text-sm text-slate-600">
                  {pub.pdf && (
                    <Link
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-700"
                    >
                      PDF
                    </Link>
                  )}

                  {pub.code && (
                    <Link
                      href={pub.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-700"
                    >
                      Code
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
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

              <h3 className="font-semibold text-slate-950">{talk.title}</h3>

              <p className="mt-1 text-sm text-slate-600">{talk.location}</p>

              {talk.href && (
                <Link
                  href={talk.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-sm font-medium text-blue-700 hover:underline"
                >
                  Watch video
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-700">
            Scientific and artistic trajectory
          </p>

          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            Biography
          </h2>
        </div>

        <article className="text-base leading-8 text-slate-700">
          <aside className="mb-8 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur md:float-left md:mr-10 md:w-[360px]">
            <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <Image
                src="/avatar_constantin_philippenko_at_barbe_noire.jpg"
                alt="Constantin Philippenko"
                width={720}
                height={720}
                className="aspect-[4/5] w-full scale-110 object-cover"
                priority
              />
            </div>

            <h3 className="mb-4 text-xl font-semibold leading-snug text-slate-950">
              From research to production.
            </h3>

            <p className="mb-6 text-sm leading-7 text-slate-600">
              A profile built across applied mathematics, machine learning
              systems, production environments and AI leadership.
            </p>

            <div className="space-y-4">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
                  <h4 className="font-semibold text-blue-700">
                    {pillar.title}
                  </h4>

                  <p className="text-sm leading-6 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "AI research",
                "Federated Learning",
                "RAG Systems",
                "LLM Evaluation",
                "ML Deployment",
                "Technical Leadership",
                "Lectures and conferences",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>

          <div className="space-y-5">
            {biography.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="clear-both" />
        </article>
      </section>
    </main>
  );
}
