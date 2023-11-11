import Image from "next/image";
import Socials from "./Socials";
import { motion } from "framer-motion";
import getAge from "@/utils/age";

type ProfileCardProps = {
  ouchSound: HTMLAudioElement | undefined;
  setCursorState: React.Dispatch<React.SetStateAction<string>>;
  copy: (text: string) => void;
  className?: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  ouchSound,
  setCursorState,
  copy,
  className,
}) => {
  return (
    <div
      className={
        className +
        " " +
        "bg-[#33032F] rounded-xl px-6 py-6 flex flex-col items-center justify-around"
      }
    >
      <Image
        src={"/avatar.png"}
        width={160}
        height={2160}
        alt={"Jessej Samuel"}
        className="rounded-3xl "
        priority
        onClick={(e) => {
          ouchSound ? ouchSound.play() : null;

          e.stopPropagation();
        }}
        onMouseEnter={() => setCursorState("hidden")}
        onMouseLeave={() => setCursorState("default")}
      />
      <h1 className="text-2xl text-white/70 tracking-tight">Jessej Samuel</h1>
      <p className="text-white/50">{getAge()} y/o software engineer</p>
      <Socials copy={copy} setCursorState={setCursorState} />
    </div>
  );
};

export default ProfileCard;
