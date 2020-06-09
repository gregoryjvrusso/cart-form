import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Card from "../Card";

const mockData = [
  ["****", "****", "****", "****"],
  ["1234", "5678", "1234", "5678"],
];

describe("InputSelected component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Card
        number={mockData[0]}
        name={"NOME DO TITULAR"}
        date={"00/00"}
        onClickCard={onClickMock}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("deve conseguir renderizar [snapshot] a parte de trás do card", async () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Card
        number={mockData[0]}
        name={"NOME DO TITULAR"}
        date={"00/00"}
        onClickCard={onClickMock}
        position
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("Verifica se o evento de click é acionado", async () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Card
        number={mockData[0]}
        name={"NOME DO TITULAR"}
        date={"00/00"}
        onClickCard={onClickMock}
      />
    );
    fireEvent.click(getByTestId('card-front'));
    expect(onClickMock).toHaveBeenCalled(1);
  });
});
