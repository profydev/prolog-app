import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { SidebarNavigation } from "@components/SidebarNavigation";
import { color } from "@styles/theme";

type PageContainerProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  background: ${color("gray", 900)};
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
      <main>{children}</main>
    </Container>
  );
}
