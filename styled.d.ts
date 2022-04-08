import "styled-components";

interface Color {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      gray: Color;
    };
    space: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      8: string;
      10: string;
      12: string;
      16: string;
      20: string;
      24: string;
    };
    breakpoint: {
      desktop: string;
    };
    zIndex: {
      header: number;
    };
  }
}
