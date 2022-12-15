import { useCallback, useState } from 'react';
import { ICardContact } from '../components/organisms/cardContact';
import socket from '../services/api';

interface IContacts {
  name: string;
  address: string;
  photo: string;
}

interface ICreateContact extends IContacts {
  userEmail: string;
}

export const useContact = () => {
  const [contacts, setContacts] = useState<Array<IContacts>>([]);

  const getAllContacts = useCallback(async () => {
    setInterval(() => {
      socket.on('getAllList', (data) => {
        console.info('getAllList: ', data);
        if (data.listContact.length > 0) setContacts(data);
      });
    }, 1000);
  }, []);

  const registerContact = useCallback(
    async ({ name, address, photo, userEmail }: ICreateContact) => {
      const userAuth = 'a@a.com';
      console.info('Criando usuário');
      socket.emit('registerContact', {
        name,
        address,
        photo,
        userEmail,
        userAuth,
      });
    },
    []
  );

  return { contacts, getAllContacts, registerContact };
};
