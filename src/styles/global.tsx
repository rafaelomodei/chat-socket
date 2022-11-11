import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../utils/themes';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

`;
