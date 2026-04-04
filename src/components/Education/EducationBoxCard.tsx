import Image from "next/image";

interface EducationBoxCardProps {
  imgUrl: string;
  institutionName: string;
  degreeTitle: string;
  description: React.ReactNode;
  date: string;
}

export default function EducationBoxCard({
  imgUrl,
  institutionName,
  degreeTitle,
  description,
  date,
}: EducationBoxCardProps) {
  return (
    <section className="relative flex flex-col sm:flex-row w-full gap-4 p-6 rounded-lg border border-slate-300 bg-gradient-to-b from-gray-50 to-white">
      <Noise />

      {/* Logo */}
      <div className="w-16 sm:w-20">
        <Image
          src={imgUrl}
          alt={`${institutionName} Logo`}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-blue-950 sm:text-xl">
          {institutionName}
        </h4>
        <h5 className="text-sm italic text-gray-600 sm:text-base">
          {degreeTitle}
        </h5>
        <div className="mt-2 text-gray-800">{description}</div>
      </div>

      {/* Date */}
      <span className="text-sm text-gray-600 sm:text-base whitespace-nowrap">{date}</span>
    </section>
  );
}

const Noise = () => (
  <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none bg-[url('/images/noise.webp')] bg-[length:25%]" />
);
