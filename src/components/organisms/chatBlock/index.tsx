import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { MutableRefObject, useRef } from 'react';
import { ETypeChat } from '../chatContent';
import { Container, Message } from './styled';

interface IChatBlock {
  isYou: boolean;
  name: string;
  timeMessageSend: string;
  messages: string[];
  img?: string;
  type: ETypeChat;
}

export const ChatBlock = ({
  isYou,
  name,
  timeMessageSend,
  messages,
  img,
  type,
}: IChatBlock) => {
  const isGroupLocalStorage = localStorage.getItem('isGroup');
  const isGroup = isGroupLocalStorage === 'true';

  return (
    <Container isYou={isYou}>
      {!isGroup && <Avatar name={name} src={img} />}
      <Flex
        ml={isYou ? 0 : 2}
        mr={isYou ? 2 : 0}
        flexDirection='column'
        alignItems={isYou ? 'flex-end' : 'flex-start'}
      >
        <Flex flexDirection={isYou ? 'row-reverse' : 'row'}>
          {!isGroup && (
            <Heading ml={isYou ? 2 : 0} mr={isYou ? 2 : 0} size='sx'>
              {name}
            </Heading>
          )}
          {/* <Text ml={2}>{timeMessageSend}</Text> */}
        </Flex>
        {messages.map((message) => (
          <Message isYou={isYou}>{message}</Message>
        ))}
      </Flex>
    </Container>
  );
};
