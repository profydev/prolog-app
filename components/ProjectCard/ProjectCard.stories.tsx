import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Language, ProjectCard, Status } from "./ProjectCard";

export default {
  title: "Project/ProjectCard",
  component: ProjectCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (props) => (
  <ProjectCard {...props} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Frontend - Web",
  language: Language.react,
  numIssues: 420,
  numEvents24h: 721,
  status: Status.critical,
};
Default.parameters = {
  viewMode: "docs",
};
