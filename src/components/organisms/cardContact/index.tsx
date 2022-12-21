import {
  Avatar,
  Flex,
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { Dispatch } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Size } from '../../../utils/helpers';
import { theme } from '../../../utils/themes';

export interface ICardContact {
  userEmail: string;
  image?: string;
  message?: string;
  timeMessageSend?: string;
  name?: string;
  size?: Size;
  trash?: boolean;
  getContact: Dispatch<React.SetStateAction<string | undefined>>;
}

export const CardContact = (data: ICardContact) => {
  const {
    userEmail,
    image,
    message,
    name,
    timeMessageSend,
    size,
    trash,
    getContact,
  } = data;

  const handleSize = (): number => {
    if (size === Size.XL) return 4;
    if (size === Size.LG) return 2;
    if (size === Size.MD) return 1;
    if (size === Size.SM) return 0.8;
    if (size === Size.XS) return 0.6;
    return 1;
  };

  return (
    <LinkBox
      role='presentation'
      alignItems='center'
      padding={handleSize() || 4}
      mt={4}
      mb={2}
      onClick={() => getContact(userEmail)}
    >
      <Flex
        // href={`/chat/12`}
        display='flex'
        flexDirection='row'
        alignItems='center'
      >
        <Avatar
          name={name || userEmail}
          mr={4}
          size={size ? `${size}` : 'md'}
        />
        <Flex width='100%' flexDirection='column'>
          <Flex width='100%' justifyContent='space-between'>
            <Heading size={size ? `${size}` : 'sm'}>
              {name || userEmail}
            </Heading>
            {message && <Text>{timeMessageSend}</Text>}
            {trash && <FaTrashAlt color={`${theme.colors.brand.red90}`} />}
          </Flex>
          {message && <Text noOfLines={1}>{message}</Text>}
        </Flex>
      </Flex>
    </LinkBox>
  );
};
