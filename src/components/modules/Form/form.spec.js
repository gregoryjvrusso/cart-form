import React, {useState} from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "../Form";

const mockData = [
  {
    value: "",
    text: "",
  },
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

describe("Form component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const { container } = render(<Form dataSelect={mockData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("deve conseguir renderizar [snapshot]", async () => {
    const { getAllByTestId } = render(<Form dataSelect={mockData} />);
    const inputs = getAllByTestId('input');
    expect(inputs[0].value).toBe('');
    fireEvent.change(inputs[0], { target: { value: '0032 2323 3232 1212' } });
    expect(inputs[0].value).toBe('0032 2323 3232 1212');
  });
});
