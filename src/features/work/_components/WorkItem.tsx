import React from "react";
import { works } from "@/utils/json/work";
import Link from "next/link";

const ProjectItem = ({
  company,
  description,
  position,
  website,
  startDate,
  endDate,
}: (typeof works)[0]) => (
  <section className={"flex flex-col gap-2 border-b py-6 last:border-b-0"}>
    <Link href={website} target={"_blank"} className={"text-xl font-medium"}>
      {company}
    </Link>
    <div className={"flex gap-3 text-sm text-neutral-400"}>
      <span>{position}</span>
      <span>
        {[startDate.month, startDate.year].join(", ")}
        {" - "}
        {!endDate ? "Present" : [endDate.month, endDate.year].join(", ")}
      </span>
    </div>
    <span
      className={"text-neutral-600"}
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  </section>
);

export default ProjectItem;
