import styled from 'styled-components';
import { theme } from '../../../utils/themes';

import { Button as ButtonChakra } from '@chakra-ui/react';

export const ButtonPrimary = styled(ButtonChakra)`
  && {
    color: white;

    :hover {
      color: white;
      background: ${theme.colors.brand.red};
    }

    :active {
      background: ${theme.colors.brand.red110};
    }
  }
`;

export const ButtonSecondary = styled(ButtonChakra)`
  && {
    color: ${theme.colors.brand.red90};

    :hover {
      color: white;
      background: rgba(0, 0, 0, 0.1);
    }

    :active {
        background: rgba(0, 0, 0, 0.2);
    }
  }
`;
