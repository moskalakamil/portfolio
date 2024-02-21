import React from "react";
import { works } from "@/utils/json/work";
import BackButton from "@/features/_components/BackButton";
import WorkItem from "@/features/work/_components/WorkItem";

const WorkScreen = () => {
  return (
    <section className={"mx-auto max-w-3xl"}>
      <div className={"inline-block"}>
        <BackButton href={"/"} text={"Work"} />
      </div>
      {works.map((work) => (
        <WorkItem key={work.company} {...work} />
      ))}
    </section>
  );
};

export default WorkScreen;
