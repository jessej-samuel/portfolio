import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
interface StatsProps {
  className?: string;
  setCursorState: Dispatch<SetStateAction<string>>;
}
const Stats = ({ className = "", setCursorState }: StatsProps) => {
  return (
    <div
      onMouseEnter={() => setCursorState("stats")}
      onMouseLeave={() => setCursorState("default")}
      onMouseUp={(e) => {
        setCursorState("stats");
        e.stopPropagation();
      }}
      className={`${className} p-5 font-medium text-black bg-gradient-to-tr from-white/60 via-geist-700 to-white/60 rounded-xl border border-dimgray`}
    >
      <div className="flex items-center gap-4 mb-2">
        <Image src={"/eye.svg"} width={24} height={24} alt="views icon" />
        <p className="text-sm font-medium">1563 views</p>
      </div>
      <div className="flex items-center gap-4 ">
        <Image src={"/users.svg"} width={24} height={24} alt="views icon" />
        <p className="text-sm font-medium"> 463 visitors</p>
      </div>
    </div>
  );
};

export default Stats;
