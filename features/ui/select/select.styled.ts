import styled, { css } from "styled-components";

export const Container = styled.div<any>`
  position: relative;
  display: block;
  width: ${({ width }) => width || `calc(5rem * 4)`};
  background-color: #fff;
`;

export const SelectedOption = styled.div.attrs(() => ({
  tabIndex: 0,
  ariaHasPopup: "listbox",
}))<any>`
  border: 1px solid;
  border-color: ${({ disabled, errorMessage }) =>
    !disabled && errorMessage ? "#FDA29B" : "#D0D5DD"};
  border-radius: 7px;
  width: ${({ width }) => width || `calc(5rem * 4 - 1.5rem)`};
  padding: 0.5rem 0.75rem;
  color: ${({ selectedOption }) => (selectedOption ? "#101828" : "#667085")};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.052rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  &:focus {
    outline: 3px solid;
    outline-color: ${({ disabled, errorMessage }) =>
      !disabled && errorMessage ? "#FEE4E2" : "#E9D7FE"};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: #667085;
      background-color: #f2f4f7;
      pointer-events: none;
    `}
`;

export const SelectArrowIcon = styled.img<{
  showDropdown: boolean;
}>`
  transform: ${({ showDropdown }) =>
    showDropdown ? "rotate(180deg)" : "none"};
  padding-inline: 0.25rem;
`;

export const OptionalIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  padding-inline: 0.25rem 0.5rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.p`
  margin: 0;
  margin-bottom: 0.25rem;
  color: #344054;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`;

export const List = styled.ul<{ showDropdown: boolean }>`
  display: block;
  width: 100%;
  margin: 0.5rem 0 0;
  padding: 0;
  position: absolute;
  background: white;
  box-shadow: 0 7px 12px -6px #d0d5dd;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  overflow: hidden;

  ${({ showDropdown }) =>
    showDropdown
      ? css`
          opacity: 1;
          visibility: visible;
          position: absolute;
          height: auto;
          z-index: 200;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `};
`;

export const Hint = styled.p`
  margin: 0;
  margin-top: 0.25rem;
  color: #667085;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  margin-top: 0.25rem;
  color: #f04438;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
`;
