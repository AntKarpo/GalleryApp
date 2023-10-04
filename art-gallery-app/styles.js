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
    background-image: url("/assets/BackGroundArtGallery.jpg");
    background-size: cover;
    background-repeat:no-repeat;
    font-family: system-ui;
  }
`;
