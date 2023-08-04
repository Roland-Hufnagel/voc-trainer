import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #ffffff;
    --darktext: #27273a;
    --background: #f5f7fd;
    --gray-light: #ebebf3;

    --boxshadow-primary: hsl(0 0% 0% / 15%) 0px 2px 12px 0px;
    --boxshadow-secondary: hsl(0 0% 0% / 25%) 0px 7px 6px -5px;

    
    font-size: 100%;     
      }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    margin: 0;
    font-family: system-ui;
  }
`;
