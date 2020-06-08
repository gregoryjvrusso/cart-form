import React from "react";
import { array, oneOfType, string } from "prop-types";
import { Container } from "./text.styles";

const Text = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

Text.propTypes = {
  children: oneOfType([ array, string ]).isRequired,
};

Text.displayName = "Text";

export default Text;
