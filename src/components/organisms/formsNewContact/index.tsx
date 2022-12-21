import {
  Box,
  Container,
  Divider,
  FormControl,
  Heading,
} from '@chakra-ui/react';
import { Dispatch, useEffect, useState } from 'react';
import { useContact } from '../../../hooks/contact/contact';
import { theme } from '../../../utils/themes';
import { InputForms } from '../../molecules/inputForms';
import { Button } from './styled';

export const FormsNewContact = () => {
  const [userEmail, setUserEmail] = useState<string>('');

  const { registerContact, registeredContact } = useContact();
  const { solicitationAllContacts } = useContact();

  const handleInputEmail = (event: any) => setUserEmail(event.target.value);

  return (
    <FormControl>
      <Container mb={8}>
        <Heading size='lg'>Novo contato</Heading>
        <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
      </Container>
      <Box mb={8}>
        <InputForms
          label='E-mail'
          placeholder='Informe o email'
          onChange={handleInputEmail}
        />
      </Box>
      <Container mb={8}>
        <Button
          onClick={() => {
            registerContact({
              userEmail,
            });
            registeredContact();
            solicitationAllContacts();
            localStorage.setItem('isGroup', 'true');
          }}
        >
          Adicionar novo contato
        </Button>
      </Container>
    </FormControl>
  );
};
