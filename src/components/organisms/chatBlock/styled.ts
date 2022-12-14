import { Text } from '@chakra-ui/react';
import { MutableRefObject } from 'react';
import styled from 'styled-components';
import { theme } from '../../../utils/themes';

interface IMessage {
  isYou: boolean;
}

export const Container = styled.div<IMessage>`
  display: flex;
  flex-direction: ${({ isYou }) => (isYou ? 'row-reverse' : 'row')};
  /* align-items: ${({ isYou }) => (isYou ? 'flex-end' : 'flex-start')}; */
  width: 100%;
  padding: 16px;

  height: min-content;
`;

export const Message = styled(Text)<IMessage>`
  border-radius: 12px;
  padding: 8px 12px 8px 12px;
  margin-top: 4px;
  width: fit-content;
  max-width: 300px;
  height: min-content;

  background-color: ${({ isYou }) =>
    isYou
      ? `${theme.colors.brand.green}`
      : `${theme.colors.brand.backgroundSecondary}`}; ;
`;
