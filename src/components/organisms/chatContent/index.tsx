import { useEffect, useRef } from 'react';
import { useUser } from '../../../hooks/user/user';
import { constants } from '../../../utils/constant';
import { ICardContact } from '../cardContact';
import { ChatBlock } from '../chatBlock';
import { Container } from './styled';

export interface IMessage {
  sender: string;
  daySend: string;
  hourSend: string;
  content: string;
}

export enum ETypeChat {
  PRIVATE,
  GROUP,
}
export interface IChatContent {
  type: ETypeChat;
  messages: Array<IMessage>;
}

export const ChatContent = ({ messages, type }: IChatContent) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const userAuth = sessionStorage.getItem('userEmail');

  const { profile } = useUser();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Container>
      {messages.map((messageBlock) => (
        <ChatBlock
          isYou={messageBlock.sender === userAuth}
          name={`${messageBlock.sender}`}
          timeMessageSend={`${messageBlock.hourSend}`}
          messages={[messageBlock.content]}
          type={type}
        />
      ))}
      <div ref={bottomRef} />
    </Container>
  );
};
