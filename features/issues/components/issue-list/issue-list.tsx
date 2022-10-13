import { useRef, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useIssues } from "@features/issues";
import { ProjectLanguage } from "@features/projects";
import { color, space, textFont } from "@styles/theme";
import { Issue } from "@features/issues";
import { IssueRow } from "./issue-row";

const Container = styled.div`
  background: white;
  border: 1px solid ${color("gray", 200)};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: ${space(2)};
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderRow = styled.tr`
  border-bottom: 1px solid ${color("gray", 200)};
`;

const HeaderCell = styled.th`
  padding: ${space(3, 6)};
  text-align: left;
  color: ${color("gray", 500)};
  ${textFont("xs", "medium")};
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space(4, 6)};
  border-top: 1px solid ${color("gray", 200)};
`;

const PaginationButton = styled.button`
  height: 38px;
  padding: ${space(0, 4)};
  background: white;
  border: 1px solid ${color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;

  &:not(:first-of-type) {
    margin-left: ${space(3)};
  }
`;

const PageInfo = styled.div`
  color: ${color("gray", 300)};
  ${textFont("sm", "regular")}
`;

const PageNumber = styled.span`
  ${textFont("sm", "medium")}
`;

export function IssueList() {
  const [page, setPage] = useState(1);

  /********* THE "SIMPLE" APPROACH *********/
  // const [data, setData] = useState({ items: [], meta: undefined });
  // const [invalidated, setInvalidated] = useState(0);
  // useEffect(() => {
  //   axios
  //     .get("https://prolog-api.profy.dev/v2/issue?status=open", {
  //       headers: { Authorization: "my-access-token" },
  //     })
  //     .then(({ data }) => setData(data));
  // }, [invalidated]);
  // const { items, meta } = data;

  // const onClickResolve = (issueId) => {
  //   // optimistic update: remove issue from the list
  //   setData((issues) => issues.filter((issue) => issue.id !== issueId));

  //   axios
  //     .patch(
  //       `https://prolog-api.profy.dev/v2/issue/${issueId}`,
  //       { status: "resolved" },
  //       { headers: { Authorization: "my-access-token" } }
  //     )
  //     .then(() => {
  //       setInvalidated((count) => count + 1);
  //     });
  // };

  /********* THE EFFICIENT APPROACH *********/
  const issuePage = useIssues(page);

  const queryClient = useQueryClient();
  const ongoingMutationCount = useRef(0);
  const resolveIssueMutation = useMutation(
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

  const { items, meta } = issuePage.data || {};

  return (
    <Container>
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>Issue</HeaderCell>
            <HeaderCell>Level</HeaderCell>
            <HeaderCell>Events</HeaderCell>
            <HeaderCell>Users</HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          {(items || []).map((issue) => (
            <IssueRow
              key={issue.id}
              issue={issue}
              projectLanguage={ProjectLanguage.react}
              // resolveIssue={() => onClickResolve(issue.id)}
              resolveIssue={() => resolveIssueMutation.mutate(issue.id)}
            />
          ))}
        </tbody>
      </Table>
      <PaginationContainer>
        <div>
          <PaginationButton
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </PaginationButton>
          <PaginationButton
            onClick={() => setPage(page + 1)}
            disabled={page === meta?.totalPages}
          >
            Next
          </PaginationButton>
        </div>
        <PageInfo>
          Page <PageNumber>{meta?.currentPage}</PageNumber> of{" "}
          <PageNumber>{meta?.totalPages}</PageNumber>
        </PageInfo>
      </PaginationContainer>
    </Container>
  );
}
