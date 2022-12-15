import socket from '../services/api';

interface IUser {
  id: string;
}

export const useUser = () => {
  const profile: IUser = { id: socket.id };

  return { profile };
};
