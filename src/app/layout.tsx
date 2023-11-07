import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
