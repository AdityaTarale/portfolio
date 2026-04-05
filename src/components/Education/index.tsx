import educationData from "../../../public/data/education.json";
import EducationBoxCard from "./EducationBoxCard";

export default function Education() {
  return (
    <section className="flex flex-col mx-4 bg-white md:w-6/12 sm:mx-auto">
      <h3 className="mb-4 text-3xl font-bold text-black">Education</h3>
      <ul className="flex flex-col gap-8">
        {educationData.map((edu, idx) => (
          <EducationBoxCard key={idx} {...edu} />
        ))}
      </ul>
    </section>
  );
}
