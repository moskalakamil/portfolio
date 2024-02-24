import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import { images } from "@/assets/images/Images";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kamil Moskala",
  description: "16 yo React/React Native Developer - Personal Website",
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
        className={poppins.className}
      >
        <main className={"mx-auto max-w-6xl px-4 sm:px-7 md:px-12"}>
          {children}
        </main>
      </body>
    </html>
  );
}
