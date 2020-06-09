import React from "react";
import { render } from "@testing-library/react";
import Text from "../Text";

describe("Text component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const { container } = render(<Text>Texto</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("verificar se os valores do css estão corretos", () => {
    const { getByTestId } = render(
      <Text color="#fff" fontSize="13px">
        Texto
      </Text>
    );
    expect(getByTestId("text")).toHaveStyle("color: #fff");
    expect(getByTestId("text")).toHaveStyle("font-size: 13px");
  });
});
