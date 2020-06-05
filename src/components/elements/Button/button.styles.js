import styled from "styled-components";
import { theme } from "styled-tools";

export const Container = styled.button`
  background-color: ${theme(`colors.texts.red`)};
  border: none;
  border-radius: ${theme("spaces.2")}px;
  color: ${theme("colors.texts.white")};
  font-size: ${theme("fontSizes.3")}px;
  font-weight: ${theme("fontWeights.semibold")};
  letter-spacing: -0.01px;
  padding: ${theme("spaces.3")}px;
  text-align: center;
  width: 100%;
`;
