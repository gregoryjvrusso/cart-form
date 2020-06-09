import React from "react";
import { render } from "@testing-library/react";
import Box from "../Box";

describe("Box component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const { container } = render(
      <Box width={1 / 2} bg="teal" p={10} color="#fff">
        <div></div>
      </Box>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("verificar se os valores do css estão corretos", () => {
    const { getByTestId } = render(
      <Box width={1 / 2} bg="#000" p={10} color="#fff">
        <div></div>
      </Box>
    );
    expect(getByTestId('box')).toHaveStyle('width: 50%')
    expect(getByTestId('box')).toHaveStyle('background-color: #000')
    expect(getByTestId('box')).toHaveStyle('color: #fff')
  });
});
