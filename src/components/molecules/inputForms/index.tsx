import { Container, FormLabel } from "@chakra-ui/react";
import { Input } from "./styled";

interface IInput {
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  onChange?: (event: any) => void;
}

export const InputForms = ({ label, placeholder, type, onChange }: IInput) => {
  return (
    <Container>
      {label && <FormLabel>{label}</FormLabel>}
      <Input placeholder={placeholder} type={type} onChange={onChange} />
    </Container>
  );
};
