"use client";

import Image from "next/image";
import { Github, Twitter, Music } from "@geist-ui/icons";
import Link from "next/link";
import { useCopyToClipboard } from "usehooks-ts";

export default function Home() {
  const [copiedString, copy] = useCopyToClipboard();

  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="h-96 w-fit bg-geist-100 border-geist-200 border rounded-xl px-16 py-8 flex flex-col items-center justify-around">
        <Image
          src={"/avatar.png"}
          width={200}
          height={200}
          alt={"Jessej Samuel"}
          className="rounded-3xl"
        />
        <h1 className="text-2xl">Jessej Samuel</h1>
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
            }}
            className="hover:cursor-pointer hover:scale-105"
          />
        </div>
      </div>
    </main>
  );
}
