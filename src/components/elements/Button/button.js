import React from "react";
import { string } from "prop-types";
import { Container } from "./button.styles";

const Button = ({ children }) => <Container>{children}</Container>;

Button.propTypes = {
  children: string.isRequired,
};

Button.displayName = "Button";

export default Button;
