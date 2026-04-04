import { getIcon } from "@/utils/iconsRegistry";
import Image from "next/image";

function SkillBoxCardLone() {
  return (
    <li className="opacity: 0.5 transform:none grid aspect-square w-20 place-items-center rounded-lg border border-emerald-600/30 bg-emerald-600/10 opacity-60" />
  );
}

function SkillBoxCardDead() {
  return (
    <li className="opacity: 0.3; transform: none; grid aspect-square w-20 place-items-center rounded-lg border border-emerald-600/30 bg-emerald-600/10 opacity-30" />
  );
}

function SkillBoxCardActive({
  box,
}: {
  box: { condition: string; iconUrl?: string };
}) {
  return (
    <li className="opacity: 1  transform: none  grid aspect-square w-20 place-items-center rounded-lg border border-emerald-600/30 bg-emerald-600/10">
      <span className="relative m-0 box-border inline-block w-full overflow-hidden border-0 bg-none p-2 opacity-100">
        <span className="m-0 box-border flex w-full items-center justify-center border-0 bg-none p-0 opacity-100">
          <Image
            loading="lazy"
            className="m-0 block w-full border-0 bg-none p-0 opacity-100"
            alt={box.condition}
            aria-hidden="true"
            src={String(box.iconUrl)}
            width={1080}
            height={1080}
          />
        </span>
      </span>
    </li>
  );
}

export default function Skills() {
  return (
    <main>
      <section className="mx-4 md:w-6/12 sm:mx-auto">
        <h3 className="text-3xl font-bold text-black mb-4">My Skills</h3>
      </section>
      <section className="container mx-auto flex flex-col items-center justify-center text-black">
        <div className="w-full overflow-x-scroll no-scrollbar">
          <ul className="opacity:1 transform:none mx-auto flex w-[calc(100rem)] max-w-5xl flex-wrap items-center justify-center gap-2 overflow-x-scroll no-scrollbar p-1">
            {boxArray.map((box, i) => {
              if (box.condition === "dead") {
                return <SkillBoxCardDead key={box.condition + i} />;
              }
              if (box.condition === "lone") {
                return <SkillBoxCardLone key={box.condition + i} />;
              }
              return <SkillBoxCardActive box={box} key={box.condition + i} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

const boxArray = [
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("html"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("css"),
  },
  {
    condition: "active",
    iconUrl: getIcon("javascript"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("typescript"),
  },
  {
    condition: "active",
    iconUrl: getIcon("react"),
  },
  {
    condition: "dead",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("next"),
  },
  {
    condition: "active",
    iconUrl: getIcon("redux"),
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("query"),
  },
  {
    condition: "active",
    iconUrl: getIcon("saga"),
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("router"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("tailwind"),
  },
  {
    condition: "active",
    iconUrl: getIcon("scss"),
  },
  {
    condition: "active",
    iconUrl: getIcon("material"),
  },
  {
    condition: "dead",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("antDesign"),
  },
  {
    condition: "active",
    iconUrl: getIcon("shadcn"),
  },
  {
    condition: "active",
    iconUrl: getIcon("radix"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("styleGuide"),
  },
  {
    condition: "active",
    iconUrl: getIcon("expo"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("ionic"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("openLayers"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("node"),
  },
  {
    condition: "active",
    iconUrl: getIcon("python"),
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("express"),
  },
  {
    condition: "active",
    iconUrl: getIcon("firebase"),
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("mongo"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("postgresql"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("socket"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("npm"),
  },
  {
    condition: "active",
    iconUrl: getIcon("yarn"),
  },
  {
    condition: "lone",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("webpack"),
  },
  {
    condition: "active",
    iconUrl: getIcon("vite"),
  },
  {
    condition: "lone",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("rollupjs"),
  },
  {
    condition: "active",
    iconUrl: getIcon("jest"),
  },
  {
    condition: "active",
    iconUrl: getIcon("cypress"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("testing"),
  },
  {
    condition: "active",
    iconUrl: getIcon("storybook"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("githubColored"),
  },
  {
    condition: "active",
    iconUrl: getIcon("vscode"),
  },
  {
    condition: "active",
    iconUrl: getIcon("androidStudio"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("xcode"),
  },
  {
    condition: "dead",
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("linux"),
  },
  {
    condition: "active",
    iconUrl: getIcon("ubuntu"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("nginx"),
  },
  {
    condition: "active",
    iconUrl: getIcon("postman"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("jira"),
  },
  {
    condition: "active",
    iconUrl: getIcon("json"),
  },
  {
    condition: "dead",
  },
];
