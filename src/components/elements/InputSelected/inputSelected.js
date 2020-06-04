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
  ...props
}) => (
  <Box pt={3}>
    <Container
      name={name}
      placeholder={textLabel}
      value={value}
      required
      onChange={(e) => onInputChange(e)}
      {...props}
    >
      {options.map((e) => (
        <Option key={e.value} value={e.value}>
          {e.text}
        </Option>
      ))}
    </Container>
    <Label forHtml={name} {...props}>{textLabel}</Label>
    {props.error && <TextMessage>{messageError}</TextMessage>}
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
};

InputSelected.defaultProps = {
  messageError: "",
  options: [],
  value: "",
};

InputSelected.displayName = "InputSelected";

export default InputSelected;
