import React from "react";
import { render } from "@testing-library/react";
import Circle from "../Circle";

describe("Circle component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const { container } = render(
      <Circle size="22" color="red">
        1
      </Circle>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("verificar se os valores do css estão corretos", () => {
    const { getByTestId } = render(
      <Circle size="22" color="red">
        1
      </Circle>
    );
    expect(getByTestId("circle")).toHaveStyle("height: 22px");
    expect(getByTestId("circle")).toHaveStyle("color: red");
  });
});
