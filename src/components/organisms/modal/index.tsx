import {
  Button,
  Modal as ModalChakra,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { theme } from '../../../utils/themes';
import { ButtonPrimary, ButtonSecondary } from './styled';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: IModal) => {
  return (
    <ModalChakra isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={`${theme.colors.brand.backgroundSecondary}`}>
        <ModalHeader color={`${theme.colors.brand.red90}`}>
          ÁREA DE PERIGO
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Você realmente deseja deletar esse grupo?</Text>
        </ModalBody>

        <ModalFooter>
          <ButtonSecondary
            variant='ghost'
            mr={8}
            onClick={onClose}
          >
            Cancelar
          </ButtonSecondary>
          <ButtonPrimary
            color='white'
            bg={`${theme.colors.brand.red90}`}
            mr={3}
            onClick={onClose}
          >
            DELETAR
          </ButtonPrimary>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  );
};
