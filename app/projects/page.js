import PageHeader from "@/components/PageHeader";
import ProjectsGallery from "@/components/ProjectsGallery";

export const metadata = {
  title: "Projects",
  description:
    "Selected projects including ForzoFlow, Carboventory, E-Check Insurance, and On the Stage.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell py-14 md:py-20">
      <PageHeader
        title="Projects"
        description="Selected platforms delivered across automation, climate tech, insurance, and live events."
      />
      <ProjectsGallery />
    </div>
  );
}
