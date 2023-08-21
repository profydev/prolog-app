import "normalize.css";
import "../styles/global.scss";
import React from "react";
import { Story as StoryType } from "@storybook/react";
import { NavigationProvider } from "../features/layout";
import { decorator as mockRouterDecorator } from "../__mocks__/next/router";

export const decorators = [
  (Story: StoryType) => (
    <NavigationProvider>
      <Story />
    </NavigationProvider>
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
