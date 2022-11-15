import { axios } from "./axios";
import type { Issue } from "./issues.types";
import type { Page } from "@typings/page.types";

type IssueFilters = {
  status?: "open" | "resolved";
};

const ENDPOINT = "/issue";

export async function getIssues(
  page: number,
  filters: IssueFilters = {},
  options?: { signal?: AbortSignal }
) {
  const { data } = await axios.get<Page<Issue>>(ENDPOINT, {
    params: { page, ...filters },
    signal: options?.signal,
  });
  return data;
}

export async function resolveIssue(issueId: string) {
  const { data } = await axios.patch(`${ENDPOINT}/${issueId}`, {
    status: "resolved",
  });
  return data;
}
