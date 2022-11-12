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
import { constants } from '../../../utils/constant';

import { CardContact } from '../cardContact';
import { TabItem } from './styled';

export const ContactList = () => {
  return (
    <Container margin={0} width='100%' height='100%' padding={0}>
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
          <TabPanel>
            <Flex flexDirection='column' overflow='auto' height='80vh' width='100%'>
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
          <TabPanel overflow='auto' height='100vh'>
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
