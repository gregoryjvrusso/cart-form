import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";
import { check } from "../../../assets/index";

import Circle from "../Circle";

storiesOf("Elements/Circle", module)
  .add("default", () => (
    <ThemeProvider theme={theme}>
      <Circle size="22" color="red">
        1
      </Circle>
    </ThemeProvider>
  ))
  .add("checked", () => (
    <ThemeProvider theme={theme}>
      <Circle size="22" color="red" checked>
        <img src={check} alt={"checked"} />
      </Circle>
    </ThemeProvider>
  ))
  .add("black default", () => (
    <ThemeProvider theme={theme}>
      <Circle size="22" color="black">
        1
      </Circle>
    </ThemeProvider>
  ))
  .add("black checked", () => (
    <ThemeProvider theme={theme}>
      <Circle size="22" color="black" checked>
        <img src={check} alt={"checked"} />
      </Circle>
    </ThemeProvider>
  ));
