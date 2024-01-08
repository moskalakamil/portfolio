import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { images } from "@/assets/images/Images";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamil Moskala",
  description:
    "React/React Native Developer with a Passion for Innovation - portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url(${images.noiseBackground.default.src})`,
          backgroundRepeat: "repeat",
          overscrollBehavior: "none",
        }}
        className={inter.className}
      >
        <main className={"mx-auto max-w-6xl px-4 sm:px-7 md:px-12"}>
          {children}
        </main>
      </body>
    </html>
  );
}
