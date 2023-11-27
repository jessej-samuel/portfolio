"use client";
import { ArrowUpRight } from "@geist-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

interface LinkedInCardProps {
  className?: string;
  setCursorState: React.Dispatch<React.SetStateAction<string>>;
}

const LinkedIn = ({ className = "", setCursorState }: LinkedInCardProps) => {
  return (
    <motion.div
      className={`${className}  bg-blue-900 rounded-xl py-4 px-4 group`}
      onHoverStart={() => setCursorState("down")}
      onHoverEnd={() => setCursorState("default")}
    >
      <Link
        href="https://linkedin.com/in/jessej-samuel"
        target="_blank"
        className="hover:cursor-none"
      >
        <div className="flex justify-end">
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
            className="stroke-neutral-400 group-hover:stroke-white self-start"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <div className="flex items-center justify-center h-full group">
          {/* svg for linkedin icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="group-hover:scale-125 duration-300 transition-transform relative -top-6"
            width="56"
            height="56"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </div>
      </Link>
    </motion.div>
  );
};

export default LinkedIn;
