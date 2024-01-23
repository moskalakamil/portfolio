import React from "react";
import Link from "next/link";
import { Icon } from "@/assets/icons/Icon";

interface BackButtonProps {
  href: string;
  text: string;
}

const BackButton = ({ href, text }: BackButtonProps) => {
  return (
    <Link
      href={href}
      className={"my-12 flex items-center gap-3 text-3xl font-bold"}
    >
      <Icon name={"arrowback"} width={20} height={20} />
      {text}
    </Link>
  );
};

export default BackButton;
