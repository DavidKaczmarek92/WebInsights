import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "./Icons";
import { Icon as IconComponent } from "./Icon";

const meta: Meta<typeof IconComponent> = {
  title: "Design System/Core",
  component: IconComponent,
};

const iconsKeys = Object.keys(Icons) as [keyof typeof Icons];

export const Icon: StoryObj<typeof IconComponent> = {
  render: () => (
    <div>
      {iconsKeys.map((icon) => (
        <div key={icon}>
          <IconComponent icon={icon} />
        </div>
      ))}
    </div>
  ),
};

export default meta;
