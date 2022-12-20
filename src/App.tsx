import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AuthUser } from './components/organisms/authUser';
import { ContactList } from './components/organisms/contactList';
import { useUser } from './hooks/user/user';
import AppRoutes from './routes';
import { GlobalStyle } from './styles/global';
import { theme } from './utils/themes';

function App() {
  const [isLoggedUser, setIsLoggedUser] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const log = localStorage.getItem('isLoggedUser');
      if (log && log === 'true' && !isLoggedUser) setIsLoggedUser(true);
      else if (!log || log === 'false') setIsLoggedUser(false);
    }, 500);
  });

  useEffect(() => console.info('isLoggedUser: ', isLoggedUser), [isLoggedUser]);

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
