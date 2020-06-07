import styled, { css } from "styled-components";
import Flex from "../Flex";
import { theme } from "styled-tools";

export const Container = styled(Flex)`
  align-items: center;
  background-color: transparent;
  border: 2px solid ${(props) => theme(`colors.texts.${props.color}`)};
  border-radius: 50%;
  height: ${(props) => props.size}px;
  justify-content: center;
  width: ${(props) => props.size}px;
  ${(props) =>
    props.checked &&
    css`
      background: ${(props) => theme(`colors.texts.${props.color}`)};
    `}
`;
