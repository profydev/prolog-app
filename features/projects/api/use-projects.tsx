import { useQuery } from "@tanstack/react-query";
import { axios } from "@api/axios";
import type { Project } from "@features/projects";

async function getProjects() {
  const { data } = await axios.get("/project");
  return data;
}

export function useProjects() {
  return useQuery<Project[], Error>(["projects"], getProjects);
}
