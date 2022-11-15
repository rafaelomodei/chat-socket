import styled from 'styled-components';
import { theme } from '../../../utils/themes';
import {
  IconButton as IconButtonChakra,
  Button as ButtonChakra,
} from '@chakra-ui/react';

export const ContainerNavBarChat = styled.div`
  display: flex;
  width: 100%;
  height: 72px;

  padding: 16px;
  justify-content: space-between;
  background-color: ${theme.colors.brand.backgroundSecondary};
  border-bottom: 1px solid ${theme.colors.brand.tertiary};
`;
