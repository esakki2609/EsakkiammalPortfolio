import PageHeader from "@/components/PageHeader";
import { skillGroups } from "@/lib/resume";

export const metadata = {
  title: "Skills",
  description: "Technical skills across languages, cloud, APIs, and AI frameworks.",
};

export default function SkillsPage() {
  return (
    <div className="page-shell py-14 md:py-20">
      <PageHeader
        title="Skills"
        description="A focused toolkit for full-stack delivery — from React and Node.js to AWS serverless and GenAI workflows."
      />

      <div className="space-y-10 animate-rise-delay">
        {skillGroups.map((group) => (
          <section key={group.title} className="border-t border-line pt-6">
            <h2 className="font-display text-2xl text-brand-deep mb-4">
              {group.title}
            </h2>
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-ink border border-line bg-white/70 px-3 py-1.5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
