import { Avatar, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { ContainerNavBarChat } from './styled';
import { IoSettings } from 'react-icons/io5';
import { useRef } from 'react';
import { Drawer } from '../drawer';
import { IconButton } from '../../molecules/IconButton';

interface INavBarChat {
  name: string;
  img: string;
}

export const NavBarChat = ({ name, img }: INavBarChat) => {
  const buttonSettings = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ContainerNavBarChat>
      <Flex alignItems='center' justifyContent='space-between'>
        <Avatar size='md' name={name} src={img} mr={4} />
        <Heading size='md'>{name}</Heading>
      </Flex>
      <IconButton
        ref={buttonSettings}
        aria-label='Settings'
        icon={<IoSettings />}
        onClick={() => onOpen()}
      />
      {/* <Drawer buttonRef={buttonSettings} isOpen={isOpen} onClose={onClose} /> */}
    </ContainerNavBarChat>
  );
};
