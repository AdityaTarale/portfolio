import experienceData from "../../../public/data/experience.json";
import ExperienceBoxCard from "./ExperienceBoxCard";

export default function Experience() {
  return (
    <section className="flex flex-col mx-4 bg-white md:w-6/12 sm:mx-auto">
      <h3 className="mb-4 text-3xl font-bold text-black">Experience</h3>
      <ul className="flex flex-col gap-8">
        {experienceData.map((exp, idx) => (
          <ExperienceBoxCard key={idx} {...exp} />
        ))}
      </ul>
    </section>
  );
}
