import { createGlobalStyle } from "styled-components";
import { theme } from "styled-tools";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  * {
    font-family: ${theme("fontFamily")};
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  #root {
    height: 100%;
  }
`;
