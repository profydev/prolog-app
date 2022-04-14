import styled from "styled-components";
import { ProjectCard } from "@components/ProjectCard";
import { useProjects } from "@api/project/useProjects";
import { breakpoint, space } from "@styles/theme";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

export function ProjectList() {
  const { data, isLoading, isError, error } = useProjects();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      {data?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Container>
  );
}
