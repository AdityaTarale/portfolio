import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <Hero />
      <Skills />
      <Work />
      <Experience />
      <Education />
    </main>
  );
}
