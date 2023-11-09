import { Github, Twitter, Music } from "@geist-ui/icons";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useCopyToClipboard } from "react-use";
import { useEffect } from "react";
import { SiDiscord, SiGithub, SiLinkedin, SiSpotify } from "react-icons/si";

interface SocialsProps {
  copy: (text: string) => void;
  setCursorState: (color: string) => void;
}
const Socials = ({ copy, setCursorState }: SocialsProps) => {
  return (
    <div className="w-full flex items-center justify-evenly flex-wrap gap-2">
      <Link
        href="https://github.com/jessej-samuel"
        target="_blank"
        className="cursor-none transition-all"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            backgroundColor: "#33333399",
          }}
          onMouseEnter={() => setCursorState("hidden")}
          onMouseLeave={() => setCursorState("default")}
          className="rounded-full flex items-center justify-center p-3"
        >
          <SiGithub
            className="cursor-none transition-all w-fit aspect-square"
            size={18}
          />
        </motion.div>
      </Link>
      <Link
        href={
          "https://open.spotify.com/user/3q8h73wlh651jxnf403jw8rw1?si=839e222bb3d64bd4"
        }
        target="_blank"
        className="cursor-none transition-all"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            backgroundColor: "#1DB95499",
          }}
          onMouseEnter={() => setCursorState("hidden")}
          onMouseLeave={() => setCursorState("default")}
          className="rounded-full flex items-center justify-center p-3"
        >
          <SiSpotify
            className="cursor-none transition-all w-fit aspect-square"
            size={18}
          />
        </motion.div>
      </Link>
      <motion.div
        whileHover={{
          scale: 1.2,
          backgroundColor: "#7289DA99",
        }}
        onMouseEnter={() => setCursorState("hidden")}
        onMouseLeave={() => setCursorState("default")}
        className="rounded-full flex items-center justify-center p-3"
      >
        <SiDiscord
          onClick={() => {
            copy("coderxjessej");
            toast.success("Copied Discord ID to clipboard!");
          }}
          className="cursor-none transition-all aspect-square"
          size={18}
        />
      </motion.div>
      <Link
        href={"https://www.linkedin.com/in/jessej-samuel-789b711b7/"}
        target="_blank"
        className="cursor-none transition-all"
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            backgroundColor: "#0A66C299",
          }}
          onMouseEnter={() => setCursorState("hidden")}
          onMouseLeave={() => setCursorState("default")}
          className="rounded-full flex items-center justify-center p-3"
        >
          <SiLinkedin
            className="cursor-none transition-all aspect-square"
            size={18}
          />
        </motion.div>
      </Link>
    </div>
  );
};

export default Socials;
