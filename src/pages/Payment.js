import React from "react";
import { GlobalStyles } from "../common/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Checkout from "../components/modules/Checkout";
import theme from "../common/theme";

const Payment = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      <Checkout />
    </React.Fragment>
  </ThemeProvider>
);

export default Payment;
