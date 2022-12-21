import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./select";
export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>;
const options = [
  { label: "Phoenix Baker", value: 1 },
  { label: "Olivia Rhye", value: 2 },
  { label: "Lana Steiner", value: 3 },
  { label: "Demi Wilkinson", value: 4 },
  { label: "Candice Wu", value: 5 },
  { label: "Natali Craig", value: 6 },
  { label: "Drew Cano", value: 7 },
];
const Template: ComponentStory<typeof Select> = (props) => {
  const [selectedValue, setSelectedValue] = useState<number>();
  return (
    <div style={{ padding: 50, height: 400, width: 320 }}>
      <Select
        {...props}
        options={options}
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  placeholder: "Select team member",
  iconSrc: "/icons/person.svg",
  label: "Team member",
  hint: "This is a hint text to help user.",
  defaultValue: "Demi Wilkinson",
  errorMessage: "",
};
Default.parameters = {
  viewMode: "docs",
};
