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
};

const getDisplayName = (key: string) => NAME_OVERRIDES[key] || key;

function SkillBoxCard({ iconKey }: { iconKey: string }) {
  return (
    <li className="flex flex-col items-center gap-2 w-full">
      <div className="relative aspect-square w-full rounded-lg border border-emerald-600/30 bg-emerald-600/10 transition-transform hover:scale-105">
        <div className="absolute inset-0 p-3 sm:p-4 flex items-center justify-center">
          <Image
            className="w-full h-full object-contain"
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

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frontend",
      keys: [
        "html",
        "css",
        "javascript",
        "python",
        "typescript",
        "react",
        "next",
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
      title: "Backend & Databases",
      keys: ["node", "express", "firebase", "mongo", "postgresql", "socket"],
    },
    {
      title: "Tools & Others",
      keys: [
        "npm",
        "yarn",
        "webpack",
        "vite",
        "rollupjs",
        "jest",
        "cypress",
        "testing",
        "storybook",
        "githubColored",
        "vscode",
        "androidStudio",
        "xcode",
        "linux",
        "ubuntu",
        "nginx",
        "postman",
        "jira",
        "json",
      ],
    },
  ];

  return (
    <section className="mx-4 md:w-6/12 sm:mx-auto flex flex-col text-black mb-12">
      <h3 className="text-3xl font-bold mb-4">My Skills</h3>

      <div className="flex flex-col gap-10 w-full">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h4 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">
              {category.title}
            </h4>
            <ul className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-7 xl:grid-cols-10 gap-3 sm:gap-4">
              {category.keys.map((key) => (
                <SkillBoxCard iconKey={key} key={key} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
