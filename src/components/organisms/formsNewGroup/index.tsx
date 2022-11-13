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

export const FormsNewGroup = () => {
  return (
    <FormControl>
      <Container mb={8}>
        <Heading size='lg'>Novo Grupo</Heading>
        <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
      </Container>
      <Box mb={8}>
        <InputForms label='Nome' placeholder='Galinha programadora' />
      </Box>
      <Container mb={8}>
        <Button onClick={() => {}}>
          Criar novo grupo
        </Button>
      </Container>
    </FormControl>
  );
};
