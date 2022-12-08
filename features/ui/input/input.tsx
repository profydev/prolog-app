import { InputHTMLAttributes } from "react";
import * as S from "./input.styled";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  value: string;
  handleChange: (input: string) => unknown;
  disabled?: boolean;
  displayLabel?: boolean;
  iconSrc?: string;
  placeholder?: string;
  hint?: string;
  error?: boolean;
  errorMessage?: string;
};

export function Input({
  label,
  value,
  handleChange,
  disabled = false,
  iconSrc = "",
  placeholder = "",
  displayLabel = false,
  hint = "",
  error = false,
  errorMessage = "",
  ...props
}: InputProps) {
  const isIconPresent = iconSrc.length > 3;
  return (
    <>
      <S.Container {...props}>
        <S.Label htmlFor={label} displayLabel={displayLabel}>
          {label}
        </S.Label>
        {iconSrc && (
          <S.InputIcon
            src={iconSrc}
            iconSrc={iconSrc}
            displayLabel={displayLabel}
          />
        )}
        {(error || errorMessage) && (
          <S.ErrorIcon
            src="./icons/error-icon.svg"
            displayLabel={displayLabel}
          />
        )}
        <S.InputContainer
          type="input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            handleChange(e.target.value);
          }}
          disabled={disabled}
          value={value}
          isIconPresent={isIconPresent}
          placeholder={placeholder}
          errorMessage={errorMessage}
          error={error}
          {...props}
        />
      </S.Container>
      {hint && !errorMessage && <S.Hint>{hint}</S.Hint>}
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  );
}
