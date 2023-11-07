import Image from "next/image";

export default function Home() {
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
      </div>
    </main>
  );
}
