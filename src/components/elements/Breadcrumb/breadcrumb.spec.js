import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "../Breadcrumb";

const dataMock = [
  [
    {
      value: "1",
      text: "Carrinho",
      state: true,
    },
    {
      value: "2",
      text: "Pagamento",
      state: false,
    },
    {
      value: "3",
      text: "Confirmação",
      state: false,
    },
  ],
  [
    {
      value: "1",
      text: "Carrinho",
      state: true,
    },
    {
      value: "2",
      text: "Pagamento",
      state: true,
    },
    {
      value: "3",
      text: "Confirmação",
      state: false,
    },
  ],
];

describe("Breadcrumb component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const { container } = render(<Breadcrumb data={dataMock[0]} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("deve conseguir renderizar [snapshot] com 2 links", () => {
    const { container } = render(<Breadcrumb data={dataMock[1]} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("deve conseguir renderizar [snapshot] com 1 links", () => {
    const { getByText } = render(<Breadcrumb data={dataMock[0]} />);
    expect(getByText("2")).toBeTruthy();
  });
});
