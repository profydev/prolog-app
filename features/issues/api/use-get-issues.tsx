import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { axios } from "@api/axios";
import type { Page } from "@typings/page.types";
import type { Issue } from "@features/issues";

const QUERY_KEY = "issues";

export function getQueryKey(page?: number) {
  if (page === undefined) {
    return [QUERY_KEY];
  }
  return [QUERY_KEY, page];
}

async function getIssues(page: number, options?: { signal?: AbortSignal }) {
  const { data } = await axios.get("/issue", {
    params: { page, status: "open" },
    signal: options?.signal,
  });
  return data;
}

export function useGetIssues(page: number) {
  const query = useQuery<Page<Issue>, Error>(
    getQueryKey(page),
    ({ signal }) => getIssues(page, { signal }),
    { staleTime: 60000, keepPreviousData: true }
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      queryClient.prefetchQuery(
        getQueryKey(page + 1),
        ({ signal }) => getIssues(page + 1, { signal }),
        { staleTime: 60000 }
      );
    }
  }, [query.data, page, queryClient]);
  return query;
}
