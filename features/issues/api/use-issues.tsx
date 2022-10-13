import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Page } from "@typings/page.types";
import type { Issue } from "../types/issue.types";

async function getIssues(page: number) {
  const { data } = await axios.get(
    `https://prolog-api.profy.dev/issue?page=${page}`
  );
  return data;
}

const commonQueryOptions = {
  staleTime: 60000,
};

export function useIssues(page: number) {
  const query = useQuery<Page<Issue>, Error>(
    ["issues", page],
    () => getIssues(page),
    { ...commonQueryOptions, staleTime: 60000 }
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      queryClient.prefetchQuery(
        ["issues", page + 1],
        () => getIssues(page + 1),
        commonQueryOptions
      );
    }
  }, [query.data, page, queryClient]);
  return query;
}
