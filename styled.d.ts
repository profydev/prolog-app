import "styled-components";

interface Color {
  25: string;
  50: string;
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

interface Font {
  regular: string;
  medium: string;
  semibold: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      gray: Color;
      primary: Color;
      error: Color;
      warning: Color;
      success: Color;
    };
    space: {
      0: string;
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
    size: {
      headerHeight: string;
    };
    breakpoint: {
      desktop: string;
    };
    zIndex: {
      header: number;
    };
    font: {
      text: {
        xs: Font;
        sm: Font;
        md: Font;
      };
      display: {
        sm: Font;
        md: Font;
      };
    };
  }
}
