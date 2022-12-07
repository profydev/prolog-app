import styled from "styled-components";

export const ListItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  padding: 0.625rem 0.75rem;
  cursor: pointer;
  color: #1d2939;
  background-color: ${({ isSelected }) => (isSelected ? "#fcfaff" : "#ffffff")};
  &:hover {
    background-color: #f4ebff;
  }
`;

export const ListItemIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
