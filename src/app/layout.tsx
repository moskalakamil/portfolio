import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import { images } from "@/assets/images/Images";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const description = "16 yo React/React Native Developer - Personal Website";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moskalakamil.com"),
  title: "Kamil Moskala",
  description,
  openGraph: {
    title: "Kamil Moskala",
    description,
    url: "https://www.moskalakamil.com",
    siteName: "Kamil Moskala",
    locale: "en_US",
    type: "website",
    images: ["https://www.moskalakamil.com/opengraph-image.png"],
  },
  twitter: {
    title: "Kamil Moskala",
    card: "summary_large_image",
    description,
    images: ["https://www.moskalakamil.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Image
          src={JSON.parse(JSON.stringify(images.noiseBackground))}
          priority={true}
          alt={"background-noise"}
          className={"fixed inset-0 -z-10 h-screen w-screen"}
        />
        <main
          className={
            "mx-auto max-w-6xl px-4 pb-12 text-neutral-900 sm:px-7 md:px-12"
          }
        >
          {children}
        </main>
      </body>
    </html>
  );
}
