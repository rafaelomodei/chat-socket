import { useEffect, useState } from 'react';
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
import { useUser } from '../../../hooks/user';
import { useContact } from '../../../hooks/contact';
interface IFormsAuthUser {
  type: 'LOGIN' | 'CREATE';
}

export const FormsAuthUser = ({ type }: IFormsAuthUser) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { loginUser, loggedUser, registerUser, createdUser } = useUser();

  useEffect(() => {
    loggedUser();
  }, []);

  useEffect(() => {
    createdUser();
  }, []);

  const isLogin = type === 'LOGIN';

  const handleInputName = (event: any) => setName(event.target.value);
  const handleInputEmail = (event: any) => setEmail(event.target.value);
  const handleInputPassword = (event: any) => setPassword(event.target.value);
  const handleLogin = () => {
    loginUser({ email, password });
    setTimeout(() => {
      window.location.reload();
    }, 350);
  };
  return (
    <FormControl>
      <Container mb={8}>
        <Heading size='lg'>{isLogin ? 'Login' : 'Criar conta'}</Heading>
        <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
      </Container>

      {!isLogin && (
        <Box mb={8}>
          <InputForms
            label='Nome'
            placeholder='Informe o seu nome'
            onChange={handleInputName}
          />
        </Box>
      )}

      <Box mb={8}>
        <InputForms
          label='E-mail'
          placeholder='Informe o seu email'
          onChange={handleInputEmail}
        />
      </Box>
      <Box mb={16}>
        <InputForms
          label='Senha'
          placeholder='Informe o sua senha'
          type='password'
          onChange={handleInputPassword}
        />
      </Box>
      <Container mb={8}>
        <Button
          onClick={() => {
            isLogin ? handleLogin() : registerUser({ email, password, name });
          }}
        >
          {isLogin ? 'Entrar' : 'Criar conta'}
        </Button>
      </Container>
    </FormControl>
  );
};
