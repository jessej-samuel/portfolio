import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jessej Samuel",
  description: "Coder. Reader. Student.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} max-w-4xl bg-geist-0 text-geist min-h-screen mx-auto px-4 sm:px-6 md:px-8`}
      >
        <div className="grid grid-cols-3">
          <div className="px-8 py-4 border border-geist-200">
            <Image
              src={"/coder_pfp.png"}
              width={100}
              height={100}
              alt="Jessej Samuel"
              className="rounded-full border border-success-dark"
            />
            <h1 className="font-semibold text-2xl">Jessej Samuel</h1>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
