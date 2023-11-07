import { Github, Twitter, Music } from "@geist-ui/icons";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

type CopyFunction = (text: string) => void;

interface SocialsProps {
  copy: CopyFunction;
}

const Socials = ({ copy }: SocialsProps) => {
  return (
    <div className="w-full flex items-center justify-evenly transition-all">
      <Link href="https://github.com/jessej-samuel" target="_blank">
        <Github className="hover:cursor-pointer hover:scale-105" />
      </Link>
      <Link href={"https://twitter.com/CodeRxJesseJ"} target="_blank">
        <Twitter className="hover:cursor-pointer hover:scale-105" />
      </Link>
      <Link
        href={
          "https://open.spotify.com/user/3q8h73wlh651jxnf403jw8rw1?si=839e222bb3d64bd4"
        }
        target="_blank"
      >
        <Music className="hover:cursor-pointer hover:scale-105" />
      </Link>
      <Image
        src={"/discord.svg"}
        width={28}
        height={28}
        alt="discord"
        onClick={() => {
          copy("coderxjessej");
          toast.success("Copied Discord ID to clipboard!");
        }}
        className="hover:cursor-pointer hover:scale-105"
      />
    </div>
  );
};

export default Socials;
