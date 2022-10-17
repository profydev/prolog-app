import { axios } from "./axios";

type IssueFilters = {
  status?: "open" | "resolved";
};

const ENDPOINT = "/issue";

export async function getIssues(
  page: number,
  filters: IssueFilters = {},
  options?: { signal?: AbortSignal }
) {
  const { data } = await axios.get(ENDPOINT, {
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
