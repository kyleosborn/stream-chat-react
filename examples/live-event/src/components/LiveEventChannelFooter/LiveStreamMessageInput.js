import React, { useContext } from 'react';
import {
  ChannelContext,
  ChatAutoComplete,
  useMessageInput,
} from 'stream-chat-react';
import { SmileyFace } from '../../assets/SmileyFace';
import { PaperClip } from '../../assets/PaperClip';
import './LiveStreamMessageInput.css';

export const LiveStreamMessageInput = (props) => {
  const { sendMessage } = useContext(ChannelContext);
  const messageInput = useMessageInput({ ...props, sendMessage });

  return (
    <div className="live-stream-message-input__wrapper">
      <div className="live-stream-message-input__input">
        <ChatAutoComplete
          innerRef={messageInput.textareaRef}
          handleSubmit={messageInput.handleSubmit}
          onChange={messageInput.handleChange}
          onSelectItem={messageInput.onSelectItem}
          value={messageInput.text}
          placeholder={'Send a message'}
          onPaste={messageInput.onPaste}
        />
      </div>
      <div className="live-stream-message-input__input-buttons">
        <PaperClip />
        <SmileyFace />
      </div>
    </div>
  );
};
