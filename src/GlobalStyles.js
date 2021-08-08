import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`*, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 18px; 
    /* width: 100vw;
    height: 100vh; */
  }
  body {
    background-color: hsl(0deg 0% 95%);
    margin:0;
    /* width: 100vw;
    height: 100vh; */
  }`;

export default GlobalStyles;
