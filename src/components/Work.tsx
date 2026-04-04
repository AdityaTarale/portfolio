import { ProjectPreview } from "@/elements/ProjectPreview";
import { getIcon } from "@/utils/iconsRegistry";
import Image from "next/image";
import Link from "next/link";
import projectData from "../../public/data/project.json";

export default function Work() {
  return (
    <div className="mx-4 md:w-6/12 sm:mx-auto">
      <h3 className="text-3xl font-bold text-black mb-4">Projects</h3>
      <div className="flex flex-col gap-8">
        {projectData.map((project) => {
          return (
            <div
              key={project.title}
              className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-2"
            >
              <div className="w-full md:w-1/2">
                <ProjectPreview
                  bg={project.bgUrl}
                  image={project.imageUrl}
                  className="w-full aspect-video"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h5 className="text-black text-2xl sm:text-3xl font-bold mt-2">
                  {project.title}
                </h5>
                <div className="text-base flex flex-col gap-2 text-gray-800">
                  <p>{project.description}</p>
                  {project.linkUrl && (
                    <Link
                      href={project.linkUrl}
                      className="text-green-800 hover:underline text-sm font-semibold mt-2"
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
