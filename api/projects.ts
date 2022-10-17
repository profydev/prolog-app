import { axios } from "./axios";

const ENDPOINT = "/project";

export async function getProjects() {
  const { data } = await axios.get(ENDPOINT);
  return data;
}
