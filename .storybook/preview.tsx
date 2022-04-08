import { Story as StoryType } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import { NavigationProvider } from "../contexts/Navigation";
import { decorator as mockRouterDecorator } from "../__mocks__/next/router";

export const decorators = [
  (Story: StoryType) => (
    <ThemeProvider theme={theme}>
      <NavigationProvider>
        <GlobalStyle />
        <Story />
      </NavigationProvider>
    </ThemeProvider>
  ),
  mockRouterDecorator,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
