import styled from "styled-components";
import { theme } from "styled-tools";
import InputMask from "react-input-mask";
import Text from "../Text";

export const Container = styled(InputMask)`
  background-color: transparent;
  border: ${theme("spaces.0")};
  border-bottom: 2px solid
    ${(props) =>
      props.error ? theme(`colors.texts.red`) : theme(`colors.texts.gray`)};
  font-size: ${theme("fontSizes.2")}px;
  width: 100%;

  &::placeholder {
    color: transparent;
  }
`;

export const Label = styled.label`
  font-size: ${theme("fontSizes.2")}px;
  color: ${theme(`colors.texts.gray`)};
  left: ${theme("spaces.2")}px;
  pointer-events: none;
  position: absolute;
  top: ${theme("spaces.4")}px;
  transition: 0.3s ease all;
  

  ${Container}:focus ~ &,
  ${Container}:valid ~ & {
    font-size: ${theme("fontSizes.0")}px;
    opacity: 0.6;
    left: ${theme("spaces.2")}px;
    top: ${theme("spaces.1")}px;
  }
`;

export const TextMessage = styled(Text)`
  font-family: ${theme("fontFamily.0")};
  font-size: ${theme("fontSizes.0")}px;
  color: ${theme(`colors.texts.red`)};
  margin-top: ${theme("spaces.0")};
`;
