import {
  Box,
  Container,
  Divider,
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
      timeMessageSend: '13:20',
      name: 'Carlos Pereira',
    },
    {
      ip: '192.168.0.2',
      image: '',
      message: 'Olá, eu estou testando e essa é apenas uma mensagem de teste',
      timeMessageSend: '13:20',
      name: 'Maria Antunes',
    },
    {
      ip: '192.168.0.3',
      image: '',
      message: 'Olá, eu estou testando e essa é apenas uma mensagem de teste',
      timeMessageSend: '13:20',
      name: 'Flavio Algusto',
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
      ip: '192.168.0.3',
      image: '',
      timeMessageSend: '13:20',
      name: 'Juliana Red',
    },
    {
      ip: '192.168.0.3',
      image: '',
      timeMessageSend: '13:20',
      name: 'Café Com Leite',
    },
  ];

  return (
    <Container
      padding={8}
      bg={theme.colors.brand.backgroundSecondary}
      height='100%'
    >
      <Heading size='xl' padding={2}>Chat socket</Heading>
      <Box height={12} />
      <Tabs variant='soft-rounded' padding={0}>
        <TabList>
          <TabItem>Mensagens</TabItem>
          <TabItem>Contatos</TabItem>
        </TabList>
        <TabPanels>
          <TabPanel padding={0}>
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
          </TabPanel>
          <TabPanel padding={0}>
            {contacts.map((message) => (
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
