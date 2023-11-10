"use client";

import { useCopyToClipboard } from "usehooks-ts";
import Cursor from "@/components/Cursor";
import { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";

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
        className="min-h-screen max-h-screen flex justify-center items-center 2xl:items-stretch 2xl:grid grid-cols-12 grid-rows-6 gap-2"
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
          className="col-start-2 row-start-2 col-span-2 row-span-3"
        />
        <Stats
          className="col-start-1 row-start-1 col-span-1 row-span-1 mt-2 ml-2"
          setCursorState={setCursorState}
        />
        <Skills className="col-start-4 row-start-1 col-span-3 row-span-2 mt-2"/>
      </main>
    </>
  );
}
