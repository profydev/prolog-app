import type { NextPage } from "next";
import styled from "styled-components";
import { PageContainer } from "@components/PageContainer";
import { ProjectCard } from "@components/ProjectCard";
import { useProjects } from "@api/project/useProjects";
import { breakpoint, space } from "@styles/theme";

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

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
      <ProjectList>
        {data?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectList>
    </PageContainer>
  );
};

export default Home;
