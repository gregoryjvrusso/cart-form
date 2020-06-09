import React from "react";
import { Container } from "./circle.styles";
import { arrayOf, bool, element, string, node, oneOfType } from "prop-types";

const Circle = ({ checked, children, color, size }) => (
  <Container data-testid="circle" checked={checked} color={color} size={size}>
    {children}
  </Container>
);

Circle.propTypes = {
  checked: bool,
  children: oneOfType([element, string, arrayOf(element), node]),
  color: string,
  size: string,
};

Circle.displayName = "Circle";

export default Circle;
