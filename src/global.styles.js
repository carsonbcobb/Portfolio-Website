import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Amatic SC', cursive;
  padding: 20px 60px;
  height: 100vh;
  overflow: hidden;
  

  @media screen and (max-width: 800px){
      padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

`;

export default GlobalStyle;
