import { getIcon } from "@/utils/iconsRegistry";
import Image from "next/image";

const NAME_OVERRIDES: Record<string, string> = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  next: "Next.js",
  redux: "Redux",
  query: "React Query",
  saga: "Redux Saga",
  router: "React Router",
  tailwind: "Tailwind CSS",
  scss: "SCSS",
  material: "Material UI",
  antDesign: "Ant Design",
  shadcn: "Shadcn UI",
  radix: "Radix UI",
  styleGuide: "StyleGuidist",
  expo: "Expo",
  ionic: "Ionic",
  openLayers: "OpenLayers",
  node: "Node.js",
  python: "Python",
  express: "Express",
  firebase: "Firebase",
  mongo: "MongoDB",
  postgresql: "PostgreSQL",
  socket: "Socket.io",
  npm: "NPM",
  yarn: "Yarn",
  webpack: "Webpack",
  vite: "Vite",
  rollupjs: "Rollup.js",
  jest: "Jest",
  cypress: "Cypress",
  testing: "Testing Lib",
  storybook: "Storybook",
  githubColored: "GitHub",
  vscode: "VS Code",
  androidStudio: "Android Studio",
  xcode: "Xcode",
  linux: "Linux",
  ubuntu: "Ubuntu",
  nginx: "NGINX",
  postman: "Postman",
  jira: "Jira",
  json: "JSON",
  docker: "Docker",
  git: "Git",
  kubernetes: "Kubernetes",
  netlify: "Netlify",
  vercel: "Vercel",
};

const getDisplayName = (key: string) => NAME_OVERRIDES[key] || key;

function SkillBoxCard({ iconKey }: { iconKey: string }) {
  return (
    <li className="flex flex-col items-center w-full gap-2 group">
      <div className="relative w-full transition-all duration-300 border rounded-lg aspect-square border-emerald-600/30 bg-emerald-600/10 group-hover:bg-emerald-600/20 group-hover:scale-105 group-hover:shadow-sm">
        <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
          <Image
            className="object-contain w-full h-full"
            alt={iconKey}
            aria-hidden="true"
            src={String(getIcon(iconKey as Parameters<typeof getIcon>[0]))}
            width={64}
            height={64}
          />
        </div>
      </div>
      <span className="text-[10px] sm:text-xs text-center text-gray-700 font-medium leading-tight">
        {getDisplayName(iconKey)}
      </span>
    </li>
  );
}

function SoftSkillBadge({ name }: { name: string }) {
  return (
    <li className="px-4 py-2 text-xs font-semibold rounded-full bg-emerald-600/10 text-black border border-emerald-600/30 hover:bg-emerald-600/20 transition-colors duration-200">
      {name}
    </li>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Languages",
      keys: ["javascript", "typescript", "python", "html", "css", "json"],
    },
    {
      title: "Web Technologies",
      keys: ["react", "next", "node", "express", "firebase", "mongo", "postgresql", "socket"],
    },
    {
      title: "Frameworks & UI",
      keys: [
        "redux",
        "query",
        "saga",
        "router",
        "tailwind",
        "scss",
        "material",
        "antDesign",
        "shadcn",
        "radix",
        "styleGuide",
        "expo",
        "ionic",
        "openLayers",
      ],
    },
    {
      title: "Containerization & Deployment",
      keys: ["docker", "kubernetes", "nginx", "vercel", "netlify"],
    },
    {
      title: "Version Control",
      keys: ["git", "githubColored"],
    },
    {
      title: "Testing & Tooling",
      keys: [
        "jest",
        "cypress",
        "testing",
        "storybook",
        "postman",
        "jira",
        "npm",
        "yarn",
        "webpack",
        "vite",
        "rollupjs",
        "vscode",
        "androidStudio",
        "xcode",
        "linux",
        "ubuntu",
      ],
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Agile/Scrum",
    "Adaptability",
    "Communication",
    "Leadership",
    "Time Management",
    "Analytical Thinking"
  ];

  return (
    <section className="flex flex-col mx-4 mb-12 text-black bg-white md:w-6/12 sm:mx-auto">
      <h2 className="mb-8 text-3xl font-bold">My Skills</h2>

      <div className="flex flex-col w-full gap-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="pb-2 mb-6 text-xl font-bold text-gray-800 border-b border-gray-200">
              {category.title}
            </h3>
            <ul className="grid grid-cols-5 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-7 xl:grid-cols-10 sm:gap-4">
              {category.keys.map((key) => (
                <SkillBoxCard iconKey={key} key={key} />
              ))}
            </ul>
          </div>
        ))}

        {/* Soft Skills Section */}
        <div>
          <h3 className="pb-2 mb-6 text-xl font-bold text-gray-800 border-b border-gray-200">
            Soft Skills
          </h3>
          <ul className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <SoftSkillBadge key={skill} name={skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
