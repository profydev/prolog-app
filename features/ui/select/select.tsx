import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { Option } from "./option";
import * as S from "./select.styled";

type Option<T> = {
  value: T;
  label: React.ReactNode;
};

type SelectProps<T> = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
  options: Option<T>[];
  value: unknown;
  onChange: (value: T) => void;
  errorMessage?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  iconSrc?: string;
  width?: string | number;
  label?: string;
  hint?: string;
};

export function Select<T>({
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
}: SelectProps<T>) {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);

  // hides dropdown when user clicks outside the select component
  useClickAway(ref, () => {
    setShowDropdown(false);
  });

  const toggleDropdown = () =>
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Space" || event.code === "ArrowDown") {
      event.preventDefault();
      toggleDropdown();
    }
    if (event.code === "Escape") {
      setShowDropdown(false);
    }
  };

  const onClickOption = (newValue: T) => {
    onChange(newValue);
    setShowDropdown(false);
  };

  const onKeyDownOption = (event: React.KeyboardEvent, value: T) => {
    if (event.code === "Space") {
      event.preventDefault();
      onClickOption(value);
    }
    if (event.code === "Escape") {
      setShowDropdown(false);
    }
  };

  const selectedOption = options.find(
    (option) => option.value === (value || defaultValue)
  );

  return (
    <S.Container ref={ref} width={width} {...props}>
      {label && <S.Label>{label}</S.Label>}

      <S.SelectedOption
        onClick={toggleDropdown}
        hasValue={!!selectedOption}
        hasError={!!errorMessage}
        disabled={disabled}
        aria-expanded={showDropdown}
        width={width}
        onKeyDown={onKeyDown}
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
            onKeyDown={onKeyDownOption}
          >
            {option.label}
          </Option>
        ))}
      </S.List>
    </S.Container>
  );
}
