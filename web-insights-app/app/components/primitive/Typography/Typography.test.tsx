import { render, screen } from "app/utils/testUtils";
import type { Variant, Tag } from "./Typography";
import { Typography } from "./Typography";

describe("<Typography />", () => {
  test("should render p tag as default tag", () => {
    render(<Typography>Lorem</Typography>);

    const element = screen.getByText("Lorem");

    expect(element.tagName).toBe("P");
  });

  test("should add custom css class", () => {
    render(<Typography className="test">Lorem</Typography>);

    const element = screen.getByText("Lorem");

    expect(element).toHaveClass("test");
  });

  describe("Tags", () => {
    const cases: Array<Tag> = [
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

    test.each(cases)("should render %s tag", (tag) => {
      render(<Typography as={tag}>Lorem</Typography>);

      const element = screen.getByText("Lorem");

      expect(element.tagName).toBe(tag.toUpperCase());
    });
  });

  describe("Variants", () => {
    const cases: Array<Variant> = ["bold", "normal", "light"];

    test.each(cases)("should render %s variant", (variant) => {
      render(<Typography variant={variant}>Lorem</Typography>);

      const element = screen.getByText("Lorem");

      expect(element).toHaveClass(variant);
    });
  });
});
