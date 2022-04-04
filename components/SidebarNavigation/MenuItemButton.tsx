import React from "react";
import styled from "styled-components";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  onClick: () => void;
};

const ListItem = styled.li`
  padding: 8px 12px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: #f2f4f7;
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
  margin-right: 12px;
`;

export function MenuItemButton({ text, onClick, iconSrc }: MenuItemProps) {
  return (
    <ListItem>
      <Button onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Icon src={iconSrc} alt={`${text} icon`} /> {text}
      </Button>
    </ListItem>
  );
}
