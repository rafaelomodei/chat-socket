import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { theme } from './utils/themes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
