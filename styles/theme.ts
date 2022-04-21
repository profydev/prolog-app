import { DefaultTheme } from "styled-components";

export const theme = {
  color: {
    gray: {
      25: "#FCFCFD",
      50: "#F9FAFB",
      100: "#f2f4f7",
      200: "#E4E7EC",
      300: "#D0D5DD",
      400: "#98A2B3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1D2939",
      900: "#101828",
    },
    primary: {
      25: "#FCFAFF",
      50: "#F9F5FF",
      100: "#F4EBFF",
      200: "#E9D7FE",
      300: "#D6BBFB",
      400: "#B692F6",
      500: "#9E77ED",
      600: "#7F56D9",
      700: "#6941C6",
      800: "#53389E",
      900: "#42307D",
    },
    error: {
      25: "#FFFBFA",
      50: "#FEF3F2",
      100: "#FEE4E2",
      200: "#FECDCA",
      300: "#FDA29B",
      400: "#F97066",
      500: "#F04438",
      600: "#D92D20",
      700: "#B42318",
      800: "#912018",
      900: "#7A271A",
    },
    warning: {
      25: "#FFFCF5",
      50: "#FFFAEB",
      100: "#FEF0C7",
      200: "#FEDF89",
      300: "#FEC84B",
      400: "#FDB022",
      500: "#F79009",
      600: "#DC6803",
      700: "#B54708",
      800: "#93370D",
      900: "#7A2E0E",
    },
    success: {
      25: "#F6FEF9",
      50: "#ECFDF3",
      100: "#D1FADF",
      200: "#A6F4C5",
      300: "#6CE9A6",
      400: "#32D583",
      500: "#12B76A",
      600: "#039855",
      700: "#027A48",
      800: "#05603A",
      900: "#054F31",
    },
  },
  space: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
  },
  size: {
    headerHeight: "4rem",
  },
  breakpoint: {
    desktop: "64em",
  },
  zIndex: {
    header: 1000,
  },
  font: {
    text: {
      xs: {
        regular: `
          font-size: 0.75rem;
          line-height: 1.125rem;
          font-weight: 400;
        `,
        medium: `
          font-size: 0.75rem;
          line-height: 1.125rem;
          font-weight: 500;
        `,
        semibold: `
          font-size: 0.75rem;
          line-height: 1.125rem;
          font-weight: 600;
        `,
      },
      sm: {
        regular: `
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 400;
        `,
        medium: `
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 500;
        `,
        semibold: `
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 600;
        `,
      },
      md: {
        regular: `
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 400;
        `,
        medium: `
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 500;
        `,
        semibold: `
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 600;
        `,
      },
    },
    display: {
      sm: {
        regular: `
          font-size: 1.875rem;
          line-height: 2.375rem;
          font-weight: 400;
        `,
        medium: `
          font-size: 1.875rem;
          line-height: 2.375rem;
          font-weight: 500;
        `,
        semibold: `
          font-size: 1.875rem;
          line-height: 2.375rem;
          font-weight: 600;
        `,
      },
      md: {
        regular: `
          font-size: 2.25rem;
          line-height: 2.75rem;
          font-weight: 400;
        `,
        medium: `
          font-size: 2.25rem;
          line-height: 2.75rem;
          font-weight: 500;
        `,
        semibold: `
          font-size: 2.25rem;
          line-height: 2.75rem;
          font-weight: 600;
        `,
      },
    },
  },
};

export function color(
  name: keyof DefaultTheme["color"],
  shade: keyof DefaultTheme["color"]["gray"]
) {
  return ({ theme }: { theme: DefaultTheme }) => theme.color[name][shade];
}

export function space(...names: Array<keyof DefaultTheme["space"]>) {
  return ({ theme }: { theme: DefaultTheme }) => {
    const spaces = names.map((name) => theme.space[name]);
    return spaces.join(" ");
  };
}

export function breakpoint(name: keyof DefaultTheme["breakpoint"]) {
  return ({ theme }: { theme: DefaultTheme }) => theme.breakpoint[name];
}

export function zIndex(name: keyof DefaultTheme["zIndex"]) {
  return ({ theme }: { theme: DefaultTheme }) => theme.zIndex[name];
}

export function textFont(
  size: keyof DefaultTheme["font"]["text"],
  weight: keyof DefaultTheme["font"]["text"]["sm"]
) {
  return ({ theme }: { theme: DefaultTheme }) => theme.font.text[size][weight];
}

export function displayFont(
  size: keyof DefaultTheme["font"]["display"],
  weight: keyof DefaultTheme["font"]["display"]["sm"]
) {
  return ({ theme }: { theme: DefaultTheme }) =>
    theme.font.display[size][weight];
}
