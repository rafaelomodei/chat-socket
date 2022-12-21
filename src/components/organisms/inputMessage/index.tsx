import { Container, Content, Input } from './styled';
import { IconButton } from '../../molecules/IconButton';
import { RiSendPlaneFill } from 'react-icons/ri';
import { ImAttachment } from 'react-icons/im';
import { Box, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useMessage } from '../../../hooks/message';
import socket from '../../../services/api';

export const InputMessage = () => {
  const [inputMessage, setInputMessage] = useState<string>('');

  const { sendMessage, joinChatPrivate } = useMessage();

  const handleInputMessage = (event: any) =>
    setInputMessage(event.target.value);

  const handleSendMessage = () => {
    sendMessage(inputMessage);
    setInputMessage('');
  };

  const handlerKeyPress = (event: any) => {
    if (event.key === 'Enter') handleSendMessage();
  };

  return (
    <Container>
      <Content>
        <Input
          placeholder='Escreva a sua mensagem...'
          onChange={handleInputMessage}
          onKeyPress={handlerKeyPress}
          value={inputMessage}
        />
        <Box m={2}>
          <IconButton
            aria-label='Settings'
            icon={<ImAttachment />}
            onClick={() => joinChatPrivate('e43e5f8d-56ef-4af2-a218-c7fe4303f3b3')}
          />
        </Box>
        <Divider h='60%' orientation='vertical' borderColor='white' />
        <Box m={2}>
          <IconButton
            aria-label='Settings'
            icon={<RiSendPlaneFill />}
            onClick={handleSendMessage}
          />
        </Box>
      </Content>
    </Container>
  );
};
