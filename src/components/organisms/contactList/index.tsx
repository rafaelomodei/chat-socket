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
} from '@chakra-ui/react';
import { theme } from '../../../utils/themes';
import { CardContact } from '../cardContact';
import { ContainerContactList, TabItem } from './styled';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { MdMessage, MdContacts } from 'react-icons/md';

import { FormsNewContact } from '../formsNewContact';
import { FormsNewGroup } from '../formsNewGroup';
import { useEffect } from 'react';
import { useContact } from '../../../hooks/contact';
import { useMessage } from '../../../hooks/message';

export const ContactList = () => {
  const { contacts, getAllContacts } = useContact();
  const { messages, getAllMessages } = useMessage();

  useEffect(() => {
    getAllContacts();
    getAllMessages();
  }, [getAllContacts, getAllMessages]);

  return (
    <ContainerContactList>
      <Container margin={0} width='100%' height='73%' padding={0}>
        <Heading size='xl' p={4}>
          Chat socket
        </Heading>

        <Box height={8} />

        <Tabs variant='soft-rounded' padding={0} height='100%'>
          <TabList ml={4} mr={4}>
            <TabItem m={2}>
              <MdMessage size={24} />
            </TabItem>
            <TabItem m={2}>
              <MdContacts size={24} />
            </TabItem>
            <TabItem m={2}>
              <FaUserPlus size={24} />
            </TabItem>
            <TabItem m={2}>
              <FaUsers size={24} />
            </TabItem>
          </TabList>
          <TabPanels height='100%'>
            <TabPanel overflow='auto' height='100%'>
              <Box>
                <Heading ml={4} size='lg'>
                  Mensagens
                </Heading>
                <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
              </Box>
              <Flex
                flexDirection='column'
                overflow='auto'
                // height='60vh'
                width='100%'
              >
                {messages?.map((message) => (
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
              <Box>
                <Heading ml={4} size='lg'>
                  Contatos
                </Heading>
                <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
              </Box>
              {contacts?.map((contact) => (
                <Box key={contact.ip} width='100%'>
                  <CardContact ip={contact.ip} name={contact.name} />
                  <Divider borderColor={theme.colors.brand.tertiary} />
                </Box>
              ))}
            </TabPanel>
            <TabPanel>
              <FormsNewContact />
            </TabPanel>
            <TabPanel>
              <FormsNewGroup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </ContainerContactList>
  );
};
