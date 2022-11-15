import {
  Avatar,
  Flex,
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
} from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import { Size } from '../../../utils/helpers';
import { theme } from '../../../utils/themes';

export interface ICardContact {
  ip: string;
  image?: string;
  message?: string;
  timeMessageSend?: string;
  name?: string;
  size?: Size;
  trash?: boolean;
}

export const CardContact = (data: ICardContact) => {
  const { ip, image, message, name, timeMessageSend, size, trash } = data;

  const handleSize = (): number => {
    if (size === Size.XL) return 4;
    if (size === Size.LG) return 2;
    if (size === Size.MD) return 1;
    if (size === Size.SM) return 0.8;
    if (size === Size.XS) return 0.6;
    return 1;
  };

  return (
    <LinkBox alignItems='center' padding={handleSize() || 4} mt={4} mb={2}>
      <LinkOverlay
        href={`/chat/${ip}`}
        display='flex'
        flexDirection='row'
        alignItems='center'
      >
        <Avatar name={name || ip} mr={4} size={size ? `${size}` : 'md'} />
        <Flex width='100%' flexDirection='column'>
          <Flex width='100%' justifyContent='space-between'>
            <Heading size={size ? `${size}` : 'sm'}>{name || ip}</Heading>
            {message && <Text>{timeMessageSend}</Text>}
            {trash && <FaTrashAlt color={`${theme.colors.brand.red90}`} />}
          </Flex>
          {message && <Text noOfLines={1}>{message}</Text>}
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
};
