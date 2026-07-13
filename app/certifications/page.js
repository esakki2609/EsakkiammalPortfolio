import PageHeader from "@/components/PageHeader";
import { certifications, education } from "@/lib/resume";

export const metadata = {
  title: "Certifications",
  description: "Professional certifications and education background.",
};

export default function CertificationsPage() {
  return (
    <div className="page-shell py-14 md:py-20">
      <PageHeader
        title="Certifications"
        description="Credentials that support cloud, collaboration, and modern AI engineering work."
      />

      <section className="animate-rise-delay mb-14">
        <ul className="space-y-0 divide-y divide-line border-y border-line">
          {certifications.map((cert) => (
            <li
              key={cert}
              className="py-5 flex items-start gap-4 text-lg text-ink"
            >
              <span className="mt-2 h-2 w-2 shrink-0 bg-brand" aria-hidden />
              {cert}
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-rise-delay">
        <h2 className="font-display text-2xl text-brand-deep mb-4">Education</h2>
        <div className="border-t border-line pt-6">
          <p className="font-display text-2xl text-ink mb-1">{education.school}</p>
          <p className="text-muted">
            {education.degree} · {education.score}
          </p>
          <p className="text-sm text-brand-dark font-semibold mt-2">
            {education.period}
          </p>
        </div>
      </section>
    </div>
  );
}
