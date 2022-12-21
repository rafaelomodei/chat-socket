import {
  Box,
  Divider,
  Drawer as DrawerChakra,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import { RefObject, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { useContact } from '../../../hooks/contact/contact';
import { Size } from '../../../utils/helpers';
import { theme } from '../../../utils/themes';
import { CardContact } from '../cardContact';
import { Modal } from '../modal';
import { Button } from './styled';

interface IDrawer {
  buttonRef: RefObject<HTMLElement>;
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({ buttonRef, isOpen, onClose }: IDrawer) => {
  const { contacts } = useContact();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  return (
    <DrawerChakra
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={buttonRef}
    >
      <DrawerOverlay />
      <DrawerContent
        backgroundColor={`${theme.colors.brand.backgroundSecondary}`}
        borderLeft={`1px solid ${theme.colors.brand.tertiary}`}
      >
        <DrawerCloseButton />
        <DrawerHeader mb={4}>Configuração do grupo</DrawerHeader>

        <DrawerBody>
          <Flex alignItems='center'>
            <FaUsers />
            <Heading size='xs' ml={2}>
              Membros do grupo
            </Heading>
          </Flex>
          {contacts?.map((contact) => (
            <Box key={contact.address} width='100%'>
              <CardContact
                ip={contact.address}
                name={contact.name}
                size={Size.SM}
                trash={true}
              />
              <Divider borderColor={theme.colors.brand.tertiary} />
            </Box>
          ))}

          <Heading size='sm' mt={8} mb={4} color={theme.colors.brand.red90}>
            Área de perigo
          </Heading>
          <Button variant='outline' mb={4} onClick={() => onOpenModal()}>
            Deletar Grupo
          </Button>
        </DrawerBody>
      </DrawerContent>

      <Modal isOpen={isOpenModal} onClose={onCloseModal} />
    </DrawerChakra>
  );
};
