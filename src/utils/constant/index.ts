import { Size } from '../helpers';

// const messages: ICardContact[] = [
//   {
//     ip: '192.168.0.1',
//     image: '',
//     message: 'Olá, eu estou testando e essa é apenas uma mensagem de teste',
//     timeMessageSend: '15:14',
//     name: 'Carlos Pereira',
//   },
//   {
//     ip: '192.168.0.2',
//     image: '',
//     message: 'Ta ficando top d++ 🚀',
//     timeMessageSend: '13:20',
//     name: 'Flavio Algusto',
//   },
//   {
//     ip: '192.168.0.3',
//     image: '',
//     message: 'Eses dados estão todos mocados',
//     timeMessageSend: '06:38',
//     name: 'Maria Antunes',
//   },
//   {
//     ip: '192.168.0.4',
//     image: '',
//     message: 'Eses dados estão todos mocados',
//     timeMessageSend: '06:38',
//     name: 'Maria Antunes',
//   },
//   {
//     ip: '192.168.0.5',
//     image: '',
//     message: 'Eses dados estão todos mocados',
//     timeMessageSend: '06:38',
//     name: 'Maria Antunes',
//   },
//   {
//     ip: '192.168.0.6',
//     image: '',
//     message: 'Eses dados estão todos mocados',
//     timeMessageSend: '06:38',
//     name: 'Ultimo contato',
//   },
// ];

interface ICardContact {
  userEmail: string;
  image?: string;
  message?: string;
  timeMessageSend?: string;
  name?: string;
  size?: Size;
  trash?: boolean;
}

const contactsMock: ICardContact[] = [
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'Carlos Pereira',
  },
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'Maria Antunes',
  },
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'Flavio Algusto',
  },
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'Juliana Red',
  },
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'Café Com Leite',
  },
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'Café Com Toddy',
  },
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'Alex pereira da Rocha',
  },
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'Tuta da pesada',
  },
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'João o pé de feijão',
  },
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'Marcia rosa',
  },
  {
    userEmail: 'a@a.com',
    image: '',
    name: 'Ultimo contato',
  },
];

const chatMessage = [
  {
    isYou: true,
    name: 'Rafael Omodei',
    img: 'https://avatars.githubusercontent.com/u/16935702?v=4',
    timeMessageSend: '12:30',
    messages: ['Olá, tudo bem?', 'Eu sou Rafael Omodei'],
  },

  {
    isYou: false,
    name: 'Jeferson Martin',
    img: 'https://avatars.githubusercontent.com/u/51566081?v=4',
    timeMessageSend: '12:31',
    messages: ['Olá, Rafael', 'Eu estou bem!', 'E você como está?'],
  },
  {
    isYou: true,
    name: 'Rafael Omodei',
    img: 'https://avatars.githubusercontent.com/u/16935702?v=4',
    timeMessageSend: '12:31',
    messages: [
      'Eu também estou bem 😄',
      'Bora jogar um ETS2?',
      'Fazer um comboio maroto 😜 🚛🚛',
    ],
  },
  {
    isYou: false,
    name: 'Jeferson Martin',
    img: 'https://avatars.githubusercontent.com/u/51566081?v=4',
    timeMessageSend: '12:32',
    messages: [
      'Demoro',
      'Vou só pegar uma água e já volto',
      'Já vai fazer ar ae no caminhão kkkk 🚛',
    ],
  },

  {
    isYou: false,
    name: 'JGustavo Silva Quieregato',
    img: 'https://avatars.githubusercontent.com/u/57011784?v=4',
    timeMessageSend: '12:33',
    messages: ['Eu já estou é na estrada!!'],
  },
];

export const constants = {
  // messages,
  contactsMock,
  chatMessage,
};
