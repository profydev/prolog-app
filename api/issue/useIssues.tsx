import { useQuery } from "react-query";
import axios from "axios";
import type { Page } from "@api/page";
import type { Issue } from "./issue.types";

async function getIssues() {
  const { data } = await axios.get("https://prolog-api.profy.dev/issue");
  return data;
}

export function useIssues() {
  return useQuery<Page<Issue>, Error>("issues", getIssues);
}
