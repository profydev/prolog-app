import React from "react";
import styled, { css } from "styled-components";
import { font, space } from "@styles/theme";

export enum BadgeSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

type BadgeProps = {
  children: React.ReactNode;
  size: BadgeSize;
};

const Container = styled.div<{ size: BadgeSize }>`
  width: fit-content;
  display: flex;
  align-items: center;
  background: #f9f5ff;
  border-radius: ${space(4)};
  color: #6941c6;

  ${(props) => {
    switch (props.size) {
      case BadgeSize.sm:
        return css`
          padding: ${space(0, 2)};
          height: 1.375rem;
          ${font("xs", "md")}
        `;
      case BadgeSize.md:
        return css`
          padding: 0 0.625rem};
          height: 1.5rem;
          ${font("sm", "md")}
        `;
      case BadgeSize.lg:
        return css`
          padding: ${space(0, 3)};
          height: 1.75rem;
          ${font("sm", "md")}
        `;
    }
  }}
`;

export function Badge({ children, size }: BadgeProps) {
  return <Container size={size}>{children}</Container>;
}
