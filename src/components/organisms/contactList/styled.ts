import { Tab } from '@chakra-ui/react';
import styled from 'styled-components';
import { theme } from '../../../utils/themes';

export const TabItem = styled(Tab)`
  color: ${theme.colors.brand.primary} !important;

  &&[aria-selected='true'] {
    color: white !important;
    background-color: ${theme.colors.brand.green};
  }
`;

export const ContainerContactList = styled.div`
  width: 400px;
  height: 100vh;
  background-color: ${theme.colors.brand.backgroundSecondary};
  border-right: 1px solid ${theme.colors.brand.tertiary};
`;
