import React from "react";
import ProjectItem from "@/features/projects/_components/ProjectItem";
import { projects } from "@/utils/json/projects";
import BackButton from "@/features/_components/BackButton";

const ProjectsScreen = () => {
  return (
    <section className={"mx-auto max-w-3xl"}>
      <div className={"inline-block"}>
        <BackButton href={"/"} text={"Projects"} />
      </div>
      {projects.map((project) => (
        <ProjectItem key={project.title} {...project} type={project.type} />
      ))}
    </section>
  );
};

export default ProjectsScreen;
