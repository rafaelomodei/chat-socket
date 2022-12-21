import { useCallback, useEffect, useState } from 'react';
import { IMessage } from '../components/organisms/chatContent';
import socket from '../services/api';

export const useMessage = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loadedMessages, setLoadingMessages] = useState(true);

  const solicitationMessages = useCallback(async (to: string) => {
    // setInterval(() => {
    socket.emit('refreshChatPrivate', { to: to });
    setLoadingMessages(false);
    // }, 1000);
  }, []);

  const getMessagePrivate = useCallback(async () => {
    socket.on('chatPrivate', (data) => {
      if (data.messages) setMessages(data.messages);
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
    const userAuth = sessionStorage.getItem('userEmail');
    console.info('Juntando ao contato: ', to);
    socket.emit('joinChatPrivate', {
      to,
      from: userAuth,
    });
  }, []);

  return {
    messages,
    loadedMessages,
    sendMessage,
    getMessagePrivate,
    solicitationMessages,
    joinChatPrivate,
  };
};
