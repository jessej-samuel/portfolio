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
      className={`${className}  bg-gray-800 rounded-xl py-6 px-4 group`}
      whileHover={{ scale: 0.95 }}
      onHoverStart={() => setCursorState("down")}
      onHoverEnd={() => setCursorState("default")}
    >
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
              className="stroke-white group-hover:stroke-gray-400"
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
    </motion.div>
  );
};

export default GithubCard;
