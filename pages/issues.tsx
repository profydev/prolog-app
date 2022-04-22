import { PageContainer } from "@components/PageContainer";
import { IssueList } from "@components/IssueList";
import type { NextPage } from "next";

const IssuesPage: NextPage = () => {
  return (
    <PageContainer
      title="Issues"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <IssueList />
    </PageContainer>
  );
};

export default IssuesPage;
