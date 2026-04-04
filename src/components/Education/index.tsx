import educationData from "../../../public/data/education.json";
import EducationBoxCard from "./EducationBoxCard";

export default function Education() {
  return (
    <section className="mx-4 md:w-6/12 sm:mx-auto flex flex-col">
      <h3 className="text-3xl font-bold text-black mb-4">Education</h3>
      <ul className="flex flex-col gap-8">
        {educationData.map((edu, idx) => (
          <EducationBoxCard key={idx} {...edu} />
        ))}
      </ul>
    </section>
  );
}
