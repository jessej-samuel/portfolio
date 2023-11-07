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
        {children}
      </body>
    </html>
  );
}
