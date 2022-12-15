import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../utils/animations/981-consultation-outline-edited.json";
import { LinkProfileDev } from "../../components/organisms/linkProfileDev";

const Home = () => {
  return (
    <Container>
      <Center width="100%" height="80vh">
        <Flex flexDirection="column" alignItems="center">
          <Box width={250} height={250}>
            <Lottie animationData={groovyWalkAnimation} loop={true} />
          </Box>
          <Heading size="xl" mb={2}>
            Chat socket
          </Heading>
          <Text>Compartilhe mensagens com seus amigos!</Text>
        </Flex>
      </Center>
      <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center">
          <Icon as={BsGithub} mr={2} />
          <Text>Desenvolvido por</Text>
        </Flex>
        <Flex>
          <LinkProfileDev
            name="Rafael Omodei"
            profile="https://github.com/rafaelomodei"
            img="https://avatars.githubusercontent.com/u/16935702?v=4"
          />

          <LinkProfileDev
            name="Jeferson Martin"
            profile="https://github.com/jefersoncmn"
            img="https://avatars.githubusercontent.com/u/51566081?v=4"
          />

          <LinkProfileDev
            name="Ana Capeletti"
            profile="https://github.com/ANACAPELETTI"
            img="https://avatars.githubusercontent.com/u/75649546?v=4"
          />

          <LinkProfileDev
            name="Gustavo Quieregato"
            profile="https://github.com/Quieregatog"
            img="https://avatars.githubusercontent.com/u/57011784?v=4"
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
