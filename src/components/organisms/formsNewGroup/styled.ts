import styled from 'styled-components';
import { Button as ButtonChakra } from '@chakra-ui/react';
import { theme } from '../../../utils/themes';

export const Button = styled(ButtonChakra)`
  && {
    color: white;
    background-color: ${theme.colors.brand.green};
    width: 100%;
    height: 48px;

    :hover {
      background-color: ${theme.colors.brand.green110};
    }

    :active {
      color: ${theme.colors.brand.green110};
      background-color: ${theme.colors.brand.green120};
    }
  }
`;
