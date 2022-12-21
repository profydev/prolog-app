import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  letter-spacing: 0.04rem;
`;

export const SelectedOption = styled.div<{
  disabled: boolean;
  hasError: boolean;
  hasValue: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 0.6875rem 0.875rem;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  cursor: pointer;
  color: #667085;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  &:focus {
    outline: none;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
  }
  ${({ hasValue, hasError, disabled }) => {
    if (disabled) {
      return css`
        color: #667085;
        background-color: #f2f4f7;
        pointer-events: none;
      `;
    }
    if (hasError) {
      return css`
        border-color: #fda29b;
        &:focus {
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
            0px 0px 0px 4px #fee4e2;
        }
      `;
    }
    if (hasValue) {
      return css`
        color: #101828;
      `;
    }
  }}
`;

export const SelectArrowIcon = styled.img<{
  showDropdown: boolean;
}>`
  transform: ${({ showDropdown }) =>
    showDropdown ? "rotate(180deg)" : "none"};
`;

export const OptionalIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const SelectedText = styled.span`
  flex: 1;
  padding: 0 0.5rem;
`;

export const Label = styled.div`
  margin-bottom: 0.25rem;
  color: #344054;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.025rem;
`;

export const List = styled.ul<{ showDropdown: boolean }>`
  display: none;
  position: absolute;
  width: 100%;
  margin: 0.5rem 0 0;
  padding: 0;
  z-index: 1;
  background: white;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  overflow: hidden;
  ${({ showDropdown }) =>
    showDropdown &&
    css`
      display: block;
    `}
`;

export const Hint = styled.div`
  margin-top: 0.25rem;
  color: #667085;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.025rem;
`;

export const ErrorMessage = styled(Hint)`
  color: #f04438;
`;
