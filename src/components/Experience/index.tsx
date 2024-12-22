import experienceData from "../../../public/data/experience.json";
import ExperienceBoxCard from "./ExperienceBoxCard";

export default function Experience() {
  return (
    <section className="mx-4 md:w-6/12 sm:mx-auto flex flex-col gap-6">
      <h3 className="text-3xl font-bold text-white mb-4">Experience</h3>
      <ul className="flex flex-col gap-8">
        {experienceData.map((exp, idx) => (
          <ExperienceBoxCard key={idx} {...exp} />
        ))}
      </ul>
    </section>
  );
}
