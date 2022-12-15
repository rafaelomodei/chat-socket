import Home from './pages/home';
import { GlobalStyle } from './styles/global';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import { theme } from './utils/themes';
import AppRoutes from './routes';
import { ContactList } from './components/organisms/contactList';
import { AuthUser } from './components/organisms/authUser';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <div className='appContainer'>
        {/* <ContactList /> */}
        <AuthUser />
        <AppRoutes />
      </div>
    </ChakraProvider>
  );
}

export default App;
