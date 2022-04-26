import type { NextPage } from "next";
import { PageContainer } from "@features/ui";
import { ProjectList } from "@features/projects";

const Home: NextPage = () => {
  return (
    <PageContainer
      title="Projects"
      info="Overview of your projects sorted by alert level."
    >
      <ProjectList />
    </PageContainer>
  );
};

export default Home;
