import React from "react";
import { element, string, oneOfType, arrayOf, node } from "prop-types";
import { Container } from "./flex.styles";

const Flex = ({ children, ...props }) => (
  <Container data-testid="flex" {...props}>
    {children}
  </Container>
);

Flex.propTypes = {
  children: oneOfType([element, string, arrayOf(element), node]),
};

Flex.defaultProps = {
  children: undefined,
};

Flex.displayName = "Flex";

export default Flex;
