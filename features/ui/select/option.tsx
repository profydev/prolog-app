import React, { ReactNode } from "react";
import { useSelectContext } from "./select-context";
import * as S from "./option.styled";

type OptionProps = {
  children: ReactNode | ReactNode[];
  value: any;
  handleCallback?: (value: any) => unknown;
};

export function Option({ children, value, handleCallback }: OptionProps) {
  const { changeSelectedOption, selectedOption } = useSelectContext();
  const isCurrentlySelected = selectedOption === value;

  return (
    <S.ListItem
      isCurrentlySelected={isCurrentlySelected}
      aria-selected={isCurrentlySelected}
      onClick={() => {
        changeSelectedOption(value);
        if (handleCallback) {
          handleCallback(value);
        }
      }}
      role="option"
    >
      {children}
      <S.ListItemIcon
        isCurrentlySelected={isCurrentlySelected}
        src="/icons/checked.svg"
      />
    </S.ListItem>
  );
}
