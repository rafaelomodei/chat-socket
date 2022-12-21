/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
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
  const [keyChat, setKeyChat] = useState<string>('');
  const { messages, loadedMessages, getAllMessages, solicitationMessages } =
    useMessage();

  const { contact, getContactInfo } = useContact();

  useEffect(() => {
    getAllMessages();
    getContactInfo();
  });

  useEffect(() => {
    console.info('Chat:keyChat: ', keyChat);
  }, [keyChat]);

  const handleKey = () => {
    const userEmail = sessionStorage.getItem('userEmail');
    const key = contact?.listKeysContact.find((item) => item.to === userEmail);

    key?.key && setKeyChat(key?.key);
    console.info('key:: ', key?.key);
    console.info('userEmail:: ', userEmail);
  };

  useEffect(() => {
    console.info('contact: ', contact);
    handleKey();
  }, [contact]);

  return (
    <Container>
      <NavBarChat
        name={contact?.name || 'User não encontrado'}
        img='https://lirp.cdn-website.com/9d12ecc7/dms3rep/multi/opt/caminhao-carreta-1920w.jpg'
      />
      {loadedMessages ? (
        <Loading h='75%' />
      ) : (
        <ChatContent messages={messages} />
      )}
      <InputMessage keyChat={keyChat} />
    </Container>
  );
};

export default Chat;
