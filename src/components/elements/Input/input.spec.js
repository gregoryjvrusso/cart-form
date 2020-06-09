import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Input from "../Input";

describe("Input component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const onChangeMock = jest.fn();
    const onBlurMock = jest.fn();
    const { container } = render(
      <Input
        name="nome"
        textLabel="Nome"
        messageError="Insira seu nome completo"
        onInputChange={onChangeMock}
        onInputBlur={onBlurMock}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("deve conseguir renderizar [snapshot]", async () => {
    const onChangeMock = jest.fn();
    const onBlurMock = jest.fn();
    const { getByTestId } = render(
      <Input
        name="nome"
        textLabel="Nome"
        messageError="Insira seu nome completo"
        onInputChange={onChangeMock}
        onInputBlur={onBlurMock}
      />
    );
    const input = getByTestId("input");
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'Nome' } });
    expect(input.value).toBe('Nome');
  });
});
