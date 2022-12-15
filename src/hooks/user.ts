import { useCallback, useState } from 'react';
import socket from '../services/api';

interface IUser {
  id: string;
}

interface ILoginUser {
  email: string;
  password: string;
}

interface IRegisterUser {
  email: string;
  password: string;
  name: string;
}

export const useUser = () => {
  const [isCreatedUser, setIsCreatedUser] = useState(false);
  // const [isLoggedUser, setIsLoggedUser] = useState(false);

  let isLoggedUser = false;

  const profile: IUser = { id: socket.id };

  const loggedUser = useCallback(async () => {
    socket.on('login', (data: any) => {
      if (data.status === 200) localStorage.setItem('isLoggedUser', 'true');
    });
  }, []);

  const loginUser = useCallback(async ({ email, password }: ILoginUser) => {
    console.info('loginUser');
    socket.emit('login', { email, password });
  }, []);

  const createdUser = useCallback(async () => {
    socket.on('register', (data: any) => {
      console.info('createdUser');
      if (data.status === 200) setIsCreatedUser(true);
    });
  }, []);

  const registerUser = useCallback(
    async ({ email, password, name }: IRegisterUser) => {
      console.info('registerUser');
      socket.emit('register', { email, password, name });
    },
    []
  );
  return {
    profile,
    isCreatedUser,
    isLoggedUser,
    loginUser,
    loggedUser,
    registerUser,
    createdUser,
  };
};
