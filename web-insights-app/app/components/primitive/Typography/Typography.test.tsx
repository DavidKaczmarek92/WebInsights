import { render, screen } from "app/utils/testUtils";
import { Typography } from "./Typography";

describe("<Typography />", () => {
  test("should render p tag as default tag", () => {
    render(<Typography>Lorem</Typography>);

    const element = screen.getByText("Lorem");

    expect(element.tagName).toBe("P");
  });

  test("should render other html tag", () => {
    render(<Typography as="span">Lorem</Typography>);

    const element = screen.getByText("Lorem");

    expect(element.tagName).toBe("SPAN");
  });
});
