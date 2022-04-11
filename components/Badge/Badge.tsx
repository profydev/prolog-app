import React from "react";
import styled from "styled-components";
import { font, space } from "@styles/theme";

type BadgeProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  width: fit-content;
  height: 1.375rem;
  display: flex;
  align-items: center;
  padding: 0 ${space(2)};
  background: #f9f5ff;
  border-radius: ${space(4)};
  color: #6941c6;
  ${font("sm", "md")}
`;

export function Badge({ children }: BadgeProps) {
  return <Container>{children}</Container>;
}
