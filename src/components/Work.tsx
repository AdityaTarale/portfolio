import { ProjectPreview } from "@/elements/ProjectPreview";
import { getIcon } from "@/utils/iconsRegistry";
import Image from "next/image";
import Link from "next/link";
import projectData from "../../public/data/project.json";

export default function Work() {
  return (
    <div className="mx-4 bg-white md:w-6/12 sm:mx-auto">
      <h2 className="mb-4 text-3xl font-bold text-black">Projects</h2>
      <div className="flex flex-col gap-8">
        {projectData.map((project, index) => {
          return (
            <div
              key={project.title}
              className="flex flex-col items-center gap-8 mb-2 md:flex-row md:items-start"
            >
              <div className="w-full md:w-1/2">
                <ProjectPreview
                  bg={project.bgUrl}
                  image={project.imageUrl}
                  className="w-full aspect-video"
                  priority={index < 2}
                />
              </div>

              <div className="flex flex-col w-full gap-4 md:w-1/2">
                <h3 className="mt-2 text-2xl font-bold text-black sm:text-3xl">
                  {project.title}
                </h3>
                <div className="flex flex-col gap-2 text-base text-gray-800">
                  <p>{project.description}</p>
                  {project.linkUrl && (
                    <Link
                      href={project.linkUrl}
                      {...(project.isCaseStudyEnabled
                        ? {}
                        : { target: "_blank", rel: "noreferrer" })}
                      className="mt-2 text-sm font-semibold text-blue-800 hover:underline"
                      aria-label={`${
                        project.isCaseStudyEnabled
                          ? "Read Case Study about"
                          : "Visit Website of"
                      } ${project.title}`}
                    >
                      <span className="flex items-center gap-1">
                        {project.isCaseStudyEnabled
                          ? "Read Case Study"
                          : "Visit Website"}
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
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
