import type { Meta, StoryObj } from "@storybook/react";
import type { AllowedTags } from "./Typography";
import { Typography as TypographyComponent } from "./Typography";

const meta: Meta<typeof TypographyComponent> = {
  title: "Design System/Primitive",
  component: TypographyComponent,
};

type Story = StoryObj<typeof TypographyComponent>;

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const tags: Array<AllowedTags> = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "label",
  "span",
];

export const Typography: Story = {
  render: () => {
    return (
      <>
        {tags.map((tag) => (
          <div key={tag}>
            <TypographyComponent as="h3">Tag {tag}</TypographyComponent>
            <div>
              <TypographyComponent as={tag} variant="bold">
                {text}
              </TypographyComponent>
            </div>
            <div>
              <TypographyComponent as={tag} variant="normal">
                {text}
              </TypographyComponent>
            </div>
            <div>
              <TypographyComponent as={tag} variant="light">
                {text}
              </TypographyComponent>
            </div>
          </div>
        ))}
      </>
    );
  },
};

export default meta;
