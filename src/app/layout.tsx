import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Cursor from "@/components/Cursor";
import { useRef } from "react";

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
        className={`${GeistSans.className}  text-geist min-h-screen bg-gradient-to-br from-geist-0 via-geist-100 to-geist-100 cursor-none`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 min-h-screen">
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 2000,
              style: {
                background: "#333",
                border: "1px solid #444",
                color: "#fff",
              },
            }}
          />

          {children}
        </div>
      </body>
    </html>
  );
}
