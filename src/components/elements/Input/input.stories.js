import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Input from "../Input";

storiesOf("Elements/Input", module).add("default", () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const regex = RegExp(/\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi);

  const mockOnInputChange = (e) => {
    setValue(e.target.value);
    regex.test(e.target.value) ? setError(false) : setError(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <Input
        name="nome"
        textLabel="Nome"
        value={value}
        error={error}
        messageError="Insira seu nome completo"
        onInputChange={mockOnInputChange}
      />
    </ThemeProvider>
  );
});
