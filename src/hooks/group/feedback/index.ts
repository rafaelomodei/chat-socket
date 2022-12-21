import { ToastProps } from '@chakra-ui/react';

interface IResponse {
  status: number;
  toast: ToastProps;
  fun?: () => void;
}

export const contactFeedback: Array<IResponse> = [
  {
    status: 200,
    toast: {
      title: 'Contato cadastrado com sucesso!',
      description: 'Compartilhe menssagem com seus amigos',
      status: 'success',
      variant: 'solid',
      position: 'top-right',
      containerStyle: {
        padding: '16px',
      },
    },
  },
  {
    status: 409,
    toast: {
      title: 'Usuário já cadastrado',
      description: 'Esse usuário já existe em sua lista de contato',
      status: 'error',
      variant: 'solid',
      position: 'top-right',
      containerStyle: {
        padding: '16px',
      },
    },
  },
];
