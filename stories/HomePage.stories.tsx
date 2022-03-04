import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HomePage from "../pages";

export default {
  title: "Pages/Home",
  component: HomePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: {
    name: "Jane Doe",
  },
};
