import {
  Avatar,
  Flex,
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
} from '@chakra-ui/react';

export interface ICardContact {
  ip: string;
  image?: string;
  message?: string;
  timeMessageSend?: string;
  name?: string;
}

export const CardContact = (data: ICardContact) => {
  const { ip, image, message, name, timeMessageSend } = data;
  return (
    <LinkBox alignItems='center' padding={4} mt={4} mb={4}>
      <LinkOverlay
        href={`#${ip}`}
        display='flex'
        flexDirection='row'
        alignItems='center'
      >
        <Avatar name={name || ip} mr={4} />
        <Flex width='100%' flexDirection='column'>
          <Flex width='100%' justifyContent='space-between'>
            <Heading size='sm'>{name || ip}</Heading>
            {message && <Text>{timeMessageSend}</Text>}
          </Flex>
          {message && <Text noOfLines={1}>{message}</Text>}
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
};
