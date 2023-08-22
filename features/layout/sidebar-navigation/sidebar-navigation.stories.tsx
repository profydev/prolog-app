import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SidebarNavigation } from "./sidebar-navigation";
import { Routes } from "@config/routes";

export default {
  title: "UI/SidebarNavigation",
  component: SidebarNavigation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof SidebarNavigation>;

const Template: StoryFn<typeof SidebarNavigation> = () => <SidebarNavigation />;

export const Default = Template.bind({});
Default.parameters = {
  route: Routes.issues,
};
