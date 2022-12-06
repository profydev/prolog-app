import React, {
  useState,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  SelectHTMLAttributes,
} from "react";
import { useClickAway } from "react-use";
import { SelectContext } from "./select-context";
import * as S from "./select.styled";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode | ReactNode[];
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
  placeholder = "Choose an option",
  defaultValue = "",
  iconSrc = "",
  disabled = false,
  label = "",
  hint = "",
  errorMessage = "",
  width = "",
  children,
  ...props
}: SelectProps) {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);

  // hides dropdown when user clicks outside the select component
  useClickAway(ref, () => {
    setShowDropdown(false);
  });

  const showDropdownHandler = useCallback(
    () => setShowDropdown((prevShowDropdown) => !prevShowDropdown),
    []
  );

  const updateSelectedOption = useCallback((option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
  }, []);

  const value = useMemo(
    () => ({ selectedOption, changeSelectedOption: updateSelectedOption }),
    [selectedOption, updateSelectedOption]
  );

  return (
    <SelectContext.Provider value={value}>
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
            {selectedOption || placeholder}
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
          {children}
        </S.List>
      </S.Container>
    </SelectContext.Provider>
  );
}
