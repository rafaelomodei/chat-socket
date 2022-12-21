/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { ChatContent, ETypeChat } from '../../components/organisms/chatContent';
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

const Chat = () => {
  const [keyChat, setKeyChat] = useState<string>('');
  const { messages, loadedMessages, getMessagePrivate, solicitationMessages } =
    useMessage();

  const { contact, getContactInfo, getContactToken } = useContact();

  useEffect(() => {
    getMessagePrivate();
    getContactInfo();
    solicitationMessages(keyChat);
    getContactToken();
  });

  useEffect(() => {
    getMessagePrivate();
  }, [getMessagePrivate]);

  useEffect(() => {
    console.info('Chat:keyChat: ', keyChat);
  }, [keyChat]);

  const handleKey = () => {
    const userEmail = sessionStorage.getItem('userEmail');
    const key = contact?.listKeysContact.find((item) => item.to === userEmail);

    key?.key && setKeyChat(key?.key);
    console.info('key:: ', key?.key);
    console.info('listKeysContact:: ', contact?.listKeysContact);
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
      {/* {loadedMessages ? (
        <Loading h='75%' />
      ) : (
        <ChatContent messages={messages} />
      )} */}
      <ChatContent messages={messages} type={ETypeChat.PRIVATE} />
      <InputMessage keyChat={keyChat} />
    </Container>
  );
};

export default Chat;
