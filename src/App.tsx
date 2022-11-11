import Home from './pages/home';
import { GlobalStyle } from './styles/global';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './utils/themes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ChakraProvider>
  );
}

export default App;
