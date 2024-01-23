import projectsJSON from "./projects.json";

interface Project {
  type: "WEB" | "MOBILE" | "OPEN_SOURCE";
  title: string;
  description: string;
  url: string;
}

export const projects = projectsJSON as Project[];
