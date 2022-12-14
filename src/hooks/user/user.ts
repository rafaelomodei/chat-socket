import { useToast } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import socket from '../../services/api';
import { userFeedback } from './feedback';

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
  const [status, setStatus] = useState<number>();
  // const [isLoggedUser, setIsLoggedUser] = useState(false);
  const toast = useToast();

  let isLoggedUser = false;

  const profile: IUser = { id: socket.id };

  useEffect(() => {
    if (status) {
      userFeedback.map((feedback) => {
        if (feedback.status === status) {
          toast(feedback.toast);
          feedback.fun && feedback.fun();
        }
      });
      setStatus(undefined);
    }
  }, [status]);

  const loggedUser = useCallback(async () => {
    socket.on('login', (data: any) => {
      if (data.status === 200) localStorage.setItem('isLoggedUser', 'true');
    });
  }, []);

  const loginUser = useCallback(async ({ email, password }: ILoginUser) => {
    socket.emit('login', { email, password });
    sessionStorage.setItem('userEmail', `${email}`);
  }, []);

  const createdUser = useCallback(async () => {
    socket.on('register', (data: any) => {
      if (data.status) {
        setStatus(data.status);
      }
    });
  }, []);

  const registerUser = useCallback(
    async ({ email, password, name }: IRegisterUser) => {
      socket.emit('register', { email, password, name });
      sessionStorage.setItem('userEmail', `${email}`);
    },
    []
  );
  return {
    profile,
    status,
    isLoggedUser,
    loginUser,
    loggedUser,
    registerUser,
    createdUser,
  };
};
