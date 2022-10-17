import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Page } from "@typings/page.types";
import type { Issue } from "@features/issues";

export function useGetIssues(page: number) {
  const query = useQuery<Page<Issue>, Error>(
    ["issues", page],
    async ({ signal }) => {
      const { data } = await axios.get(
        "https://prolog-api.profy.dev/v2/issue",
        {
          params: { page, status: "open" },
          signal,
          headers: { Authorization: "my-access-token" },
        }
      );
      return data;
    },
    { staleTime: 60000, keepPreviousData: true }
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      queryClient.prefetchQuery(
        ["issues", page + 1],
        async ({ signal }) => {
          const { data } = await axios.get(
            "https://prolog-api.profy.dev/v2/issue",
            {
              params: { page: page + 1, status: "open" },
              signal,
              headers: { Authorization: "my-access-token" },
            }
          );
          return data;
        },
        { staleTime: 60000 }
      );
    }
  }, [query.data, page, queryClient]);
  return query;
}
