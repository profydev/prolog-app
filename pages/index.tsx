import { Routes } from "@config/routes";
import styled from "styled-components";
import type { NextPage } from "next";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background: white;
`;

const IssuesPage: NextPage = () => {
  return (
    <div>
      <Header>
        <a href={Routes.projects}>Open Dashboard</a>
      </Header>
    </div>
  );
};

export default IssuesPage;
