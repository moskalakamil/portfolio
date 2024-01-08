import React from "react";
import { Icon } from "@/assets/icons/Icon";
import Link from "next/link";

interface CustomLinkTextProps {
  text: string;
  href: string;
}

const CustomLinkText = ({ text, href }: CustomLinkTextProps) => {
  return (
    <Link href={href} className={"flex items-center gap-2"}>
      <p>{text}</p>
      <Icon name={"arrowlink"} />
    </Link>
  );
};

export default CustomLinkText;
