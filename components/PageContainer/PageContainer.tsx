import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { SidebarNavigation } from "@components/SidebarNavigation";
import { color, displayFont, textFont, space } from "@styles/theme";

type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
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

const Title = styled.h1`
  margin-bottom: ${space(1)};
  color: ${color("gray", 900)};
  ${displayFont("sm", "medium")}
`;

const Info = styled.div`
  margin-bottom: ${space(8)};
  color: ${color("gray", 500)};
  ${textFont("md", "regular")}
`;

export function PageContainer({ children, title, info }: PageContainerProps) {
  return (
    <Container>
      <Head>
        <title>ProLog - {title}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarNavigation />
      <Main>
        <ContentContainer>
          <Title>{title}</Title>
          <Info>{info}</Info>
          {children}
        </ContentContainer>
      </Main>
    </Container>
  );
}
