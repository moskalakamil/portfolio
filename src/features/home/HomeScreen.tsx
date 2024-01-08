import React from "react";
import HomeHeading from "@/features/home/_components/HomeHeading";
import HomeTabsSection from "@/features/home/_components/HomeTabsSection";

const navItems = [
  {
    text: "About",
    href: "/",
  },
  {
    text: "Work",
    href: "/",
  },
  {
    text: "Projects",
    href: "/",
  },
  {
    text: "Contact",
    href: "/",
  },
];

const socialMediaItems = [
  {
    text: "Twitter",
    href: "/",
  },
  {
    text: "LinkedIn",
    href: "/",
  },
  {
    text: "Github",
    href: "/",
  },
];

const HomeScreen = () => {
  return (
    <div className={"flex min-h-screen flex-col items-center pt-20"}>
      <HomeHeading />
      <div
        className={
          "xs:flex-row xs:items-start xs:gap-0 xs:justify-between flex w-full flex-col items-center justify-center gap-12 pt-24"
        }
      >
        <HomeTabsSection links={navItems} heading={"See more"} />
        <HomeTabsSection links={socialMediaItems} heading={"Connect"} />
      </div>
    </div>
  );
};

export default HomeScreen;
