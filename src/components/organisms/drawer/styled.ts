import styled from 'styled-components';
import { theme } from '../../../utils/themes';

import { Button as ButtonChakra } from '@chakra-ui/react';

export const Button = styled(ButtonChakra)`
  && {
    width: 100%;
    color: ${theme.colors.brand.red90};
    border-color: ${theme.colors.brand.red90};

    :hover {
      color: white;
      background: ${theme.colors.brand.red90};
    }

    :active {
      background: ${theme.colors.brand.red};
    }
  }
`;
