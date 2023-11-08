import { Github, Twitter, Music } from "@geist-ui/icons";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

interface SocialsProps {
  copy: (text: string) => void;
  setCursorColor: (color: string) => void;
}

const Socials = ({ copy, setCursorColor }: SocialsProps) => {
  return (
    <div className="w-full flex items-center justify-evenly">
      <Link href="https://github.com/jessej-samuel" target="_blank">
        <Github
          className="cursor-none transition-all"
          size={20}
          onMouseLeave={() => setCursorColor("default")}
          onMouseEnter={() => setCursorColor("github")}
        />
      </Link>
      <Link href={"https://twitter.com/CodeRxJesseJ"} target="_blank">
        <Twitter
          className="cursor-none transition-all"
          size={20}
          onMouseLeave={() => setCursorColor("default")}
          onMouseEnter={() => setCursorColor("twitter")}
        />
      </Link>
      <Link
        href={
          "https://open.spotify.com/user/3q8h73wlh651jxnf403jw8rw1?si=839e222bb3d64bd4"
        }
        target="_blank"
      >
        <Music
          className="cursor-none transition-all"
          size={20}
          onMouseLeave={() => setCursorColor("default")}
          onMouseEnter={() => setCursorColor("spotify")}
        />
      </Link>
      <Image
        src={"/discord.svg"}
        width={20}
        height={20}
        alt="discord"
        onClick={() => {
          copy("coderxjessej");
          toast.success("Copied Discord ID to clipboard!");
        }}
        onMouseLeave={() => setCursorColor("default")}
        onMouseEnter={() => setCursorColor("discord")}
        className="cursor-none transition-all"
      />
      <Link
        href={"https://www.linkedin.com/in/jessej-samuel-789b711b7/"}
        target="_blank"
      >
        <Image
          src={"/linkedin.svg"}
          width={20}
          height={20}
          alt="linkedin"
          onMouseLeave={() => setCursorColor("default")}
          onMouseEnter={() => setCursorColor("linkedin")}
          className="cursor-none transition-all"
        />
      </Link>
    </div>
  );
};

export default Socials;
