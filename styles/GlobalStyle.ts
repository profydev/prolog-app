import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { color } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @font-face {
    font-family: "Inter-md";
    src: url("/fonts/Inter.ttf");
    font-display: swap;
  }

  body {
    font-family: Inter, Sans-Serif;
    color: ${color("gray", 900)};
  }

  a {
    color: ${color("primary", 700)};
  }
`;
