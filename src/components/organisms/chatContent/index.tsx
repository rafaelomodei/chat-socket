import { useEffect, useRef } from 'react';
import { useUser } from '../../../hooks/user';
import { constants } from '../../../utils/constant';
import { ICardContact } from '../cardContact';
import { ChatBlock } from '../chatBlock';
import { Container } from './styled';

export interface IMessage {
  userSend?: string;
  userRequest?: string;
  timeMessageSend?: string;
  messages: Array<string>;
}

export interface IChatContent {
  messages: Array<IMessage>;
}

export const ChatContent = ({ messages }: IChatContent) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const { profile } = useUser();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Container>
      {messages.map((messageBlock) => (
        <ChatBlock
          isYou={messageBlock.userSend === profile.id}
          name={`${messageBlock.userSend}`}
          timeMessageSend={'13:30'}
          messages={messageBlock.messages}
        />
      ))}
      <div ref={bottomRef} />
    </Container>
  );
};
