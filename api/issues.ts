import {
  issueControllerFindAllV2,
  issueControllerUpdateV2,
} from "./generated-api";
import { IssueFilters } from "./issues.types";

export async function getIssues(
  page: number,
  filters: Omit<IssueFilters, "page">,
  options?: { signal?: AbortSignal }
) {
  const data = await issueControllerFindAllV2(
    { page, ...filters },
    { signal: options?.signal }
  );
  return data;
}

export async function resolveIssue(issueId: string) {
  const data = await issueControllerUpdateV2(issueId, {
    status: "resolved",
  });
  return data;
}
