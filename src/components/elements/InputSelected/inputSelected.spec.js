import React from "react";
import { render } from "@testing-library/react";
import InputSelected from "../InputSelected";

const mockData = [
  {
    value: "1",
    text: "Parcelar em 1 vez",
  },
  {
    value: "2",
    text: "Parcelar em 2 vezes",
  },
  {
    value: "3",
    text: "Parcelar em 3 vezes",
  },
  {
    value: "4",
    text: "Parcelar em 4 vezes",
  },
  {
    value: "5",
    text: "Parcelar em 5 vezes",
  },
  {
    value: "6",
    text: "Parcelar em 6 vezes",
  },
];

describe("InputSelected component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const onChangeMock = jest.fn();
    const onBlurMock = jest.fn();
    const { container } = render(
      <InputSelected
        name="parcelas"
        onInputChange={onChangeMock}
        onInputBlur={onBlurMock}
        options={mockData}
        textLabel="Quantidade de parcelas"
        messageError="Insira o número de parcelas"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
