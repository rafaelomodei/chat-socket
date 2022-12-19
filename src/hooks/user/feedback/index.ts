import { ToastProps } from '@chakra-ui/react';

interface IResponse {
  status: number;
  toast: ToastProps;
  fun?: () => void;
}

export const createUserFeedback: Array<IResponse> = [
  {
    status: 200,
    toast: {
      title: 'Usuário cadastrado com sucesso!',
      description: 'Compartilhe menssagem com seus amigos',
      status: 'success',
      variant: 'solid',
      position: 'top-right',
      containerStyle: {
        padding: '16px',
      },
    },
    fun: () => {
      localStorage.setItem('isLoggedUser', 'true');
    },
  },
  {
    status: 409,
    toast: {
      title: 'Usuário já cadastrado',
      description: 'Esse usuário já tem um cadastro',
      status: 'error',
      variant: 'solid',
      position: 'top-right',
      containerStyle: {
        padding: '16px',
      },
    },
  },
];
