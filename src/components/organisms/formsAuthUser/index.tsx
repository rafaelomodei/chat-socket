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

interface IFormsAuthUser {
  type: 'LOGIN' | 'CREATE';
}

export const FormsAuthUser = ({ type }: IFormsAuthUser) => {
  const isLogin = type === 'LOGIN';

  return (
    <FormControl>
      <Container mb={8}>
        <Heading size='lg'>{isLogin ? 'Login' : 'Criar conta'}</Heading>
        <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
      </Container>
      <Box mb={8}>
        <InputForms label='E-mail' placeholder='Informe o seu email' />
      </Box>
      <Box mb={16}>
        <InputForms label='Senha' placeholder='Informe o sua senha' />
      </Box>
      <Container mb={8}>
        <Button onClick={() => {}}>{isLogin ? 'Entrar' : 'Criar conta'}</Button>
      </Container>
    </FormControl>
  );
};
