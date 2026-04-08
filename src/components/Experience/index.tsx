import experienceData from "../../../public/data/experience.json";
import ExperienceBoxCard from "./ExperienceBoxCard";

export default function Experience() {
  return (
    <section className="flex flex-col mx-4 bg-white md:w-6/12 sm:mx-auto">
      <h2 className="mb-4 text-3xl font-bold text-black">Experience</h2>
      <ul className="flex flex-col gap-8">
        {experienceData.map((exp, idx) => (
          <li key={idx}>
            <ExperienceBoxCard {...exp} />
          </li>
        ))}
      </ul>
    </section>
  );
}
