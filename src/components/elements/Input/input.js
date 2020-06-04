import React from "react";
import { func, string } from "prop-types";
import Box from "../Box";
import { Container, Label, TextMessage } from "./input.styles";

const Input = ({
  name,
  textLabel,
  mask,
  onInputChange,
  messageError,
  value,
  ...props
}) => {
  return (
    <Box pt={3}>
      <Container
        type="input"
        placeholder={textLabel}
        name={name}
        id={name}
        required
        value={value}
        mask={mask}
        onChange={(e) => onInputChange(e)}
        {...props}
      />
      <Label htmlFor={name} {...props}>
        {textLabel}
      </Label>
      {props.error && <TextMessage>{messageError}</TextMessage>}
    </Box>
  );
};

Input.propTypes = {
  name: string.isRequired,
  textLabel: string.isRequired,
  mask: string,
  messageError: string,
  onInputChange: func.isRequired,
  value: string,
};

Input.defaultProps = {
  mask: undefined,
  messageError: string,
  value: "",
};

Input.displayName = "Input";

export default Input;
