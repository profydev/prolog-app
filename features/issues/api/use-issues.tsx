import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Page } from "@typings/page.types";
import type { Issue } from "../types/issue.types";

async function getIssues(page: number, options?: { signal?: AbortSignal }) {
  const { data } = await axios.get("https://prolog-api.profy.dev/v2/issue", {
    params: { page, status: "open" },
    signal: options?.signal,
    headers: { Authorization: "my-access-token" },
  });
  return data;
}

const commonQueryOptions = {
  staleTime: 60000,
};

export function useIssues(page: number) {
  const query = useQuery<Page<Issue>, Error>(
    ["issues", page],
    ({ signal }) => getIssues(page, { signal }),
    { ...commonQueryOptions, staleTime: 60000 }
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      queryClient.prefetchQuery(
        ["issues", page + 1],
        async ({ signal }) => getIssues(page + 1, { signal }),
        commonQueryOptions
      );
    }
  }, [query.data, page, queryClient]);
  return query;
}
