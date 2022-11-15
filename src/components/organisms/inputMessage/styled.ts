import styled from 'styled-components';
import { theme } from '../../../utils/themes';
import {
  Input as InputChakra,
  IconButton as IconButtonChakra,
  Button as ButtonChakra,
} from '@chakra-ui/react';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;

  padding: 16px;
  background-color: ${theme.colors.brand.backgroundSecondary};
  border-top: 1px solid ${theme.colors.brand.tertiary};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  width: 100%;
  height: 48px;

  background-color: ${theme.colors.brand.tertiary};
`;

export const Input = styled(InputChakra)`
  && {
    border: none;
    background-color: transparent;
    height: 48px;

    ::placeholder {
      color: white;
      opacity: 0.6;
    }

    :focus {
      outline: none !important;
      border: none;
      box-shadow: none;
    }
  }
`;
