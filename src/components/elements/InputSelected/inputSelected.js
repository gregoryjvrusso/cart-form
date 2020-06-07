import React from "react";
import Box from "../Box";
import { arrayOf, func, shape, string } from "prop-types";
import { Container, Option, Label, TextMessage } from "./inputSelected.styles";

const InputSelected = ({
  name,
  textLabel,
  onInputChange,
  options,
  messageError,
  value,
  setValue,
  error,
  setError,
  onInputBlur,
  ...props
}) => (
  <Box width={"100%"} pt={3}>
    <Container
      name={name}
      placeholder={textLabel}
      value={value}
      required
      onBlur={(e) => onInputBlur(e, error, setError, name)}
      onChange={(e) => onInputChange(e, setValue)}
      {...props}
    >
      {options.map((e) => (
        <Option key={e.value} value={e.value}>
          {e.text}
        </Option>
      ))}
    </Container>
    <Label forHtml={name} {...props}>
      {textLabel}
    </Label>
    {error[name] && <TextMessage>{messageError}</TextMessage>}
  </Box>
);

InputSelected.propTypes = {
  name: string.isRequired,
  textLabel: string.isRequired,
  messageError: string,
  onInputChange: func.isRequired,
  options: arrayOf(
    shape({
      value: string,
      text: string,
    })
  ),
  value: string,
  setValue: func,
};

InputSelected.defaultProps = {
  messageError: "",
  options: [],
  value: "",
  setValue: undefined,
};

InputSelected.displayName = "InputSelected";

export default InputSelected;
