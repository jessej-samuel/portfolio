import {
  SiAndroid,
  SiCoffeescript,
  SiDiscord,
  SiDjango,
  SiExpress,
  SiFramer,
  SiGamedeveloper,
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
  SiSpotify,
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
      <SiTailwindcss className=" text-gunmetal text-4xl m-auto" />
      <SiExpress className=" text-gunmetal text-4xl m-auto" />
      <SiMongodb className=" text-gunmetal text-4xl m-auto" />
      <SiTypescript className=" text-gunmetal text-4xl m-auto" />
      <SiFramer className=" text-gunmetal text-4xl m-auto" />
      <SiRedux className=" text-gunmetal text-4xl m-auto" />
      <SiReact className=" text-gunmetal text-4xl m-auto" />
      <SiNodedotjs className=" text-gunmetal text-4xl m-auto" />
      <SiPython className=" text-gunmetal text-4xl m-auto" />
      <SiPrisma className=" text-gunmetal text-4xl m-auto" />
      <SiAndroid className=" text-gunmetal text-4xl m-auto" />
      <SiVercel className=" text-gunmetal text-4xl m-auto" />
      <SiUnity className=" text-gunmetal text-4xl m-auto" />
      <SiPostgresql className=" text-gunmetal text-4xl m-auto" />
      <SiGithub className=" text-gunmetal text-4xl m-auto" />
      <SiVisualstudiocode className=" text-gunmetal text-4xl m-auto" />
      <SiMicrosoftoffice className=" text-gunmetal text-4xl m-auto" />
      <SiDiscord className=" text-gunmetal text-4xl m-auto" />
      <SiMarkdown className=" text-gunmetal text-4xl m-auto" />
      <SiStackoverflow className=" text-gunmetal text-4xl m-auto" />
    </div>
  );
};

export default Skills;
