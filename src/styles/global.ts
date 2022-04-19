import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* Prussian Blue Pallete */
    /* mainColorDark: #1a3c40; */
    /* mainColor: #1d5c63; */
    /* mainColorLight: #417d7a; */
    /* colorLight: #ede6db; */

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
    font-family: "Source Sans Pro", sans-serif;
    background: #ede6db;
  }
`;
