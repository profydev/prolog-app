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

const ListItem = styled.li<{ isActive: boolean }>`
  height: 51px;
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[1]};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.gray[700] : "transparent"};
  border-radius: 6px;

  &:first-child {
    margin-top: 0;
  }
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[100]};
  text-decoration: none;
`;

const Icon = styled.img`
  margin-right: ${({ theme }) => theme.spacing[3]};
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
