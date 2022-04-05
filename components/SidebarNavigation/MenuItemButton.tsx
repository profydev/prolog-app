import React from "react";
import styled from "styled-components";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
};

const ListItem = styled.li`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[100]};
  text-decoration: none;
  cursor: pointer;

  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

const Icon = styled.img`
  margin-right: ${({ theme }) => theme.spacing[3]};
`;

export function MenuItemButton({
  text,
  onClick,
  iconSrc,
  isCollapsed,
}: MenuItemProps) {
  return (
    <ListItem>
      <Button onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Icon src={iconSrc} alt={`${text} icon`} /> {!isCollapsed && text}
      </Button>
    </ListItem>
  );
}
