import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { resolveIssue } from "@api/issues";
import * as GetIssues from "./use-get-issues";
import type { Issue } from "@api/issues.types";

export function useResolveIssue(page: number) {
  const queryClient = useQueryClient();
  const ongoingMutationCount = useRef(0);
  return useMutation((issueId) => resolveIssue(issueId), {
    onMutate: async (issueId: string) => {
      ongoingMutationCount.current += 1;

      await queryClient.cancelQueries(GetIssues.getQueryKey());

      const currentPage = queryClient.getQueryData<{ items: Issue[] }>(
        GetIssues.getQueryKey(page)
      );
      const nextPage = queryClient.getQueryData<{ items: Issue[] }>(
        GetIssues.getQueryKey(page + 1)
      );

      if (!currentPage) {
        return;
      }

      const newItems = currentPage.items.filter(({ id }) => id !== issueId);

      if (nextPage?.items.length) {
        const lastIssueOnPage = currentPage.items[currentPage.items.length - 1];
        const indexOnNextPage = nextPage.items.findIndex(
          (issue) => issue.id === lastIssueOnPage.id
        );
        const nextIssue = nextPage.items[indexOnNextPage + 1];
        if (nextIssue) {
          newItems.push(nextIssue);
        }
      }

      queryClient.setQueryData(GetIssues.getQueryKey(page), {
        ...currentPage,
        items: newItems,
      });

      return { currentIssuesPage: currentPage };
    },
    onError: (err, issueId, context) => {
      if (context?.currentIssuesPage) {
        queryClient.setQueryData(
          GetIssues.getQueryKey(page),
          context.currentIssuesPage
        );
      }
    },
    onSettled: () => {
      ongoingMutationCount.current -= 1;
      if (ongoingMutationCount.current === 0) {
        queryClient.invalidateQueries(GetIssues.getQueryKey());
      }
    },
  });
}
