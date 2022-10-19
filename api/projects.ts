import { axios } from "./axios";
import type { Project } from "./projects.types";

const ENDPOINT = "/project";

export async function getProjects() {
  const { data } = await axios.get<Project[]>(ENDPOINT);
  return data;
}
