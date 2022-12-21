import { useToast } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { ICardContact } from '../../components/organisms/cardContact';
import socket from '../../services/api';
import { contactFeedback } from './feedback';

interface IContacts {
  name: string;
  address: string;
  photo: string;
  userEmail: string;
}

interface ICreateContact extends IContacts {
  userEmail: string;
}

export const useContact = () => {
  const [status, setStatus] = useState<number>();

  const [contacts, setContacts] = useState<Array<IContacts>>([]);
  const toast = useToast();

  useEffect(() => {
    if (status) {
      contactFeedback.map((feedback) => {
        if (feedback.status === status) {
          toast(feedback.toast);
          feedback.fun && feedback.fun();
        }
      });
      setStatus(undefined);
    }
  }, [status]);

  const getAllContacts = useCallback(async () => {
    socket.on('getAllList', (data) => {
      console.info('RECEBENDO CONTATO  ---- >>>>');

      // console.info('getAllList: ', data);
      if (data.listContact.length > 0) setContacts(data.listContact);
    });
  }, []);

  const solicitationAllContacts = useCallback(async () => {
    const userEmail = sessionStorage.getItem('userEmail');
    console.info('SOLICITANDO CONTATO <<< ----');
    socket.emit('getAllList', { email: userEmail });
  }, []);

  const registeredContact = useCallback(async () => {
    socket.on('registerContact', (data) => {
      if (data.status) {
        setStatus(data.status);
      }
    });
  }, []);

  const registerContact = useCallback(
    async ({ name, address, photo, userEmail }: ICreateContact) => {
      const userAuth = sessionStorage.getItem('userEmail');
      if (!userAuth || (userAuth && !userAuth.length))
        return toast({
          title: 'Não foi possível concluir o cadastro',
          description: 'Tente novamente mais tarde',
          status: 'error',
          variant: 'solid',
          position: 'top-right',
          containerStyle: {
            padding: '16px',
          },
        });

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

  return {
    contacts,
    getAllContacts,
    solicitationAllContacts,
    registerContact,
    registeredContact,
  };
};
