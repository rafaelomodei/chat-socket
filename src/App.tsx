import { ChakraProvider, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AuthUser } from './components/organisms/authUser';
import { ContactList } from './components/organisms/contactList';
import IContact, { useContact } from './hooks/contact/contact';
import Chat from './pages/chat';
import Home from './pages/home';

function App() {
  const [isLoggedUser, setIsLoggedUser] = useState(false);
  const [contactClicked, setContactClicked] = useState<string>();

  const { contact, getContact, getContactMessage } = useContact();
  useEffect(() => {
    console.info('useEffect::contactClicked', contactClicked);
    if (contactClicked !== 'GROUP') {
      contactClicked && getContact(contactClicked);
      contactClicked && getContactMessage(contactClicked);
    }
  }, [contactClicked]);

  useEffect(() => {
    setInterval(() => {
      const log = localStorage.getItem('isLoggedUser');
      if (log && log === 'true' && !isLoggedUser) setIsLoggedUser(true);
      else if (!log || log === 'false') setIsLoggedUser(false);
    }, 500);
  });

  return (
    <Flex className='appContainer'>
      {isLoggedUser ? (
        <ContactList getContact={setContactClicked} />
      ) : (
        <AuthUser />
      )}
      {contactClicked ? <Chat /> : <Home />}
    </Flex>
  );
}

export default App;
