import {
  Box,
  Container,
  Divider,
  FormControl,
  Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useContact } from '../../../hooks/contact/contact';
import { theme } from '../../../utils/themes';
import { InputForms } from '../../molecules/inputForms';
import { Button } from './styled';

export const FormsNewContact = () => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const { registerContact, registeredContact } = useContact();
  const { contacts, solicitationAllContacts } = useContact();

  const handleInputName = (event: any) => setName(event.target.value);
  const handleInputAddress = (event: any) => setAddress(event.target.value);
  const handleInputPhoto = (event: any) => setPhoto(event.target.value);
  const handleInputEmail = (event: any) => setUserEmail(event.target.value);

  return (
    <FormControl>
      <Container mb={8}>
        <Heading size='lg'>Novo contato</Heading>
        <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
      </Container>
      <Box mb={8}>
        <InputForms
          label='Nome'
          placeholder='Jão da Silva'
          onChange={handleInputName}
        />
      </Box>
      <Box mb={8}>
        <InputForms
          label='IP'
          placeholder='Informe o ip'
          onChange={handleInputAddress}
        />
      </Box>
      <Box mb={16}>
        <InputForms
          label='E-mail'
          placeholder='Informe o email'
          onChange={handleInputEmail}
        />
      </Box>
      <Container mb={8}>
        <Button
          onClick={() => {
            registerContact({ name, address, photo, userEmail });
            registeredContact();
            solicitationAllContacts();
          }}
        >
          Adicionar novo contato
        </Button>
      </Container>
    </FormControl>
  );
};
