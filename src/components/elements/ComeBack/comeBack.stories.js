import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import Flex from "../Flex";
import theme from "../../../common/theme";

import ComeBack from "../ComeBack";

storiesOf("Elements/ComeBack", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <Flex bg="red">
      <ComeBack />
    </Flex>
  </ThemeProvider>
));
