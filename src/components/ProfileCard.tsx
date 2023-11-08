import Image from "next/image";
import Socials from "./Socials";

type ProfileCardProps = {
  ouchSound: HTMLAudioElement | undefined;
  setCursorColor: React.Dispatch<React.SetStateAction<string>>;
  copy: (text: string) => void;
  className?: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  ouchSound,
  setCursorColor,
  copy,
  className,
}) => {
  return (
    <div
      className={
        className +
        " " +
        "bg-geist-100 border-geist-200 border rounded-xl px-6 py-6 flex flex-col items-center justify-around"
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
        onMouseEnter={() => setCursorColor("hidden")}
        onMouseLeave={() => setCursorColor("default")}
      />
      <h1 className="text-2xl">Jessej Samuel</h1>
      <Socials copy={copy} setCursorColor={setCursorColor} />
    </div>
  );
};

export default ProfileCard;
