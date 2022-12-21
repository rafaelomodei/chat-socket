import { useCallback, useEffect, useState } from 'react';
import { IMessage } from '../components/organisms/chatContent';
import socket from '../services/api';

export const useMessage = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loadedMessages, setLoadingMessages] = useState(true);

  const solicitationMessages = useCallback(async () => {
    setInterval(() => {
      socket.emit('getMessages');
      setLoadingMessages(false);
    }, 1000);
  }, []);

  const getAllMessages = useCallback(async () => {
    socket.on('chatPrivate', (data) => {
      console.info('chatPrivate:: ', data);
      if (data.content) setMessages([{ messages: [data.content] }]);
    });
  }, []);

  const sendMessage = useCallback(async (message: string, keyChat: string) => {
    const userAuth = sessionStorage.getItem('userEmail');
    socket.emit('chatPrivate', {
      content: message,
      to: keyChat,
      from: `${userAuth}`,
    });
  }, []);

  const joinChatPrivate = useCallback(async (to: string) => {
    console.info('Juntando ao contato: ', to);
    socket.emit('joinChatPrivate', {
      to,
    });
  }, []);

  return {
    messages,
    loadedMessages,
    sendMessage,
    getAllMessages,
    solicitationMessages,
    joinChatPrivate,
  };
};
