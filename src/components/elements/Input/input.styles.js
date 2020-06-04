import { theme } from "styled-tools";
import styled from "styled-components";
import InputMask from "react-input-mask";
import Text from "../Text";

export const Container = styled(InputMask)`
  border: 0;
  border-bottom: 2px solid
    ${(props) =>
      props.error ? theme(`colors.texts.red`) : theme(`colors.texts.gray`)};
  background-color: transparent;
  width: 100%;
  &::placeholder {
    color: transparent;
  }
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 17px;
  transition: 0.3s ease all;
  font-size: 17px;
  color: ${(props) =>
    props.error ? theme(`colors.texts.red`) : theme(`colors.texts.gray`)};

  ${Container}:focus ~ &,
  ${Container}:valid ~ & {
    top: 6px;
    left: 5px;
    font-size: 13px;
    opacity: 0.6;
  }
`;

export const TextMessage = styled(Text)`
  font-size: 13px;
  color: ${theme(`colors.texts.red`)};
  margin-top: 0;
`;
