import React from "react";
import { render } from "@testing-library/react";
import Checkout from "../Checkout";

describe("Checkout component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const { container } = render(<Checkout />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
