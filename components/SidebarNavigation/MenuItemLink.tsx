import Link from "next/link";
import React from "react";
import styled from "styled-components";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  href: string;
  isActive: boolean;
};

const ListItem = styled.li<{ isActive: boolean }>`
  height: 51px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  padding: 0 12px;
  background: ${(props) => (props.isActive ? "#344054" : "transparent")};
  border-radius: 6px;

  &:first-child {
    margin-top: 0;
  }
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: #f2f4f7;
  text-decoration: none;
`;

const Icon = styled.img`
  margin-right: 12px;
`;

export function MenuItemLink({ text, href, iconSrc, isActive }: MenuItemProps) {
  return (
    <ListItem isActive={isActive}>
      <Link href={href} passHref>
        <Anchor>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Icon src={iconSrc} alt={`${text} icon`} /> {text}
        </Anchor>
      </Link>
    </ListItem>
  );
}
