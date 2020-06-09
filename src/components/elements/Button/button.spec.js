import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const { container } = render(
      <Button>
        Clique aqui
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
