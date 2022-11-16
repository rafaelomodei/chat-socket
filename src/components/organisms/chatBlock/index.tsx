import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Container, Message } from './styled';

interface IChatBlock {
  isYou: boolean;
  name: string;
  timeMessageSend: string;
  messages: string[];
  img?: string;
}

export const ChatBlock = ({
  isYou,
  name,
  timeMessageSend,
  messages,
  img,
}: IChatBlock) => {
  return (
    <Container isYou={isYou}>
      <Avatar name={name} src={img} />
      <Flex
        ml={isYou ? 0 : 2}
        mr={isYou ? 2 : 0}
        flexDirection='column'
        alignItems={isYou ? 'flex-end' : 'flex-start'}
      >
        <Flex flexDirection={isYou ? 'row-reverse' : 'row'}>
          <Heading ml={isYou ? 2 : 0} mr={isYou ? 2 : 0} size='sx'>
            {name}
          </Heading>
          <Text ml={2}>{timeMessageSend}</Text>
        </Flex>
        {messages.map((message) => (
          <Message isYou={isYou}>{message}</Message>
        ))}
      </Flex>
    </Container>
  );
};
