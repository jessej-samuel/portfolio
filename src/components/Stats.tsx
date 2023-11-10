import { fetcher } from "@/utils/fetcher";
import { Loader } from "@geist-ui/icons";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import useSWR from "swr";
interface StatsProps {
  className?: string;
  setCursorState: Dispatch<SetStateAction<string>>;
}
const Stats = ({ className = "", setCursorState }: StatsProps) => {
  const { data, error, isLoading } = useSWR("/api/visit", fetcher);

  if (isLoading)
    return (
      <div
        onMouseEnter={() => setCursorState("stats")}
        onMouseLeave={() => setCursorState("default")}
        onMouseUp={(e) => {
          setCursorState("stats");
          e.stopPropagation();
        }}
        className={`${className}  text-black bg-geist rounded-xl border border-dimgray flex items-center justify-center`}
      >
        <Loader className="animate-spin" />
      </div>
    );
  if (error)
    return (
      <div
        onMouseEnter={() => setCursorState("stats")}
        onMouseLeave={() => setCursorState("default")}
        onMouseUp={(e) => {
          setCursorState("stats");
          e.stopPropagation();
        }}
        className={`${className} p-5 font-medium text-black bg-gradient-to-tr from-white/60 via-geist-700/90 to-white/60 rounded-xl border border-dimgray`}
      >
        <p>Error</p>
      </div>
    );

  return (
    <div
      onMouseEnter={() => setCursorState("stats")}
      onMouseLeave={() => setCursorState("default")}
      onMouseUp={(e) => {
        setCursorState("stats");
        e.stopPropagation();
      }}
      className={`${className} p-5 font-medium text-black bg-gradient-to-tr from-white/60 via-geist-700/90 to-white/60 rounded-xl border border-dimgray`}
    >
      <div className="flex items-center gap-4 mb-2">
        <Image src={"/eye.svg"} width={24} height={24} alt="views icon" />
        <p className="text-sm font-normal">{data.views} views</p>
      </div>
      <div className="flex items-center gap-4 ">
        <Image src={"/users.svg"} width={24} height={24} alt="views icon" />
        <p className="text-sm font-normal">{data.visitors} visitors</p>
      </div>
    </div>
  );
};

export default Stats;
