import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Issue } from "@features/issues";

export function useResolveIssue(page: number) {
  const queryClient = useQueryClient();
  const ongoingMutationCount = useRef(0);
  return useMutation(
    (issueId) =>
      axios.patch(
        `https://prolog-api.profy.dev/v2/issue/${issueId}`,
        { status: "resolved" },
        { headers: { Authorization: "my-access-token" } }
      ),
    {
      onMutate: async (issueId: string) => {
        ongoingMutationCount.current += 1;

        await queryClient.cancelQueries(["issues"]);

        const currentPage = queryClient.getQueryData<{ items: Issue[] }>([
          "issues",
          page,
        ]);
        const nextPage = queryClient.getQueryData<{ items: Issue[] }>([
          "issues",
          page + 1,
        ]);

        if (!currentPage) {
          return;
        }

        const newItems = currentPage.items.filter(({ id }) => id !== issueId);

        if (nextPage?.items.length) {
          const lastIssueOnPage =
            currentPage.items[currentPage.items.length - 1];
          const indexOnNextPage = nextPage.items.findIndex(
            (issue) => issue.id === lastIssueOnPage.id
          );
          const nextIssue = nextPage.items[indexOnNextPage + 1];
          if (nextIssue) {
            newItems.push(nextIssue);
          }
        }

        queryClient.setQueryData(["issues", page], {
          ...currentPage,
          items: newItems,
        });

        return { currentIssuesPage: currentPage };
      },
      onError: (err, issueId, context) => {
        if (context?.currentIssuesPage) {
          queryClient.setQueryData(["issues", page], context.currentIssuesPage);
        }
      },
      onSettled: () => {
        ongoingMutationCount.current -= 1;
        if (ongoingMutationCount.current === 0) {
          queryClient.invalidateQueries(["issues"]);
        }
      },
    }
  );
}
