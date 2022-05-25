import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { color, space } from "@styles/theme";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
};

export const ListItem = styled.li<{ isActive?: boolean }>`
  height: ${space(12)};
  display: flex;
  align-items: center;
  margin-top: ${space(1)};
  padding: ${space(0, 3)};
  background: ${(props) =>
    props.isActive ? color("gray", 700)(props) : "transparent"};
  border-radius: 6px;

  &:first-child {
    margin-top: 0;
  }
`;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: ${color("gray", 100)};
  text-decoration: none;
`;

export const Icon = styled.img`
  width: ${space(6)};
  margin-right: ${space(3)};
`;

export function MenuItemLink({
  text,
  href,
  iconSrc,
  isActive,
  isCollapsed,
}: MenuItemProps) {
  return (
    <ListItem isActive={isActive}>
      <Link href={href} passHref>
        <Anchor>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Icon src={iconSrc} alt={`${text} icon`} /> {!isCollapsed && text}
        </Anchor>
      </Link>
    </ListItem>
  );
}
