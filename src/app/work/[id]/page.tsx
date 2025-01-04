import { ProjectPreview } from "@/elements/ProjectPreview";
import Link from "next/link";
import caseStudyData from "../../../../public/data/case-study.json";

export default async function Work({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const project = caseStudyData[id as keyof typeof caseStudyData];

  if (!project) {
    return (
      <div className="text-center text-white mt-12">
        <p className="text-2xl font-semibold">Project not found</p>
      </div>
    );
  }

  return (
    <section className="mx-4 md:w-6/12 sm:mx-auto flex flex-col gap-6 mt-12">
      {/* Title */}
      <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>

      {/* Project Preview */}
      <ProjectPreview
        bg={project.projectPreview.bg}
        image={project.projectPreview.image}
      />
      <Link href={project.link.url} target="_blank">
        <span className="px-4 py-1 border-[1px] border-gray-700 text-gray-300 rounded-full">
          {project.link.title}
        </span>
      </Link>

      {/* Sections */}
      {project.sections.map((section, index) => (
        <div key={index}>
          {/* Section Title */}
          <h4 className="text-xl font-bold text-white mb-4">{section.title}</h4>

          {/* Section Content or List */}
          {section.content ? (
            <p className="text-gray-300">{section.content}</p>
          ) : (
            <ul className="list-disc list-inside text-gray-300">
              {section.list?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
