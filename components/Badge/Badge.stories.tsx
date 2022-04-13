import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge, BadgeSize, BadgeColor } from "./Badge";

export default {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({ size, color }) => (
  <div style={{ padding: 50 }}>
    <Badge color={color} size={size}>
      Label
    </Badge>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: BadgeSize.sm,
  color: BadgeColor.primary,
};
Default.parameters = {
  viewMode: "docs",
};
