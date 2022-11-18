import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Share } from "./Share";

export default {
  title: "Chakradhar-oslash/Share",
  component: Share,
} as ComponentMeta<typeof Share>;

export const OShare: ComponentStory<typeof Share> = (args) => (
  <Share {...args} />
);
