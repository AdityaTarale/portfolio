import experienceData from "../../../public/data/experience.json";
import ExperienceBoxCard from "./ExperienceBoxCard";

export default function Experience() {
  return (
    <section className="flex flex-col px-4 bg-white">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-black tracking-tight text-gray-900 whitespace-nowrap">Experience</h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-emerald-600/50 to-transparent translate-y-[2px]"></div>
      </div>
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
