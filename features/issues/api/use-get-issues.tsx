import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIssues } from "@api/issues";
import type { IssuePage } from "@api/issues.types";

const QUERY_KEY = "issues";

export function getQueryKey(page?: number) {
  if (page === undefined) {
    return [QUERY_KEY];
  }
  return [QUERY_KEY, page];
}

export function useGetIssues(page: number) {
  const query = useQuery<IssuePage, Error>(
    getQueryKey(page),
    ({ signal }) => getIssues(page, { status: "open" }, { signal }),
    { keepPreviousData: true }
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      queryClient.prefetchQuery(getQueryKey(page + 1), ({ signal }) =>
        getIssues(page + 1, { status: "open" }, { signal })
      );
    }
  }, [query.data, page, queryClient]);
  return query;
}
