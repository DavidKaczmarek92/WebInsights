import type { Meta, StoryObj } from "@storybook/react";
import type { Tag } from "./Typography";
import { Typography as TypographyComponent, Variant } from "./Typography";

const meta: Meta<typeof TypographyComponent> = {
  title: "Design System/Core",
  component: TypographyComponent,
};

type Story = StoryObj<typeof TypographyComponent>;

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const tags: Array<Tag> = [
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
      <div>
        {tags.map((tag) => (
          <div key={tag}>
            <TypographyComponent as="h3">Tag {tag}</TypographyComponent>
            <div>
              <TypographyComponent as={tag} variant={Variant.LIGHT}>
                {text}
              </TypographyComponent>
            </div>
            <div>
              <TypographyComponent as={tag} variant={Variant.NORMAL}>
                {text}
              </TypographyComponent>
            </div>
            <div>
              <TypographyComponent as={tag} variant={Variant.BOLD}>
                {text}
              </TypographyComponent>
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export default meta;
