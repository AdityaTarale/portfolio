import Image from "next/image";

interface ExperienceBoxCardProps {
  imgUrl: string;
  companyTitle: string;
  jobTitle: string;
  jobDescription: React.ReactNode;
  date: string;
}

export default function ExperienceBoxCard({
  imgUrl,
  companyTitle,
  jobTitle,
  jobDescription,
  date,
}: ExperienceBoxCardProps) {
  return (
    <section className="relative flex flex-col sm:flex-row w-full gap-4 p-6 rounded-lg border border-slate-700 bg-gradient-to-b from-gray-900 to-black">
      <Noise />

      {/* Logo */}
      <div className="w-16 sm:w-20">
        <Image
          src={imgUrl}
          alt={`${companyTitle} Logo`}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-blue-50 sm:text-xl">
          {companyTitle}
        </h4>
        <h5 className="text-sm italic text-gray-400 sm:text-base">
          {jobTitle}
        </h5>
        <div className="mt-2 text-gray-300">{jobDescription}</div>
      </div>

      {/* Date */}
      <span className="text-sm text-gray-400 sm:text-base">{date}</span>
    </section>
  );
}

const Noise = () => (
  <div
    className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
    style={{
      backgroundImage: "url(/images/noise.webp)",
      backgroundSize: "25%",
    }}
  />
);
