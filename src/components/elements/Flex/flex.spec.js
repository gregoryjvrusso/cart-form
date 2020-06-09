import React from "react";
import { render } from "@testing-library/react";
import Flex from "../Flex";

describe("Flex component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const { container } = render(
      <Flex width={1 / 2} bg="teal" p={10} color="#fff">
        <div></div>
      </Flex>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("verificar se os valores do css estão corretos", () => {
    const { getByTestId } = render(
      <Flex width={1 / 2} bg="#000" p={10} color="#fff">
        <div></div>
      </Flex>
    );
    expect(getByTestId('flex')).toHaveStyle('width: 50%')
    expect(getByTestId('flex')).toHaveStyle('background-color: #000')
    expect(getByTestId('flex')).toHaveStyle('color: #fff')
  });
});
