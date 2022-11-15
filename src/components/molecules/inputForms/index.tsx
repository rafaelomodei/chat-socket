import { Container, FormLabel } from '@chakra-ui/react';
import { Input } from './styled';

interface IInput {
  label?: string;
  placeholder?: string;
}

export const InputForms = ({ label, placeholder }: IInput) => {
  return (
    <Container>
      {label && <FormLabel>{label}</FormLabel>}
      <Input placeholder={placeholder} />
    </Container>
  );
};
