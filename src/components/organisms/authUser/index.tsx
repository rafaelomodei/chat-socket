import {
  Box,
  Container,
  Heading,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { ContainerContactList, TabItem } from './styled';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { CgLogIn } from 'react-icons/cg';

import { useEffect } from 'react';
import { useContact } from '../../../hooks/contact/contact';
import { useMessage } from '../../../hooks/message';
import { FormsAuthUser } from '../formsAuthUser';

export const AuthUser = () => {
  const { messages } = useMessage();
  const { contacts, getAllContacts } = useContact();

  useEffect(() => {
    // console.info('useEffect::getAllContacts');
    getAllContacts();
  }, []);

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
              <CgLogIn size={24} />
            </TabItem>
            <TabItem m={2}>
              <FaUserPlus size={24} />
            </TabItem>
          </TabList>
          <TabPanels height='100%'>
            <TabPanel>
              <FormsAuthUser type='LOGIN' />
            </TabPanel>
            <TabPanel overflow='auto' bg='red'>
              <FormsAuthUser type='CREATE' />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </ContainerContactList>
  );
};
