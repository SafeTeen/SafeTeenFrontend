import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Pretendard", sans-serif !important;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    user-select: none;
    -webkit-touch-callout: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
