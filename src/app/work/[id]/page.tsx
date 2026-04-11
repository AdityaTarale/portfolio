import { ProjectPreview } from "@/elements/ProjectPreview";
import Link from "next/link";
import caseStudyData from "../../../../public/data/case-study.json";
import Image from "next/image";
import { getIcon } from "@/utils/iconsRegistry";

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
      <div className="mt-12 text-center text-black">
        <p className="text-2xl font-semibold">Project not found</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-6 mx-4 mt-12 md:w-6/12 sm:mx-auto">
      {/* Title */}
      <h3 className="mb-4 text-3xl font-bold text-black">{project.title}</h3>

      {/* Project Preview */}
      <ProjectPreview
        bg={project.projectPreview.bg}
        image={project.projectPreview.image}
        className="w-full aspect-video md:h-[450px]"
        priority
      />
      <Link
        href={project.link.url}
        target="_blank"
        className="mt-2 text-sm font-semibold text-blue-800 hover:underline"
      >
        <span className="flex items-center gap-1">
          {project.link.title}
          <Image
            loading="lazy"
            className="w-4 h-4 brightness-0"
            alt={"chevron-right"}
            aria-hidden="true"
            src={getIcon("chevronRight")}
            width={10}
            height={10}
          />
        </span>
      </Link>

      {/* Sections */}
      {project.sections.map((section, index) => (
        <div key={index}>
          {/* Section Title */}
          <h4 className="mb-4 text-xl font-bold text-black">{section.title}</h4>

          {/* Section Content or List */}
          {section.content ? (
            <p className="text-gray-800">{section.content}</p>
          ) : (
            <ul className="text-gray-800 list-disc list-inside">
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
