import styled, { css } from "styled-components";

export const ListItem = styled.li.attrs(() => ({
  tabIndex: 0,
}))<{ isCurrentlySelected: boolean }>`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding-inline: 0.75rem;
  padding-block: calc(0.75rem - 0.1rem);
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  cursor: pointer;
  z-index: 100;
  color: #1d2939;
  background-color: #fff;
  box-sizing: border-box;
  ${({ isCurrentlySelected }) =>
    isCurrentlySelected &&
    css`
      background-color: #fcfaff;
    `};

  &:hover {
    background: #f4ebff;
  }
`;

export const ListItemIcon = styled.img<{ isCurrentlySelected: boolean }>`
  display: ${({ isCurrentlySelected }) =>
    isCurrentlySelected ? "block" : "none"};
  padding: 0;
  width: 1rem;
  height: 1rem;
`;
