import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="bg-black flex flex-col gap-24">
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Work />
    </main>
  );
}
