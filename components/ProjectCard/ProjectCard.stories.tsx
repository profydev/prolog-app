import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectLanguage, ProjectCard, ProjectStatus } from "./ProjectCard";

export default {
  title: "Project/ProjectCard",
  component: ProjectCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (props) => (
  <div style={{ padding: 50 }}>
    <ProjectCard {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: "Frontend - Web",
  language: ProjectLanguage.react,
  numIssues: 420,
  numEvents24h: 721,
  status: ProjectStatus.critical,
};
Default.parameters = {
  viewMode: "docs",
};
