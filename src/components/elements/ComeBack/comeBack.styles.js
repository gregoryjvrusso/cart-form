import styled from "styled-components";
import { theme } from "styled-tools";
import Text from "../Text";

export const ArrowLeft = styled.img`
  transform: rotate(90deg);
  margin-right: ${theme("spaces.2")}px;
`;

export const TextComeBack = styled(Text)`
  color: ${theme("colors.texts.white")};
  font-size: ${theme("fontSizes.1")}px;
  text-align: center;
  span {
    font-weight: ${theme("fontWeights.bold")};
  }
`;
