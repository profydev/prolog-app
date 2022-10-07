import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Project } from "../types/project.types";

async function getProjects() {
  const { data } = await axios.get("https://prolog-api.profy.dev/project");
  return data;
}

export function useProjects() {
  return useQuery<Project[], Error>(["projects"], getProjects);
}
