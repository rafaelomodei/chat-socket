import { ChakraProvider } from '@chakra-ui/react';
import { AuthUser } from './components/organisms/authUser';
import AppRoutes from './routes';
import { GlobalStyle } from './styles/global';
import { theme } from './utils/themes';


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
