import Home from './pages/home';
import { GlobalStyle } from './styles/global';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { theme } from './utils/themes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Flex padding={0} margin={0}>
        <Home />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
