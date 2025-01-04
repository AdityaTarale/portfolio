import BatmanAnimation from "./BatmanAnimation";

export default function AboutMe() {
  return (
    <div className="mx-4 md:w-6/12 sm:mx-auto relative bg-black text-white">
      <h3 className="text-3xl font-bold text-white mb-4">About Me</h3>
      <BatmanAnimation />
      <FadeEffect />
      <section className="sm:absolute inset-0 z-10 flex flex-col justify-end sm:p-4">
        <p className="text-lg text-gray-200">
          I, Aditya Tarale, a full-stack developer hailing from Nagpur
          Maharashtra, specialize in <strong>frontend development</strong>. I am
          currently working at App Sphere Softwares LLP in Indore. Skilled in{" "}
          <strong>React, React Native, Next.js, TypeScript, and Node.js</strong>
          , I create scalable and user-friendly web applications. My projects
          include mobile apps, Node.js CLIs, web apps, and solution websites
          with landing pages.
        </p>
      </section>
    </div>
  );
}

const FadeEffect = () => (
  <div className="hidden sm:block absolute inset-0 pointer-events-none bg-gradient-to-t from-black to-transparent" />
);
