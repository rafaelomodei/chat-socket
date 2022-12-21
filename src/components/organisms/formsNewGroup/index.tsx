import {
  Box,
  Container,
  Divider,
  FormControl,
  Heading,
} from '@chakra-ui/react';
import { Dispatch, useState } from 'react';
import { useGroup } from '../../../hooks/group/group';
import { theme } from '../../../utils/themes';
import { InputForms } from '../../molecules/inputForms';
import { Button } from './styled';

interface IFormsNewGroup {
  getContact: Dispatch<React.SetStateAction<string | undefined>>;
}

export const FormsNewGroup = ({ getContact }: IFormsNewGroup) => {
  const [groupName, setGroupName] = useState<string>('');
  const { joinGroupPublic } = useGroup();

  const handleInputName = (event: any) => setGroupName(event.target.value);

  return (
    <FormControl>
      <Container mb={8}>
        <Heading size='lg'>Novo Grupo</Heading>
        <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
      </Container>
      {/* <Box mb={8}>
        <InputForms
          label='Nome'
          placeholder='Galinha programadora'
          onChange={handleInputName}
        />
      </Box> */}
      <Container mb={8}>
        <Button
          onClick={() => {
            joinGroupPublic();
            getContact('GROUP');
          }}
        >
          Criar novo grupo
        </Button>
      </Container>
    </FormControl>
  );
};
