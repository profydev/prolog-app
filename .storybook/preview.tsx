import { Story as StoryType } from "@storybook/react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { decorator as mockRouterDecorator } from "../__mocks__/next/router";

export const decorators = [
  (Story: StoryType) => (
    <>
      <GlobalStyle />
      <Story />
    </>
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
