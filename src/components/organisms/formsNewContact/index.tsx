import {
  Box,
  Container,
  Divider,
  FormControl,
  Heading,
} from '@chakra-ui/react';
import { theme } from '../../../utils/themes';
import { InputForms } from '../../molecules/inputForms';
import { Button } from './styled';

export const FormsNewContact = () => {
  return (
    <FormControl>
      <Container mb={8}>
        <Heading size='lg'>Novo contato</Heading>
        <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
      </Container>
      <Box mb={8}>
        <InputForms label='Nome' placeholder='Jão da Silva' />
      </Box>
      <Box mb={16}>
        <InputForms label='IP' placeholder='192.168.0.1' />
      </Box>
      <Container mb={8}>
        <Button onClick={() => {}}>Adicionar novo contato</Button>
      </Container>
    </FormControl>
  );
};
