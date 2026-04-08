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
    <section className="relative flex flex-col w-full gap-4 p-6 border rounded-lg sm:flex-row border-slate-300 bg-gradient-to-b from-gray-50 to-white">
      <Noise />

      {/* Logo */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
        <Image
          src={imgUrl}
          alt={`${companyTitle} Logo`}
          width={80}
          height={80}
          className="object-contain w-full h-full"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-blue-950 sm:text-xl">
          {companyTitle}
        </h3>
        <h4 className="text-sm italic text-gray-600 sm:text-base">
          {jobTitle}
        </h4>
        <div className="mt-2 text-gray-800">{jobDescription}</div>
      </div>

      {/* Date */}
      <span className="text-sm text-gray-600 sm:text-base">{date}</span>
    </section>
  );
}

const Noise = () => (
  <div 
    className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" 
    style={{ 
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
    }} 
  />
);
