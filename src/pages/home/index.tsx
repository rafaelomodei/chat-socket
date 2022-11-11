import { Container, Flex } from '@chakra-ui/react';
import { Chat } from '../../components/organisms/chat';
import { ContactList } from '../../components/organisms/contactList';
import { Empty } from '../../components/organisms/Empty';
import { theme } from '../../utils/themes';

const Home = () => {
  return (
    <Flex>
      <Container
        minWidth={500}
        height='100vh'
        bg={theme.colors.brand.backgroundSecondary}
      >
        <ContactList />
      </Container>
      {/* <Empty /> */}
      <Chat />
    </Flex>
  );
};

export default Home;
