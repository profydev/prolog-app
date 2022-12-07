import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { Option } from "./option";
import * as S from "./select.styled";

type Option = {
  value: unknown;
  label: React.ReactNode;
};

type SelectProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
  options: Option[];
  value: unknown;
  onChange: (value: unknown) => void;
  errorMessage?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  iconSrc?: string;
  width?: string | number;
  label?: string;
  hint?: string;
};

export function Select({
  options,
  value,
  onChange,
  placeholder = "Choose an option",
  defaultValue = "",
  iconSrc = "",
  disabled = false,
  label = "",
  hint = "",
  errorMessage = "",
  width = "",
  ...props
}: SelectProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);

  // hides dropdown when user clicks outside the select component
  useClickAway(ref, () => {
    setShowDropdown(false);
  });

  const showDropdownHandler = () =>
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);

  const onClickOption = (newValue: unknown) => {
    onChange(newValue);
    setShowDropdown(false);
  };

  const selectedOption = options.find(
    (option) => option.value === (value || defaultValue)
  );

  return (
    <S.Container ref={ref} width={width} {...props}>
      {label && <S.Label>{label}</S.Label>}

      <S.SelectedOption
        onClick={showDropdownHandler}
        selectedOption={selectedOption}
        disabled={disabled}
        errorMessage={errorMessage}
        aria-expanded={showDropdown}
        width={width}
      >
        <S.LeftContainer>
          {iconSrc && <S.OptionalIcon src={iconSrc} />}
          {selectedOption?.label || placeholder}
        </S.LeftContainer>

        <S.SelectArrowIcon
          src="/icons/chevron-down.svg"
          showDropdown={showDropdown}
        />
      </S.SelectedOption>

      {hint && !showDropdown && !errorMessage && <S.Hint>{hint}</S.Hint>}

      {errorMessage && !showDropdown && !disabled && (
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      )}

      <S.List showDropdown={showDropdown} role="listbox" tabIndex={-1}>
        {options.map((option) => (
          <Option
            key={String(option.value)}
            value={option.value}
            isSelected={value === option.value}
            onClick={onClickOption}
          >
            {option.label}
          </Option>
        ))}
      </S.List>
    </S.Container>
  );
}
