"use client";

import React from "react";
import { projects } from "@/utils/json/projects";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProjectItem = ({
  type,
  title,
  description,
  url,
}: (typeof projects)[0]) => (
  <Link
    href={url}
    target={"_blank"}
    className={"my-6 flex cursor-pointer flex-col gap-1"}
  >
    <span className={"flex items-center gap-1"}>
      {
        {
          WEB: <>💻</>,
          MOBILE: <>📱</>,
          OPEN_SOURCE: <>🛠️</>,
        }[type]
      }
      {" " + title}
    </span>
    <span className={"text-xs text-neutral-400"}>{description}</span>
  </Link>
);

export default ProjectItem;
