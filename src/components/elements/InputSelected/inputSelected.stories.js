import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import InputSelected from "../InputSelected";

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

storiesOf("Elements/InputSelected", module).add("default", () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const mockOnInputChange = (e) => {
    setValue(e.target.value);
    e.target.value ? setError(false) : setError(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <InputSelected
        onInputChange={mockOnInputChange}
        value={value}
        name="qntParcelas"
        options={mockData}
        textLabel="Quantidade de parcelas"
        error={error}
        messageError="Insira o número de parcelas"
      />
    </ThemeProvider>
  );
});
