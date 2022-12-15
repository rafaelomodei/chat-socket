import { useCallback, useState } from 'react';
import { ICardContact } from '../components/organisms/cardContact';

export const useContact = () => {
  const [contacts, setContacts] = useState<ICardContact[]>([]);

  const getAllContacts = useCallback(async () => {
    // const { status, data } = await api.get('/contacts');
    // console.info('data', typeof data);
    // if (status !== 200) throw new Error();
    // setContacts(data.contacts);
  }, []);

  return { contacts, getAllContacts };
};
