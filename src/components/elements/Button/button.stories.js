import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Button from "../Button";

storiesOf("Elements/Button", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <Button>Clique Aqui</Button>
  </ThemeProvider>
));
