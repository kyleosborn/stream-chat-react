import React, { useState } from 'react';
import { MessageList, MessageLivestream } from 'stream-chat-react';
import { LiveEventAttendees } from '../LiveEventAttendees/LiveEventAttendees';
import { LiveEventChannelFooter } from '../LiveEventChannelFooter/LiveEventChannelFooter';
import { LiveEventMessage } from '../LiveEventMessage/LiveEventMessage';

export const LiveEventContainer = ({ tab }) => {
  const [pinnedMessages, setPinnedMessages] = useState({});

  const pinnedMessagesArray = Object.values(pinnedMessages);
  console.log({ pinnedMessagesArray });

  const selectedComponent = () => {
    switch (tab) {
      case 1:
        return (
          <div>
            <MessageList
              noGroupByUser
              Message={(props) => (
                <LiveEventMessage
                  {...props}
                  setPinnedMessages={setPinnedMessages}
                  pinnedMessages={pinnedMessages}
                />
              )}
            />
            <LiveEventChannelFooter />
          </div>
        );
      case 2:
        return (
          <div>
            {pinnedMessagesArray.map((message) => (
              <MessageLivestream key={message.id} message={message} />
            ))}
          </div>
        );
      case 3:
        return <LiveEventAttendees />;
      default:
        return <LiveEventAttendees />;
    }
  };

  return <div>{selectedComponent()}</div>;
};
