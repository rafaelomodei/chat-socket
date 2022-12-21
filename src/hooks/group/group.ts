import { useToast } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import socket from '../../services/api';
import { contactFeedback } from './feedback';

export interface IKeysContact {
  key: string;
  to: string;
}
export default interface IContact {
  name: string;
  address: string;
  photo: string;
  userEmail: string;
  listKeysContact: Array<IKeysContact>;
}

interface ICreateContact {
  userEmail: string;
}

export const useGroup = () => {
  const [status, setStatus] = useState<number>();

  const [contacts, setContacts] = useState<Array<IContact>>([]);
  const [contact, setContact] = useState<IContact>();

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

  const getContactToken = useCallback(async () => {
    socket.on('getToToken', (data) => {
      console.info('getToToken', data);
    });
  }, []);

  const getContactMessage = useCallback(async (userEmail: string) => {
    const userAuth = sessionStorage.getItem('userEmail');
    console.info('getContactMessage::', userEmail);
    socket.emit('getToToken', { content: userEmail, from: userAuth });
  }, []);

  const getContactInfo = useCallback(async () => {
    socket.on('getContact', (data) => {
      console.info('getContact::data: ', data);
      if (data.user) setContact(data.user);
    });
  }, []);

  const getContact = useCallback(async (email: string) => {
    console.info('email: ', email);
    console.info('getContact::EMIT: ', email);

    socket.emit('getContact', { email: email });
  }, []);

  const getAllContacts = useCallback(async () => {
    socket.on('getAllList', (data) => {
      if (data.listContact.length > 0) setContacts(data.listContact);
    });
  }, []);

  const solicitationAllContacts = useCallback(async () => {
    const userEmail = sessionStorage.getItem('userEmail');
    console.info('SOLICITANDO CONTATO <<< ----');
    const userAuth = sessionStorage.getItem('userEmail');
    socket.emit('getAllList', { email: userEmail, from: userAuth });
  }, []);


  const joinGroupPublic = useCallback(async () => {
    console.info('joinGroupPublic:: ');

    socket.emit('joinGroupPublic');
  }, []);

  return {
    contact,
    contacts,
    // getContact,
    // getContactToken,
    // getContactMessage,
    // getContactInfo,
    // getAllContacts,
    // solicitationAllContacts,
    joinGroupPublic,
  };
};
