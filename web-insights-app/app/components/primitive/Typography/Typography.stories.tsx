import type { Meta, StoryObj } from "@storybook/react";
import { Typography as TypographyComponent } from "./Typography";

const meta: Meta<typeof TypographyComponent> = {
  title: "Design System/Primitive",
  component: TypographyComponent,
};

type Story = StoryObj<typeof TypographyComponent>;

const children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export const Typography: Story = {
  args: {
    children,
  },
  render: () => {
    return (
      <>
        <TypographyComponent>{children}</TypographyComponent>
      </>
    );
  },
};

export default meta;
