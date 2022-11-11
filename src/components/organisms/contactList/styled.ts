import { Tab } from '@chakra-ui/react';
import styled from 'styled-components';
import { theme } from '../../../utils/themes';

export const TabItem = styled(Tab)`
  color: ${theme.colors.brand.primary} !important;

  &&[aria-selected='true'] {
    color: ${theme.colors.brand.greenLight} !important;
    background-color: ${theme.colors.brand.green};
  }
`;
