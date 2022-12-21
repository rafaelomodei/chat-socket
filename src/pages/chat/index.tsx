/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { ChatContent } from '../../components/organisms/chatContent';
import { InputMessage } from '../../components/organisms/inputMessage';
import { Loading } from '../../components/organisms/loading';
import { NavBarChat } from '../../components/organisms/navBarChat/indext';
import { useMessage } from '../../hooks/message';
import { Container } from './styled';

interface IContact {
  name: string;
  email: string;
}
interface IChat {
  user: IContact;
}

const Chat = ({ user }: IChat) => {
  const { messages, loadedMessages, getAllMessages, solicitationMessages } =
    useMessage();

  useEffect(() => {
    getAllMessages();
  });

  useEffect(() => {
    solicitationMessages();
  }, []);

  return (
    <Container>
      <NavBarChat
        name={user.name}
        img='https://lirp.cdn-website.com/9d12ecc7/dms3rep/multi/opt/caminhao-carreta-1920w.jpg'
      />
      {loadedMessages ? (
        <Loading h='75%' />
      ) : (
        <ChatContent messages={messages} />
      )}
      <InputMessage />
    </Container>
  );
};

export default Chat;
