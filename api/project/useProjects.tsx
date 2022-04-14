import { useQuery } from "react-query";
import axios from "axios";

export enum ProjectLanguage {
  react = "react",
  node = "node",
  python = "python",
}

export enum ProjectStatus {
  info = "info",
  warning = "warning",
  error = "error",
}

export type Project = {
  id: string;
  name: string;
  language: ProjectLanguage;
  numIssues: number;
  numEvents24h: number;
  status: ProjectStatus;
};

async function getProjects() {
  const { data } = await axios.get("https://prolog-api.profy.dev/project");
  return data;
}

export function useProjects() {
  return useQuery<Project[], Error>("projects", getProjects);
}
