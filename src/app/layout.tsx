import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
      </body>
    </html>
  );
}
