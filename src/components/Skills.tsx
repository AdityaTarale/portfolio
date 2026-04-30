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

function SkillChip({ iconKey }: { iconKey: string }) {
  return (
    <li className="flex items-center gap-2 px-3 py-2 transition-all duration-300 border rounded-xl border-emerald-600/10 bg-emerald-600/[0.03] hover:bg-emerald-600/[0.08] hover:border-emerald-600/30 hover:shadow-[0_0_15px_rgba(5,150,105,0.1)] group">
      <div className="relative flex-shrink-0 w-5 h-5 transition-transform duration-300 group-hover:scale-110">
        <Image
          className="object-contain w-full h-full"
          alt={iconKey}
          aria-hidden="true"
          src={String(getIcon(iconKey as Parameters<typeof getIcon>[0]))}
          width={20}
          height={20}
        />
      </div>
      <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
        {getDisplayName(iconKey)}
      </span>
    </li>
  );
}

function SoftSkillBadge({ name }: { name: string }) {
  return (
    <li className="px-4 py-2 text-sm font-semibold rounded-xl bg-emerald-600/[0.03] text-gray-800 border border-emerald-600/10 hover:bg-emerald-600/[0.08] hover:border-emerald-600/30 transition-all duration-300">
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
    <section className="flex flex-col mx-4 mb-12 text-black bg-white md:w-8/12 lg:w-7/12 sm:mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-black tracking-tight text-gray-900 whitespace-nowrap">My Skills</h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-emerald-600/50 to-transparent translate-y-[2px]"></div>
      </div>

      <div className="flex flex-col w-full gap-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col">
              <h3 className="flex items-center gap-2 mb-4 text-sm font-bold tracking-widest text-emerald-700 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.keys.map((key) => (
                  <SkillChip iconKey={key} key={key} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="pt-8 mt-4 border-t border-gray-100">
          <h3 className="flex items-center gap-2 mb-6 text-sm font-bold tracking-widest text-emerald-700 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
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

