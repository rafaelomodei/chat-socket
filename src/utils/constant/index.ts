import { ICardContact } from '../../components/organisms/cardContact';

const messages: ICardContact[] = [
  {
    ip: '192.168.0.1',
    image: '',
    message: 'Olá, eu estou testando e essa é apenas uma mensagem de teste',
    timeMessageSend: '15:14',
    name: 'Carlos Pereira',
  },
  {
    ip: '192.168.0.2',
    image: '',
    message: 'Ta ficando top d++ 🚀',
    timeMessageSend: '13:20',
    name: 'Flavio Algusto',
  },
  {
    ip: '192.168.0.3',
    image: '',
    message: 'Eses dados estão todos mocados',
    timeMessageSend: '06:38',
    name: 'Maria Antunes',
  },
  {
    ip: '192.168.0.4',
    image: '',
    message: 'Eses dados estão todos mocados',
    timeMessageSend: '06:38',
    name: 'Maria Antunes',
  },
  {
    ip: '192.168.0.5',
    image: '',
    message: 'Eses dados estão todos mocados',
    timeMessageSend: '06:38',
    name: 'Maria Antunes',
  },
  {
    ip: '192.168.0.6',
    image: '',
    message: 'Eses dados estão todos mocados',
    timeMessageSend: '06:38',
    name: 'Ultimo contato',
  },
];

const contacts: ICardContact[] = [
  {
    ip: '192.168.0.1',
    image: '',
    name: 'Carlos Pereira',
  },
  {
    ip: '192.168.0.2',
    image: '',
    name: 'Maria Antunes',
  },
  {
    ip: '192.168.0.3',
    image: '',
    name: 'Flavio Algusto',
  },
  {
    ip: '192.168.0.4',
    image: '',
    name: 'Juliana Red',
  },
  {
    ip: '192.168.0.5',
    image: '',
    name: 'Café Com Leite',
  },
  {
    ip: '192.168.0.6',
    image: '',
    name: 'Café Com Toddy',
  },
  {
    ip: '192.168.0.7',
    image: '',
    name: 'Alex pereira da Rocha',
  },
  {
    ip: '192.168.0.8',
    image: '',
    name: 'Tuta da pesada',
  },
  {
    ip: '192.168.0.9',
    image: '',
    name: 'João o pé de feijão',
  },
  {
    ip: '192.168.0.10',
    image: '',
    name: 'Marcia rosa',
  },
  {
    ip: '192.168.0.11',
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
    messages: ['Eu também estou bem 😄', 'Bora jogar um ETS2?', 'Fazer um comboio maroto 😜 🚛🚛'],
  },
  {
    isYou: false,
    name: 'Jeferson Martin',
    img: 'https://avatars.githubusercontent.com/u/51566081?v=4',
    timeMessageSend: '12:32',
    messages: ['Demoro', 'Vou só pegar uma água e já volto', 'Já vai fazer ar ae no caminhão kkkk 🚛'],
  },
];

export const constants = {
  contacts,
  messages,
  chatMessage,
};
