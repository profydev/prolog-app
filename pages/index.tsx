import type { NextPage } from "next";
import { PageContainer } from "@components/PageContainer";
import { ProjectList } from "@components/ProjectList";

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
