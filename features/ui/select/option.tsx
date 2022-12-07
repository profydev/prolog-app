import React, { ReactNode } from "react";
import * as S from "./option.styled";

type OptionProps = {
  children: ReactNode;
  value: unknown;
  isSelected: boolean;
  onClick: (value: unknown) => void;
};

export function Option({ children, value, onClick, isSelected }: OptionProps) {
  return (
    <S.ListItem
      isCurrentlySelected={isSelected}
      aria-selected={isSelected}
      onClick={() => onClick(value)}
      role="option"
      tabIndex={0}
    >
      {children}
      <S.ListItemIcon
        isCurrentlySelected={isSelected}
        src="/icons/checked.svg"
      />
    </S.ListItem>
  );
}
