"use client";

import Image from "next/image";
import { Github, Twitter, Music } from "@geist-ui/icons";
import Link from "next/link";
import { useCopyToClipboard } from "usehooks-ts";
import Socials from "@/components/Socials";
import Cursor from "@/components/Cursor";
import { useRef, useState } from "react";

export default function Home() {
  const [copiedString, copy] = useCopyToClipboard();
  const [cursorColor, setCursorColor] = useState("default");

  return (
    <>
      <Cursor color={cursorColor} />
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
          <Socials copy={copy} setCursorColor={setCursorColor} />
        </div>
      </main>
    </>
  );
}
