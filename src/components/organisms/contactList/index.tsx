import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { theme } from '../../../utils/themes';
import { CardContact, ICardContact } from '../cardContact';
import { TabItem } from './styled';

export const ContactList = () => {
  const messages: ICardContact[] = [
    {
      ip: '192.168.0.1',
      image: '',
      message: 'Olá, eu estou testando e essa é apenas uma mensagem de teste',
      timeMessageSend: '15:14',
      name: 'Carlos Pereira',
    },
    {
      ip: '192.168.0.3',
      image: '',
      message: 'Ta ficando top d++ 🚀',
      timeMessageSend: '13:20',
      name: 'Flavio Algusto',
    },
    {
      ip: '192.168.0.2',
      image: '',
      message: 'Eses dados estão todos mocados',
      timeMessageSend: '06:38',
      name: 'Maria Antunes',
    },
  ];

  const contacts: ICardContact[] = [
    {
      ip: '192.168.0.1',
      image: '',
      timeMessageSend: '13:20',
      name: 'Carlos Pereira',
    },
    {
      ip: '192.168.0.2',
      image: '',
      timeMessageSend: '13:20',
      name: 'Maria Antunes',
    },
    {
      ip: '192.168.0.3',
      image: '',
      timeMessageSend: '13:20',
      name: 'Flavio Algusto',
    },
    {
      ip: '192.168.0.4',
      image: '',
      timeMessageSend: '13:20',
      name: 'Juliana Red',
    },
    {
      ip: '192.168.0.5',
      image: '',
      timeMessageSend: '13:20',
      name: 'Café Com Leite',
    },
  ];

  return (
    <Container margin={0} padding={8} width='100%' height='100%'>
      <Heading size='xl' padding={2}>
        Chat socket
      </Heading>
      <Box height={12} />
      <Tabs variant='soft-rounded' padding={0}>
        <TabList>
          <TabItem>Mensagens</TabItem>
          <TabItem>Contatos</TabItem>
        </TabList>
        <TabPanels height='300px'>
          <TabPanel padding={0}>
            <Flex flexDirection='column' overflow='auto' height='80vh'>
              {messages.map((message) => (
                <div key={message.ip}>
                  <CardContact
                    ip={message.ip}
                    name={message.name}
                    message={message.message}
                    timeMessageSend={message.timeMessageSend}
                  />

                  <Divider borderColor={theme.colors.brand.tertiary} />
                </div>
              ))}
            </Flex>
          </TabPanel>
          <TabPanel padding={0} overflow='auto' height='100vh'>
            {/* <Flex flexDirection='column'> */}
            {contacts.map((message) => (
              <Box key={message.ip} width='100%'>
                <CardContact
                  ip={message.ip}
                  name={message.name}
                  message={message.message}
                  timeMessageSend={message.timeMessageSend}
                />

                <Divider borderColor={theme.colors.brand.tertiary} />
              </Box>
            ))}
            {/* </Flex> */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
