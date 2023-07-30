import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: 62.5%; // 1rem === 10px
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background-color: #e7e5e4;
    min-height: 100vh;
  }
`;
