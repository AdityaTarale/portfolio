import BatmanAnimation from "./BatmanAnimation";

export default function AboutMe() {
  return (
    <div className="mx-4 md:w-6/12 sm:mx-auto relative bg-black text-white">
      <h3 className="text-3xl font-bold text-white mb-4">About Me</h3>
      <BatmanAnimation />
      <FadeEffect />
      <section className="sm:absolute inset-0 z-10 flex flex-col justify-end p-4">
        <p className="text-lg text-gray-200">
          I, Aditya Tarale, An Nagpurian full-stack developer specializing in{" "}
          <strong>Frontend development</strong>, currently working at App Sphere
          Softwares LLP in Indore. Skilled in{" "}
          <strong>React, React Native, Next.js, TypeScript, and Node.js</strong>
          , I create scalable and user-friendly web applications. My projects
          include Mobile Apps, Node.js CLIs, Web apps, and Solution websites
          with landing pages.
        </p>
      </section>
    </div>
  );
}

const FadeEffect = () => (
  <div className="hidden sm:block absolute inset-0 pointer-events-none bg-gradient-to-t from-black to-transparent" />
);
