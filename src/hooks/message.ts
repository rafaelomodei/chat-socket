import { useCallback, useState } from 'react';
import { Socket } from 'socket.io-client';
import { ICardContact } from '../components/organisms/cardContact';
import socket from '../services/api';

export const useMessage = () => {
  const [messages, setMessages] = useState<ICardContact[]>([]);

  const getAllMessages = useCallback(async () => {
    socket.on('chat', (data) => {});
  }, []);

  const sendMessage = useCallback(async (message: string) => {
    socket.emit('chat', { message: message });
  }, []);

  return { messages, sendMessage, getAllMessages };
};
