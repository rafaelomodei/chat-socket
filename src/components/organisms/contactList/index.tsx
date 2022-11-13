import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { theme } from '../../../utils/themes';
import { constants } from '../../../utils/constant';
import { CardContact } from '../cardContact';
import { TabItem } from './styled';
import { FaUserPlus, FaUsers } from 'react-icons/fa';

export const ContactList = () => {
  return (
    <Container margin={0} width='100%' height='73%' padding={0}>
      <Heading size='xl' m={4}>
        Chat socket
      </Heading>
      <Box height={8} />

      <Tabs variant='soft-rounded' padding={0} height='100%'>
        <TabList m={4} overflow='scroll'>
          <TabItem>Mensagens</TabItem>
          <TabItem>Contatos</TabItem>
          <TabItem>
            <FaUserPlus />{' '}
            <Text ml={2} whiteSpace='nowrap'>
              Novo contato
            </Text>
          </TabItem>
          <TabItem>
            <FaUsers />{' '}
            <Text ml={2} whiteSpace='nowrap'>
              Novo Grupo
            </Text>
          </TabItem>
        </TabList>
        <TabPanels height='100%'>
          <TabPanel>
            <Flex
              flexDirection='column'
              overflow='auto'
              // height='60vh'
              width='100%'
            >
              {constants.messages.map((message) => (
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
          <TabPanel overflow='auto' height='100%'>
            {constants.contacts.map((message) => (
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
