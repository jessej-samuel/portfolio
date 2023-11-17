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

  if (isLoading || error)
    return (
      <div
        onMouseEnter={() => setCursorState("stats")}
        onMouseLeave={() => setCursorState("default")}
        onMouseUp={(e) => {
          setCursorState("stats");
          e.stopPropagation();
        }}
        className={`${className}  text-black bg-geist rounded-xl border border-dimgray flex items-center justify-center text-3xl font-bold`}
      >
        JS
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
      className={`${className} flex flex-col justify-evenly px-4 py-2 font-medium text-black bg-white rounded-xl border border-dimgray shadow-xl`}
    >
      <div className="flex items-center gap-4">
        <Image src={"/eye.svg"} width={20} height={20} alt="views icon" />
        <p className="text-sm font-normal">{data.views}</p>
      </div>
      <div className="flex items-center gap-4">
        <Image src={"/users.svg"} width={20} height={20} alt="views icon" />
        <p className="text-sm font-normal">{data.visitors}</p>
      </div>
    </div>
  );
};

export default Stats;
