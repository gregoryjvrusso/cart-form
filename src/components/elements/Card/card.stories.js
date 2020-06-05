import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Card from "../Card";
const mockData = [
  ["****", "****", "****", "****"],
  ["1234", "5678", "1234", "5678"],
];

storiesOf("Elements/Card", module)
  .add("default", () => {
    const [position, setPosition] = useState(true);

    const mockOnClick = () => {
      console.log("clicou", position);
      setPosition(!position);
    };
    return (
      <ThemeProvider theme={theme}>
        <Card
          number={mockData[0]}
          name={"NOME DO TITULAR"}
          date={"00/00"}
          onClickCard={mockOnClick}
          position={position}
        />
      </ThemeProvider>
    );
  })
  .add("check", () => {
    const [position, setPosition] = useState(true);

    const mockOnClick = () => {
      setPosition(!position);
    };
    return (
      <ThemeProvider theme={theme}>
        <Card
          check
          number={mockData[1]}
          name={"GREGORY RUSSO"}
          date={"01/01"}
          onClickCard={mockOnClick}
          position={position}
        />
      </ThemeProvider>
    );
  });
