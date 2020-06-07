import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

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
storiesOf("Elements/Breadcrumb", module)
  .add("default", () => (
    <ThemeProvider theme={theme}>
      <Breadcrumb data={dataMock[0]} />
    </ThemeProvider>
  ))
  .add("Payment", () => (
    <ThemeProvider theme={theme}>
      <Breadcrumb data={dataMock[1]} />
    </ThemeProvider>
  ));
