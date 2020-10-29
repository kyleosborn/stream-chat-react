import React from 'react';
import { MessageLivestream } from 'stream-chat-react';

import './LiveEventMessage.css';

export const LiveEventMessage = (props) => {
  return (
    <div>
      <MessageLivestream {...props} ReactionSelector={() => null} />
    </div>
  );
};
