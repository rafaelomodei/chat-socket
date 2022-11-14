import { useCallback, useState } from 'react';
import { ICardContact } from '../components/organisms/cardContact';
import api from '../services/api';

export const useMessage = () => {
  const [messages, setMessages] = useState<ICardContact[]>([]);

  const getAllMessages = useCallback(async () => {
    const { status, data } = await api.get('/messages');
    if (status !== 200) throw new Error();
    setMessages(data.messages);
  }, []);

  return { messages, getAllMessages };
};
