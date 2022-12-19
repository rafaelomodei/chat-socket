import { useToast } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import socket from '../services/api';
import { createUserFeedback } from './user/feedback';

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
  const [statusUser, setStatus] = useState<number>();
  // const [isLoggedUser, setIsLoggedUser] = useState(false);
  const toast = useToast();

  let isLoggedUser = false;

  const profile: IUser = { id: socket.id };

  useEffect(() => {
    if (statusUser) setStatus(undefined);
  }, [statusUser]);

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
      // if (data.status) {
      //   setStatus(data.status);
      // }
      createUserFeedback.map((feedback) => {
        setStatus(data.status);
        if (feedback.status === data.status && statusUser !== data.status) {
          toast(feedback.toast);
          feedback.fun && feedback.fun();
        }
      });
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
    statusUser,
    isLoggedUser,
    loginUser,
    loggedUser,
    registerUser,
    createdUser,
  };
};
