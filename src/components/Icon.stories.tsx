import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconBtn } from "./Icon";

export default {
  title: "Atoms/IconBtn",
  component: IconBtn,
} as ComponentMeta<typeof IconBtn>;

const Template: ComponentStory<typeof IconBtn> = (args) => (
  <IconBtn {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "red",
  size: 50,
  customStyles: {},
};
