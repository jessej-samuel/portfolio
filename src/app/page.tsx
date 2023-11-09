"use client";

import Image from "next/image";
import { Github, Twitter, Music } from "@geist-ui/icons";
import Link from "next/link";
import { useCopyToClipboard } from "usehooks-ts";
import Socials from "@/components/Socials";
import Cursor from "@/components/Cursor";
import { useEffect, useRef, useState } from "react";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  const [copiedString, copy] = useCopyToClipboard();
  const [cursorState, setCursorState] = useState("default");
  const [clickSound, setClickSound] = useState<HTMLAudioElement>();
  const [ouchSound, setOuchSound] = useState<HTMLAudioElement>();

  useEffect(() => {
    setClickSound(new Audio("/click.wav"));
    setOuchSound(new Audio("/ouch.mp3"));
  }, []);

  return (
    <>
      <Cursor state={cursorState} />

      <main
        className="min-h-screen max-h-screen flex justify-center items-center 2xl:items-stretch 2xl:grid grid-cols-6 grid-rows-6 gap-2"
        onMouseDown={() => {
          clickSound ? clickSound.play() : null;
          setCursorState("down");
        }}
        onMouseUp={() => {
          setCursorState("default");
        }}
      >
        <ProfileCard
          ouchSound={ouchSound}
          setCursorState={setCursorState}
          copy={copy}
          className="col-start-2 row-start-2 col-span-1 row-span-3"
        />
      </main>
    </>
  );
}
