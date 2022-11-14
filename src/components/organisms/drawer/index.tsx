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
} from '@chakra-ui/react';
import { RefObject, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { useContact } from '../../../hooks/contact';
import { Size } from '../../../utils/helpers';
import { theme } from '../../../utils/themes';
import { CardContact } from '../cardContact';
import { Button } from './styled';

interface IDrawer {
  buttonRef: RefObject<HTMLElement>;
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({ buttonRef, isOpen, onClose }: IDrawer) => {
  const { contacts, getAllContacts } = useContact();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

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
            <Box key={contact.ip} width='100%'>
              <CardContact
                ip={contact.ip}
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
          <Button variant='outline' mb={4}>
            Deletar Grupo
          </Button>
        </DrawerBody>
      </DrawerContent>
    </DrawerChakra>
  );
};