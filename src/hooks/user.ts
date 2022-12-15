import { useCallback } from "react";
import socket from "../services/api";

interface IUser {
  id: string;
}

interface ILoginUser {
  email: string;
  password: string;
}

export const useUser = () => {
  const profile: IUser = { id: socket.id };

  const loginUser = useCallback(async ({ email, password }: ILoginUser) => {
    console.info("Enviando dados::email: ", email, " | password: ", password);
    socket.emit("login", { email, password });
  }, []);
  return { profile, loginUser };
};
