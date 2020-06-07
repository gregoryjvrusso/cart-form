import styled from "styled-components";
import { theme } from "styled-tools";
import Text from "../Text";

export const TextBread = styled(Text)`
  color: ${theme("colors.texts.red")};
  font-size: ${theme("fontSizes.1")}px;
`;

export const ArrowRight = styled.img`
  transform: rotate(270deg);
  margin-right: ${theme("spaces.2")}px;
  margin-left: ${theme("spaces.2")}px;
`;
