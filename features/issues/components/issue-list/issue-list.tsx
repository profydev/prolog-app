import { useState } from "react";
import styled from "styled-components";
import { ProjectLanguage } from "@api/projects.types";
import { color, space, textFont } from "@styles/theme";
import { IssueRow } from "./issue-row";
import { useGetIssues, useResolveIssue } from "../../api";

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

  const issuePage = useGetIssues(page);
  const resolveIssue = useResolveIssue(page);

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
              resolveIssue={() => resolveIssue.mutate(issue.id)}
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
