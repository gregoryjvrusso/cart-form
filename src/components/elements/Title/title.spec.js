import React from "react";
import { render } from "@testing-library/react";
import Title from "../Title";

const dataMock = ["Adicione um novo", "cartão de crédito"];

describe("Title component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const { container } = render(<Title title={dataMock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("verificar se os valores do css estão corretos", () => {
    const { getByTestId } = render(<Title title={dataMock} />);
    expect(getByTestId("text-title").textContent.trim()).toContain(dataMock[0]);
  });
});
