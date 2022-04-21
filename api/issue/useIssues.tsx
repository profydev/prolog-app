import { useQuery } from "react-query";
import axios from "axios";
import { Issue } from "./issue.types";

async function getIssues() {
  const { data } = await axios.get("https://prolog-api.profy.dev/issue");
  return data;
}

export function useIssues() {
  return useQuery<Issue[], Error>("issues", getIssues);
}
