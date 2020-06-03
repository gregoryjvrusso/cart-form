import React from 'react';
import { element, string, oneOfType, arrayOf, node } from 'prop-types';
import { Container } from './box.styles';

const Box = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
)

Box.propTypes = {
  children: oneOfType([element, string, arrayOf(element), node]),
};

Box.defaultProps = {
  children: undefined,
};

Box.displayName = 'Box';

export default Box;
