import type { NextPage } from "next";
import { PageContainer } from "@components/PageContainer";
import { ProjectCard } from "@components/ProjectCard";
import { useProjects } from "api/project/useProjects";

const Home: NextPage = () => {
  const { data, isLoading, isError, error } = useProjects();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <PageContainer
      title="Projects"
      info="Overview of your projects sorted by alert level."
    >
      {data?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </PageContainer>
  );
};

export default Home;
