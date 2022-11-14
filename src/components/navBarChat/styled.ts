import styled from 'styled-components';
import { theme } from '../../utils/themes';
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

export const IconButton = styled(IconButtonChakra)`
  && {
    color: ${theme.colors.brand.primary};
    /* background: ${theme.colors.brand.green}; */
    background: transparent;
    svg {
      height: 21px;
      width: 21px;
    }

    :hover {
      background: ${theme.colors.brand.green};
    }

    :active {
      background: ${theme.colors.brand.green120};
    }
  }
`;
