import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #ffffff;
    --darktext: #27273a;
    --background: #f5f7fd;
    --gray-light: #ebebf3;

    --boxshadow-primary: hsl(0 0% 0% / 15%) 0px 2px 12px 0px;
    --boxshadow-secondary: hsl(0 0% 0% / 25%) 0px 7px 6px -5px;

    --fontfamily-regular: 'Inter', sans-serif;
    --fontfamily-special: 'Cutive', monospace;
    
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
    font-family: var(--fontfamily-regular);
  }

/* inter-200 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  src: url('/fonts/inter-v12-latin-200.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* inter-300 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/inter-v12-latin-300.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* inter-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/inter-v12-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* inter-500 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/inter-v12-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* cutive-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Cutive';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/cutive-v17-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

`;

