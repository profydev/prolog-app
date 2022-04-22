import { useQuery } from "react-query";
import axios from "axios";
import type { Page } from "@api/page";
import type { Issue } from "./issue.types";

async function getIssues(page: number) {
  const { data } = await axios.get(
    `https://prolog-api.profy.dev/issue?page=${page}`
  );
  return data;
}

export function useIssues(page: number) {
  return useQuery<Page<Issue>, Error>(["issues", page], () => getIssues(page));
}
