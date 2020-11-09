import React, { useState } from 'react';

import { MessageLivestream } from 'stream-chat-react';
import { PinIcon } from '../../assets/PinIcon';
import { LiveEventReactions } from '../LiveEventReactions/LiveEventReactions';

import './LiveEventMessage.css';

export const LiveEventMessage = (props) => {
  const { message, setPinnedMessages } = props;
  const [isPinned, setIsPinned] = useState(false);

  return (
    <div>
      <div
        style={{ height: '20px', width: '20px', background: 'red' }}
        onClick={() => {
          setPinnedMessages((prevMessages) => {
            if (!isPinned) {
              setIsPinned(true);
              return {
                ...prevMessages,
                [message.id]: message,
              };
            }
            setIsPinned(false);
            const copy = prevMessages;
            delete copy[message.id];
            return copy;
          });
        }}
      >
        {isPinned && <PinIcon />}
      </div>
      <MessageLivestream {...props} ReactionsList={LiveEventReactions} />
    </div>
  );
};
