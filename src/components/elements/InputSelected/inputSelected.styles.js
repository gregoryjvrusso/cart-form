import { theme } from "styled-tools";
import styled, { css } from "styled-components";
import { arrowBottom } from "../../../temp";
import Text from "../Text";

export const Container = styled.select`
  border: 0;
  border-bottom: 2px solid
    ${(props) =>
      props.error ? theme(`colors.texts.red`) : theme(`colors.texts.gray`)};
  background-color: transparent;
  width: 100%;
  font-size: 17px;
  user-select: none;
  appearance: none;
  background: url(${arrowBottom}) no-repeat center right;
  &::placeholder {
    color: transparent;
  }
  ${(props) =>
    props.value &&
    css`
      ~ label {
        top: 6px;
        left: 5px;
        font-size: 13px;
        opacity: 0.6;
      }
    `}
`;

export const Option = styled.option`
  height: 20px;
  font-size: 15px;
  background: transparent;
  color: ${theme(`colors.texts.gray`)};
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

  ${Container}:focus ~ & {
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
