import { createGlobalStyle } from "styled-components";
import Bg from "./assets/bg.png";
export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    user-select: none;
  }

  body {  
    background-image: url(${Bg});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
    font-family: "Poppins", sans-serif;
    max-width: 100%;
    font-size: 17px;
    color: #333;
    
    & img {
        -webkit-user-drag: none;
      }
    
    & a {
        text-decoration: none;
    }
    
    & ul {
        list-style:none;
    }
    
    & section {
        min-height: 70vh;
        padding: 2rem 0;
      }
    
  }
`;
