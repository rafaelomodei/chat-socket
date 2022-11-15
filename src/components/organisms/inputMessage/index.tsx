import { Container, Content, Input } from './styled';
import { IconButton } from '../../molecules/IconButton';
import { RiSendPlaneFill } from 'react-icons/ri';
import { ImAttachment } from 'react-icons/im';
import { Box, Divider } from '@chakra-ui/react';
import { theme } from '../../../utils/themes';
import { Size } from '../../../utils/helpers';

export const InputMessage = () => {
  return (
    <Container>
      <Content>
        <Input placeholder='A sua mensagem...' />
        <Box m={2}>
          <IconButton
            aria-label='Settings'
            icon={<ImAttachment />}
            onClick={() => console.log('enviando mensagem...')}
          />
        </Box>
        <Divider h='60%' orientation='vertical' borderColor='white' />
        <Box m={2}>
          <IconButton
            aria-label='Settings'
            icon={<RiSendPlaneFill />}
            onClick={() => console.log('enviando mensagem...')}
          />
        </Box>
      </Content>
    </Container>
  );
};
