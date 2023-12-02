import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

interface CurrentLogProps {
  className?: string;
  setCursorState: (state: string) => void;
}
const CurrentLog: FC<CurrentLogProps> = ({ className, setCursorState }) => {
  return (
    <div
      className={`${className} rounded-xl bg-yellow-400 text-black p-2`}
      onMouseEnter={() => setCursorState("stats")}
      onMouseLeave={() => setCursorState("default")}
    >
      <video className="rounded-xl w-96 transition-all" autoPlay loop muted>
        <source src="/log.mp4" type="video/mp4" />
      </video>
      <div className="mt-2">
        <h2 className="text-xl text-black leading-8 mt-1">Raycasting</h2>
        <p className="text-black text-xs font-medium mb-2">2023-12-02</p>
        <p className="text-black/90 text-sm hover:cursor-none">
          I am currently experimenting with shaders and graphics in{" "}
          <Link
            href={"https://www.lua.org/"}
            target="_blank"
            className="cursor-none text-pink-400 hover:text-pink-500 group"
            onMouseEnter={() => setCursorState("down")}
            onMouseLeave={() => setCursorState("default")}
          >
            Lua{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-black inline-block transition-all scale-0 group-hover:scale-100 group-hover:stroke-pink-500 self-start"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CurrentLog;
