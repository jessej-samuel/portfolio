"use client";
import { ArrowUpRight } from "@geist-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

interface GithubCardProps {
  className?: string;
  setCursorState: React.Dispatch<React.SetStateAction<string>>;
}

const GithubCard = ({ className = "", setCursorState }: GithubCardProps) => {
  return (
    <motion.div
      className={`${className} bg-[url("/matrix-code.gif")] transition-all  bg-gray-900 rounded-xl group hover:scale-95`}
      onHoverStart={() => setCursorState("down")}
      onHoverEnd={() => setCursorState("default")}
    >
      <div className="bg-black/50 py-4 px-4  h-full">
        <Link
          href="https://github.com/jessej-samuel"
          target="_blank"
          className="hover:cursor-none"
        >
          <div className="flex flex-col justify-between h-full group">
            <div className="flex justify-between">
              <SiGithub className="text-3xl" />
              {/* svg for arrow-up-right outlink */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-neutral-400 group-hover:stroke-white"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
            <div>
              <h2 className="font-medium">GitHub</h2>
              <p className="text-sm text-white/90">
                My projects and open source contributions.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default GithubCard;
