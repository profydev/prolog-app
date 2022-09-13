import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import type { Page } from "@typings/page.types";
import type { Issue } from "../types/issue.types";
import data from "./issues-page-1.json";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getIssues(page: number) {
  return Promise.resolve(data as Page<Issue>);
}

export function useIssues(page: number) {
  const query = useQuery<Page<Issue>, Error>(
    ["issues", page],
    () => getIssues(page),
    { keepPreviousData: true, staleTime: 60000 }
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      queryClient.prefetchQuery(["projects", page + 1], () =>
        getIssues(page + 1)
      );
    }
  }, [query.data, page, queryClient]);
  return query;
}
