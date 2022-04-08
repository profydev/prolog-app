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
  breakpoint: {
    desktop: "64em",
  },
  zIndex: {
    header: 1000,
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
