import React, { ReactNode } from "react";
import * as S from "./option.styled";

type OptionProps<P> = {
  children: ReactNode;
  value: P;
  isSelected: boolean;
  onClick: (value: P) => void;
  onKeyDown: (event: React.KeyboardEvent, value: P) => void;
};

export function Option<P>({
  children,
  value,
  onClick,
  onKeyDown,
  isSelected,
}: OptionProps<P>) {
  return (
    <S.ListItem
      isSelected={isSelected}
      aria-selected={isSelected}
      onClick={() => onClick(value)}
      onKeyDown={(event) => onKeyDown(event, value)}
      role="option"
      tabIndex={0}
    >
      {children}
      {isSelected && <S.ListItemIcon src="/icons/checked.svg" />}
    </S.ListItem>
  );
}
