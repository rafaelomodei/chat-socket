import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ChatContent } from '../../components/organisms/chatContent';
import { InputMessage } from '../../components/organisms/inputMessage';
import { Loading } from '../../components/organisms/loading';
import { NavBarChat } from '../../components/organisms/navBarChat/indext';
import { useMessage } from '../../hooks/message';
import { Container, ContainerNavBar } from './styled';

const Chat = () => {
  const { messages, loadedMessages, getAllMessages, solicitationMessages } =
    useMessage();

  useEffect(() => {
    getAllMessages();
  }, []);

  useEffect(() => {
    console.info('Render');
    solicitationMessages();
  }, []);

  return (
    <Container>
      <NavBarChat
        name='Amantes da Estrada'
        img='https://lirp.cdn-website.com/9d12ecc7/dms3rep/multi/opt/caminhao-carreta-1920w.jpg'
      />
      {loadedMessages ? <Loading h='75%'/> : <ChatContent messages={messages} />}
      <InputMessage />
    </Container>
  );
};

export default Chat;
