import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@api/projects";
import type { Project } from "../types";

export function useProjects() {
  return useQuery<Project[], Error>(["projects"], getProjects);
}
