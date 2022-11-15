import styled from 'styled-components';
import { theme } from '../../../utils/themes';
import { IconButton as IconButtonChakra } from '@chakra-ui/react';

export const IconButtonCustom = styled(IconButtonChakra)`
  && {
    color: ${theme.colors.brand.primary};
    background: transparent;
    svg {
      height: 21px;
      width: 21px;
    }

    :hover {
      background: rgba(0, 0, 0, 0.1);
    }

    :active {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
