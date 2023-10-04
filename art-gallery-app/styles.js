import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    transition: all 0.2s linear;
  }
  
  body {
    margin: 0;
    background-image: url("public/assets/BackGroundArtGallery.jpg");
    font-family: system-ui;
  }
`;
