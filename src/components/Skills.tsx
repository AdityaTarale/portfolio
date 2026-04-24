import { getIcon } from "@/utils/iconsRegistry";
import Image from "next/image";

const NAME_OVERRIDES: Record<string, string> = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  reactNative: "React Native",
  next: "Next.js",
  redux: "Redux",
  rtkQuery: "RTK Query",
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
  mapbox: "Mapbox",
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
  testing: "React Testing Library",
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
  antigravity: "Antigravity",
  nx: "Nx",
  bootstrap: "Bootstrap",
  axios: "Axios",
  chartjs: "Chart.js",
  azure: "Azure",
  aws: "AWS",
  gcp: "GCP",
  figma: "Figma",
  digitalOcean: "DigitalOcean",
  reactNavigation: "React Navigation",
  unistyles: "Unistyles",
  victoryNative: "Victory Native",
  cicd: "CI/CD",
  kong: "Kong",
};

const getDisplayName = (key: string) => NAME_OVERRIDES[key] || key;

function SkillBoxCard({ iconKey }: { iconKey: string }) {
  return (
    <li className="flex flex-col items-center w-full gap-2 group">
      <div className="relative w-full transition-all duration-300 border rounded-lg aspect-square border-emerald-600/30 bg-emerald-600/10 group-hover:bg-emerald-600/20 group-hover:scale-105 group-hover:shadow-sm">
        <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
          <Image
            className="object-contain w-full h-full"
            alt={iconKey}
            aria-hidden="true"
            src={String(getIcon(iconKey as Parameters<typeof getIcon>[0]))}
            width={40}
            height={40}
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
      title: "Languages",
      keys: ["javascript", "typescript", "python", "html", "css", "json"],
    },
    {
      title: "Frontend Frameworks & Routing",
      keys: ["react", "next", "router"],
    },
    {
      title: "State Management",
      keys: ["redux", "rtkQuery", "saga", "query"],
    },
    {
      title: "Styling & UI Libraries",
      keys: [
        "bootstrap",
        "tailwind",
        "scss",
        "material",
        "antDesign",
        "shadcn",
        "radix",
        "styleGuide",
      ],
    },
    {
      title: "Mobile & Hybrid",
      keys: ["reactNative", "reactNavigation", "unistyles", "expo", "ionic"],
    },
    {
      title: "Backend & Runtime",
      keys: ["node", "express", "socket", "axios", "firebase"],
    },
    {
      title: "Databases",
      keys: ["mongo", "postgresql"],
    },
    {
      title: "Data Visualization & Maps",
      keys: ["chartjs", "victoryNative", "openLayers", "mapbox"],
    },
    {
      title: "Testing & QA",
      keys: ["jest", "cypress", "testing", "storybook"],
    },
    {
      title: "Build Tools & Package Managers",
      keys: ["nx", "webpack", "vite", "rollupjs", "npm", "yarn"],
    },
    {
      title: "Version Control",
      keys: ["git", "githubColored"],
    },
    {
      title: "Containerization & Deployment",
      keys: ["cicd", "docker", "kubernetes", "kong", "nginx", "vercel", "netlify"],
    },
    {
      title: "Cloud Platforms",
      keys: ["aws", "azure", "gcp", "digitalOcean"],
    },
    {
      title: "Developer Tools",
      keys: [
        "vscode",
        "antigravity",
        "figma",
        "postman",
        "androidStudio",
        "xcode",
      ],
    },
    {
      title: "OS & Environments",
      keys: ["linux", "ubuntu"],
    },
    {
      title: "Collaboration",
      keys: ["jira"],
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
    "Analytical Thinking",
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
            <ul className="grid grid-cols-6 gap-2 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-9 xl:grid-cols-12 sm:gap-3">
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
