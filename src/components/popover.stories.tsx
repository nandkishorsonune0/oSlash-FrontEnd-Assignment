import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SharePopover } from "./popover";

export default {
  title: "Atoms/SharePopover",
  component: SharePopover,
} as ComponentMeta<typeof SharePopover>;

export const Popover: ComponentStory<typeof SharePopover> = (args) => (
  <SharePopover {...args} />
);
