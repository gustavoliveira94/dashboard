import { createGlobalStyle } from 'styled-components';

export const theme = {
  main: '#3B5CB8',
  secundary: '#606377',
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  html, body, #__next {
    min-height: 100vh;
    position: relative;
    -webkit-font-smoothing: antialiased;
    background-color: #E8EBF6;
  }

  #__next {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
