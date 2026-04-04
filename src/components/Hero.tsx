import Image from "next/image";
import SocialLinks from "@/layouts/Footer/SocialLinks";

export default function Hero() {
  return (
    <div className="mx-4 md:w-6/12 sm:mx-auto relative min-h-[calc(100vh-5rem)] bg-white overflow-hidden flex flex-col items-center justify-center py-20">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-50 bg-center bg-[length:40px_40px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px)]" />

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 h-full text-center md:text-left text-black mt-12 md:mt-0">
        {/* Left Side: Avatar + Name Card */}
        <div className="flex flex-col items-center flex-shrink-0 animate-fade-up animate-duration-[1000ms]">
          <div className="w-56 h-56 sm:w-64 sm:h-64 relative overflow-hidden rounded-full mb-6">
            <Image
              src="/images/my-profile.jpg"
              alt="Aditya Tarale"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-3xl font-bold text-black mt-2">Aditya Tarale</h2>
          <h3 className="text-xl text-gray-600 mt-1">Software Engineer</h3>
          
          <div className="mt-6 w-full max-w-[280px]">
            <SocialLinks />
          </div>
        </div>

        {/* Right Side: Headline & Bio */}
        <div className="flex flex-col items-center md:items-start max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold animate-fade-up animate-duration-[1200ms] animate-delay-200 leading-tight">
            Engineer by Day,
            <br className="hidden md:block" /> Creator Always
          </h1>

          <div className="mt-8 space-y-5 text-base sm:text-lg text-gray-700 animate-fade-up animate-duration-[1000ms] animate-delay-400 leading-relaxed text-left">
            <p>
              I am a full-stack developer who loves turning complex problems
              into simple, beautiful digital experiences. While my core strength
              is in frontend technologies like React and Next.js, my curiosity
              has led me across the entire tech stack from building clean user
              interfaces to engineering solid backends. Backed by a strong
              foundation in competitive programming, I write code not just to
              build features, but to solve real business challenges efficiently.
              Ultimately, my goal is to create highly scalable, human-centered
              applications that people genuinely enjoy using.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
