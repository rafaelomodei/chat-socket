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
interface IFormsAuthUser {
  type: 'LOGIN' | 'CREATE';
}

export const FormsAuthUser = ({ type }: IFormsAuthUser) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { loginUser, loggedUser } = useUser();

  useEffect(() => {
    loggedUser();
  }, []);

  const isLogin = type === 'LOGIN';

  const handleInputEmail = (event: any) => setEmail(event.target.value);

  const handleInputPassword = (event: any) => setPassword(event.target.value);
  return (
    <FormControl>
      <Container mb={8}>
        <Heading size='lg'>{isLogin ? 'Login' : 'Criar conta'}</Heading>
        <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
      </Container>
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
            console.info('clicando');
            loginUser({ email, password });
          }}
        >
          {isLogin ? 'Entrar' : 'Criar conta'}
        </Button>
      </Container>
    </FormControl>
  );
};
