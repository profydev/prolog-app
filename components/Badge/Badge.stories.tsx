import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "./Badge";

export default {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = () => (
  <div style={{ padding: 50 }}>
    <Badge>Label</Badge>
  </div>
);

export const Default = Template.bind({});
Default.parameters = {};
