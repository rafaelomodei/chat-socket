import { ChakraProvider, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AuthUser } from './components/organisms/authUser';
import { ContactList } from './components/organisms/contactList';
import { useContact } from './hooks/contact/contact';
import Chat from './pages/chat';
import Home from './pages/home';

function App() {
  const [isLoggedUser, setIsLoggedUser] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const log = localStorage.getItem('isLoggedUser');
      if (log && log === 'true' && !isLoggedUser) setIsLoggedUser(true);
      else if (!log || log === 'false') setIsLoggedUser(false);
    }, 500);
  });

  return (
    <Flex className='appContainer'>
      {isLoggedUser ? <ContactList /> : <AuthUser />}
      <Chat user={{ name: 'Jão', email: 'jão@teste.com' }} />
    </Flex>
  );
}

export default App;
