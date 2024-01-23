import projectsJSON from "./projects.json";

interface Index {
  type: "WEB" | "MOBILE" | "OPEN_SOURCE";
  title: string;
  description: string;
  url: string;
}

export const projects = projectsJSON as Index[];
