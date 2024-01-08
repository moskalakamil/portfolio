import React from "react";
import CustomLinkText from "@/features/home/_components/CustomLinkText";
import CustomSectionHeadingText from "@/features/home/_components/CustomSectionHeadingText";

interface HomeTabsSectionProps {
  heading: string;
  links: {
    text: string;
    href: string;
  }[];
}

const HomeTabsSection = ({ heading, links }: HomeTabsSectionProps) => {
  return (
    <section className={"mx-6 min-w-[100px]"}>
      <CustomSectionHeadingText text={heading} />
      <div className={"flex flex-col gap-3"}>
        {links.map((link, i) => (
          <CustomLinkText text={link.text} href={link.href} key={i} />
        ))}
      </div>
    </section>
  );
};

export default HomeTabsSection;
