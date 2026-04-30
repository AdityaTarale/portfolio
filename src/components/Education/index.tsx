import educationData from "../../../public/data/education.json";
import EducationBoxCard from "./EducationBoxCard";

export default function Education() {
  return (
    <section className="flex flex-col mx-4 bg-white md:w-8/12 lg:w-7/12 sm:mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-black tracking-tight text-gray-900 whitespace-nowrap">Education</h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-emerald-600/50 to-transparent translate-y-[2px]"></div>
      </div>
      <ul className="flex flex-col gap-8">
        {educationData.map((edu, idx) => (
          <li key={idx}>
            <EducationBoxCard {...edu} />
          </li>
        ))}
      </ul>
    </section>
  );
}
