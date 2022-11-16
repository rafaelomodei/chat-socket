import { Flex, Text } from '@chakra-ui/react';
import { ChatContent } from '../../components/organisms/chatContent';
import { InputMessage } from '../../components/organisms/inputMessage';
import { NavBarChat } from '../../components/organisms/navBarChat/indext';
import { Container, ContainerNavBar } from './styled';

const Chat = () => {
  return (
    <Container>
      <NavBarChat
        name='Amantes da Estrada'
        img='https://lirp.cdn-website.com/9d12ecc7/dms3rep/multi/opt/caminhao-carreta-1920w.jpg'
      />
      <ChatContent />
      <InputMessage />
    </Container>
  );
};

export default Chat;
