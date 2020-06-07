import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

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

storiesOf("Modules/Form", module).add("default", () => {
  return (
    <ThemeProvider theme={theme}>
      <Form dataSelect={mockData} />
    </ThemeProvider>
  );
});
