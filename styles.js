import { createGlobalStyle } from "styled-components";
import { Cutive, Inter } from "next/font/google";

const cutive = Cutive({
  subsets: ["latin"],
  weight: "400",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const accentColors = [
  "#a9ead8",
  "#ade7e2",
  "#b0e2eb",
  "#b1d5ec",
  "#b0c9eb",
  "#b1d5ec",
  "#b0e2eb",
  "#ade7e2",
];

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --darktext: #27273a;
    --background: #f5f7fd;
    --gray-light: #ebebf3;
    --gray-95: #ebebf2;
    --gray-98: #f2f2fa;

    --link-active: #27273a;
    --link-inactive: #8f8f99;

    --button: #27273a;
    --button-hover: #8f8f99;

    --boxshadow-primary: hsl(0 0% 0% / 15%) 0px 2px 12px 0px;
    --boxshadow-secondary: hsl(0 0% 0% / 25%) 0px 7px 6px -5px;

    --fontfamily-regular: ${inter.style.fontFamily};
    --fontfamily-special: ${cutive.style.fontFamily};
    --page-title: 1.25rem;

    --border-radius: 0.25rem;
    
    font-size: 100%;     
      }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--background);
    font-family: var(--fontfamily-regular);
  }
`;

export default GlobalStyles;
