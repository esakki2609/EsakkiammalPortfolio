import PageHeader from "@/components/PageHeader";
import { experience } from "@/lib/resume";

export const metadata = {
  title: "Experience",
  description:
    "Work experience as a Senior Full Stack Developer across AI products, insurtech, and ticketing platforms.",
};

export default function ExperiencePage() {
  return (
    <div className="page-shell py-14 md:py-20">
      <PageHeader
        title="Experience"
        description="4+ years building production systems with ownership across architecture, development, and release."
      />

      <ol className="relative space-y-12 animate-rise-delay border-l border-line pl-6 md:pl-8">
        {experience.map((job) => (
          <li key={`${job.product}-${job.period}`} className="relative">
            <span
              className="absolute -left-[1.6rem] md:-left-[2.1rem] top-1.5 h-3 w-3 rounded-full bg-brand ring-4 ring-brand-mist"
              aria-hidden
            />
            <p className="text-sm font-semibold tracking-wide text-brand-dark mb-1">
              {job.period}
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-1">
              {job.role}
            </h2>
            <p className="text-muted mb-4">
              {job.company} · {job.product} · {job.location}
            </p>
            <ul className="space-y-2.5 text-ink/90 leading-relaxed">
              {job.points.map((point) => (
                <li key={point.slice(0, 48)} className="pl-4 relative">
                  <span className="absolute left-0 top-2.5 h-1.5 w-1.5 bg-brand" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
