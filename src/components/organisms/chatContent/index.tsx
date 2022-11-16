import { constants } from '../../../utils/constant';
import { ChatBlock } from '../chatBlock';
import { Container } from './styled';

export const ChatContent = () => {
  const messages = [
    'Olá, tudo bem?',
    'Eu sou o Rafael Omodei',
    'E tenho 24 anos',
  ];

  const messagesJef = [
    'Legal parça, mas idai',
    'Ninguém quer saber sua idade não',
  ];

  return (
    <Container>
      {constants.chatMessage.map((messageBlock) => (
        <ChatBlock
          isYou={messageBlock.isYou}
          name={messageBlock.name}
          img={messageBlock.img}
          timeMessageSend={messageBlock.timeMessageSend}
          messages={messageBlock.messages}
        />
      ))}
    </Container>
  );
};
