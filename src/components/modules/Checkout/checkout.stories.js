import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Checkout from "../Checkout";

storiesOf("Modules/Checkout", module).add("default", () => {
  return (
    <ThemeProvider theme={theme}>
      <Checkout />
    </ThemeProvider>
  );
});
