import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AuthUser } from './components/organisms/authUser';
import { ContactList } from './components/organisms/contactList';
import { useUser } from './hooks/user';
import AppRoutes from './routes';
import { GlobalStyle } from './styles/global';
import { theme } from './utils/themes';

function App() {
  const [isLoggedUser, setIsLoggedUser] = useState(
    localStorage.getItem('isLoggedUser') ? true : false
  );

  useEffect(() => {
    const log = localStorage.getItem('isLoggedUser');
    console.info('log ', log);
    if (log) {
      setIsLoggedUser(true);
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <div className='appContainer'>
        {isLoggedUser ? <ContactList /> : <AuthUser />}
        <AppRoutes />
      </div>
    </ChakraProvider>
  );
}

export default App;
