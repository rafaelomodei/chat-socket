import styled from 'styled-components';
import { Input as InputChakra } from '@chakra-ui/react';
import { theme } from '../../../utils/themes';

export const Input = styled(InputChakra)`
  && {
    color: white;
    background-color: ${theme.colors.brand.tertiary};
    border: none;
    border-radius: 8px;
    height: 48px;

    ::placeholder {
      color: white;
      opacity: 0.6;
    }

    :focus {
      outline: none !important;
      border: 2px solid ${theme.colors.brand.green};
      box-shadow: none;
    }
  }
`;
