import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge, BadgeSize, BadgeColor } from "./badge";

export default {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({ size, color, children }) => (
  <div style={{ padding: 50 }}>
    <Badge color={color} size={size}>
      {children}
    </Badge>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: BadgeSize.sm,
  color: BadgeColor.primary,
  children: "Label",
};
Default.parameters = {
  viewMode: "docs",
};
