import { LanyardAPI, LanyardData } from "@/types";
import { fetcher } from "@/utils/fetcher";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { SiDiscord } from "react-icons/si";
import useSWR, { SWRConfig } from "swr";

type DiscordProps = JSX.IntrinsicElements["div"] & {};
type LanyardSWR = {
  data: LanyardAPI | undefined;
  error: any;
  isLoading: boolean;
};

const colors = {
  online: "#43b581",
  idle: "#FBBF24",
  dnd: "#DC2626",
  offline: "#222",
};

const Discord: FC<DiscordProps> = ({ className, ...props }) => {
  const { data, error, isLoading } = useSWR(
    "/api/activity",
    fetcher
  ) as LanyardSWR;

  const [color, setColor] = useState("##43b581");

  useEffect(() => {
    if (data?.data.discord_status === "online") {
      setColor(colors["online"]);
    } else if (data?.data.discord_status === "idle") {
      setColor(colors["idle"]);
    } else if (data?.data.discord_status === "dnd") {
      setColor(colors["dnd"]);
    } else {
      setColor(colors["offline"]);
    }
  }, [data?.data.discord_status]);

  if (error || isLoading)
    return (
      <div className={`${className} rounded-xl bg-red-400`} {...props}></div>
    );

  return (
    <motion.div
      className={`${className} rounded-xl font-mono text-2xl flex items-center justify-center gap-4`}
      animate={{
        backgroundColor: color,
      }}
    >
      <span className="text-5xl ">
        <SiDiscord />
      </span>{" "}
      <span className="">{data?.data.discord_status}</span>
    </motion.div>
  );
};

export default Discord;
