import { useCallback, useEffect, useState } from 'react';
import { IMessage } from '../components/organisms/chatContent';
import socket from '../services/api';

export const useMessage = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const getAllMessages = useCallback(async () => {
    socket.on('getMessages', (data) => {
      if (data.length > 0) setMessages(data);
    });
  }, []);

  const sendMessage = useCallback(async (message: string) => {
    socket.emit('chat', { messages: [message] });
  }, []);

  return { messages, sendMessage, getAllMessages };
};
