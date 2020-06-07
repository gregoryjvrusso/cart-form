import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Title from ".";
import Flex from "../Flex";

const dataMock = [
  "Adicione um novo",
  "cartão de crédito"
]
storiesOf("Elements/Title", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <Flex bg="red">
      <Title title={dataMock} />
    </Flex>
  </ThemeProvider>
));
