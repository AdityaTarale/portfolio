import { ProjectPreview } from "@/elements/ProjectPreview";
import { getIcon } from "@/utils/iconsRegistry";
import Image from "next/image";
import Link from "next/link";
import projectData from "../../../public/data/project.json";

export default function Work() {
  return (
    <div className="mx-4 md:w-6/12 sm:mx-auto">
      <h3 className="text-3xl font-bold text-white mb-4">Projects</h3>
      <div className="flex flex-col gap-14">
        {projectData.map((project) => {
          return (
            <div key={project.title} className="flex flex-col gap-8">
              <ProjectPreview bg={project.bgUrl} image={project.imageUrl} />

              <div className="flex flex-col sm:flex-row">
                <h5 className="text-white text-2xl sm:text-3xl font-bold flex-[0.4]">
                  {project.title}
                </h5>
                <div className="flex-[0.6] text-base flex flex-col gap-2 text-gray-200">
                  <p>{project.description}</p>
                  {project.linkUrl && (
                    <Link
                      href={project.linkUrl}
                      className="text-green-200 hover:underline text-sm"
                    >
                      <span className="flex items-center gap-1">
                        Read Case Study
                        <Image
                          loading="lazy"
                          className="w-4 h-4 text-green-200"
                          alt={"chevron-right"}
                          aria-hidden="true"
                          src={getIcon("chevronRight")}
                          width={10}
                          height={10}
                          color="#bbf7d0"
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
