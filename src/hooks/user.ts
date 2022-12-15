import { useCallback } from 'react';
import socket from '../services/api';

interface IUser {
  id: string;
}

interface ILoginUser {
  email: string;
  password: string;
}

export const useUser = () => {
  const profile: IUser = { id: socket.id };

  socket.on('logado', (data: any) => {});

  const loggedUser = useCallback(async () => {
    socket.on('login', (data: any) => {
      console.info('login:: ', data);
    });
  }, []);

  const loginUser = useCallback(async ({ email, password }: ILoginUser) => {
    socket.emit('login', { email, password });
  }, []);
  return { profile, loginUser, loggedUser };
};
