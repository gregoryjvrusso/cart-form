import React from "react";
import { render } from "@testing-library/react";
import ComeBack from "../ComeBack";

describe("ComeBack component", () => {
  it("deve conseguir renderizar [snapshot]", async () => {
    const { container } = render(
      <ComeBack />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
