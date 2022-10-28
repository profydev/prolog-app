import { projectControllerFindAll } from "./generated-api";

export async function getProjects() {
  const data = await projectControllerFindAll();
  return data;
}
