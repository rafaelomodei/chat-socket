/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { ChatContent } from '../../components/organisms/chatContent';
import { InputMessage } from '../../components/organisms/inputMessage';
import { Loading } from '../../components/organisms/loading';
import { NavBarChat } from '../../components/organisms/navBarChat/indext';
import { useContact } from '../../hooks/contact/contact';
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

  const { contact, getContactInfo } = useContact();

  useEffect(() => {
    getAllMessages();
    getContactInfo();
  });

  useEffect(() => {
    console.info('contact: ', contact)
  }, [contact]);

  return (
    <Container>
      <NavBarChat
        name={contact?.name || 'F'}
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
