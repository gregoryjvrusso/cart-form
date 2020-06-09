import React from "react";
import { func, string, object } from "prop-types";
import Box from "../Box";
import { Container, Label, TextMessage } from "./input.styles";

const Input = ({
  name,
  textLabel,
  mask,
  onInputBlur,
  onInputChange,
  messageError,
  value,
  setValue,
  setError,
  error,
  ...props
}) => (
  <Box width={"100%"} pt={3}>
    <Container
      type="input"
      placeholder={textLabel}
      data-testid="input"
      name={name}
      id={name}
      required
      value={value}
      mask={mask}
      setValue={setValue}
      onBlur={(e) => onInputBlur(e, error, setError, name, props.regex)}
      onChange={(e) => onInputChange(e, setValue)}
      {...props}
      maskChar={null}
    />
    <Label htmlFor={name} {...props}>
      {textLabel}
    </Label>
    {error[name] && <TextMessage>{messageError}</TextMessage>}
  </Box>
);

Input.propTypes = {
  name: string.isRequired,
  textLabel: string.isRequired,
  mask: string,
  messageError: string,
  onInputBlur: func.isRequired,
  onInputChange: func.isRequired,
  value: string,
  setValue: func,
  setError: func,
  error: object,
};

Input.defaultProps = {
  mask: undefined,
  messageError: string,
  value: "",
  setValue: undefined,
  error: {},
  setError: undefined,
};

Input.displayName = "Input";

export default Input;
