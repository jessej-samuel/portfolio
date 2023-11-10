import {
  SiAndroid,
  SiDiscord,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiMarkdown,
  SiMicrosoftoffice,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiStackoverflow,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

interface SkillsProps {
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className = "" }) => {
  return (
    <div
      className={`${className} grid grid-cols-7 grid-rows-3 rounded-xl p-3 bg-purple-400`}
    >
      <SiNextdotjs className=" text-gunmetal text-4xl m-auto" title="Nextjs" />
      <SiTailwindcss
        className=" text-gunmetal text-4xl m-auto"
        title="TailwindCSS"
      />
      <SiExpress className=" text-gunmetal text-4xl m-auto" title="Express" />
      <SiMongodb className=" text-gunmetal text-4xl m-auto" title="MongoDB" />
      <SiTypescript
        className=" text-gunmetal text-4xl m-auto"
        title="TypeScript"
      />
      <SiFramer
        className=" text-gunmetal text-4xl m-auto"
        title="FramerMotion"
      />
      <SiRedux className=" text-gunmetal text-4xl m-auto" title="Redux" />
      <SiReact className=" text-gunmetal text-4xl m-auto" title="React" />
      <SiNodedotjs className=" text-gunmetal text-4xl m-auto" title="NodeJS" />
      <SiPython className=" text-gunmetal text-4xl m-auto" title="Python" />
      <SiPrisma className=" text-gunmetal text-4xl m-auto" title="Prisma" />
      <SiAndroid className=" text-gunmetal text-4xl m-auto" title="Android" />
      <SiVercel className=" text-gunmetal text-4xl m-auto" title="Vercel" />
      <SiUnity className=" text-gunmetal text-4xl m-auto" title="Unity" />
      <SiPostgresql
        className=" text-gunmetal text-4xl m-auto"
        title="PostgresSQL"
      />
      <SiGit className=" text-gunmetal text-4xl m-auto" title="Git" />
      <SiVisualstudiocode
        className=" text-gunmetal text-4xl m-auto"
        title="Visual Studio Code"
      />
      <SiMicrosoftoffice
        className=" text-gunmetal text-4xl m-auto"
        title="Microsoft Office"
      />
      <SiDiscord className=" text-gunmetal text-4xl m-auto" title="Discord" />
      <SiGithub className=" text-gunmetal text-4xl m-auto" title="Github" />
      <SiStackoverflow
        className=" text-gunmetal text-4xl m-auto"
        title="Stackoverflow"
      />
    </div>
  );
};

export default Skills;
