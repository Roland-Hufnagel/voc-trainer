import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #ffffff;
    --darktext: #27273a;
    --background: #f5f7fd;
    
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
