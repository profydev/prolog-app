import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter.ttf");
    font-display: swap;
  }

  body {
    font-family: Inter, Sans-Serif;
  }
`;
