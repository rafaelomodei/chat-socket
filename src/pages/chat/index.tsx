import { Container, Flex, Text } from '@chakra-ui/react';
import { NavBarChat } from '../../components/navBarChat/indext';
import { ContainerChat } from './styled';

const Chat = () => {
  return (
    <ContainerChat>
      <NavBarChat
        name='Amantes da Estrada'
        img='https://lirp.cdn-website.com/9d12ecc7/dms3rep/multi/opt/caminhao-carreta-1920w.jpg'
      />
    </ContainerChat>
  );
};

export default Chat;
