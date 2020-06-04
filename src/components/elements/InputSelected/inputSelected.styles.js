import { theme } from "styled-tools";
import styled, { css } from "styled-components";
import { arrowBottom } from "../../../temp";
import Text from "../Text";

export const Container = styled.select`
  appearance: none;
  background: url(${arrowBottom}) no-repeat center right;
  background-color: transparent;
  border: ${theme("spaces.0")};
  border-bottom: 2px solid
    ${(props) =>
      props.error ? theme(`colors.texts.red`) : theme(`colors.texts.gray`)};
  font-size: ${theme("fontSizes.2")}px;
  user-select: none;
  width: 100%;

  &::placeholder {
    color: transparent;
  }

  ${(props) =>
    props.value &&
    css`
      ~ label {
        font-size: ${theme("fontSizes.0")}px;
        opacity: 0.6;
        left: ${theme("spaces.2")}px;
        top: ${theme("spaces.1")}px;
      }
    `}
`;

export const Option = styled.option`
  background: transparent;
  color: ${theme(`colors.texts.gray`)};
  font-size: ${theme("fontSizes.2")}px;
  height: ${theme("spaces.3")}px;
`;

export const Label = styled.label`
  font-size: ${theme("fontSizes.2")}px;
  color: ${theme(`colors.texts.gray`)};
  pointer-events: none;
  position: absolute;
  left: ${theme("spaces.2")}px;
  top: ${theme("spaces.4")}px;
  transition: 0.3s ease all;

  ${Container}:focus ~ & {
    font-size: ${theme("fontSizes.0")}px;
    opacity: 0.6;
    left: ${theme("spaces.2")}px;
    top: ${theme("spaces.1")}px;
  }
`;

export const TextMessage = styled(Text)`
  font-size: ${theme("fontSizes.0")}px;
  color: ${theme(`colors.texts.red`)};
  margin-top: ${theme("spaces.0")};
`;
