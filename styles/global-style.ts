import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { color, Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${normalize}
  
  body {
    font-family: Inter, Sans-Serif;
    color: ${color("gray", 900)};
  }

  a {
    color: ${color("primary", 700)};
  }
`;
