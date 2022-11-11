import { Container, Flex } from '@chakra-ui/react';
import { ContactList } from '../../components/organisms/contactList';

const Home = () => {
  return (
    <Flex height="100%">
      <Container height="100vh">
        <ContactList />
      </Container>
    </Flex>
  );
};

export default Home;
