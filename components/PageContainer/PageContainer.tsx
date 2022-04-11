import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { SidebarNavigation } from "@components/SidebarNavigation";
import { color, space } from "@styles/theme";

type PageContainerProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  background: ${color("gray", 900)};
`;

const Main = styled.main`
  flex: 1;
`;

const ContentContainer = styled.div`
  min-height: calc(100vh - ${space(3)});
  margin-top: ${space(3)};
  padding: ${space(8)};
  background: white;
  border-top-left-radius: ${space(10)};
`;

export function PageContainer({ children }: PageContainerProps) {
  return (
    <Container>
      <Head>
        <title>ProLog</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarNavigation />
      <Main>
        <ContentContainer>{children}</ContentContainer>
      </Main>
    </Container>
  );
}
