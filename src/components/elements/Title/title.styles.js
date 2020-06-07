import styled from "styled-components";
import Text from "../Text";

import { theme } from "styled-tools";

export const TextTitle = styled(Text)`
  color: ${theme("colors.texts.white")};
  font-size: ${theme("fontSizes.4")}px;
  font-weight: ${theme("fontWeights.bold")};
  letter-spacing: 1px;
  margin: ${theme("spaces.2")}px;
`;
