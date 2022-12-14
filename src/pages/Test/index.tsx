import { Divider, Flex, Heading, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3005');

interface IMessage {
  message: string;
}

export const Text = () => {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [inputMessageServer, setInputMessageServer] = useState<string>('');
  const [update, setUpdate] = useState<boolean>(false);

  const messages: Array<string> = [];

  useEffect(() => {
    socket.on('message', (data: IMessage) => {
      const { message } = data;
      messages.push(message);
    });
  }, [update]);

  const sendMessage = () => {
    console.info('Enviando mensagem: ', inputMessage);
    socket.emit('message', { message: inputMessage });
  };

  const receiveMessage = () => {
    socket.emit('messageServer', { message: inputMessageServer });
  };

  const handleInput = (event: any) => setInputMessage(event.target.value);
  const handleInputServer = (event: any) =>
    setInputMessageServer(event.target.value);

  return (
    <>
      <Flex flexDirection='column'>
        <Heading>MENSAGEM</Heading>
        {messages.map((message) => (
          <p>{message}</p>
        ))}
        <Input
          placeholder='Digite aqui a sua mensagem'
          onChange={handleInput}
        />
        <button onClick={sendMessage}>ENVIAR MENSAGEM</button>
      </Flex>
      <Flex flexDirection='column'>
        <Input
          placeholder='Mensagem que o servido envia'
          onChange={handleInputServer}
        />
        <button onClick={receiveMessage}>ENVIAR do servidor</button>
        <button onClick={() => setUpdate(!update)}>ATUALIZAR</button>
      </Flex>
    </>
  );
};
