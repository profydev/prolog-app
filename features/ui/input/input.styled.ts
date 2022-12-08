import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

export const Container = styled.div`
  position: relative;
`;

export const InputContainer = styled.input<{
  errorMessage: string;
  error: boolean;
  isIconPresent: boolean;
}>`
  display: block;
  border: 1px solid;
  border-color: ${({ errorMessage, error }) =>
    errorMessage || error ? color("error", 300) : color("gray", 300)};
  border-radius: 7px;
  width: calc(${space(20)} * 4 - ${space(6)});
  padding: ${space(2, 3)};
  letter-spacing: 0.05rem;
  color: ${color("gray", 900)};
  ${textFont("md", "regular")};
  ${({ isIconPresent }) =>
    isIconPresent &&
    css`
      padding-left: ${space(10)};
      width: calc(${space(20)} * 4 - ${space(12)} - ${space(2)});
    `}
  ::placeholder {
    color: ${color("gray", 400)};
  }
  &:focus {
    outline: 3px solid;
    outline-color: ${({ errorMessage, error }) =>
      errorMessage || error ? color("error", 100) : color("primary", 200)};
  }
  &:disable {
    color: ${color("gray", 500)};
    background-color: ${color("gray", 50)};
  }
`;

export const InputIcon = styled.img<{
  iconSrc?: string;
  displayLabel?: boolean;
}>`
  display: block;
  height: ${space(5)};
  width: ${space(5)};
  margin-inline: ${space(2)};
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  transform: ${({ displayLabel }) => displayLabel && "translateY(12%)"};
`;

export const Label = styled.label<{
  displayLabel?: boolean;
}>`
  display: ${({ displayLabel }) => (displayLabel ? "block" : "none")};
  margin: 0;
  margin-bottom: ${space(1)};
  color: ${color("gray", 700)};
  ${textFont("md", "regular")};
`;

export const Hint = styled.p`
  margin: 0;
  margin-top: ${space(1)};
  color: ${color("gray", 500)};
  ${textFont("sm", "regular")};
  letter-spacing: 0.045rem;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  margin-top: ${space(1)};
  color: ${color("error", 500)};
  ${textFont("sm", "regular")};
  letter-spacing: 0.05rem;
`;

export const ErrorIcon = styled(InputIcon)<{
  displayLabel: boolean;
}>`
  height: ${space(4)};
  width: ${space(4)};
  left: 280px;
  transform: ${({ displayLabel }) => displayLabel && "translateY(40%)"};
`;
