import Link from "next/link";
import React from "react";
import styled from "styled-components";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
};

export const ListItem = styled.li<{ isActive?: boolean }>`
  height: ${({ theme }) => theme.space[12]};
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[1]};
  padding: 0 ${({ theme }) => theme.space[3]};
  background: ${({ theme, isActive }) =>
    isActive ? theme.color.gray[700] : "transparent"};
  border-radius: 6px;

  &:first-child {
    margin-top: 0;
  }
`;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray[100]};
  text-decoration: none;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.space[6]};
  margin-right: ${({ theme }) => theme.space[3]};
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
