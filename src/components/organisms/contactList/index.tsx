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
  Tooltip,
} from '@chakra-ui/react';
import { theme } from '../../../utils/themes';
import { constants } from '../../../utils/constant';
import { CardContact } from '../cardContact';
import { TabItem } from './styled';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { MdMessage, MdContacts } from 'react-icons/md';

import { FormsNewContact } from '../formsNewContact';
import { FormsNewGroup } from '../formsNewGroup';

export const ContactList = () => {
  return (
    <Container margin={0} width='100%' height='73%' padding={0}>
      <Heading size='xl' m={4}>
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
          <TabPanel>
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
            <Box>
              <Heading ml={4} size='lg'>
                Contatos
              </Heading>
              <Divider mt={2} borderColor={theme.colors.brand.tertiary} />
            </Box>
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
          <TabPanel>
            <FormsNewContact />
          </TabPanel>
          <TabPanel>
            <FormsNewGroup />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
